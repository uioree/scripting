/**
 * Aura Schedule & Homework Tracker
 * Group: МБИ(б)-31 | ТОГУ
 * Student: Денис Федосеенко
 */

// ==========================================
// 1. DATA: University Schedule for МБИ(б)-31
// ==========================================
const SCHEDULE_DATA = [
  // --- ВТОРНИК ---
  {
    id: 'tue-1-num',
    day: 'tue',
    pairNum: 1,
    timeStart: '08:30',
    timeEnd: '10:00',
    subject: 'Анализ хозяйственной деятельности предприятия',
    type: 'practice', // пр
    room: '301л',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'numerator', // Ч
    subgroup: 'all',
    hasEuk: true
  },
  {
    id: 'tue-1-den',
    day: 'tue',
    pairNum: 1,
    timeStart: '08:30',
    timeEnd: '10:00',
    subject: 'Международные экономические организации и региональные объединения',
    type: 'lecture', // лк
    room: '440л',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator', // З
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'tue-2-num',
    day: 'tue',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Организация и техника внешнеторговых операций',
    type: 'lecture', // лк
    room: '434ц',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'numerator', // Ч
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'tue-2-den',
    day: 'tue',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Стратегический менеджмент',
    type: 'lecture', // лк
    room: '434ц',
    teacher: 'Пенегина И. Т.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator', // З
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'tue-3',
    day: 'tue',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Международный менеджмент',
    type: 'lecture', // лк
    room: '434ц',
    teacher: 'Тюленева Т. И.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all', // Каждую неделю
    subgroup: 'all',
    hasEuk: true
  },
  {
    id: 'tue-4-den',
    day: 'tue',
    pairNum: 4,
    timeStart: '13:50',
    timeEnd: '15:20',
    subject: 'Организация и техника внешнеторговых операций',
    type: 'lecture', // лк
    room: '434ц',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator', // З
    subgroup: 'all',
    hasEuk: false
  },

  // --- СРЕДА ---
  {
    id: 'wed-1-num',
    day: 'wed',
    pairNum: 1,
    timeStart: '08:30',
    timeEnd: '10:00',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    type: 'lecture', // лк
    room: '404л',
    teacher: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    week: 'numerator', // Ч
    subgroup: 'all',
    hasEuk: true
  },
  {
    id: 'wed-2-num',
    day: 'wed',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Международные валютно-кредитные отношения',
    type: 'lecture', // лк
    room: '229па',
    teacher: 'Безродных А. Ю.',
    teacherRole: 'Преподаватель',
    week: 'numerator', // Ч
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'wed-2-den',
    day: 'wed',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    type: 'practice', // пр
    room: '359ца',
    teacher: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    week: 'denominator', // З
    subgroup: '1', // 1 подгруппа
    hasEuk: true
  },
  {
    id: 'wed-3',
    day: 'wed',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Международные валютно-кредитные отношения',
    type: 'practice', // пр
    room: '106п',
    teacher: 'Безродных А. Ю.',
    teacherRole: 'Преподаватель',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },

  // --- ЧЕТВЕРГ ---
  {
    id: 'thu-2',
    day: 'thu',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Международный менеджмент',
    type: 'practice', // пр
    room: '323п',
    teacher: 'Тюленева Т. И.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: true
  },
  {
    id: 'thu-3',
    day: 'thu',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Международные экономические организации и региональные объединения',
    type: 'practice', // пр
    room: '301л',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'thu-4',
    day: 'thu',
    pairNum: 4,
    timeStart: '13:50',
    timeEnd: '15:20',
    subject: 'Анализ хозяйственной деятельности предприятия',
    type: 'lecture', // лк
    room: '137л',
    teacher: 'Сигитова М. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: true
  },

  // --- ПЯТНИЦА ---
  {
    id: 'fri-2',
    day: 'fri',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Анализ хозяйственной деятельности предприятия',
    type: 'practice', // пр
    room: '301л',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: true
  },
  {
    id: 'fri-3',
    day: 'fri',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Стратегический менеджмент',
    type: 'practice', // пр
    room: '302л',
    teacher: 'Пенегина И. Т.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'fri-4',
    day: 'fri',
    pairNum: 4,
    timeStart: '13:50',
    timeEnd: '15:20',
    subject: 'Организация и техника внешнеторговых операций',
    type: 'practice', // пр
    room: '329ца',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'fri-5',
    day: 'fri',
    pairNum: 5,
    timeStart: '15:30',
    timeEnd: '17:00',
    subject: 'Организация и техника внешнеторговых операций',
    type: 'practice', // пр
    room: '329ца',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },

  // --- СУББОТА ---
  {
    id: 'sat-2-num',
    day: 'sat',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Экономика стран и регионов: азиатско-тихоокеанский регион',
    type: 'lecture', // лк
    room: '229па',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'numerator', // Ч
    subgroup: 'all',
    hasEuk: false
  },
  {
    id: 'sat-3-num',
    day: 'sat',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    type: 'practice', // пр
    room: '359ца',
    teacher: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    week: 'numerator', // Ч
    subgroup: '2', // 2 подгруппа
    hasEuk: true
  },
  {
    id: 'sat-3-den',
    day: 'sat',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Экономика стран и регионов: азиатско-тихоокеанский регион',
    type: 'practice', // пр
    room: '229па',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator', // З
    subgroup: 'all',
    hasEuk: false
  }
];

const DAYS_META = [
  { key: 'mon', short: 'Пн', full: 'Понедельник', order: 1 },
  { key: 'tue', short: 'Вт', full: 'Вторник', order: 2 },
  { key: 'wed', short: 'Ср', full: 'Среда', order: 3 },
  { key: 'thu', short: 'Чт', full: 'Четверг', order: 4 },
  { key: 'fri', short: 'Пт', full: 'Пятница', order: 5 },
  { key: 'sat', short: 'Сб', full: 'Суббота', order: 6 },
  { key: 'sun', short: 'Вс', full: 'Воскресенье', order: 0 }
];

// Initial default homework so the app is instantly rich with data
const DEFAULT_HOMEWORK = [
  {
    id: 'hw-seed-1',
    subject: 'Стратегический менеджмент',
    day: 'fri',
    text: 'Подготовить SWOT-анализ выбранной компании (до 5 слайдов)',
    dueDate: getRelativeDate(3),
    isCompleted: false,
    isUrgent: true,
    link: '',
    createdAt: new Date().toISOString()
  },
  {
    id: 'hw-seed-2',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    day: 'wed',
    text: 'Выучить vocabulary Unit 4, написать Writing Task 1 (описание графика)',
    dueDate: getRelativeDate(5),
    isCompleted: false,
    isUrgent: false,
    link: 'https://portal.togudv.ru',
    createdAt: new Date().toISOString()
  },
  {
    id: 'hw-seed-3',
    subject: 'Анализ хозяйственной деятельности предприятия',
    day: 'tue',
    text: 'Рассчитать показатели рентабельности по методичке (таблица 2.4)',
    dueDate: getRelativeDate(1),
    isCompleted: true,
    isUrgent: false,
    link: '',
    createdAt: new Date().toISOString()
  }
];

function getRelativeDate(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
class AppState {
  constructor() {
    this.selectedDay = this.getTodayDayKey();
    this.weekMode = localStorage.getItem('aura_schedule_week_mode') || 'auto'; // 'auto' | 'numerator' | 'denominator' | 'all'
    this.subgroupFilter = localStorage.getItem('aura_schedule_subgroup') || 'all'; // 'all' | '1' | '2'
    this.theme = localStorage.getItem('aura_schedule_theme') || 'dark';
    this.currentView = 'view-schedule';
    this.hwFilter = 'active'; // 'active' | 'completed' | 'all'
    this.homework = this.loadHomework();
  }

  loadHomework() {
    try {
      const stored = localStorage.getItem('aura_schedule_homework');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load homework from localStorage:', e);
    }
    return DEFAULT_HOMEWORK;
  }

  saveHomework() {
    try {
      localStorage.setItem('aura_schedule_homework', JSON.stringify(this.homework));
    } catch (e) {
      console.error('Failed to save homework:', e);
    }
  }

  getTodayDayKey() {
    const jsDay = new Date().getDay(); // 0 is Sun, 1 is Mon, etc.
    const map = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
    return map[jsDay] || 'tue';
  }

  // Determine current semester week (Numerator vs Denominator)
  getCalculatedCurrentWeek() {
    const now = new Date();
    // Academic semester start: roughly September 1st of current academic year
    const startYear = (now.getMonth() >= 7) ? now.getFullYear() : (now.getFullYear() - 1);
    const semesterStart = new Date(startYear, 8, 1); // 1 Sept
    // Find first Monday of semester
    const firstMonday = new Date(semesterStart);
    const diffDays = Math.floor((now - firstMonday) / (1000 * 60 * 60 * 24));
    const weekNumber = Math.max(1, Math.floor(diffDays / 7) + 1);
    // Odd week = Numerator (Ч), Even week = Denominator (З)
    return (weekNumber % 2 !== 0) ? 'numerator' : 'denominator';
  }

  getActiveWeekType() {
    if (this.weekMode === 'auto') {
      return this.getCalculatedCurrentWeek();
    }
    return this.weekMode;
  }
}

const state = new AppState();

// ==========================================
// 3. UI CONTROLLER & RENDERING
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initFilters();
  initDayTabs();
  initHomeworkModal();
  initSearch();
  initSettings();
  renderApp();

  // Periodic ticker for current pair and clock
  setInterval(updateLiveTicker, 30000);
  updateLiveTicker();

  // Register service worker if available
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

// --- Theme handling ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('aura_schedule_theme', state.theme);
  });
}

// --- Navigation ---
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-item');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.target;
      if (!targetView) return;

      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      const targetPanel = document.getElementById(targetView);
      if (targetPanel) {
        targetPanel.classList.add('active');
        state.currentView = targetView;
      }

      if (targetView === 'view-homework') {
        renderAllHomeworkView();
      } else if (targetView === 'view-search') {
        document.getElementById('global-search-input').focus();
      }
    });
  });
}

// --- Filters (Week & Subgroup) ---
function initFilters() {
  const weekSelector = document.getElementById('week-selector');
  const autoWeekName = document.getElementById('auto-week-name');
  
  // Update text inside auto badge
  const autoType = state.getCalculatedCurrentWeek();
  autoWeekName.textContent = autoType === 'numerator' ? 'Ч' : 'З';

  // Set active week button
  weekSelector.querySelectorAll('.pill-btn').forEach(btn => {
    if (btn.dataset.week === state.weekMode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      weekSelector.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.weekMode = btn.dataset.week;
      localStorage.setItem('aura_schedule_week_mode', state.weekMode);
      renderScheduleCards();
      updateLiveTicker();
    });
  });

  // Subgroup selector
  const subgroupSelector = document.getElementById('subgroup-selector');
  subgroupSelector.querySelectorAll('.sub-btn').forEach(btn => {
    if (btn.dataset.sub === state.subgroupFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      subgroupSelector.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.subgroupFilter = btn.dataset.sub;
      localStorage.setItem('aura_schedule_subgroup', state.subgroupFilter);
      renderScheduleCards();
    });
  });

  // Homework view filter buttons
  document.querySelectorAll('.hw-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hw-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.hwFilter = btn.dataset.hwFilter;
      renderAllHomeworkView();
    });
  });
}

// --- Day Tabs (Horizontal swipe/scroll) ---
function initDayTabs() {
  const tabsContainer = document.getElementById('day-tabs');
  tabsContainer.innerHTML = '';

  const todayKey = state.getTodayDayKey();
  const todayDate = new Date();

  DAYS_META.forEach(day => {
    const tab = document.createElement('button');
    tab.className = 'day-tab';
    tab.dataset.day = day.key;

    if (day.key === todayKey) {
      tab.classList.add('today');
    }
    if (day.key === state.selectedDay) {
      tab.classList.add('active');
    }

    // Calculate approximate date for tab
    const dayDiff = (day.order === 0 ? 7 : day.order) - (todayDate.getDay() === 0 ? 7 : todayDate.getDay());
    const tabDate = new Date(todayDate);
    tabDate.setDate(todayDate.getDate() + dayDiff);
    const dayNumber = tabDate.getDate();

    // Check if this day has homework
    const hasHw = state.homework.some(hw => hw.day === day.key && !hw.isCompleted);

    tab.innerHTML = `
      <span class="day-name">${day.short}</span>
      <span class="day-num">${dayNumber}</span>
      ${hasHw ? '<span class="day-tab-hw-dot"></span>' : ''}
    `;

    tab.addEventListener('click', () => {
      document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.selectedDay = day.key;
      renderScheduleCards();
      scrollTabIntoView(tab);
    });

    tabsContainer.appendChild(tab);
  });

  // Quick HW button in schedule view header
  document.getElementById('add-quick-hw-btn').addEventListener('click', () => {
    openHomeworkModal({ day: state.selectedDay });
  });

  document.getElementById('new-hw-floating-btn').addEventListener('click', () => {
    openHomeworkModal({ day: state.selectedDay });
  });
}

function scrollTabIntoView(tab) {
  tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// --- Main App Render ---
function renderApp() {
  renderScheduleCards();
  updateHomeworkBadges();
  populateSubjectDropdown();
}

// --- Render Schedule Cards for Selected Day ---
function renderScheduleCards() {
  const container = document.getElementById('schedule-cards');
  const emptyState = document.getElementById('empty-day-state');
  const dayHeading = document.getElementById('current-day-heading');
  const daySubheading = document.getElementById('current-day-subheading');

  const currentDayMeta = DAYS_META.find(d => d.key === state.selectedDay);
  dayHeading.textContent = currentDayMeta ? currentDayMeta.full : 'Расписание';

  // Filter pairs for day
  const activeWeek = state.getActiveWeekType();
  const dayPairs = SCHEDULE_DATA.filter(pair => {
    if (pair.day !== state.selectedDay) return false;

    // Week filter
    if (activeWeek !== 'all') {
      if (pair.week !== 'all' && pair.week !== activeWeek) {
        return false;
      }
    }

    // Subgroup filter
    if (state.subgroupFilter !== 'all') {
      if (pair.subgroup !== 'all' && pair.subgroup !== state.subgroupFilter) {
        return false;
      }
    }

    return true;
  });

  // Sort by pairNum
  dayPairs.sort((a, b) => a.pairNum - b.pairNum);

  daySubheading.textContent = dayPairs.length > 0
    ? `${dayPairs.length} ${getNoun(dayPairs.length, 'пара', 'пары', 'пар')}`
    : 'Нет занятий в расписании';

  container.innerHTML = '';

  if (dayPairs.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  const now = new Date();
  const nowHours = now.getHours();
  const nowMinutes = now.getMinutes();
  const nowTimeVal = nowHours * 60 + nowMinutes;
  const isToday = (state.selectedDay === state.getTodayDayKey());

  dayPairs.forEach(pair => {
    const card = document.createElement('article');
    card.className = 'pair-card';

    // Check if this pair is currently active
    const [startH, startM] = pair.timeStart.split(':').map(Number);
    const [endH, endM] = pair.timeEnd.split(':').map(Number);
    const startTimeVal = startH * 60 + startM;
    const endTimeVal = endH * 60 + endM;

    const isCurrent = isToday && (nowTimeVal >= startTimeVal && nowTimeVal <= endTimeVal);
    if (isCurrent) {
      card.classList.add('current-pair');
    }

    // Badges
    const typeBadge = pair.type === 'lecture'
      ? '<span class="badge badge-lecture">Лекция</span>'
      : '<span class="badge badge-practice">Практика</span>';

    let weekBadge = '';
    if (pair.week === 'numerator') {
      weekBadge = '<span class="badge badge-num">Числитель</span>';
    } else if (pair.week === 'denominator') {
      weekBadge = '<span class="badge badge-den">Знаменатель</span>';
    }

    let subgroupBadge = '';
    if (pair.subgroup !== 'all') {
      subgroupBadge = `<span class="badge badge-subgroup">${pair.subgroup} подгруппа</span>`;
    }

    // Pair Homework items
    const pairHomework = state.homework.filter(hw => hw.subject === pair.subject);

    let hwHtml = '';
    if (pairHomework.length > 0) {
      const itemsHtml = pairHomework.map(hw => `
        <div class="card-hw-item ${hw.isCompleted ? 'completed' : ''}" data-hw-id="${hw.id}">
          <input type="checkbox" class="hw-checkbox" ${hw.isCompleted ? 'checked' : ''} aria-label="Отметить сделанным">
          <div class="card-hw-body" title="Нажмите, чтобы редактировать">
            <div class="card-hw-text">${escapeHtml(hw.text)}</div>
            <div class="card-hw-meta">
              ${hw.dueDate ? `<span>📅 до ${formatDate(hw.dueDate)}</span>` : ''}
              ${hw.isUrgent ? `<span class="hw-urgent-tag">🔥 Срочно</span>` : ''}
            </div>
          </div>
          <button class="card-hw-delete-btn" aria-label="Удалить" title="Удалить задание">✕</button>
        </div>
      `).join('');

      hwHtml = `
        <div class="pair-homework-section">
          <div class="hw-section-header">
            <span class="hw-section-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              Задания (${pairHomework.length})
            </span>
            <button class="btn-card-add-hw" data-subject="${escapeHtml(pair.subject)}" data-day="${pair.day}">
              + Добавить
            </button>
          </div>
          <div class="card-hw-items">${itemsHtml}</div>
        </div>
      `;
    } else {
      hwHtml = `
        <div class="pair-homework-section">
          <div class="hw-section-header">
            <span class="hw-section-label">Домашнее задание</span>
            <button class="btn-card-add-hw" data-subject="${escapeHtml(pair.subject)}" data-day="${pair.day}">
              + Записать ДЗ
            </button>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="pair-top-row">
        <div class="pair-time-block">
          <span class="pair-num-badge">${pair.pairNum}</span>
          <span class="pair-time">${pair.timeStart} – ${pair.timeEnd}</span>
        </div>
        <div class="pair-badges">
          ${typeBadge}
          ${weekBadge}
          ${subgroupBadge}
        </div>
      </div>

      <h3 class="pair-title">${escapeHtml(pair.subject)}</h3>

      <div class="pair-meta">
        <span class="pair-location" title="Аудитория">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${pair.room}
        </span>
        <span class="pair-teacher" title="${pair.teacherRole || 'Преподаватель'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          ${pair.teacher}
        </span>
      </div>

      ${hwHtml}
    `;

    // Bind event handlers for homework within this card
    attachHomeworkCardEvents(card);

    container.appendChild(card);
  });
}

function attachHomeworkCardEvents(card) {
  // Add HW button
  const addBtn = card.querySelector('.btn-card-add-hw');
  if (addBtn) {
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openHomeworkModal({
        subject: addBtn.dataset.subject,
        day: addBtn.dataset.day
      });
    });
  }

  // Checkbox toggle
  card.querySelectorAll('.hw-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      e.stopPropagation();
      const itemEl = chk.closest('.card-hw-item');
      const hwId = itemEl.dataset.hwId;
      toggleHomeworkStatus(hwId, chk.checked);
    });
  });

  // Edit HW click
  card.querySelectorAll('.card-hw-body').forEach(body => {
    body.addEventListener('click', () => {
      const itemEl = body.closest('.card-hw-item');
      const hwId = itemEl.dataset.hwId;
      const hw = state.homework.find(h => h.id === hwId);
      if (hw) {
        openHomeworkModal(hw);
      }
    });
  });

  // Delete HW click
  card.querySelectorAll('.card-hw-delete-btn').forEach(delBtn => {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemEl = delBtn.closest('.card-hw-item');
      const hwId = itemEl.dataset.hwId;
      deleteHomework(hwId);
    });
  });
}

// --- Toggle Homework Status ---
function toggleHomeworkStatus(hwId, isCompleted) {
  const hw = state.homework.find(h => h.id === hwId);
  if (hw) {
    hw.isCompleted = isCompleted;
    state.saveHomework();
    updateHomeworkBadges();
    initDayTabs(); // refresh dots on day tabs
    if (state.currentView === 'view-schedule') {
      renderScheduleCards();
    } else if (state.currentView === 'view-homework') {
      renderAllHomeworkView();
    }
    showToast(isCompleted ? 'Задание выполнено! 🎉' : 'Задание возвращено в активные');
  }
}

// --- Delete Homework ---
function deleteHomework(hwId) {
  state.homework = state.homework.filter(h => h.id !== hwId);
  state.saveHomework();
  updateHomeworkBadges();
  initDayTabs();
  if (state.currentView === 'view-schedule') {
    renderScheduleCards();
  } else if (state.currentView === 'view-homework') {
    renderAllHomeworkView();
  }
  showToast('Задание удалено');
}

// --- Render View 2: All Homework View ---
function renderAllHomeworkView() {
  const listContainer = document.getElementById('all-homework-list');
  const activeCountEl = document.getElementById('hw-active-count');
  const doneCountEl = document.getElementById('hw-done-count');
  const totalCountEl = document.getElementById('hw-total-count');

  const activeTasks = state.homework.filter(h => !h.isCompleted);
  const doneTasks = state.homework.filter(h => h.isCompleted);

  activeCountEl.textContent = activeTasks.length;
  doneCountEl.textContent = doneTasks.length;
  totalCountEl.textContent = state.homework.length;

  let displayTasks = [];
  if (state.hwFilter === 'active') {
    displayTasks = activeTasks;
  } else if (state.hwFilter === 'completed') {
    displayTasks = doneTasks;
  } else {
    displayTasks = state.homework;
  }

  // Sort: urgent first, then by dueDate, then by creation
  displayTasks.sort((a, b) => {
    if (a.isCompleted !== b.isCompleted) return a.isCompleted ? 1 : -1;
    if (a.isUrgent !== b.isUrgent) return a.isUrgent ? -1 : 1;
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
    return 0;
  });

  listContainer.innerHTML = '';

  if (displayTasks.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">✨</div>
        <h3>Нет заданий</h3>
        <p>В этом списке пока нет домашних заданий. Добавьте новое, чтобы ничего не забыть!</p>
      </div>
    `;
    return;
  }

  displayTasks.forEach(hw => {
    const card = document.createElement('div');
    card.className = `hw-full-card ${hw.isCompleted ? 'completed' : ''}`;
    card.dataset.hwId = hw.id;

    const dayMeta = DAYS_META.find(d => d.key === hw.day);
    const dayName = dayMeta ? dayMeta.short : '';

    card.innerHTML = `
      <input type="checkbox" class="hw-checkbox" ${hw.isCompleted ? 'checked' : ''} aria-label="Отметить">
      <div class="hw-full-content" style="cursor: pointer;">
        <span class="hw-full-subject">${escapeHtml(hw.subject)}</span>
        <div class="hw-full-text">${escapeHtml(hw.text)}</div>
        <div class="hw-full-meta">
          ${dayName ? `<span>День: ${dayName}</span>` : ''}
          ${hw.dueDate ? `<span>📅 Срок: ${formatDate(hw.dueDate)}</span>` : ''}
          ${hw.isUrgent ? `<span class="hw-urgent-tag">🔥 Срочно</span>` : ''}
          ${hw.link ? `<a href="${escapeHtml(hw.link)}" target="_blank" rel="noopener" class="hw-full-link">Материалы ↗</a>` : ''}
        </div>
      </div>
      <button class="card-hw-delete-btn" aria-label="Удалить" title="Удалить">✕</button>
    `;

    // Checkbox toggle
    card.querySelector('.hw-checkbox').addEventListener('change', (e) => {
      e.stopPropagation();
      toggleHomeworkStatus(hw.id, e.target.checked);
    });

    // Edit on content click
    card.querySelector('.hw-full-content').addEventListener('click', () => {
      openHomeworkModal(hw);
    });

    // Delete
    card.querySelector('.card-hw-delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteHomework(hw.id);
    });

    listContainer.appendChild(card);
  });
}

// --- Homework Modal / Bottom Sheet ---
function initHomeworkModal() {
  const backdrop = document.getElementById('hw-modal-backdrop');
  const closeBtn = document.getElementById('hw-modal-close');
  const form = document.getElementById('hw-form');
  const deleteBtn = document.getElementById('hw-delete-btn');

  // Close handlers
  closeBtn.addEventListener('click', closeHomeworkModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeHomeworkModal();
  });

  // Preset chips (Quick deadlines)
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const preset = chip.dataset.preset;
      const dateInput = document.getElementById('hw-due-date');

      if (preset === 'tomorrow') {
        dateInput.value = getRelativeDate(1);
      } else if (preset === 'next-pair') {
        dateInput.value = getRelativeDate(2);
      } else if (preset === 'next-week') {
        dateInput.value = getRelativeDate(7);
      }
    });
  });

  // Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('hw-edit-id').value;
    const subject = document.getElementById('hw-subject-select').value;
    const text = document.getElementById('hw-text-input').value.trim();
    const dueDate = document.getElementById('hw-due-date').value;
    const isUrgent = document.getElementById('hw-is-urgent').checked;
    const link = document.getElementById('hw-link-input').value.trim();
    const day = document.getElementById('hw-target-day').value || state.selectedDay;

    if (!text) return;

    if (editId) {
      // Update existing
      const existing = state.homework.find(h => h.id === editId);
      if (existing) {
        existing.subject = subject;
        existing.text = text;
        existing.dueDate = dueDate;
        existing.isUrgent = isUrgent;
        existing.link = link;
        existing.day = day;
      }
      showToast('Задание обновлено');
    } else {
      // Create new
      const newHw = {
        id: 'hw-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        subject,
        day,
        text,
        dueDate,
        isCompleted: false,
        isUrgent,
        link,
        createdAt: new Date().toISOString()
      };
      state.homework.unshift(newHw);
      showToast('Задание добавлено!');
    }

    state.saveHomework();
    closeHomeworkModal();
    updateHomeworkBadges();
    initDayTabs();
    renderScheduleCards();
    if (state.currentView === 'view-homework') {
      renderAllHomeworkView();
    }
  });

  // Delete button inside modal
  deleteBtn.addEventListener('click', () => {
    const editId = document.getElementById('hw-edit-id').value;
    if (editId) {
      deleteHomework(editId);
      closeHomeworkModal();
    }
  });
}

function openHomeworkModal(presetData = {}) {
  const backdrop = document.getElementById('hw-modal-backdrop');
  const modalTitle = document.getElementById('hw-modal-title');
  const editIdInput = document.getElementById('hw-edit-id');
  const targetDayInput = document.getElementById('hw-target-day');
  const subjectSelect = document.getElementById('hw-subject-select');
  const textInput = document.getElementById('hw-text-input');
  const dueDateInput = document.getElementById('hw-due-date');
  const urgentCheckbox = document.getElementById('hw-is-urgent');
  const linkInput = document.getElementById('hw-link-input');
  const deleteBtn = document.getElementById('hw-delete-btn');

  // Populate subject list if not done
  populateSubjectDropdown();

  if (presetData.id) {
    // EDIT MODE
    modalTitle.textContent = 'Редактировать домашку';
    editIdInput.value = presetData.id;
    targetDayInput.value = presetData.day || state.selectedDay;
    subjectSelect.value = presetData.subject;
    textInput.value = presetData.text;
    dueDateInput.value = presetData.dueDate || '';
    urgentCheckbox.checked = !!presetData.isUrgent;
    linkInput.value = presetData.link || '';
    deleteBtn.classList.remove('hidden');
  } else {
    // CREATE MODE
    modalTitle.textContent = 'Записать домашку';
    editIdInput.value = '';
    targetDayInput.value = presetData.day || state.selectedDay;
    if (presetData.subject) {
      subjectSelect.value = presetData.subject;
    }
    textInput.value = '';
    dueDateInput.value = getRelativeDate(2); // default: in 2 days
    urgentCheckbox.checked = false;
    linkInput.value = '';
    deleteBtn.classList.add('hidden');
  }

  // Clear active presets
  document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));

  backdrop.classList.add('open');
  setTimeout(() => textInput.focus(), 200);
}

function closeHomeworkModal() {
  document.getElementById('hw-modal-backdrop').classList.remove('open');
}

// Populate Subject Dropdown from Schedule Data
function populateSubjectDropdown() {
  const select = document.getElementById('hw-subject-select');
  if (select.children.length > 0) return; // already populated

  const subjects = [...new Set(SCHEDULE_DATA.map(p => p.subject))].sort();
  select.innerHTML = subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
}

// Update badges on bottom navigation
function updateHomeworkBadges() {
  const badgeTotal = document.getElementById('badge-hw-total');
  const activeCount = state.homework.filter(h => !h.isCompleted).length;
  if (activeCount > 0) {
    badgeTotal.textContent = activeCount;
    badgeTotal.classList.remove('hidden');
  } else {
    badgeTotal.classList.add('hidden');
  }
}

// --- Dynamic Island Live Ticker ---
function updateLiveTicker() {
  const banner = document.getElementById('live-banner');
  const statusLabel = document.getElementById('live-status-label');
  const pairTitle = document.getElementById('live-pair-title');
  const timeLeft = document.getElementById('live-time-left');

  const todayKey = state.getTodayDayKey();
  const now = new Date();
  const nowVal = now.getHours() * 60 + nowMinutes(now);

  const activeWeek = state.getActiveWeekType();
  const todayPairs = SCHEDULE_DATA.filter(p => {
    if (p.day !== todayKey) return false;
    if (activeWeek !== 'all' && p.week !== 'all' && p.week !== activeWeek) return false;
    if (state.subgroupFilter !== 'all' && p.subgroup !== 'all' && p.subgroup !== state.subgroupFilter) return false;
    return true;
  }).sort((a, b) => a.pairNum - b.pairNum);

  let currentActive = null;
  let nextUpcoming = null;

  for (const pair of todayPairs) {
    const [sh, sm] = pair.timeStart.split(':').map(Number);
    const [eh, em] = pair.timeEnd.split(':').map(Number);
    const startVal = sh * 60 + sm;
    const endVal = eh * 60 + em;

    if (nowVal >= startVal && nowVal <= endVal) {
      currentActive = { pair, remainingMins: endVal - nowVal };
      break;
    } else if (nowVal < startVal && !nextUpcoming) {
      nextUpcoming = { pair, startsInMins: startVal - nowVal };
    }
  }

  if (currentActive) {
    banner.classList.remove('hidden');
    statusLabel.textContent = `СЕЙЧАС ИДЁТ • ${currentActive.pair.pairNum} ПАРА`;
    pairTitle.textContent = `${currentActive.pair.subject} (${currentActive.pair.room})`;
    timeLeft.textContent = `Осталось ${currentActive.remainingMins} мин`;
  } else if (nextUpcoming && nextUpcoming.startsInMins <= 60) {
    banner.classList.remove('hidden');
    statusLabel.textContent = `СЛЕДУЮЩАЯ ПАРА ЧЕРЕЗ ${nextUpcoming.startsInMins} МИН`;
    pairTitle.textContent = `${nextUpcoming.pair.subject} (${nextUpcoming.pair.room})`;
    timeLeft.textContent = `${nextUpcoming.pair.timeStart}`;
  } else {
    banner.classList.add('hidden');
  }
}

function nowMinutes(d) {
  return d.getMinutes();
}

// --- Global Search ---
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const resultsContainer = document.getElementById('search-results');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    clearBtn.classList.toggle('hidden', query.length === 0);

    if (!query) {
      renderSearchSuggestions(resultsContainer);
      return;
    }

    renderSearchResults(query, resultsContainer);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    renderSearchSuggestions(resultsContainer);
    searchInput.focus();
  });

  renderSearchSuggestions(resultsContainer);
}

function renderSearchSuggestions(container) {
  const uniqueSubjects = [...new Set(SCHEDULE_DATA.map(p => p.subject))];
  const uniqueTeachers = [...new Set(SCHEDULE_DATA.map(p => `${p.teacher} (${p.subject})`))];

  container.innerHTML = `
    <div class="settings-card">
      <h3 class="card-subtitle">Все предметы группы МБИ(б)-31</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${uniqueSubjects.map(s => `
          <div style="font-size: 13.5px; padding: 6px 0; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">${escapeHtml(s)}</span>
            <button class="quick-add-btn" style="padding: 2px 8px; font-size: 11px;" onclick="openHomeworkModal({ subject: '${escapeHtml(s)}' })">+ ДЗ</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSearchResults(query, container) {
  // Search in schedule
  const matchedPairs = SCHEDULE_DATA.filter(p => 
    p.subject.toLowerCase().includes(query) ||
    p.teacher.toLowerCase().includes(query) ||
    p.room.toLowerCase().includes(query)
  );

  // Search in homework
  const matchedHw = state.homework.filter(h =>
    h.text.toLowerCase().includes(query) ||
    h.subject.toLowerCase().includes(query)
  );

  container.innerHTML = '';

  if (matchedPairs.length === 0 && matchedHw.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Ничего не найдено</h3>
        <p>По запросу «${escapeHtml(query)}» ничего не найдено. Проверьте правильность написания.</p>
      </div>
    `;
    return;
  }

  if (matchedHw.length > 0) {
    const hwHtml = matchedHw.map(hw => `
      <div class="hw-full-card ${hw.isCompleted ? 'completed' : ''}" style="margin-bottom: 8px;">
        <input type="checkbox" class="hw-checkbox" ${hw.isCompleted ? 'checked' : ''} onchange="toggleHomeworkStatus('${hw.id}', this.checked)">
        <div class="hw-full-content" onclick="openHomeworkModal(state.homework.find(h => h.id === '${hw.id}'))" style="cursor: pointer;">
          <span class="hw-full-subject">${escapeHtml(hw.subject)}</span>
          <div class="hw-full-text">${escapeHtml(hw.text)}</div>
        </div>
      </div>
    `).join('');

    container.innerHTML += `
      <div>
        <h3 class="card-subtitle mb-3">Найденные домашние задания (${matchedHw.length})</h3>
        ${hwHtml}
      </div>
    `;
  }

  if (matchedPairs.length > 0) {
    const pairsHtml = matchedPairs.map(p => {
      const dayMeta = DAYS_META.find(d => d.key === p.day);
      return `
        <div class="pair-card" style="margin-bottom: 8px;">
          <div class="pair-top-row">
            <span class="pair-time">${dayMeta ? dayMeta.full : ''} • ${p.pairNum} пара (${p.timeStart} – ${p.timeEnd})</span>
            <span class="badge ${p.type === 'lecture' ? 'badge-lecture' : 'badge-practice'}">
              ${p.type === 'lecture' ? 'Лекция' : 'Практика'}
            </span>
          </div>
          <h4 class="pair-title">${escapeHtml(p.subject)}</h4>
          <div class="pair-meta">
            <span class="pair-location">Ауд. ${p.room}</span>
            <span class="pair-teacher">${p.teacher}</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML += `
      <div style="margin-top: 12px;">
        <h3 class="card-subtitle mb-3">В расписании (${matchedPairs.length})</h3>
        ${pairsHtml}
      </div>
    `;
  }
}

// --- Settings & Backup ---
function initSettings() {
  const subgroupSelect = document.getElementById('setting-default-subgroup');
  subgroupSelect.value = state.subgroupFilter;

  subgroupSelect.addEventListener('change', () => {
    state.subgroupFilter = subgroupSelect.value;
    localStorage.setItem('aura_schedule_subgroup', state.subgroupFilter);
    // sync with header selector
    const subgroupSelector = document.getElementById('subgroup-selector');
    subgroupSelector.querySelectorAll('.sub-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sub === state.subgroupFilter);
    });
    renderScheduleCards();
    showToast('Настройка подгруппы сохранена');
  });

  // Export JSON
  document.getElementById('export-backup-btn').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.homework, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `mbi31_homework_backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchorElem.click();
    showToast('Резервная копия скачана!');
  });

  // Import JSON
  const importInput = document.getElementById('import-backup-file');
  importInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          state.homework = imported;
          state.saveHomework();
          renderApp();
          showToast('Данные успешно импортированы!');
        } else {
          alert('Некорректный формат файла бэкапа');
        }
      } catch (err) {
        alert('Ошибка при чтении файла');
      }
    };
    reader.readAsText(file);
  });

  // Reset to default
  document.getElementById('reset-data-btn').addEventListener('click', () => {
    if (confirm('Сбросить все домашние задания к начальным примерам?')) {
      state.homework = [...DEFAULT_HOMEWORK];
      state.saveHomework();
      renderApp();
      showToast('Домашние задания сброшены к начальным');
    }
  });
}

// --- Toast Notification ---
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 200);
  }, 2600);
}

// --- Utilities ---
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [y, m, d] = dateStr.split('-');
    return `${d}.${m}`;
  } catch (e) {
    return dateStr;
  }
}

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) return five;
  n %= 10;
  if (n === 1) return one;
  if (n >= 2 && n <= 4) return two;
  return five;
}
