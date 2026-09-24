import os
from contextlib import asynccontextmanager
from datetime import datetime, timedelta, timezone
from pathlib import Path
import hashlib
import secrets
import sqlite3
from typing import Any, List, Optional

from fastapi import Depends, FastAPI, Header, HTTPException, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = Path(os.getenv("DB_PATH", BASE_DIR / "database.db"))
STATIC_DIR = BASE_DIR / "static"

TURSO_DATABASE_URL = os.getenv("TURSO_DATABASE_URL")
TURSO_AUTH_TOKEN = os.getenv("TURSO_AUTH_TOKEN")

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
            import libsql_client
            self.client = libsql_client.create_client_sync(
                url=TURSO_DATABASE_URL,
                auth_token=TURSO_AUTH_TOKEN,
            )

    def execute(self, sql: str, params: Optional[Any] = None) -> DBResult:
        if self.use_turso:
            p = list(params) if params is not None else None
            res = self.client.execute(sql, p)
            return DBResult(res.rows, res.last_insert_rowid, res.rows_affected)
        else:
            with sqlite3.connect(DB_PATH) as conn:
                conn.row_factory = sqlite3.Row
                cur = conn.cursor()
                cur.execute(sql, params or ())
                rows = cur.fetchall()
                conn.commit()
                return DBResult(rows, cur.lastrowid, cur.rowcount)

    def close(self):
        if self.use_turso and hasattr(self, "client"):
            self.client.close()

db = Database()

def init_db():
    db.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    db.execute("""
        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            expires_at TIMESTAMP NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        )
    """)
    db.execute("""
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            category TEXT NOT NULL DEFAULT 'note',
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        )
    """)

def hash_password(password: str, salt: Optional[str] = None) -> tuple[str, str]:
    if not salt:
        salt = secrets.token_hex(16)
    pwd_hash = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt.encode("utf-8"),
        100_000,
    ).hex()
    return pwd_hash, salt

def verify_password(password: str, pwd_hash: str, salt: str) -> bool:
    new_hash, _ = hash_password(password, salt)
    return secrets.compare_digest(new_hash, pwd_hash)

def create_session(user_id: int) -> str:
    token = secrets.token_urlsafe(32)
    expires_at = (datetime.now(timezone.utc) + timedelta(days=7)).strftime("%Y-%m-%d %H:%M:%S")
    db.execute(
        "INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)",
        (token, user_id, expires_at),
    )
    return token

def get_current_user(authorization: Optional[str] = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Требуется авторизация.",
        )
    token = authorization.split(" ", 1)[1].strip()
    res = db.execute(
        """
        SELECT u.id, u.username, u.email, u.created_at, s.token
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
    password: str = Field(..., min_length=6, max_length=100)

class LoginRequest(BaseModel):
    login: str
    password: str

class ChangePasswordRequest(BaseModel):
    current_password: str
    new_password: str = Field(..., min_length=6, max_length=100)

class NoteCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=120)
    category: str = Field("note", max_length=30)
    content: str = Field(..., min_length=1, max_length=5000)

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
        elif field == "password":
            messages.append("Пароль должен содержать от 6 до 100 символов")
        else:
            messages.append(err.get("msg", "Некорректно заполнены данные"))
    return JSONResponse(
        status_code=422,
        content={"detail": ". ".join(messages)},
    )

@app.post("/api/register", status_code=status.HTTP_201_CREATED)
def register(data: RegisterRequest):
    res = db.execute(
        "SELECT 1 FROM users WHERE username = ? OR email = ?",
        (data.username, data.email),
    )
    if res.fetchone():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Пользователь с таким именем или email уже зарегистрирован.",
        )

    pwd_hash, salt = hash_password(data.password)
    insert_res = db.execute(
        "INSERT INTO users (username, email, password_hash, salt) VALUES (?, ?, ?, ?)",
        (data.username, data.email, pwd_hash, salt),
    )
    user_id = insert_res.lastrowid

    token = create_session(user_id)
    return {
        "success": True,
        "message": "Регистрация прошла успешно!",
        "token": token,
        "user": {
            "id": user_id,
            "username": data.username,
            "email": data.email,
        },
    }

@app.post("/api/login")
def login(data: LoginRequest):
    res = db.execute(
        "SELECT id, username, email, password_hash, salt, created_at FROM users WHERE username = ? OR email = ?",
        (data.login, data.login),
    )
    user = res.fetchone()

    if not user or not verify_password(data.password, user["password_hash"], user["salt"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверное имя пользователя/email или пароль.",
        )

    token = create_session(user["id"])
    return {
        "success": True,
        "message": f"Добро пожаловать, {user['username']}!",
        "token": token,
        "user": {
            "id": user["id"],
            "username": user["username"],
            "email": user["email"],
            "created_at": user["created_at"],
        },
    }

@app.get("/api/me")
def get_me(current_user = Depends(get_current_user)):
    res = db.execute("SELECT COUNT(*) AS total_notes FROM notes WHERE user_id = ?", (current_user["id"],))
    stats = res.fetchone()

    db_status = "Turso Cloud DB" if db.use_turso else "SQLite Local"

    return {
        "user": {
            "id": current_user["id"],
            "username": current_user["username"],
            "email": current_user["email"],
            "created_at": current_user["created_at"],
        },
        "stats": {
            "notes_count": stats["total_notes"] if stats else 0,
            "security_status": f"Защищено ({db_status})",
        },
    }

@app.post("/api/logout")
def logout(current_user = Depends(get_current_user)):
    db.execute("DELETE FROM sessions WHERE token = ?", (current_user["token"],))
    return {"success": True, "message": "Вы вышли из системы."}

@app.post("/api/change-password")
def change_password(data: ChangePasswordRequest, current_user = Depends(get_current_user)):
    res = db.execute("SELECT password_hash, salt FROM users WHERE id = ?", (current_user["id"],))
    user_row = res.fetchone()
    if not user_row or not verify_password(data.current_password, user_row["password_hash"], user_row["salt"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Неверный текущий пароль.",
        )

    new_hash, new_salt = hash_password(data.new_password)
    db.execute(
        "UPDATE users SET password_hash = ?, salt = ? WHERE id = ?",
        (new_hash, new_salt, current_user["id"]),
    )

    return {"success": True, "message": "Пароль успешно обновлен!"}

@app.get("/api/notes")
def list_notes(current_user = Depends(get_current_user)):
    res = db.execute(
        "SELECT id, title, category, content, created_at FROM notes WHERE user_id = ? ORDER BY id DESC",
        (current_user["id"],),
    )
    rows = res.fetchall()

    return [
        {
            "id": r["id"],
            "title": r["title"],
            "category": r["category"],
            "content": r["content"],
            "created_at": r["created_at"],
        }
        for r in rows
    ]

@app.post("/api/notes", status_code=status.HTTP_201_CREATED)
def create_note(data: NoteCreate, current_user = Depends(get_current_user)):
    insert_res = db.execute(
        "INSERT INTO notes (user_id, title, category, content) VALUES (?, ?, ?, ?)",
        (current_user["id"], data.title, data.category, data.content),
    )
    note_id = insert_res.lastrowid
    res = db.execute("SELECT id, title, category, content, created_at FROM notes WHERE id = ?", (note_id,))
    new_note = res.fetchone()

    return {
        "id": new_note["id"],
        "title": new_note["title"],
        "category": new_note["category"],
        "content": new_note["content"],
        "created_at": new_note["created_at"],
    }

@app.delete("/api/notes/{note_id}")
def delete_note(note_id: int, current_user = Depends(get_current_user)):
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
    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("app:app", host=host, port=port, reload=True)
