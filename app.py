from contextlib import asynccontextmanager, contextmanager
from pathlib import Path
import sqlite3
import hashlib
import secrets
from typing import Optional

from fastapi import FastAPI, HTTPException, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr, Field

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "database.db"
STATIC_DIR = BASE_DIR / "static"

def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                salt TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

@contextmanager
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

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

class RegisterRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=30)
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=100)

class LoginRequest(BaseModel):
    login: str
    password: str

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(title="Aura Auth", lifespan=lifespan)

@app.post("/api/register", status_code=status.HTTP_201_CREATED)
def register(data: RegisterRequest):
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT 1 FROM users WHERE username = ? OR email = ?",
            (data.username, data.email),
        )
        if cursor.fetchone():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Пользователь с таким именем или email уже зарегистрирован.",
            )

        pwd_hash, salt = hash_password(data.password)
        cursor.execute(
            "INSERT INTO users (username, email, password_hash, salt) VALUES (?, ?, ?, ?)",
            (data.username, data.email, pwd_hash, salt),
        )
        conn.commit()
        user_id = cursor.lastrowid

    return {
        "success": True,
        "message": "Регистрация прошла успешно!",
        "user": {
            "id": user_id,
            "username": data.username,
            "email": data.email,
        },
    }

@app.post("/api/login")
def login(data: LoginRequest):
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT id, username, email, password_hash, salt, created_at FROM users WHERE username = ? OR email = ?",
            (data.login, data.login),
        )
        user = cursor.fetchone()

    if not user or not verify_password(data.password, user["password_hash"], user["salt"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверное имя пользователя/email или пароль.",
        )

    return {
        "success": True,
        "message": f"Добро пожаловать, {user['username']}!",
        "user": {
            "id": user["id"],
            "username": user["username"],
            "email": user["email"],
            "created_at": user["created_at"],
        },
    }

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/")
def read_root():
    return FileResponse(STATIC_DIR / "index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
