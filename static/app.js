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
    const lockVaultBtn = document.getElementById('lock-vault-btn');
    const openGenBtn = document.getElementById('open-gen-btn');

    const toggleNewNoteBtn = document.getElementById('toggle-new-note-btn');
    const noteForm = document.getElementById('note-form');
    const cancelNoteBtn = document.getElementById('cancel-note-btn');
    const notesContainer = document.getElementById('notes-container');
    const categoryFilters = document.getElementById('category-filters');
    const vaultSearch = document.getElementById('vault-search');
    const changePwdForm = document.getElementById('change-pwd-form');

    const vaultLockOverlay = document.getElementById('vault-lock-overlay');
    const vaultUnlockForm = document.getElementById('vault-unlock-form');
    const lockPasswordInput = document.getElementById('lock-password-input');
    const lockLogoutBtn = document.getElementById('lock-logout-btn');

    const pwdGenModal = document.getElementById('pwd-gen-modal');
    const closeGenModalBtn = document.getElementById('close-gen-modal-btn');
    const genOutputText = document.getElementById('gen-output-text');
    const copyGenPwdBtn = document.getElementById('copy-gen-pwd-btn');
    const genLengthSlider = document.getElementById('gen-length');
    const genLenVal = document.getElementById('gen-len-val');
    const refreshGenBtn = document.getElementById('refresh-gen-btn');
    const genUpper = document.getElementById('gen-upper');
    const genLower = document.getElementById('gen-lower');
    const genDigits = document.getElementById('gen-digits');
    const genSymbols = document.getElementById('gen-symbols');

    let currentUser = null;
    let vaultEncryptionKey = null; // Stored strictly in RAM, never in localStorage/cookies
    let allNotes = [];
    let currentFilter = 'all';
    let searchQuery = '';

    let clipboardWipeTimeout = null;
    let inactivityTimer = null;
    const INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes auto-lock

    // === Zero-Knowledge Web Crypto Utilities ===

    async function deriveMasterKeys(password, saltHex) {
        const enc = new TextEncoder();
        const passwordKey = await crypto.subtle.importKey(
            'raw',
            enc.encode(password),
            'PBKDF2',
            false,
            ['deriveBits']
        );

        const saltBytes = new Uint8Array(saltHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

        const derivedBits = await crypto.subtle.deriveBits(
            {
                name: 'PBKDF2',
                salt: saltBytes,
                iterations: 100000,
                hash: 'SHA-256'
            },
            passwordKey,
            512
        );

        const authKeyRaw = derivedBits.slice(0, 32);
        const encKeyRaw = derivedBits.slice(32, 64);

        const authHashBuffer = await crypto.subtle.digest('SHA-256', authKeyRaw);
        const authKeyHash = Array.from(new Uint8Array(authHashBuffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

        const encKey = await crypto.subtle.importKey(
            'raw',
            encKeyRaw,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );

        return { authKeyHash, encKey };
    }

    async function encryptData(plainText, key) {
        const enc = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const cipherBuffer = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: iv },
            key,
            enc.encode(plainText)
        );

        const cipherBytes = new Uint8Array(cipherBuffer);
        let binaryStr = '';
        for (let i = 0; i < cipherBytes.length; i++) {
            binaryStr += String.fromCharCode(cipherBytes[i]);
        }
        const ciphertext = btoa(binaryStr);

        let ivStr = '';
        for (let i = 0; i < iv.length; i++) {
            ivStr += String.fromCharCode(iv[i]);
        }
        const ivB64 = btoa(ivStr);

        return { ciphertext, iv: ivB64 };
    }

    async function decryptData(ciphertextB64, ivB64, key) {
        if (!key) return '•••••••••••••••• (Сейф заблокирован)';
        try {
            const cipherBinary = atob(ciphertextB64);
            const cipherBytes = new Uint8Array(cipherBinary.length);
            for (let i = 0; i < cipherBinary.length; i++) {
                cipherBytes[i] = cipherBinary.charCodeAt(i);
            }

            const ivBinary = atob(ivB64);
            const ivBytes = new Uint8Array(ivBinary.length);
            for (let i = 0; i < ivBinary.length; i++) {
                ivBytes[i] = ivBinary.charCodeAt(i);
            }

            const decryptedBuffer = await crypto.subtle.decrypt(
                { name: 'AES-GCM', iv: ivBytes },
                key,
                cipherBytes
            );

            return new TextDecoder().decode(decryptedBuffer);
        } catch (e) {
            return '[Ошибка дешифрования: неверный ключ]';
        }
    }

    function generateRandomSaltHex(bytesLength = 16) {
        const bytes = crypto.getRandomValues(new Uint8Array(bytesLength));
        return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // === Inactivity Auto-Lock Timer ===

    function resetInactivityTimer() {
        if (inactivityTimer) clearTimeout(inactivityTimer);
        if (currentUser && vaultEncryptionKey) {
            inactivityTimer = setTimeout(() => {
                lockVault();
            }, INACTIVITY_TIMEOUT_MS);
        }
    }

    function lockVault() {
        vaultEncryptionKey = null; // Zero-Knowledge: wipe key from RAM
        vaultLockOverlay.style.display = 'flex';
        lockPasswordInput.value = '';
        lockPasswordInput.focus();
        renderNotes();
        showToast('Хранилище заблокировано по таймеру неактивности', 'warning');
    }

    ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'].forEach(evt => {
        window.addEventListener(evt, resetInactivityTimer, { passive: true });
    });

    // === Clipboard Auto-Wipe (60 Seconds) ===

    function copyWithAutoWipe(text, label = 'Данные') {
        if (!text || text.includes('Сейф заблокирован')) {
            showToast('Разблокируйте сейф для копирования', 'error');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            if (clipboardWipeTimeout) clearTimeout(clipboardWipeTimeout);
            showToast(`${label} скопированы! Буфер очистится через 60 сек.`, 'success');

            clipboardWipeTimeout = setTimeout(() => {
                navigator.clipboard.writeText('').then(() => {
                    showToast('Буфер обмена очищен в целях безопасности', 'success');
                }).catch(() => {});
            }, 60000);
        }).catch(() => {
            showToast('Не удалось скопировать', 'error');
        });
    }

    // === Password Generator ===

    function generateStrongPassword() {
        const length = parseInt(genLengthSlider.value, 10);
        let charset = '';
        if (genUpper.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (genLower.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (genDigits.checked) charset += '0123456789';
        if (genSymbols.checked) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';

        if (!charset) {
            charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
            genLower.checked = true;
            genDigits.checked = true;
        }

        const randomValues = new Uint32Array(length);
        crypto.getRandomValues(randomValues);
        let password = '';
        for (let i = 0; i < length; i++) {
            password += charset[randomValues[i] % charset.length];
        }
        return password;
    }

    function updateGeneratorUI() {
        genOutputText.value = generateStrongPassword();
        genLenVal.textContent = genLengthSlider.value;
    }

    openGenBtn.addEventListener('click', () => {
        pwdGenModal.style.display = 'flex';
        updateGeneratorUI();
    });

    closeGenModalBtn.addEventListener('click', () => {
        pwdGenModal.style.display = 'none';
    });

    refreshGenBtn.addEventListener('click', updateGeneratorUI);
    genLengthSlider.addEventListener('input', updateGeneratorUI);
    [genUpper, genLower, genDigits, genSymbols].forEach(cb => cb.addEventListener('change', updateGeneratorUI));

    copyGenPwdBtn.addEventListener('click', () => {
        copyWithAutoWipe(genOutputText.value, 'Сгенерированный пароль');
    });

    // === HTTP Client with HttpOnly Cookies (credentials: 'same-origin') ===

    async function apiFetch(url, options = {}) {
        options.credentials = 'same-origin';
        const res = await fetch(url, options);
        if (res.status === 401 && !url.includes('/api/login') && !url.includes('/api/auth/salt')) {
            showAuthView();
            showToast('Сессия завершена. Войдите снова.', 'error');
            throw new Error('Unauthorized');
        }
        return res;
    }

    function formatErrorMessage(detail, fallback = 'Произошла ошибка') {
        if (!detail) return fallback;
        if (typeof detail === 'string') return detail;
        if (Array.isArray(detail)) {
            return detail.map(err => {
                const field = err.loc ? err.loc[err.loc.length - 1] : '';
                if (field === 'email') return 'Введите корректный email (например, name@domain.com)';
                if (field === 'username') return 'Имя пользователя должно содержать от 3 до 30 символов';
                if (field === 'password') return 'Пароль должен содержать минимум 6 символов';
                return err.msg || 'Некорректные данные';
            }).join('. ');
        }
        if (typeof detail === 'object') {
            return detail.msg || detail.message || JSON.stringify(detail);
        }
        return String(detail);
    }

    function showToast(message, type = 'success') {
        const text = formatErrorMessage(message);
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-dot"></span>
            <span class="toast-msg">${escapeHtml(text)}</span>
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
            formSubtitle.textContent = 'Создайте защищенный Zero-Knowledge аккаунт';
        } else {
            tabLogin.classList.add('active');
            tabRegister.classList.remove('active');
            authTabs.classList.remove('tab-register-active');

            registerForm.classList.remove('active');
            loginForm.classList.add('active');
            formSubtitle.textContent = 'Zero-Knowledge личное хранилище';
        }
    }

    tabLogin.addEventListener('click', () => switchTab('login'));
    tabRegister.addEventListener('click', () => switchTab('register'));

    const forgotLink = document.querySelector('.forgot-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Zero-Knowledge: мастер-пароль известен только вам и не подлежит сбросу', 'warning');
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

    // === Zero-Knowledge Registration ===

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;

        if (!username || !email || !password) {
            showToast('Заполните все обязательные поля', 'error');
            return;
        }

        if (username.length < 3) {
            showToast('Имя пользователя должно содержать от 3 до 30 символов', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Введите корректный email адрес (например, alex@domain.com)', 'error');
            return;
        }

        if (password.length < 6) {
            showToast('Пароль должен содержать минимум 6 символов', 'error');
            return;
        }

        registerBtn.classList.add('loading');

        try {
            const auth_salt = generateRandomSaltHex(16);
            const { authKeyHash, encKey } = await deriveMasterKeys(password, auth_salt);

            const res = await apiFetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    email,
                    auth_key_hash: authKeyHash,
                    auth_salt: auth_salt
                })
            });

            const data = await res.json();

            if (!res.ok) {
                showToast(data.detail || 'Ошибка при регистрации', 'error');
            } else {
                currentUser = data.user;
                vaultEncryptionKey = encKey;
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

    // === Zero-Knowledge Login ===

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
            // 1. Fetch user's public salt
            const saltRes = await apiFetch(`/api/auth/salt?login=${encodeURIComponent(login)}`);
            const saltData = await saltRes.json();
            const auth_salt = saltData.auth_salt;

            // 2. Derive keys in browser using Web Crypto
            const { authKeyHash, encKey } = await deriveMasterKeys(password, auth_salt);

            // 3. Post only authKeyHash to server
            const res = await apiFetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    login,
                    auth_key_hash: authKeyHash
                })
            });

            const data = await res.json();

            if (!res.ok) {
                showToast(data.detail || 'Неверный логин или пароль', 'error');
            } else {
                currentUser = data.user;
                vaultEncryptionKey = encKey;
                showToast(data.message || 'Вход выполнен успешно!', 'success');
                showDashboardView(data.user);
            }
        } catch (err) {
            console.error(err);
            showToast('Ошибка при входе в систему', 'error');
        } finally {
            loginBtn.classList.remove('loading');
        }
    });

    // === Vault Unlock (from Auto-Lock) ===

    vaultUnlockForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = lockPasswordInput.value;
        if (!password || !currentUser) return;

        try {
            const { encKey } = await deriveMasterKeys(password, currentUser.auth_salt);

            // Verify key by trying to decrypt first note if available
            if (allNotes.length > 0) {
                const test = await decryptData(allNotes[0].content_ciphertext, allNotes[0].iv, encKey);
                if (test.startsWith('[Ошибка дешифрования')) {
                    showToast('Неверный мастер-пароль', 'error');
                    return;
                }
            }

            vaultEncryptionKey = encKey;
            vaultLockOverlay.style.display = 'none';
            lockPasswordInput.value = '';
            resetInactivityTimer();
            renderNotes();
            showToast('Сейф успешно разблокирован', 'success');
        } catch (err) {
            showToast('Неверный мастер-пароль', 'error');
        }
    });

    lockLogoutBtn.addEventListener('click', () => {
        performLogout();
    });

    lockVaultBtn.addEventListener('click', () => {
        lockVault();
    });

    // === View Switchers ===

    function showAuthView() {
        dashboardView.style.display = 'none';
        vaultLockOverlay.style.display = 'none';
        authView.style.display = 'block';
        pageContainer.classList.remove('dashboard-mode');
        loginForm.reset();
        registerForm.reset();
        currentUser = null;
        vaultEncryptionKey = null;
        if (inactivityTimer) clearTimeout(inactivityTimer);
        switchTab('login');
    }

    function showDashboardView(user) {
        authView.style.display = 'none';
        dashboardView.style.display = 'flex';
        pageContainer.classList.add('dashboard-mode');
        vaultLockOverlay.style.display = 'none';

        const initial = (user.username || 'U')[0].toUpperCase();
        document.getElementById('user-chip-avatar').textContent = initial;
        document.getElementById('user-chip-name').textContent = user.username || 'Пользователь';
        document.getElementById('user-chip-email').textContent = user.email || '';

        document.getElementById('prof-username').textContent = user.username || '—';
        document.getElementById('prof-email').textContent = user.email || '—';

        // Format UUIDv4 with click-to-copy
        const profIdEl = document.getElementById('prof-id');
        if (user.id) {
            profIdEl.textContent = `${user.id.substring(0, 8)}...${user.id.substring(user.id.length - 4)}`;
            profIdEl.onclick = () => copyWithAutoWipe(user.id, 'UUID пользователя');
        } else {
            profIdEl.textContent = '#—';
        }

        // Format created_at date
        if (user.created_at) {
            try {
                const dateObj = new Date(user.created_at.replace(' ', 'T') + 'Z');
                document.getElementById('prof-date').textContent = isNaN(dateObj.getTime())
                    ? user.created_at
                    : dateObj.toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
            } catch (e) {
                document.getElementById('prof-date').textContent = user.created_at;
            }
        }

        resetInactivityTimer();
        loadNotes();
    }

    async function performLogout() {
        try {
            await apiFetch('/api/logout', { method: 'POST' });
        } catch (err) {
            // Ignored
        } finally {
            showAuthView();
            showToast('Вы вышли из учетной записи', 'success');
        }
    }

    dashLogoutBtn.addEventListener('click', performLogout);

    // === Notes / Secret Management ===

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

        if (!vaultEncryptionKey) {
            showToast('Сейф заблокирован. Разблокируйте его для создания записи', 'error');
            return;
        }

        const title = document.getElementById('note-title').value.trim();
        const category = document.getElementById('note-category').value;
        const content = document.getElementById('note-content').value.trim();

        if (!title || !content) {
            showToast('Заполните название и содержимое записи', 'error');
            return;
        }

        try {
            // Encrypt content via AES-256-GCM in browser
            const { ciphertext, iv } = await encryptData(content, vaultEncryptionKey);

            const res = await apiFetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    category,
                    content_ciphertext: ciphertext,
                    iv: iv
                })
            });

            const newNote = await res.json();
            newNote.decryptedContent = content; // Store decrypted version in RAM
            allNotes.unshift(newNote);
            renderNotes();
            noteForm.reset();
            noteForm.style.display = 'none';
            showToast('Запись надежно зашифрована AES-GCM и сохранена в сейф!', 'success');
        } catch (err) {
            console.error(err);
            showToast('Ошибка при сохранении записи', 'error');
        }
    });

    async function loadNotes() {
        try {
            const res = await apiFetch('/api/notes');
            allNotes = await res.json();

            // Decrypt all notes in memory
            for (const note of allNotes) {
                note.decryptedContent = await decryptData(note.content_ciphertext, note.iv, vaultEncryptionKey);
            }

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
            const textToSearch = item.decryptedContent || '';
            const matchesSearch = !q || item.title.toLowerCase().includes(q) || textToSearch.toLowerCase().includes(q);
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
                    <span class="empty-sub">${allNotes.length === 0 ? 'Нажмите «Новая запись», чтобы создать первый зашифрованный секрет' : 'Попробуйте изменить категорию или поисковый запрос'}</span>
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

            let dateStr = '';
            if (item.created_at) {
                try {
                    const d = new Date(item.created_at.replace(' ', 'T') + 'Z');
                    dateStr = isNaN(d.getTime()) ? item.created_at : d.toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                } catch (e) {
                    dateStr = item.created_at;
                }
            }

            const plain = item.decryptedContent || '••••••••••••••••';

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
                            <button type="button" class="icon-btn copy-note-btn" title="Скопировать с автоочисткой через 1 мин">
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
                    <div class="note-card-content ${isSensitive ? 'masked' : ''}" data-raw="${encodeURIComponent(plain)}">${isSensitive ? '••••••••••••••••' : escapeHtml(plain)}</div>
                    <div class="note-card-footer">
                        <span>AES-256-GCM Encrypted</span>
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
                    copyWithAutoWipe(rawContent, 'Секретные данные');
                });
            }

            const delBtn = card.querySelector('.delete-note-btn');
            if (delBtn) {
                delBtn.addEventListener('click', async () => {
                    if (!confirm('Вы уверены, что хотите удалить эту запись?')) return;
                    try {
                        await apiFetch(`/api/notes/${id}`, { method: 'DELETE' });
                        allNotes = allNotes.filter(n => n.id !== id);
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

    // === Change Master Password ===

    changePwdForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const currentPassword = document.getElementById('pwd-current').value;
        const newPassword = document.getElementById('pwd-new').value;

        if (!currentPassword || !newPassword) {
            showToast('Заполните оба поля пароля', 'error');
            return;
        }

        if (newPassword.length < 6) {
            showToast('Новый мастер-пароль должен содержать от 6 символов', 'error');
            return;
        }

        try {
            // Derive current auth hash
            const { authKeyHash: currentHash } = await deriveMasterKeys(currentPassword, currentUser.auth_salt);

            // Generate new salt and derive new keys
            const new_salt = generateRandomSaltHex(16);
            const { authKeyHash: newHash, encKey: newEncKey } = await deriveMasterKeys(newPassword, new_salt);

            // Re-encrypt existing notes in memory with newEncKey
            const reencrypted_notes = [];
            for (const note of allNotes) {
                if (note.decryptedContent && !note.decryptedContent.startsWith('[Ошибка') && !note.decryptedContent.includes('Сейф заблокирован')) {
                    const { ciphertext, iv } = await encryptData(note.decryptedContent, newEncKey);
                    reencrypted_notes.push({
                        id: note.id,
                        content_ciphertext: ciphertext,
                        iv: iv
                    });
                }
            }

            const res = await apiFetch('/api/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    current_auth_key_hash: currentHash,
                    new_auth_key_hash: newHash,
                    new_auth_salt: new_salt,
                    reencrypted_notes: reencrypted_notes
                })
            });

            const data = await res.json();
            if (!res.ok) {
                showToast(data.detail || 'Ошибка при обновлении пароля', 'error');
            } else {
                currentUser.auth_salt = new_salt;
                vaultEncryptionKey = newEncKey;
                for (const rn of reencrypted_notes) {
                    const localNote = allNotes.find(n => n.id === rn.id);
                    if (localNote) {
                        localNote.content_ciphertext = rn.content_ciphertext;
                        localNote.iv = rn.iv;
                    }
                }
                showToast('Мастер-пароль успешно обновлен!', 'success');
                changePwdForm.reset();
            }
        } catch (err) {
            console.error(err);
            showToast('Ошибка при обновлении мастер-пароля', 'error');
        }
    });

    // === Check Existing Session via HttpOnly Cookie ===

    async function checkAuth() {
        try {
            const res = await apiFetch('/api/me');
            const data = await res.json();
            currentUser = data.user;

            // Session cookie exists, but in Zero-Knowledge the encryption key is in RAM.
            // Prompt user with unlock overlay to restore encryption key:
            showDashboardView(data.user);
            lockVault();
        } catch (err) {
            showAuthView();
        }
    }

    checkAuth();
});
