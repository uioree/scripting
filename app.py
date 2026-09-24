from collections import defaultdict
from contextlib import asynccontextmanager
from datetime import datetime, timedelta, timezone
import hashlib
import os
from pathlib import Path
import sqlite3
import time
from typing import Any, List, Optional
import uuid

from argon2 import PasswordHasher, Type
from argon2.exceptions import VerifyMismatchError
from fastapi import Depends, FastAPI, Header, HTTPException, Request, Response, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = Path(os.getenv("DB_PATH", BASE_DIR / "database.db"))
STATIC_DIR = BASE_DIR / "static"

TURSO_DATABASE_URL = os.getenv("TURSO_DATABASE_URL")
TURSO_AUTH_TOKEN = os.getenv("TURSO_AUTH_TOKEN")

ph = PasswordHasher(
    time_cost=2,
    memory_cost=65536,
    parallelism=1,
    hash_len=32,
    type=Type.ID,
)

_rate_limit_records = defaultdict(list)

def check_rate_limit(endpoint: str, client_ip: str, max_requests: int = 5, window_seconds: int = 60):
    now = time.time()
    key = f"{endpoint}:{client_ip}"
    _rate_limit_records[key] = [t for t in _rate_limit_records[key] if now - t < window_seconds]
    if len(_rate_limit_records[key]) >= max_requests:
        retry_after = int(window_seconds - (now - _rate_limit_records[key][0])) + 1
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail=f"Слишком много попыток. Пожалуйста, подождите {retry_after} сек.",
            headers={"Retry-After": str(retry_after)},
        )
    _rate_limit_records[key].append(now)

def get_client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "127.0.0.1"

class DBResult:
    def __init__(self, rows: list, lastrowid: Optional[int] = None, rowcount: int = 0):
        self._rows = rows or []
        self.lastrowid = lastrowid
        self.rowcount = rowcount

    def fetchone(self) -> Optional[Any]:
        return self._rows[0] if self._rows else None

    def fetchall(self) -> List[Any]:
        return self._rows

class Database:
    def __init__(self):
        self.use_turso = bool(TURSO_DATABASE_URL)
        if self.use_turso:
            try:
                import libsql_client
                url = TURSO_DATABASE_URL.strip()
                if url.startswith("libsql://"):
                    url = url.replace("libsql://", "https://")
                self.client = libsql_client.create_client_sync(
                    url=url,
                    auth_token=TURSO_AUTH_TOKEN.strip() if TURSO_AUTH_TOKEN else None,
                )
            except Exception as e:
                print(f"[DB Warning] Turso client init failed: {e}. Falling back to SQLite.")
                self.use_turso = False

    def execute(self, sql: str, params: Optional[Any] = None) -> DBResult:
        if self.use_turso:
            try:
                p = list(params) if params is not None else None
                res = self.client.execute(sql, p)
                return DBResult(res.rows, res.last_insert_rowid, res.rows_affected)
            except Exception as e:
                print(f"[DB Warning] Turso query error: {e}. Switching to local SQLite.")
                self.use_turso = False
                return self._execute_sqlite(sql, params)
        else:
            return self._execute_sqlite(sql, params)

    def _execute_sqlite(self, sql: str, params: Optional[Any] = None) -> DBResult:
        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute(sql, params or ())
            rows = cur.fetchall()
            conn.commit()
            return DBResult(rows, cur.lastrowid, cur.rowcount)

    def close(self):
        if self.use_turso and hasattr(self, "client"):
            try:
                self.client.close()
            except Exception:
                pass

db = Database()

def init_db():
    db.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            auth_salt TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    db.execute("""
        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            expires_at TIMESTAMP NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        )
    """)
    db.execute("""
        CREATE TABLE IF NOT EXISTS notes (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            title TEXT NOT NULL,
            category TEXT NOT NULL DEFAULT 'note',
            content_ciphertext TEXT NOT NULL,
            iv TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        )
    """)

def create_session(user_id: str) -> str:
    token = str(uuid.uuid4())
    expires_at = (datetime.now(timezone.utc) + timedelta(days=7)).strftime("%Y-%m-%d %H:%M:%S")
    db.execute(
        "INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)",
        (token, user_id, expires_at),
    )
    return token

def get_current_user(request: Request):
    token = request.cookies.get("aura_session")
    if not token:
        auth_header = request.headers.get("authorization")
        if auth_header and auth_header.startswith("Bearer "):
            token = auth_header.split(" ", 1)[1].strip()

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Требуется авторизация.",
        )

    res = db.execute(
        """
        SELECT u.id, u.username, u.email, u.created_at, u.auth_salt, s.token
        FROM sessions s
        JOIN users u ON u.id = s.user_id
        WHERE s.token = ? AND s.expires_at > CURRENT_TIMESTAMP
        """,
        (token,),
    )
    user = res.fetchone()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Сессия недействительна или истекла.",
        )
    return user

class RegisterRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=30)
    email: EmailStr
    auth_key_hash: str = Field(..., min_length=32, max_length=128)
    auth_salt: str = Field(..., min_length=16, max_length=64)

class LoginRequest(BaseModel):
    login: str
    auth_key_hash: str = Field(..., min_length=32, max_length=128)

class ReencryptedNote(BaseModel):
    id: str
    content_ciphertext: str
    iv: str

class ChangePasswordRequest(BaseModel):
    current_auth_key_hash: str = Field(..., min_length=32, max_length=128)
    new_auth_key_hash: str = Field(..., min_length=32, max_length=128)
    new_auth_salt: str = Field(..., min_length=16, max_length=64)
    reencrypted_notes: Optional[List[ReencryptedNote]] = None

class NoteCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=120)
    category: str = Field("note", max_length=30)
    content_ciphertext: str = Field(..., min_length=1, max_length=50000)
    iv: str = Field(..., min_length=10, max_length=64)

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield
    db.close()

DEBUG = os.getenv("DEBUG", "0").lower() in ("1", "true", "yes")

app = FastAPI(
    title="Aura Auth",
    lifespan=lifespan,
    docs_url="/docs" if DEBUG else None,
    redoc_url=None,
    openapi_url="/openapi.json" if DEBUG else None,
)

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc: RequestValidationError):
    messages = []
    for err in exc.errors():
        field = err.get("loc", [])[-1]
        if field == "email":
            messages.append("Введите корректный email адрес (например, alex@domain.com)")
        elif field == "username":
            messages.append("Имя пользователя должно содержать от 3 до 30 символов")
        elif field in ("auth_key_hash", "password"):
            messages.append("Ошибка генерации ключа авторизации")
        else:
            messages.append(err.get("msg", "Некорректно заполнены данные"))
    return JSONResponse(
        status_code=422,
        content={"detail": ". ".join(messages)},
    )

@app.get("/api/auth/salt")
def get_auth_salt(login: str, request: Request):
    ip = get_client_ip(request)
    check_rate_limit("salt", ip, max_requests=20, window_seconds=60)

    clean_login = login.strip()
    res = db.execute(
        "SELECT auth_salt FROM users WHERE username = ? OR email = ?",
        (clean_login, clean_login),
    )
    user = res.fetchone()
    if user:
        return {"auth_salt": user["auth_salt"]}

    # Return deterministic pseudo-salt for unknown users to prevent enumeration
    fake_salt = hashlib.sha256(f"aura_salt_v1_{clean_login}".encode("utf-8")).hexdigest()[:32]
    return {"auth_salt": fake_salt}

@app.post("/api/register", status_code=status.HTTP_201_CREATED)
def register(data: RegisterRequest, response: Response, request: Request):
    ip = get_client_ip(request)
    check_rate_limit("register", ip, max_requests=5, window_seconds=60)

    res = db.execute(
        "SELECT 1 FROM users WHERE username = ? OR email = ?",
        (data.username, data.email),
    )
    if res.fetchone():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Пользователь с таким именем или email уже зарегистрирован.",
        )

    argon_hash = ph.hash(data.auth_key_hash)
    user_id = str(uuid.uuid4())
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")

    db.execute(
        "INSERT INTO users (id, username, email, password_hash, auth_salt, created_at) VALUES (?, ?, ?, ?, ?, ?)",
        (user_id, data.username, data.email, argon_hash, data.auth_salt, now_str),
    )

    session_token = create_session(user_id)
    response.set_cookie(
        key="aura_session",
        value=session_token,
        httponly=True,
        samesite="lax",
        secure=not DEBUG,
        max_age=7 * 24 * 3600,
        path="/",
    )

    return {
        "success": True,
        "message": "Регистрация прошла успешно!",
        "user": {
            "id": user_id,
            "username": data.username,
            "email": data.email,
            "auth_salt": data.auth_salt,
            "created_at": now_str,
        },
    }

@app.post("/api/login")
def login(data: LoginRequest, response: Response, request: Request):
    ip = get_client_ip(request)
    check_rate_limit("login", ip, max_requests=5, window_seconds=60)

    res = db.execute(
        "SELECT id, username, email, password_hash, auth_salt, created_at FROM users WHERE username = ? OR email = ?",
        (data.login, data.login),
    )
    user = res.fetchone()

    invalid_msg = "Неверное имя пользователя/email или пароль."
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=invalid_msg)

    try:
        ph.verify(user["password_hash"], data.auth_key_hash)
    except VerifyMismatchError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=invalid_msg)

    session_token = create_session(user["id"])
    response.set_cookie(
        key="aura_session",
        value=session_token,
        httponly=True,
        samesite="lax",
        secure=not DEBUG,
        max_age=7 * 24 * 3600,
        path="/",
    )

    return {
        "success": True,
        "message": f"Добро пожаловать, {user['username']}!",
        "user": {
            "id": user["id"],
            "username": user["username"],
            "email": user["email"],
            "auth_salt": user["auth_salt"],
            "created_at": user["created_at"],
        },
    }

@app.get("/api/me")
def get_me(current_user = Depends(get_current_user)):
    res = db.execute("SELECT COUNT(*) AS total_notes FROM notes WHERE user_id = ?", (current_user["id"],))
    stats = res.fetchone()

    db_status = "Turso Zero-Knowledge" if db.use_turso else "SQLite Zero-Knowledge"

    return {
        "user": {
            "id": current_user["id"],
            "username": current_user["username"],
            "email": current_user["email"],
            "auth_salt": current_user["auth_salt"],
            "created_at": current_user["created_at"],
        },
        "stats": {
            "notes_count": stats["total_notes"] if stats else 0,
            "security_status": f"Защищено (Argon2id + AES-GCM + {db_status})",
        },
    }

@app.post("/api/logout")
def logout(response: Response, request: Request, current_user = Depends(get_current_user)):
    token = request.cookies.get("aura_session") or current_user["token"]
    if token:
        db.execute("DELETE FROM sessions WHERE token = ?", (token,))
    response.delete_cookie(key="aura_session", path="/")
    return {"success": True, "message": "Вы вышли из системы."}

@app.post("/api/change-password")
def change_password(data: ChangePasswordRequest, request: Request, current_user = Depends(get_current_user)):
    ip = get_client_ip(request)
    check_rate_limit("change-password", ip, max_requests=5, window_seconds=60)

    res = db.execute("SELECT password_hash FROM users WHERE id = ?", (current_user["id"],))
    user_row = res.fetchone()

    try:
        ph.verify(user_row["password_hash"], data.current_auth_key_hash)
    except VerifyMismatchError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Неверный текущий мастер-пароль.",
        )

    new_argon_hash = ph.hash(data.new_auth_key_hash)
    db.execute(
        "UPDATE users SET password_hash = ?, auth_salt = ? WHERE id = ?",
        (new_argon_hash, data.new_auth_salt, current_user["id"]),
    )

    if data.reencrypted_notes:
        for note in data.reencrypted_notes:
            db.execute(
                "UPDATE notes SET content_ciphertext = ?, iv = ? WHERE id = ? AND user_id = ?",
                (note.content_ciphertext, note.iv, note.id, current_user["id"]),
            )

    return {"success": True, "message": "Мастер-пароль успешно обновлен!"}

@app.get("/api/notes")
def list_notes(current_user = Depends(get_current_user)):
    res = db.execute(
        "SELECT id, title, category, content_ciphertext, iv, created_at FROM notes WHERE user_id = ? ORDER BY created_at DESC",
        (current_user["id"],),
    )
    rows = res.fetchall()

    return [
        {
            "id": r["id"],
            "title": r["title"],
            "category": r["category"],
            "content_ciphertext": r["content_ciphertext"],
            "iv": r["iv"],
            "created_at": r["created_at"],
        }
        for r in rows
    ]

@app.post("/api/notes", status_code=status.HTTP_201_CREATED)
def create_note(data: NoteCreate, current_user = Depends(get_current_user)):
    note_id = str(uuid.uuid4())
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")

    db.execute(
        "INSERT INTO notes (id, user_id, title, category, content_ciphertext, iv, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
        (note_id, current_user["id"], data.title, data.category, data.content_ciphertext, data.iv, now_str),
    )

    return {
        "id": note_id,
        "title": data.title,
        "category": data.category,
        "content_ciphertext": data.content_ciphertext,
        "iv": data.iv,
        "created_at": now_str,
    }

@app.delete("/api/notes/{note_id}")
def delete_note(note_id: str, current_user = Depends(get_current_user)):
    res = db.execute("DELETE FROM notes WHERE id = ? AND user_id = ?", (note_id, current_user["id"]))
    if res.rowcount == 0:
        raise HTTPException(status_code=404, detail="Запись не найдена.")

    return {"success": True, "message": "Запись удалена."}

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/")
def read_root():
    return FileResponse(STATIC_DIR / "index.html")

if __name__ == "__main__":
    import uvicorn
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("app:app", host=host, port=port, reload=DEBUG)
