# Aura Auth

Минималистичный сервис регистрации и авторизации на базе FastAPI и SQLite с современным веб-интерфейсом.

## Стек

- **Backend:** Python 3.10+, FastAPI, SQLite3, Pydantic v2
- **Frontend:** Vanilla JS, HTML5, CSS3
- **Безопасность:** Хеширование PBKDF2-HMAC-SHA256 с солью

## Запуск проекта

1. Склонируйте репозиторий:
   ```bash
   git clone git@github.com:uioree/scripting.git
   cd scripting
   ```

2. Создайте и активируйте виртуальное окружение:
   ```bash
   python -m venv .venv
   # Windows (PowerShell):
   .venv\Scripts\Activate.ps1
   # Linux / macOS:
   source .venv/bin/activate
   ```

3. Установите зависимости:
   ```bash
   pip install -r requirements.txt
   ```

4. Запустите приложение:
   ```bash
   python app.py
   ```

После запуска интерфейс будет доступен по адресу [http://127.0.0.1:8000](http://127.0.0.1:8000), а документация API — [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).
