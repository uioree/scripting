#!/usr/bin/env python3
"""
Simple HTTP Server for Aura Schedule
Run: python server.py
Open from phone on same Wi-Fi: http://<YOUR_LOCAL_IP>:8080
"""
import http.server
import socketserver
import socket
import os
import sys
from pathlib import Path

# Ensure UTF-8 output in Windows terminal
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PORT = 8080
DIRECTORY = Path(__file__).resolve().parent

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    local_ip = get_local_ip()
    print("=" * 60)
    print("Расписание ТОГУ МБИ(б)-31 запущено!")
    print(f"Открыть на телефоне (по Wi-Fi): http://{local_ip}:{PORT}")
    print(f"Открыть на компьютере:          http://localhost:{PORT}")
    print("=" * 60)
    print("Нажмите Ctrl+C для остановки сервера.")
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен.")
