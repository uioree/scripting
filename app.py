import os
import sqlite3
import hashlib
import secrets
from typing import Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr, Field

# Инициализация приложения FastAPI
app = FastAPI(title="Minimalist Auth Portal", description="Современная система регистрации и авторизации")

DB_PATH = "database.db"

# Инициализация базы данных SQLite
def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()

init_db()

# Хеширование пароля с солью (PBKDF2-HMAC-SHA256)
def hash_password(password: str, salt: Optional[str] = None) -> tuple[str, str]:
    if not salt:
        salt = secrets.token_hex(16)
    pwd_hash = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt.encode('utf-8'),
        100_000
    ).hex()
    return pwd_hash, salt

def verify_password(password: str, pwd_hash: str, salt: str) -> bool:
    new_hash, _ = hash_password(password, salt)
    return secrets.compare_digest(new_hash, pwd_hash)

# Pydantic-схемы валидации запросов
class RegisterRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=30, description="Имя пользователя (3-30 символов)")
    email: EmailStr = Field(..., description="Корректный email адрес")
    password: str = Field(..., min_length=6, max_length=100, description="Пароль минимум 6 символов")

class LoginRequest(BaseModel):
    login: str = Field(..., description="Email или имя пользователя")
    password: str = Field(..., description="Пароль")

# Эндпоинт регистрации
@app.post("/api/register", status_code=status.HTTP_201_CREATED)
def register(data: RegisterRequest):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Проверка на существование пользователя
    cursor.execute("SELECT id, username, email FROM users WHERE username = ? OR email = ?", (data.username, data.email))
    existing = cursor.fetchone()
    if existing:
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Пользователь с таким именем или email уже зарегистрирован."
        )
    
    # Хеширование и сохранение
    pwd_hash, salt = hash_password(data.password)
    cursor.execute(
        "INSERT INTO users (username, email, password_hash, salt) VALUES (?, ?, ?, ?)",
        (data.username, data.email, pwd_hash, salt)
    )
    conn.commit()
    user_id = cursor.lastrowid
    conn.close()
    
    return {
        "success": True,
        "message": "Регистрация прошла успешно!",
        "user": {
            "id": user_id,
            "username": data.username,
            "email": data.email
        }
    }

# Эндпоинт авторизации (входа)
@app.post("/api/login")
def login(data: LoginRequest):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute(
        "SELECT id, username, email, password_hash, salt, created_at FROM users WHERE username = ? OR email = ?",
        (data.login, data.login)
    )
    user = cursor.fetchone()
    conn.close()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверное имя пользователя/email или пароль."
        )
    
    user_id, username, email, pwd_hash, salt, created_at = user
    if not verify_password(data.password, pwd_hash, salt):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверное имя пользователя/email или пароль."
        )
    
    return {
        "success": True,
        "message": f"Добро пожаловать, {username}!",
        "user": {
            "id": user_id,
            "username": username,
            "email": email,
            "created_at": created_at
        }
    }

# Раздача статики фронтенда
os.makedirs("static", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def read_root():
    return FileResponse("static/index.html")

if __name__ == "__main__":
    import uvicorn
    print("FastAPI server running at: http://127.0.0.1:8000")
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)

