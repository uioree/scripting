document.addEventListener('DOMContentLoaded', () => {
    const pageContainer = document.getElementById('page-container');
    const authView = document.getElementById('auth-view');
    const dashboardView = document.getElementById('dashboard-view');

    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const authTabs = document.getElementById('auth-tabs');
    const formSubtitle = document.getElementById('form-subtitle');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    const regPasswordInput = document.getElementById('reg-password');
    const passwordMeter = document.getElementById('password-meter');
    const meterText = document.getElementById('meter-text');

    const toastContainer = document.getElementById('toast-container');

    const dashLogoutBtn = document.getElementById('dash-logout-btn');
    const toggleNewNoteBtn = document.getElementById('toggle-new-note-btn');
    const noteForm = document.getElementById('note-form');
    const cancelNoteBtn = document.getElementById('cancel-note-btn');
    const notesContainer = document.getElementById('notes-container');
    const categoryFilters = document.getElementById('category-filters');
    const vaultSearch = document.getElementById('vault-search');
    const changePwdForm = document.getElementById('change-pwd-form');

    let allNotes = [];
    let currentFilter = 'all';
    let searchQuery = '';

    function getToken() {
        return localStorage.getItem('aura_token');
    }

    function setToken(token) {
        if (token) {
            localStorage.setItem('aura_token', token);
        } else {
            localStorage.removeItem('aura_token');
        }
    }

    async function authFetch(url, options = {}) {
        const token = getToken();
        const headers = options.headers || {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        options.headers = headers;

        const res = await fetch(url, options);
        if (res.status === 401) {
            setToken(null);
            showAuthView();
            showToast('Сессия завершена. Войдите снова.', 'error');
            throw new Error('Unauthorized');
        }
        return res;
    }

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
        }, 3600);
    }

    function escapeHtml(str) {
        if (str === null || str === undefined) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

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
            formSubtitle.textContent = 'Добро пожаловать в систему';
        }
    }

    tabLogin.addEventListener('click', () => switchTab('login'));
    tabRegister.addEventListener('click', () => switchTab('register'));

    const forgotLink = document.querySelector('.forgot-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Восстановление пароля пока недоступно', 'error');
        });
    }

    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';

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
                showToast(data.detail || 'Неверный логин или пароль', 'error');
            } else {
                setToken(data.token);
                showToast(data.message || 'Вход выполнен успешно!', 'success');
                showDashboardView(data.user);
            }
        } catch (err) {
            console.error(err);
            showToast('Не удалось подключиться к серверу', 'error');
        } finally {
            loginBtn.classList.remove('loading');
        }
    });

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
                showToast(data.detail || 'Ошибка при регистрации', 'error');
            } else {
                setToken(data.token);
                showToast(data.message || 'Регистрация успешна!', 'success');
                showDashboardView(data.user);
            }
        } catch (err) {
            console.error(err);
            showToast('Не удалось подключиться к серверу', 'error');
        } finally {
            registerBtn.classList.remove('loading');
        }
    });

    function showAuthView() {
        dashboardView.style.display = 'none';
        authView.style.display = 'block';
        pageContainer.classList.remove('dashboard-mode');
        loginForm.reset();
        registerForm.reset();
        switchTab('login');
    }

    function showDashboardView(user) {
        authView.style.display = 'none';
        dashboardView.style.display = 'flex';
        pageContainer.classList.add('dashboard-mode');

        const initial = (user.username || 'U')[0].toUpperCase();
        document.getElementById('user-chip-avatar').textContent = initial;
        document.getElementById('user-chip-name').textContent = user.username || 'Пользователь';
        document.getElementById('user-chip-email').textContent = user.email || '';

        document.getElementById('prof-username').textContent = user.username || '—';
        document.getElementById('prof-email').textContent = user.email || '—';
        document.getElementById('prof-id').textContent = user.id ? `#${user.id}` : '#—';
        if (user.created_at) {
            document.getElementById('prof-date').textContent = new Date(user.created_at).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }

        loadNotes();
    }

    dashLogoutBtn.addEventListener('click', async () => {
        try {
            await authFetch('/api/logout', { method: 'POST' });
        } catch (err) {
            // Ignored if already unauthorized
        } finally {
            setToken(null);
            showAuthView();
            showToast('Вы вышли из учетной записи', 'success');
        }
    });

    toggleNewNoteBtn.addEventListener('click', () => {
        const isHidden = noteForm.style.display === 'none';
        noteForm.style.display = isHidden ? 'flex' : 'none';
        if (isHidden) {
            document.getElementById('note-title').focus();
        }
    });

    cancelNoteBtn.addEventListener('click', () => {
        noteForm.reset();
        noteForm.style.display = 'none';
    });

    noteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = document.getElementById('note-title').value.trim();
        const category = document.getElementById('note-category').value;
        const content = document.getElementById('note-content').value.trim();

        if (!title || !content) {
            showToast('Заполните название и содержимое записи', 'error');
            return;
        }

        try {
            const res = await authFetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, category, content })
            });

            const newNote = await res.json();
            allNotes.unshift(newNote);
            renderNotes();
            noteForm.reset();
            noteForm.style.display = 'none';
            showToast('Запись надежно сохранена в сейф!', 'success');
        } catch (err) {
            console.error(err);
            showToast('Ошибка при сохранении записи', 'error');
        }
    });

    async function loadNotes() {
        try {
            const res = await authFetch('/api/notes');
            allNotes = await res.json();
            renderNotes();
        } catch (err) {
            console.error(err);
        }
    }

    function renderNotes() {
        document.getElementById('metric-notes-count').textContent = allNotes.length;

        let filtered = allNotes.filter(item => {
            const matchesCat = currentFilter === 'all' || item.category === currentFilter;
            const q = searchQuery.toLowerCase();
            const matchesSearch = !q || item.title.toLowerCase().includes(q) || item.content.toLowerCase().includes(q);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            notesContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <p>Записи не найдены</p>
                    <span class="empty-sub">${allNotes.length === 0 ? 'Нажмите «Новая запись», чтобы создать первый секрет' : 'Попробуйте изменить категорию или поисковый запрос'}</span>
                </div>
            `;
            return;
        }

        const categoryLabels = {
            note: 'Заметка',
            password: 'Пароль',
            api: 'API Ключ',
            secret: 'Секрет'
        };

        notesContainer.innerHTML = filtered.map(item => {
            const isSensitive = item.category === 'password' || item.category === 'api' || item.category === 'secret';
            const catLabel = categoryLabels[item.category] || item.category;
            const dateStr = item.created_at ? new Date(item.created_at).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
            }) : '';

            return `
                <div class="note-card" data-id="${item.id}">
                    <div class="note-card-header">
                        <div class="note-card-title">
                            <span>${escapeHtml(item.title)}</span>
                            <span class="cat-badge ${escapeHtml(item.category)}">${catLabel}</span>
                        </div>
                        <div class="note-card-actions">
                            ${isSensitive ? `
                                <button type="button" class="icon-btn toggle-visibility-btn" title="Показать/скрыть">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                            ` : ''}
                            <button type="button" class="icon-btn copy-note-btn" title="Скопировать содержимое">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                            <button type="button" class="icon-btn danger delete-note-btn" title="Удалить запись">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="note-card-content ${isSensitive ? 'masked' : ''}" data-raw="${encodeURIComponent(item.content)}">${isSensitive ? '••••••••••••••••' : escapeHtml(item.content)}</div>
                    <div class="note-card-footer">
                        <span>Защищено</span>
                        <span>${dateStr}</span>
                    </div>
                </div>
            `;
        }).join('');

        notesContainer.querySelectorAll('.note-card').forEach(card => {
            const id = card.getAttribute('data-id');
            const contentEl = card.querySelector('.note-card-content');
            const rawContent = decodeURIComponent(contentEl.getAttribute('data-raw'));

            const visBtn = card.querySelector('.toggle-visibility-btn');
            if (visBtn) {
                visBtn.addEventListener('click', () => {
                    const isMasked = contentEl.classList.contains('masked');
                    if (isMasked) {
                        contentEl.classList.remove('masked');
                        contentEl.textContent = rawContent;
                    } else {
                        contentEl.classList.add('masked');
                        contentEl.textContent = '••••••••••••••••';
                    }
                });
            }

            const copyBtn = card.querySelector('.copy-note-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(rawContent).then(() => {
                        showToast('Скопировано в буфер обмена', 'success');
                    }).catch(() => {
                        showToast('Не удалось скопировать', 'error');
                    });
                });
            }

            const delBtn = card.querySelector('.delete-note-btn');
            if (delBtn) {
                delBtn.addEventListener('click', async () => {
                    if (!confirm('Вы уверены, что хотите удалить эту запись?')) return;
                    try {
                        await authFetch(`/api/notes/${id}`, { method: 'DELETE' });
                        allNotes = allNotes.filter(n => n.id !== parseInt(id, 10));
                        renderNotes();
                        showToast('Запись удалена', 'success');
                    } catch (err) {
                        console.error(err);
                        showToast('Ошибка при удалении', 'error');
                    }
                });
            }
        });
    }

    categoryFilters.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilters.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-cat');
            renderNotes();
        });
    });

    vaultSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderNotes();
    });

    changePwdForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const currentPassword = document.getElementById('pwd-current').value;
        const newPassword = document.getElementById('pwd-new').value;

        if (!currentPassword || !newPassword) {
            showToast('Заполните оба поля пароля', 'error');
            return;
        }

        if (newPassword.length < 6) {
            showToast('Новый пароль должен быть не короче 6 символов', 'error');
            return;
        }

        try {
            const res = await authFetch('/api/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ current_password: currentPassword, new_password: newPassword })
            });

            const data = await res.json();
            if (!res.ok) {
                showToast(data.detail || 'Ошибка при обновлении пароля', 'error');
            } else {
                showToast('Пароль успешно обновлен!', 'success');
                changePwdForm.reset();
            }
        } catch (err) {
            console.error(err);
            showToast('Ошибка при обновлении пароля', 'error');
        }
    });

    async function checkAuth() {
        const token = getToken();
        if (!token) {
            showAuthView();
            return;
        }

        try {
            const res = await authFetch('/api/me');
            const data = await res.json();
            showDashboardView(data.user);
        } catch (err) {
            showAuthView();
        }
    }

    checkAuth();
});
