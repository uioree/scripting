document.addEventListener('DOMContentLoaded', () => {
    // Элементы навигации и вкладок
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const authTabs = document.getElementById('auth-tabs');
    const formSubtitle = document.getElementById('form-subtitle');
    
    // Формы
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const userDashboard = document.getElementById('user-dashboard');
    
    // Кнопки отправки
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Контейнер Toast
    const toastContainer = document.getElementById('toast-container');
    
    // Элементы индикатора пароля
    const regPasswordInput = document.getElementById('reg-password');
    const passwordMeter = document.getElementById('password-meter');
    const meterText = document.getElementById('meter-text');

    // === Переключение Вкладок ===
    function switchTab(target) {
        if (target === 'register') {
            tabRegister.classList.add('active');
            tabLogin.classList.remove('active');
            authTabs.classList.add('tab-register-active');
            
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
            formSubtitle.textContent = 'Создайте новый аккаунт за 1 минуту';
        } else {
            tabLogin.classList.add('active');
            tabRegister.classList.remove('active');
            authTabs.classList.remove('tab-register-active');
            
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
            formSubtitle.textContent = 'Добро пожаловать в современный аккаунт';
        }
    }

    tabLogin.addEventListener('click', () => switchTab('login'));
    tabRegister.addEventListener('click', () => switchTab('register'));

    // === Показать / Скрыть пароль ===
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';

            // Обновляем SVG иконку
            btn.innerHTML = isPassword ? `
                <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
            ` : `
                <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            `;
        });
    });

    // === Оценка сложности пароля в реальном времени ===
    if (regPasswordInput) {
        regPasswordInput.addEventListener('input', () => {
            const val = regPasswordInput.value;
            let score = 0;

            if (val.length >= 6) score++;
            if (/[a-z]/.test(val) && /[A-Z]/.test(val)) score++;
            if (/\d/.test(val)) score++;
            if (/[^a-zA-Z0-9]/.test(val)) score++;

            passwordMeter.className = 'password-meter';
            if (val.length === 0) {
                meterText.textContent = 'Сложность пароля';
            } else if (score === 1) {
                passwordMeter.classList.add('strength-1');
                meterText.textContent = 'Слишком простой';
            } else if (score === 2) {
                passwordMeter.classList.add('strength-2');
                meterText.textContent = 'Средний пароль';
            } else if (score === 3) {
                passwordMeter.classList.add('strength-3');
                meterText.textContent = 'Хороший пароль';
            } else if (score === 4) {
                passwordMeter.classList.add('strength-4');
                meterText.textContent = 'Отличный надежный пароль';
            }
        });
    }

    // === Всплывающие уведомления (Toast) ===
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-dot"></span>
            <span class="toast-msg">${escapeHtml(message)}</span>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 3800);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // === Отображение дашборда после входа/регистрации ===
    function showDashboard(user) {
        authTabs.style.display = 'none';
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
        formSubtitle.textContent = 'Личный кабинет пользователя';

        document.getElementById('dash-avatar').textContent = (user.username || 'U')[0].toUpperCase();
        document.getElementById('dash-username').textContent = user.username || '—';
        document.getElementById('dash-email').textContent = user.email || '—';

        userDashboard.classList.add('active');
    }

    // Выход из профиля
    logoutBtn.addEventListener('click', () => {
        userDashboard.classList.remove('active');
        authTabs.style.display = 'flex';
        switchTab('login');
        loginForm.reset();
        registerForm.reset();
        showToast('Вы вышли из учетной записи', 'success');
    });

    // === Отправка формы Регистрации ===
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;

        if (!username || !email || !password) {
            showToast('Заполните все обязательные поля', 'error');
            return;
        }

        if (password.length < 6) {
            showToast('Пароль должен содержать минимум 6 символов', 'error');
            return;
        }

        registerBtn.classList.add('loading');

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                const errorMsg = data.detail || 'Ошибка при регистрации';
                showToast(errorMsg, 'error');
            } else {
                showToast(data.message || 'Регистрация успешна!', 'success');
                // Сразу открываем профиль
                showDashboard(data.user);
            }
        } catch (err) {
            console.error(err);
            showToast('Не удалось подключиться к серверу', 'error');
        } finally {
            registerBtn.classList.remove('loading');
        }
    });

    // === Отправка формы Входа ===
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const login = document.getElementById('login-identifier').value.trim();
        const password = document.getElementById('login-password').value;

        if (!login || !password) {
            showToast('Введите логин и пароль', 'error');
            return;
        }

        loginBtn.classList.add('loading');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password })
            });

            const data = await res.json();

            if (!res.ok) {
                const errorMsg = data.detail || 'Неверный логин или пароль';
                showToast(errorMsg, 'error');
            } else {
                showToast(data.message || 'Вход выполнен успешно!', 'success');
                showDashboard(data.user);
            }
        } catch (err) {
            console.error(err);
            showToast('Не удалось подключиться к серверу', 'error');
        } finally {
            loginBtn.classList.remove('loading');
        }
    });
});
