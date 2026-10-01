#!/usr/bin/env python3
"""
HTTP Server for Date Invitation ("Приглашение на свидание")
Run: python serve.py
Open in browser or on phone in same Wi-Fi: http://<LOCAL_IP>:8085
"""

import http.server
import socketserver
import socket
import os
import sys
import webbrowser
from pathlib import Path

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PORT = 8085
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

    def end_headers(self):
        # Disable aggressive caching for smooth live updates
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    local_ip = get_local_ip()
    local_url = f"http://localhost:{PORT}"
    network_url = f"http://{local_ip}:{PORT}"

    print("=" * 60)
    print(" 💖 Приглашение на свидание запущено!")
    print(f" 💻 Компьютер (локально):  {local_url}")
    print(f" 📱 Телефон (по Wi-Fi):   {network_url}")
    print("=" * 60)
    print(" Нажмите Ctrl+C для остановки сервера.\n")

    # Try opening browser
    try:
        webbrowser.open(local_url)
    except Exception:
        pass

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен.")
