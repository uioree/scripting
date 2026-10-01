/**
 * ==========================================================================
 * DATE INVITATION — INTERACTIVE LOGIC & ANIMATIONS
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // State
  // ------------------------------------------------------------------------
  // Clean up any old test values
  const storedNick = localStorage.getItem('date_nickname');
  const validNick = (storedNick && !storedNick.toLowerCase().includes('суч')) ? storedNick : 'красотка';
  localStorage.setItem('date_nickname', validNick);

  const state = {
    currentStep: 1,
    date: '2026-11-15',
    time: '18:00',
    venueTitle: localStorage.getItem('date_venue') || 'ми топаем в театррр',
    nickname: validNick,
    tgUsername: localStorage.getItem('date_tg_user') || '',
    soundEnabled: localStorage.getItem('date_sound') !== 'false',
    noDodgeCount: 0,
    yesScale: 1
  };

  // ------------------------------------------------------------------------
  // DOM Elements
  // ------------------------------------------------------------------------
  const stepElements = [
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
    document.getElementById('step4'),
    document.getElementById('step5')
  ];

  const stepDots = document.querySelectorAll('.step-dot');
  const btnYes1 = document.getElementById('btnYes1');
  const btnNo1 = document.getElementById('btnNo1');
  const btnNo1Text = document.getElementById('btnNo1Text');
  const noToast = document.getElementById('noToast');
  const step1ButtonsArea = document.getElementById('step1ButtonsArea');

  const btnYes2 = document.getElementById('btnYes2');

  const dateInput = document.getElementById('dateInput');
  const timeInput = document.getElementById('timeInput');
  const btnStep3Next = document.getElementById('btnStep3Next');

  const optionCards = document.querySelectorAll('.option-card');
  const step4Toast = document.getElementById('step4Toast');

  const finalVenueTitle = document.getElementById('finalVenueTitle');
  const finalDateFormatted = document.getElementById('finalDateFormatted');
  const finalTimeFormatted = document.getElementById('finalTimeFormatted');
  const finalNickname = document.getElementById('finalNickname');
  const btnShareTelegram = document.getElementById('btnShareTelegram');
  const btnAddToCalendar = document.getElementById('btnAddToCalendar');
  const btnRestart = document.getElementById('btnRestart');

  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const settingsToggle = document.getElementById('settingsToggle');
  const settingsModal = document.getElementById('settingsModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const btnSaveSettings = document.getElementById('btnSaveSettings');
  const customVenueInput = document.getElementById('customVenueInput');
  const customNicknameInput = document.getElementById('customNicknameInput');
  const customTgUsername = document.getElementById('customTgUsername');
  const badgeOpts = document.querySelectorAll('.badge-opt');

  const ambientBg = document.getElementById('ambientBg');
  const confettiCanvas = document.getElementById('confettiCanvas');

  // ------------------------------------------------------------------------
  // Web Audio API Synthesizer (Cute sound effects without external audio files)
  // ------------------------------------------------------------------------
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playPop(pitch = 520) {
    if (!state.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  function playBoing() {
    if (!state.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(520, audioCtx.currentTime + 0.12);
      osc.frequency.linearRampToValueAtTime(220, audioCtx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.28);
    } catch (e) {
      console.warn(e);
    }
  }

  function playLoveChime() {
    if (!state.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.07);

        gain.gain.setValueAtTime(0, audioCtx.currentTime + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.07 + 0.35);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + idx * 0.07);
        osc.stop(audioCtx.currentTime + idx * 0.07 + 0.35);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  function playFanfare() {
    if (!state.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      // Cheerful romantic fanfare arpeggio
      const chords = [
        { f: 523.25, t: 0.00 }, // C5
        { f: 659.25, t: 0.10 }, // E5
        { f: 783.99, t: 0.20 }, // G5
        { f: 1046.50, t: 0.32 }, // C6
        { f: 880.00, t: 0.44 }, // A5
        { f: 1046.50, t: 0.56 }, // C6
        { f: 1318.51, t: 0.70 }  // E6
      ];

      chords.forEach(n => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, audioCtx.currentTime + n.t);

        gain.gain.setValueAtTime(0, audioCtx.currentTime + n.t);
        gain.gain.linearRampToValueAtTime(0.28, audioCtx.currentTime + n.t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + n.t + 0.45);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + n.t);
        osc.stop(audioCtx.currentTime + n.t + 0.45);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  // ------------------------------------------------------------------------
  // Confetti Particle System
  // ------------------------------------------------------------------------
  const ctx = confettiCanvas.getContext('2d');
  let confettiPieces = [];
  let confettiAnimationId = null;

  function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const confettiColors = ['#ff4071', '#ff758f', '#ffb3c1', '#ffd166', '#06d6a0', '#118ab2', '#ffffff'];
  const confettiShapes = ['circle', 'rect', 'heart'];

  function createConfettiBurst(count = 60, originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      confettiPieces.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 4,
        size: Math.random() * 8 + 5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        shape: confettiShapes[Math.floor(Math.random() * confettiShapes.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.18,
        drag: 0.98,
        opacity: 1,
        fadeSpeed: Math.random() * 0.012 + 0.008
      });
    }

    if (!confettiAnimationId) {
      updateConfetti();
    }
  }

  function updateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiPieces.length - 1; i >= 0; i--) {
      const p = confettiPieces[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.rotSpeed;
      p.opacity -= p.fadeSpeed;

      if (p.opacity <= 0 || p.y > confettiCanvas.height + 50) {
        confettiPieces.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'heart') {
        // Draw tiny heart
        const s = p.size * 0.7;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.1, 0, s);
        ctx.bezierCurveTo(s, s * 0.1, s * 0.5, -s * 0.3, 0, s * 0.3);
        ctx.fill();
      }

      ctx.restore();
    }

    if (confettiPieces.length > 0) {
      confettiAnimationId = requestAnimationFrame(updateConfetti);
    } else {
      confettiAnimationId = null;
    }
  }

  // ------------------------------------------------------------------------
  // Ambient Floating Background Hearts
  // ------------------------------------------------------------------------
  const heartEmojis = ['💖', '💕', '💗', '🌸', '✨', '🐾', '🥰'];
  function spawnAmbientHearts() {
    ambientBg.innerHTML = '';
    const numHearts = 14;
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = `${Math.random() * 95}%`;
      heart.style.animationDuration = `${8 + Math.random() * 8}s`;
      heart.style.animationDelay = `${Math.random() * 8}s`;
      heart.style.fontSize = `${1.2 + Math.random() * 1.4}rem`;
      ambientBg.appendChild(heart);
    }
  }
  spawnAmbientHearts();

  // ------------------------------------------------------------------------
  // Navigation & Step Control
  // ------------------------------------------------------------------------
  function goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 5) return;

    state.currentStep = stepNumber;

    stepElements.forEach((el, index) => {
      if (index + 1 === stepNumber) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    stepDots.forEach((dot, index) => {
      const dotStep = index + 1;
      dot.classList.remove('active', 'completed');
      if (dotStep === stepNumber) {
        dot.classList.add('active');
      } else if (dotStep < stepNumber) {
        dot.classList.add('completed');
      }
    });

    // Step-specific hooks
    if (stepNumber === 5) {
      updateFinalScreenData();
      playFanfare();
      // Continuous celebration bursts
      createConfettiBurst(80);
      setTimeout(() => createConfettiBurst(50), 350);
      setTimeout(() => createConfettiBurst(40), 700);
    }
  }

  // Allow clicking progress dots
  stepDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetStep = parseInt(dot.getAttribute('data-step'), 10);
      playPop();
      goToStep(targetStep);
    });
  });

  // ------------------------------------------------------------------------
  // STEP 1: "Нет" Button Dodge & Meme Mechanics
  // ------------------------------------------------------------------------
  const dodgePhrases = [
    'Ты уверена? 🥺',
    'Подумай ещё разок! 🐶',
    'Кнопка сломалась! 💔',
    'А если за шоколадку? 🍫',
    'У тебя нет шансов сказать «Нет» 😉',
    'Ну пожалуйста! 🥺👉👈',
    'Только ДА! 💖',
    'Я всё равно тебя утащу! 🚀',
    'Сдавайся, нажимай «Да»! 🥰'
  ];

  function showToast(msg, targetToast = noToast) {
    targetToast.textContent = msg;
    targetToast.classList.remove('show');
    // Force reflow
    void targetToast.offsetWidth;
    targetToast.classList.add('show');
    clearTimeout(targetToast._timer);
    targetToast._timer = setTimeout(() => {
      targetToast.classList.remove('show');
    }, 2800);
  }

  function dodgeNoButton(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    state.noDodgeCount++;
    playBoing();

    // Scale up "Да" button
    state.yesScale = Math.min(state.yesScale + 0.14, 2.2);
    btnYes1.style.transform = `scale(${state.yesScale})`;
    btnYes1.style.zIndex = '10';

    // Pick playful phrase
    const phrase = dodgePhrases[(state.noDodgeCount - 1) % dodgePhrases.length];
    btnNo1Text.textContent = phrase;
    showToast(phrase);

    // Calculate safe bounding movement inside container
    const containerRect = step1ButtonsArea.getBoundingClientRect();
    const btnRect = btnNo1.getBoundingClientRect();

    // Max translation deltas
    const maxDeltaX = 90;
    const maxDeltaY = 60;

    let deltaX = (Math.random() - 0.5) * 2 * maxDeltaX;
    let deltaY = (Math.random() - 0.5) * 2 * maxDeltaY;

    // Prevent drifting too far off
    if (Math.abs(deltaX) < 30) deltaX = deltaX >= 0 ? 50 : -50;
    if (Math.abs(deltaY) < 25) deltaY = deltaY >= 0 ? 40 : -40;

    btnNo1.style.transition = 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)';
    btnNo1.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.92)`;
  }

  btnNo1.addEventListener('mouseenter', dodgeNoButton);
  btnNo1.addEventListener('touchstart', dodgeNoButton, { passive: false });
  btnNo1.addEventListener('click', dodgeNoButton);

  btnYes1.addEventListener('click', (e) => {
    playLoveChime();
    const rect = btnYes1.getBoundingClientRect();
    createConfettiBurst(50, rect.left + rect.width / 2, rect.top + rect.height / 2);
    setTimeout(() => goToStep(2), 320);
  });

  // ------------------------------------------------------------------------
  // STEP 2: "Да Да дА"
  // ------------------------------------------------------------------------
  btnYes2.addEventListener('click', (e) => {
    playLoveChime();
    const rect = btnYes2.getBoundingClientRect();
    createConfettiBurst(60, rect.left + rect.width / 2, rect.top + rect.height / 2);
    setTimeout(() => goToStep(3), 320);
  });

  // ------------------------------------------------------------------------
  // STEP 3: Date & Time Picker
  // ------------------------------------------------------------------------
  btnStep3Next.addEventListener('click', () => {
    playPop();

    if (dateInput.value) {
      state.date = dateInput.value;
    }
    if (timeInput.value) {
      state.time = timeInput.value;
    }

    const rect = btnStep3Next.getBoundingClientRect();
    createConfettiBurst(40, rect.left + rect.width / 2, rect.top + rect.height / 2);
    goToStep(4);
  });

  // ------------------------------------------------------------------------
  // STEP 4: "чем займёмся?" 2x2 Interactive Cards
  // ------------------------------------------------------------------------
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      const choice = card.getAttribute('data-choice');

      if (choice === 'correct') {
        // "Вот это" clicked!
        playLoveChime();
        card.style.transform = 'scale(1.1)';
        card.style.borderColor = '#ff4071';
        const rect = card.getBoundingClientRect();
        createConfettiBurst(50, rect.left + rect.width / 2, rect.top + rect.height / 2);

        setTimeout(() => {
          goToStep(5);
        }, 400);
      } else {
        // Wrong options clicked: playful shake + message
        playBoing();
        card.classList.remove('shake');
        void card.offsetWidth; // force reflow
        card.classList.add('shake');

        const customMsg = card.getAttribute('data-msg') || 'Я же сказал «Вот это» надо! 😉';
        showToast(customMsg, step4Toast);

        setTimeout(() => {
          card.classList.remove('shake');
        }, 600);
      }
    });
  });

  // ------------------------------------------------------------------------
  // STEP 5: Final Screen Data & Integrations
  // ------------------------------------------------------------------------
  const russianMonths = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  function formatRussianDate(dateStr) {
    if (!dateStr) return '15 ноября 2026 г.';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const monthIndex = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        return `${day} ${russianMonths[monthIndex]} ${year} г.`;
      }
    } catch (e) {
      console.warn(e);
    }
    return dateStr;
  }

  function updateFinalScreenData() {
    const formattedDate = formatRussianDate(state.date);
    const formattedTime = state.time || '18:00';

    finalVenueTitle.textContent = state.venueTitle;
    finalDateFormatted.textContent = formattedDate;
    finalTimeFormatted.textContent = formattedTime;
    finalNickname.textContent = state.nickname;

    // Telegram link:
    const msgText = encodeURIComponent(
      `Я согласна на свидание! 💖\nБуду готова к ${formattedDate} в ${formattedTime}!`
    );

    if (state.tgUsername) {
      // Direct chat link with user
      const cleanUser = state.tgUsername.replace('@', '').trim();
      btnShareTelegram.href = `https://t.me/${cleanUser}?text=${msgText}`;
    } else {
      // General share link
      btnShareTelegram.href = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${msgText}`;
    }

    // Google Calendar link
    btnAddToCalendar.href = generateCalendarUrl(formattedDate, formattedTime);
  }

  function generateCalendarUrl(dateStrFormatted, timeStr) {
    // Convert YYYY-MM-DD and HH:mm to ISO format YYYYMMDDTHHmmSS
    let startIso = '20261115T180000';
    let endIso = '20261115T210000';

    if (state.date) {
      const cleanDate = state.date.replace(/-/g, '');
      const cleanTime = (state.time || '18:00').replace(':', '') + '00';
      startIso = `${cleanDate}T${cleanTime}`;

      // End time + 3 hours
      const [h, m] = (state.time || '18:00').split(':').map(Number);
      const endH = String((h + 3) % 24).padStart(2, '0');
      const endCleanTime = `${endH}${String(m).padStart(2, '0')}00`;
      endIso = `${cleanDate}T${endCleanTime}`;
    }

    const title = encodeURIComponent(`Свидание ❤️ (${state.venueTitle})`);
    const details = encodeURIComponent(
      `Свидание с любимым человеком! Будь готова к ${timeStr} 💖`
    );

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}`;
  }

  // Restart
  btnRestart.addEventListener('click', () => {
    playPop();
    // Reset "Нет" button
    state.noDodgeCount = 0;
    state.yesScale = 1;
    btnYes1.style.transform = 'scale(1)';
    btnNo1.style.transform = 'translate(0, 0) scale(1)';
    btnNo1Text.textContent = 'Нет';
    goToStep(1);
  });

  // ------------------------------------------------------------------------
  // Audio Mute / Unmute Toggle
  // ------------------------------------------------------------------------
  function updateSoundUI() {
    soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    localStorage.setItem('date_sound', state.soundEnabled);
  }

  soundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    updateSoundUI();
    if (state.soundEnabled) {
      playPop();
    }
  });
  updateSoundUI();

  // ------------------------------------------------------------------------
  // Settings Modal / Customization
  // ------------------------------------------------------------------------
  function openSettings() {
    playPop();
    customVenueInput.value = state.venueTitle;
    customNicknameInput.value = state.nickname;
    customTgUsername.value = state.tgUsername;

    badgeOpts.forEach(b => {
      if (b.getAttribute('data-val') === state.nickname) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    settingsModal.classList.add('open');
  }

  function closeSettings() {
    settingsModal.classList.remove('open');
  }

  settingsToggle.addEventListener('click', openSettings);
  modalCloseBtn.addEventListener('click', closeSettings);

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      closeSettings();
    }
  });

  badgeOpts.forEach(b => {
    b.addEventListener('click', () => {
      playPop();
      badgeOpts.forEach(btn => btn.classList.remove('active'));
      b.classList.add('active');
      customNicknameInput.value = b.getAttribute('data-val');
    });
  });

  btnSaveSettings.addEventListener('click', () => {
    playLoveChime();
    state.venueTitle = customVenueInput.value.trim() || 'ми топаем в театррр';
    state.nickname = customNicknameInput.value.trim() || 'красотка';
    state.tgUsername = customTgUsername.value.trim();

    localStorage.setItem('date_venue', state.venueTitle);
    localStorage.setItem('date_nickname', state.nickname);
    localStorage.setItem('date_tg_user', state.tgUsername);

    updateFinalScreenData();
    closeSettings();
    createConfettiBurst(35);
  });

  // Initial step setup
  goToStep(1);
});
