/**
 * Aura Schedule & Homework Tracker
 * Group: МБИ(б)-31 | ТОГУ
 * Student: Денис Федосеенко
 * Features: Multi-week browsing (Numerator/Denominator) & Date-specific Homework
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

const MONTH_NAMES_GEN = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

const MONTH_NAMES_SHORT = [
  'янв', 'фев', 'мар', 'апр', 'мая', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

// Anchor date: Monday 21.09.2026 is week "denominator" (Знаменатель)
const ANCHOR_MONDAY = new Date(2026, 8, 21); // Month 8 is September

// Helper: format YYYY-MM-DD
function toDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseDateStr(str) {
  if (!str) return new Date();
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// Helper: Get Monday of a given date
function getMondayOfDate(d) {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = date.getDay(); // 0 is Sunday, 1 is Monday...
  const diff = (day === 0 ? -6 : 1 - day);
  date.setDate(date.getDate() + diff);
  return date;
}

// Calculate week type (Знаменатель or Числитель) based on anchor
function getWeekTypeForMonday(mondayDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const m1 = new Date(ANCHOR_MONDAY.getFullYear(), ANCHOR_MONDAY.getMonth(), ANCHOR_MONDAY.getDate(), 12);
  const m2 = new Date(mondayDate.getFullYear(), mondayDate.getMonth(), mondayDate.getDate(), 12);
  const diffDays = Math.round((m2 - m1) / oneDay);
  const diffWeeks = Math.round(diffDays / 7);

  // Even week difference => same as anchor (denominator)
  // Odd week difference => opposite (numerator)
  return (Math.abs(diffWeeks % 2) === 0) ? 'denominator' : 'numerator';
}

// Initial seed homework
const DEFAULT_HOMEWORK = [
  {
    id: 'hw-seed-1',
    subject: 'Стратегический менеджмент',
    date: '2026-09-25',
    dayKey: 'fri',
    text: 'Подготовить SWOT-анализ выбранной компании (до 5 слайдов)',
    dueDate: '2026-09-25',
    isCompleted: false,
    isUrgent: true,
    link: '',
    createdAt: new Date().toISOString()
  },
  {
    id: 'hw-seed-2',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    date: '2026-09-30',
    dayKey: 'wed',
    text: 'Выучить vocabulary Unit 4, написать Writing Task 1 (описание графика)',
    dueDate: '2026-09-30',
    isCompleted: false,
    isUrgent: false,
    link: 'https://portal.togudv.ru',
    createdAt: new Date().toISOString()
  },
  {
    id: 'hw-seed-3',
    subject: 'Анализ хозяйственной деятельности предприятия',
    date: '2026-09-22',
    dayKey: 'tue',
    text: 'Рассчитать показатели рентабельности по методичке (таблица 2.4)',
    dueDate: '2026-09-22',
    isCompleted: true,
    isUrgent: false,
    link: '',
    createdAt: new Date().toISOString()
  }
];

// Seed BRS subjects & grades for semester
const DEFAULT_GRADES = [
  {
    id: 'grade-1',
    subject: 'Стратегический менеджмент',
    teacher: 'Пенегина И. Т.',
    controlType: 'Экзамен',
    points: 88,
    notes: 'Реферат сдан (+15б), кейс 1 защищен (+25б)'
  },
  {
    id: 'grade-2',
    subject: 'Анализ хозяйственной деятельности предприятия',
    teacher: 'Мурашова Е. В.',
    controlType: 'Экзамен',
    points: 82,
    notes: 'Лабораторные работы 1-3 сданы (+30б)'
  },
  {
    id: 'grade-3',
    subject: 'Международный менеджмент',
    teacher: 'Тюленева Т. И.',
    controlType: 'Зачёт с оценкой',
    points: 92,
    notes: 'Автомат по итогам деловой игры (+40б)'
  },
  {
    id: 'grade-4',
    subject: 'Организация и техника внешнеторговых операций',
    teacher: 'Логинова В. А.',
    controlType: 'Экзамен',
    points: 79,
    notes: 'Подготовить доклад по аккредитивам'
  },
  {
    id: 'grade-5',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    teacher: 'Остапенко А. Б.',
    controlType: 'Зачёт',
    points: 85,
    notes: 'Mock Test пройден на Band 7.0'
  },
  {
    id: 'grade-6',
    subject: 'Международные экономические организации и региональные объединения',
    teacher: 'Мурашова Е. В.',
    controlType: 'Зачёт',
    points: 76,
    notes: 'Эссе по странам АСЕАН'
  },
  {
    id: 'grade-7',
    subject: 'Экономика стран и регионов: азиатско-тихоокеанский регион',
    teacher: 'Мурашова Е. В.',
    controlType: 'Зачёт',
    points: 80,
    notes: 'Презентация по экономике Японии'
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
class AppState {
  constructor() {
    const today = new Date();
    this.todayStr = toDateStr(today);
    this.currentMonday = getMondayOfDate(today);

    // Selected day date
    this.selectedDateStr = this.todayStr;

    // Filter modes
    this.displayMode = localStorage.getItem('aura_schedule_mode') || 'calendar'; // 'calendar' | 'all'
    this.subgroupFilter = localStorage.getItem('aura_schedule_subgroup') || 'all'; // 'all' | '1' | '2'
    this.scheduleFormat = localStorage.getItem('aura_schedule_format') || 'day'; // 'day' | 'grid'
    this.theme = localStorage.getItem('aura_schedule_theme') || 'dark';
    this.currentView = 'view-schedule';
    this.hwFilter = 'active'; // 'active' | 'completed' | 'all'
    this.homework = this.loadHomework();
    this.grades = this.loadGrades();
    this.student = this.loadStudent();
  }

  loadHomework() {
    try {
      const stored = localStorage.getItem('aura_schedule_homework');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Migration: ensure every homework has `date`
          return parsed.map(hw => {
            if (!hw.date) {
              hw.date = hw.dueDate || this.todayStr;
            }
            return hw;
          });
        }
      }
    } catch (e) {
      console.error('Failed to load homework:', e);
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

  loadGrades() {
    try {
      const stored = localStorage.getItem('aura_schedule_grades');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load grades:', e);
    }
    return DEFAULT_GRADES;
  }

  saveGrades() {
    try {
      localStorage.setItem('aura_schedule_grades', JSON.stringify(this.grades));
    } catch (e) {
      console.error('Failed to save grades:', e);
    }
  }

  loadStudent() {
    try {
      const stored = localStorage.getItem('aura_schedule_student');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.name) return parsed;
      }
    } catch (e) {
      console.error('Failed to load student profile:', e);
    }
    return {
      name: 'Денис Федосеенко',
      group: 'МБИ(б)-31',
      idNum: '2023100990',
      course: '3 курс'
    };
  }

  saveStudent() {
    try {
      localStorage.setItem('aura_schedule_student', JSON.stringify(this.student));
    } catch (e) {
      console.error('Failed to save student profile:', e);
    }
  }

  // Get week type of currently viewed week
  getCurrentWeekType() {
    return getWeekTypeForMonday(this.currentMonday);
  }

  // Get day key ('mon'..'sun') for selectedDateStr
  getSelectedDayKey() {
    const d = parseDateStr(this.selectedDateStr);
    const map = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
    return map[d.getDay()] || 'mon';
  }

  // Check if viewing current week
  isViewingCurrentWeek() {
    const todayMonday = getMondayOfDate(new Date());
    return toDateStr(this.currentMonday) === toDateStr(todayMonday);
  }

  // Navigate weeks
  goToPrevWeek() {
    const prevM = new Date(this.currentMonday);
    prevM.setDate(prevM.getDate() - 7);
    this.currentMonday = prevM;

    // Shift selected date by -7 days
    const selD = parseDateStr(this.selectedDateStr);
    selD.setDate(selD.getDate() - 7);
    this.selectedDateStr = toDateStr(selD);
  }

  goToNextWeek() {
    const nextM = new Date(this.currentMonday);
    nextM.setDate(nextM.getDate() + 7);
    this.currentMonday = nextM;

    // Shift selected date by +7 days
    const selD = parseDateStr(this.selectedDateStr);
    selD.setDate(selD.getDate() + 7);
    this.selectedDateStr = toDateStr(selD);
  }

  jumpToToday() {
    const today = new Date();
    this.todayStr = toDateStr(today);
    this.currentMonday = getMondayOfDate(today);
    this.selectedDateStr = this.todayStr;
  }
}

const state = new AppState();

// ==========================================
// 3. UI CONTROLLER & RENDERING
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initWeekNavigator();
  initFilters();
  initHomeworkModal();
  initSearch();
  initSettings();
  initQuickTools();
  initDesktopKeyboardShortcuts();
  initTouchGestures();

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
  updateThemeUI();

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  const desktopToggle = document.getElementById('desktop-theme-toggle');
  if (desktopToggle) {
    desktopToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('aura_schedule_theme', state.theme);
  updateThemeUI();
}

function updateThemeUI() {
  const isDark = state.theme === 'dark';
  const pillText = document.getElementById('theme-pill-text');
  if (pillText) {
    pillText.textContent = isDark ? 'Тёмная' : 'Светлая';
  }
}

// --- Navigation & Unified View Switching ---
function switchView(targetView) {
  if (!targetView) return;
  state.currentView = targetView;

  // Sync active state across sidebar buttons and bottom-nav buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === targetView);
  });

  // Switch visible panel
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === targetView);
  });

  // Update desktop page title
  const titleMap = {
    'view-schedule': 'Расписание учебных занятий',
    'view-homework': 'Домашние задания и дедлайны',
    'view-grades': 'Успеваемость и баллы БРС',
    'view-search': 'Справочник и поиск по вузу',
    'view-settings': 'Профиль студента и настройки'
  };
  const titleEl = document.getElementById('page-title-text');
  if (titleEl && titleMap[targetView]) {
    titleEl.textContent = titleMap[targetView];
  }

  // Trigger view-specific rendering
  if (targetView === 'view-schedule') {
    renderScheduleCards();
  } else if (targetView === 'view-homework') {
    renderAllHomeworkView();
  } else if (targetView === 'view-grades') {
    renderGradesView();
  } else if (targetView === 'view-search') {
    const sInput = document.getElementById('global-search-input');
    if (sInput) sInput.focus();
  }
}

function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.target;
      if (targetView) switchView(targetView);
    });
  });
}

// --- Week Navigator (Prev / Next / Today) ---
function initWeekNavigator() {
  const prevBtn = document.getElementById('prev-week-btn');
  const nextBtn = document.getElementById('next-week-btn');
  const todayBtn = document.getElementById('today-jump-btn');

  prevBtn.addEventListener('click', () => {
    state.goToPrevWeek();
    renderApp();
  });

  nextBtn.addEventListener('click', () => {
    state.goToNextWeek();
    renderApp();
  });

  todayBtn.addEventListener('click', () => {
    state.jumpToToday();
    renderApp();
    showToast('Перешли к текущему дню');
  });
}

// --- Filters (Subgroup, Display Mode & Schedule Format) ---
function initFilters() {
  // Subgroup selector
  const subgroupSelector = document.getElementById('subgroup-selector');
  if (subgroupSelector) {
    subgroupSelector.querySelectorAll('.sub-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sub === state.subgroupFilter);

      btn.addEventListener('click', () => {
        subgroupSelector.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.subgroupFilter = btn.dataset.sub;
        localStorage.setItem('aura_schedule_subgroup', state.subgroupFilter);
        renderScheduleCards();
      });
    });
  }

  // Display Mode selector ('calendar' vs 'all')
  const modeSelector = document.getElementById('mode-selector');
  if (modeSelector) {
    modeSelector.querySelectorAll('.pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === state.displayMode);

      btn.addEventListener('click', () => {
        modeSelector.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.displayMode = btn.dataset.mode;
        localStorage.setItem('aura_schedule_mode', state.displayMode);
        renderApp();
      });
    });
  }

  // Schedule Format selector ('day' vs 'grid')
  const formatSelector = document.getElementById('format-selector');
  if (formatSelector) {
    formatSelector.querySelectorAll('.pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.format === state.scheduleFormat);

      btn.addEventListener('click', () => {
        formatSelector.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.scheduleFormat = btn.dataset.format;
        localStorage.setItem('aura_schedule_format', state.scheduleFormat);
        renderScheduleCards();
      });
    });
  }

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

// --- Main App Render ---
function renderApp() {
  renderWeekBar();
  renderDayTabs();
  renderScheduleCards();
  updateHomeworkBadges();
  populateSubjectDropdown();
  renderGradesView();
  updateStudentProfileUI();
}

// --- Render Week Navigation Bar ---
function renderWeekBar() {
  const weekRangeEl = document.getElementById('week-range-text');
  const weekStatusPill = document.getElementById('week-status-pill');
  const todayBtn = document.getElementById('today-jump-btn');

  // Calculate Sunday of current week
  const sunday = new Date(state.currentMonday);
  sunday.setDate(sunday.getDate() + 6);

  const startDay = state.currentMonday.getDate();
  const startMonth = state.currentMonday.getMonth();
  const endDay = sunday.getDate();
  const endMonth = sunday.getMonth();

  let rangeText = '';
  if (startMonth === endMonth) {
    rangeText = `${startDay} – ${endDay} ${MONTH_NAMES_GEN[startMonth]}`;
  } else {
    rangeText = `${startDay} ${MONTH_NAMES_SHORT[startMonth]} – ${endDay} ${MONTH_NAMES_SHORT[endMonth]}`;
  }
  weekRangeEl.textContent = rangeText;

  // Week type (Числитель vs Знаменатель)
  const weekType = state.getCurrentWeekType();
  if (state.displayMode === 'all') {
    weekStatusPill.textContent = 'Все пары';
    weekStatusPill.className = 'week-status-pill badge-accent';
  } else if (weekType === 'numerator') {
    weekStatusPill.textContent = 'Числитель';
    weekStatusPill.className = 'week-status-pill badge-num';
  } else {
    weekStatusPill.textContent = 'Знаменатель';
    weekStatusPill.className = 'week-status-pill badge-den';
  }

  // Show / Hide "Сегодня" button if looking at other weeks
  const isCurrent = state.isViewingCurrentWeek();
  todayBtn.classList.toggle('hidden', isCurrent);
}

// --- Render Day Tabs for Currently Viewed Week ---
function renderDayTabs() {
  const tabsContainer = document.getElementById('day-tabs');
  tabsContainer.innerHTML = '';

  const today = new Date();
  state.todayStr = toDateStr(today);

  // 7 days from Monday to Sunday
  for (let i = 0; i < 7; i++) {
    const tabDate = new Date(state.currentMonday);
    tabDate.setDate(tabDate.getDate() + i);

    const dateStr = toDateStr(tabDate);
    const dayMeta = DAYS_META[i]; // mon, tue, wed, thu, fri, sat, sun

    const tab = document.createElement('button');
    tab.className = 'day-tab';
    tab.dataset.date = dateStr;
    tab.dataset.day = dayMeta.key;

    const isToday = (dateStr === state.todayStr);
    const isSelected = (dateStr === state.selectedDateStr);

    if (isToday) tab.classList.add('today');
    if (isSelected) tab.classList.add('active');

    // Check if this specific date has active homework
    const hasHw = state.homework.some(hw => 
      !hw.isCompleted && (hw.date === dateStr || hw.dueDate === dateStr)
    );

    const dayNum = tabDate.getDate();
    const monthShort = MONTH_NAMES_SHORT[tabDate.getMonth()];

    tab.innerHTML = `
      <span class="day-name">${dayMeta.short}</span>
      <span class="day-num">${dayNum}</span>
      <span class="day-month">${monthShort}</span>
      ${hasHw ? '<span class="day-tab-hw-dot"></span>' : ''}
    `;

    tab.addEventListener('click', () => {
      document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.selectedDateStr = dateStr;
      renderScheduleCards();
      scrollTabIntoView(tab);
    });

    tabsContainer.appendChild(tab);
  }

  // Quick HW buttons
  document.getElementById('add-quick-hw-btn').onclick = () => {
    openHomeworkModal({ date: state.selectedDateStr });
  };
  document.getElementById('new-hw-floating-btn').onclick = () => {
    openHomeworkModal({ date: state.selectedDateStr });
  };
}

function scrollTabIntoView(tab) {
  tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// --- Render Schedule Cards for Selected Date ---
function renderScheduleCards() {
  const dayScheduleView = document.getElementById('day-schedule-view');
  const weekGridView = document.getElementById('week-grid-view');
  const dayTabsContainer = document.getElementById('day-tabs-container');

  if (state.scheduleFormat === 'grid') {
    if (dayScheduleView) dayScheduleView.classList.add('hidden');
    if (weekGridView) weekGridView.classList.remove('hidden');
    if (dayTabsContainer) dayTabsContainer.classList.add('hidden');
    renderWeekGridView();
    return;
  }

  if (dayScheduleView) dayScheduleView.classList.remove('hidden');
  if (weekGridView) weekGridView.classList.add('hidden');
  if (dayTabsContainer) dayTabsContainer.classList.remove('hidden');

  const container = document.getElementById('schedule-cards');
  const emptyState = document.getElementById('empty-day-state');
  const dayHeading = document.getElementById('current-day-heading');
  const daySubheading = document.getElementById('current-day-subheading');

  const selectedDate = parseDateStr(state.selectedDateStr);
  const selectedDayKey = state.getSelectedDayKey();
  const dayMeta = DAYS_META.find(d => d.key === selectedDayKey);

  const dayFormatted = `${selectedDate.getDate()} ${MONTH_NAMES_GEN[selectedDate.getMonth()]}`;
  dayHeading.textContent = `${dayMeta ? dayMeta.full : ''}, ${dayFormatted}`;

  const weekType = state.getCurrentWeekType();
  const weekLabel = weekType === 'numerator' ? 'Числитель' : 'Знаменатель';

  // Filter pairs for this day and week type
  const dayPairs = SCHEDULE_DATA.filter(pair => {
    if (pair.day !== selectedDayKey) return false;

    // Week type filter (unless mode is 'all')
    if (state.displayMode !== 'all') {
      if (pair.week !== 'all' && pair.week !== weekType) {
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

  dayPairs.sort((a, b) => a.pairNum - b.pairNum);

  daySubheading.textContent = dayPairs.length > 0
    ? `${dayPairs.length} ${getNoun(dayPairs.length, 'пара', 'пары', 'пар')} • ${state.displayMode === 'all' ? 'Все недели' : weekLabel}`
    : `Нет занятий в расписании • ${weekLabel}`;

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
  const isToday = (state.selectedDateStr === state.todayStr);

  dayPairs.forEach(pair => {
    const card = document.createElement('article');
    card.className = 'pair-card';

    // Check if this pair is currently active right now
    const [startH, startM] = pair.timeStart.split(':').map(Number);
    const [endH, endM] = pair.timeEnd.split(':').map(Number);
    const startTimeVal = startH * 60 + startM;
    const endTimeVal = endH * 60 + endM;

    const isCurrent = isToday && (nowTimeVal >= startTimeVal && nowTimeVal <= endTimeVal);
    if (isCurrent) {
      card.classList.add('current-pair');
    }

    // Quiet minimal tags
    const typeBadge = `<span class="badge">${pair.type === 'lecture' ? 'Лекция' : 'Практика'}</span>`;

    let weekBadge = '';
    if (state.displayMode === 'all') {
      if (pair.week === 'numerator') {
        weekBadge = '<span class="badge badge-num">Числитель</span>';
      } else if (pair.week === 'denominator') {
        weekBadge = '<span class="badge badge-den">Знаменатель</span>';
      }
    }

    let liveBadge = isCurrent ? '<span class="badge" style="color: #10b981; border-color: rgba(16, 185, 129, 0.4);">Идёт сейчас</span>' : '';

    let subgroupBadge = '';
    if (pair.subgroup !== 'all') {
      subgroupBadge = `<span class="badge">${pair.subgroup} подгруппа</span>`;
    }

    // Pair Homework: matches subject AND (date === selectedDateStr OR dueDate === selectedDateStr)
    const pairHomework = state.homework.filter(hw => 
      hw.subject === pair.subject && 
      (hw.date === state.selectedDateStr || hw.dueDate === state.selectedDateStr)
    );

    let hwHtml = '';
    if (pairHomework.length > 0) {
      const itemsHtml = pairHomework.map(hw => `
        <div class="card-hw-item ${hw.isCompleted ? 'completed' : ''}" data-hw-id="${hw.id}">
          <input type="checkbox" class="hw-checkbox" ${hw.isCompleted ? 'checked' : ''} aria-label="Отметить сделанным">
          <div class="card-hw-body" title="Нажмите, чтобы редактировать">
            <div class="card-hw-text">${escapeHtml(hw.text)}</div>
            <div class="card-hw-meta">
              ${hw.dueDate ? `<span>до ${formatShortDate(hw.dueDate)}</span>` : ''}
              ${hw.isUrgent ? `<span class="hw-urgent-tag">Срочно</span>` : ''}
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
              Задания на ${formatShortDate(state.selectedDateStr)} (${pairHomework.length})
            </span>
            <button class="btn-card-add-hw" data-subject="${escapeHtml(pair.subject)}" data-date="${state.selectedDateStr}">
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
            <button class="btn-card-add-hw" data-subject="${escapeHtml(pair.subject)}" data-date="${state.selectedDateStr}">
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
        date: addBtn.dataset.date || state.selectedDateStr
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

// --- Render Full Week Timetable Grid for PC / Desktop ---
function renderWeekGridView() {
  const container = document.getElementById('week-grid-view');
  if (!container) return;

  const weekType = state.getCurrentWeekType();
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  let columnsHtml = '';

  weekDays.forEach((dayKey, idx) => {
    const dayMeta = DAYS_META.find(d => d.key === dayKey);
    const dayDate = new Date(state.currentMonday);
    dayDate.setDate(dayDate.getDate() + idx);
    const dayDateStr = toDateStr(dayDate);
    const isToday = (dayDateStr === state.todayStr);

    // Filter pairs for this day
    const dayPairs = SCHEDULE_DATA.filter(pair => {
      if (pair.day !== dayKey) return false;
      if (state.displayMode !== 'all') {
        if (pair.week !== 'all' && pair.week !== weekType) return false;
      }
      if (state.subgroupFilter !== 'all') {
        if (pair.subgroup !== 'all' && pair.subgroup !== state.subgroupFilter) return false;
      }
      return true;
    });

    dayPairs.sort((a, b) => a.pairNum - b.pairNum);

    let pairsHtml = '';
    if (dayPairs.length === 0) {
      pairsHtml = `<div class="grid-empty-day">Занятий нет</div>`;
    } else {
      pairsHtml = dayPairs.map(p => {
        const pairHw = state.homework.filter(hw => hw.subject === p.subject && (hw.date === dayDateStr || hw.dueDate === dayDateStr));
        const hasHw = pairHw.length > 0;
        return `
          <div class="grid-pair-chip" data-day="${dayKey}" data-date="${dayDateStr}" data-pair-id="${p.id}" title="Нажмите, чтобы открыть день">
            <div class="grid-chip-top">
              <span class="grid-chip-time">${p.pairNum} пара · ${p.timeStart}</span>
              <span class="grid-chip-room">${p.room}</span>
            </div>
            <div class="grid-chip-subject">${escapeHtml(p.subject)}</div>
            <div class="grid-chip-meta">
              <span class="grid-chip-type">${p.type === 'lecture' ? 'лк' : 'пр'}</span>
              <span class="grid-chip-teacher">${p.teacher.split(' ')[0]}</span>
              ${hasHw ? `<span class="grid-hw-indicator">● ДЗ (${pairHw.length})</span>` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    columnsHtml += `
      <div class="grid-col ${isToday ? 'grid-col-today' : ''}" data-day="${dayKey}" data-date="${dayDateStr}">
        <div class="grid-col-header">
          <div class="grid-col-dayname">${dayMeta.full}</div>
          <div class="grid-col-date">${dayDate.getDate()} ${MONTH_NAMES_SHORT[dayDate.getMonth()]} ${isToday ? '<span class="grid-today-badge">Сегодня</span>' : ''}</div>
        </div>
        <div class="grid-col-pairs">${pairsHtml}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="week-grid-timetable">
      ${columnsHtml}
    </div>
  `;

  // Clicking any chip opens day view for that date
  container.querySelectorAll('.grid-pair-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const dateStr = chip.dataset.date;
      if (dateStr) {
        state.selectedDateStr = dateStr;
        state.scheduleFormat = 'day';
        localStorage.setItem('aura_schedule_format', 'day');
        const fmtDayBtn = document.getElementById('format-day-btn');
        const fmtGridBtn = document.getElementById('format-grid-btn');
        if (fmtDayBtn) fmtDayBtn.classList.add('active');
        if (fmtGridBtn) fmtGridBtn.classList.remove('active');
        renderApp();
      }
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
    renderDayTabs(); // refresh dots on day tabs
    if (state.currentView === 'view-schedule') {
      renderScheduleCards();
    } else if (state.currentView === 'view-homework') {
      renderAllHomeworkView();
    }
    showToast(isCompleted ? 'Задание выполнено' : 'Задание возвращено в активные');
  }
}

// --- Delete Homework ---
function deleteHomework(hwId) {
  state.homework = state.homework.filter(h => h.id !== hwId);
  state.saveHomework();
  updateHomeworkBadges();
  renderDayTabs();
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

  // Sort: active first, then urgent, then by date/dueDate
  displayTasks.sort((a, b) => {
    if (a.isCompleted !== b.isCompleted) return a.isCompleted ? 1 : -1;
    if (a.isUrgent !== b.isUrgent) return a.isUrgent ? -1 : 1;
    const dateA = a.date || a.dueDate || '';
    const dateB = b.date || b.dueDate || '';
    return dateA.localeCompare(dateB);
  });

  listContainer.innerHTML = '';

  if (displayTasks.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="30" height="30">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3>Нет заданий</h3>
        <p>В этом списке пока нет домашних заданий. Нажмите «Новое ДЗ», чтобы записать задачу к любому дню.</p>
      </div>
    `;
    return;
  }

  displayTasks.forEach(hw => {
    const card = document.createElement('div');
    card.className = `hw-full-card ${hw.isCompleted ? 'completed' : ''}`;
    card.dataset.hwId = hw.id;

    const classDateFormatted = hw.date ? formatFullDate(hw.date) : '';
    const dueDateFormatted = hw.dueDate ? formatShortDate(hw.dueDate) : '';

    card.innerHTML = `
      <input type="checkbox" class="hw-checkbox" ${hw.isCompleted ? 'checked' : ''} aria-label="Отметить">
      <div class="hw-full-content" style="cursor: pointer;">
        <span class="hw-full-subject">${escapeHtml(hw.subject)}</span>
        <div class="hw-full-text">${escapeHtml(hw.text)}</div>
        <div class="hw-full-meta">
          ${classDateFormatted ? `<span>Занятие: ${classDateFormatted}</span>` : ''}
          ${dueDateFormatted ? `<span>Дедлайн: ${dueDateFormatted}</span>` : ''}
          ${hw.isUrgent ? `<span class="hw-urgent-tag">Срочно</span>` : ''}
          ${hw.link ? `<a href="${escapeHtml(hw.link)}" target="_blank" rel="noopener" class="hw-full-link">Материалы ↗</a>` : ''}
        </div>
      </div>
      <button class="card-hw-delete-btn" aria-label="Удалить" title="Удалить">✕</button>
    `;

    card.querySelector('.hw-checkbox').addEventListener('change', (e) => {
      e.stopPropagation();
      toggleHomeworkStatus(hw.id, e.target.checked);
    });

    card.querySelector('.hw-full-content').addEventListener('click', () => {
      openHomeworkModal(hw);
    });

    card.querySelector('.card-hw-delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteHomework(hw.id);
    });

    listContainer.appendChild(card);
  });
}

// --- Render Grades & BRS Tracker (Балльно-рейтинговая система ТОГУ) ---
function renderGradesView() {
  const container = document.getElementById('grades-cards-list');
  const avgValEl = document.getElementById('brs-avg-val');
  const avgStatusEl = document.getElementById('brs-avg-status');
  const dopuskEl = document.getElementById('brs-dopusk-val');
  const stipendEl = document.getElementById('brs-stipend-val');
  const stipendSubEl = document.getElementById('brs-stipend-sub');

  if (!container || !state.grades) return;

  // Calculate metrics
  let totalPoints = 0;
  let minPoints = 100;
  let countBelow60 = 0;

  state.grades.forEach(g => {
    const pts = Number(g.points) || 0;
    totalPoints += pts;
    if (pts < minPoints) minPoints = pts;
    if (pts < 60) countBelow60++;
  });

  const count = state.grades.length || 1;
  const avg = (totalPoints / count).toFixed(1);

  if (avgValEl) avgValEl.textContent = avg;
  if (avgStatusEl) {
    if (avg >= 85) avgStatusEl.textContent = 'Отлично / Автомат';
    else if (avg >= 73) avgStatusEl.textContent = 'Хорошо';
    else if (avg >= 60) avgStatusEl.textContent = 'Удовлетворительно';
    else avgStatusEl.textContent = 'Требуется пересдача';
  }

  if (dopuskEl) {
    if (countBelow60 === 0) {
      dopuskEl.textContent = 'Допущен';
      dopuskEl.className = 'brs-stat-val text-success';
    } else {
      dopuskEl.textContent = `${countBelow60} задолжн.`;
      dopuskEl.className = 'brs-stat-val text-danger';
    }
  }

  if (stipendEl) {
    if (countBelow60 > 0 || avg < 73) {
      stipendEl.textContent = 'Без стипендии';
      if (stipendSubEl) stipendSubEl.textContent = 'есть оценки ниже "4"';
    } else if (avg >= 85) {
      stipendEl.textContent = 'Повышенная';
      if (stipendSubEl) stipendSubEl.textContent = 'все предметы на "отлично"';
    } else {
      stipendEl.textContent = 'Академическая';
      if (stipendSubEl) stipendSubEl.textContent = 'сессия без троек';
    }
  }

  // Render subject cards
  container.innerHTML = state.grades.map(g => {
    const pts = Math.min(100, Math.max(0, Number(g.points) || 0));
    let tierClass = 'tier-2';
    let tierLabel = 'Недопуск (<60)';
    if (pts >= 85) { tierClass = 'tier-5'; tierLabel = 'Отлично (5) / Автомат'; }
    else if (pts >= 73) { tierClass = 'tier-4'; tierLabel = 'Хорошо (4)'; }
    else if (pts >= 60) { tierClass = 'tier-3'; tierLabel = 'Удовл. (3) / Зачет'; }

    return `
      <div class="grade-card" data-grade-id="${g.id}">
        <div class="grade-card-top">
          <div class="grade-card-heading">
            <span class="grade-control-type">${escapeHtml(g.controlType || 'Экзамен')}</span>
            <h3 class="grade-subject-title">${escapeHtml(g.subject)}</h3>
            <span class="grade-teacher">${escapeHtml(g.teacher || '')}</span>
          </div>
          <div class="grade-score-badge ${tierClass}">
            <span class="grade-score-num">${pts}</span>
            <span class="grade-score-max">/ 100</span>
          </div>
        </div>

        <div class="grade-progress-track">
          <div class="grade-progress-fill ${tierClass}" style="width: ${pts}%;"></div>
        </div>

        <div class="grade-tier-row">
          <span class="grade-tier-name ${tierClass}">${tierLabel}</span>
          <div class="grade-quick-adjusters">
            <button class="adjust-btn btn-sub-5" data-delta="-5" title="Вычесть 5 баллов">−5</button>
            <button class="adjust-btn btn-sub-1" data-delta="-1" title="Вычесть 1 балл">−1</button>
            <input type="number" class="grade-points-input" min="0" max="100" value="${pts}">
            <button class="adjust-btn btn-add-1" data-delta="1" title="Прибавить 1 балл">+1</button>
            <button class="adjust-btn btn-add-5" data-delta="5" title="Прибавить 5 баллов">+5</button>
          </div>
        </div>

        <div class="grade-notes-wrap">
          <input type="text" class="grade-notes-input" placeholder="Заметки по баллам, условия автомата, дедлайны..." value="${escapeHtml(g.notes || '')}">
        </div>
      </div>
    `;
  }).join('');

  // Event listeners for score adjusters and notes
  container.querySelectorAll('.grade-card').forEach(card => {
    const id = card.dataset.gradeId;
    const gradeObj = state.grades.find(item => item.id === id);
    if (!gradeObj) return;

    card.querySelectorAll('.adjust-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const delta = parseInt(btn.dataset.delta, 10);
        gradeObj.points = Math.min(100, Math.max(0, (Number(gradeObj.points) || 0) + delta));
        state.saveGrades();
        renderGradesView();
      });
    });

    const numInput = card.querySelector('.grade-points-input');
    if (numInput) {
      numInput.addEventListener('change', () => {
        gradeObj.points = Math.min(100, Math.max(0, parseInt(numInput.value, 10) || 0));
        state.saveGrades();
        renderGradesView();
      });
    }

    const notesInput = card.querySelector('.grade-notes-input');
    if (notesInput) {
      notesInput.addEventListener('blur', () => {
        gradeObj.notes = notesInput.value.trim();
        state.saveGrades();
      });
    }
  });
}

// --- Homework Modal / Bottom Sheet ---
function initHomeworkModal() {
  const backdrop = document.getElementById('hw-modal-backdrop');
  const closeBtn = document.getElementById('hw-modal-close');
  const form = document.getElementById('hw-form');
  const deleteBtn = document.getElementById('hw-delete-btn');

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
      const classDateInput = document.getElementById('hw-date-input');
      const dueDateInput = document.getElementById('hw-due-date');

      const baseDate = parseDateStr(classDateInput.value || state.selectedDateStr);

      if (preset === 'same-day') {
        dueDateInput.value = toDateStr(baseDate);
      } else if (preset === 'next-pair') {
        const nextDate = new Date(baseDate);
        nextDate.setDate(nextDate.getDate() + 7); // next week's pair
        dueDateInput.value = toDateStr(nextDate);
      } else if (preset === 'tomorrow') {
        const tomDate = new Date(baseDate);
        tomDate.setDate(tomDate.getDate() + 1);
        dueDateInput.value = toDateStr(tomDate);
      }
    });
  });

  // Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('hw-edit-id').value;
    const subject = document.getElementById('hw-subject-select').value;
    const date = document.getElementById('hw-date-input').value || state.selectedDateStr;
    const text = document.getElementById('hw-text-input').value.trim();
    const dueDate = document.getElementById('hw-due-date').value || date;
    const isUrgent = document.getElementById('hw-is-urgent').checked;
    const link = document.getElementById('hw-link-input').value.trim();

    if (!text) return;

    if (editId) {
      // Update existing
      const existing = state.homework.find(h => h.id === editId);
      if (existing) {
        existing.subject = subject;
        existing.date = date;
        existing.text = text;
        existing.dueDate = dueDate;
        existing.isUrgent = isUrgent;
        existing.link = link;
      }
      showToast('Задание обновлено');
    } else {
      // Create new
      const newHw = {
        id: 'hw-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        subject,
        date,
        text,
        dueDate,
        isCompleted: false,
        isUrgent,
        link,
        createdAt: new Date().toISOString()
      };
      state.homework.unshift(newHw);
      showToast(`Задание сохранено на ${formatShortDate(date)}`);
    }

    state.saveHomework();
    closeHomeworkModal();
    updateHomeworkBadges();
    renderDayTabs();
    renderScheduleCards();
    if (state.currentView === 'view-homework') {
      renderAllHomeworkView();
    }
  });

  // Delete button
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
  const subjectSelect = document.getElementById('hw-subject-select');
  const dateInput = document.getElementById('hw-date-input');
  const textInput = document.getElementById('hw-text-input');
  const dueDateInput = document.getElementById('hw-due-date');
  const urgentCheckbox = document.getElementById('hw-is-urgent');
  const linkInput = document.getElementById('hw-link-input');
  const deleteBtn = document.getElementById('hw-delete-btn');

  populateSubjectDropdown();

  if (presetData.id) {
    // EDIT MODE
    modalTitle.textContent = 'Редактировать домашку';
    editIdInput.value = presetData.id;
    subjectSelect.value = presetData.subject;
    dateInput.value = presetData.date || state.selectedDateStr;
    textInput.value = presetData.text;
    dueDateInput.value = presetData.dueDate || presetData.date || state.selectedDateStr;
    urgentCheckbox.checked = !!presetData.isUrgent;
    linkInput.value = presetData.link || '';
    deleteBtn.classList.remove('hidden');
  } else {
    // CREATE MODE
    modalTitle.textContent = 'Записать домашку к дате';
    editIdInput.value = '';
    if (presetData.subject) {
      subjectSelect.value = presetData.subject;
    }
    const targetDate = presetData.date || state.selectedDateStr;
    dateInput.value = targetDate;
    textInput.value = '';

    // Default deadline: same date or next week
    dueDateInput.value = targetDate;
    urgentCheckbox.checked = false;
    linkInput.value = '';
    deleteBtn.classList.add('hidden');
  }

  document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));

  backdrop.classList.add('open');
  setTimeout(() => textInput.focus(), 200);
}

function closeHomeworkModal() {
  document.getElementById('hw-modal-backdrop').classList.remove('open');
}

// Populate Subject Dropdown
function populateSubjectDropdown() {
  const select = document.getElementById('hw-subject-select');
  if (select.children.length > 0) return;

  const subjects = [...new Set(SCHEDULE_DATA.map(p => p.subject))].sort();
  select.innerHTML = subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
}

// Update Badges on Bottom Nav & Desktop Sidebar
function updateHomeworkBadges() {
  const badgeTotal = document.getElementById('badge-hw-total');
  const sidebarBadge = document.getElementById('sidebar-badge-hw');
  const activeCount = state.homework.filter(h => !h.isCompleted).length;

  if (badgeTotal) {
    if (activeCount > 0) {
      badgeTotal.textContent = activeCount;
      badgeTotal.classList.remove('hidden');
    } else {
      badgeTotal.classList.add('hidden');
    }
  }

  if (sidebarBadge) {
    if (activeCount > 0) {
      sidebarBadge.textContent = activeCount;
      sidebarBadge.classList.remove('hidden');
    } else {
      sidebarBadge.classList.add('hidden');
    }
  }
}

// --- Dynamic Island Live Ticker ---
function updateLiveTicker() {
  const banner = document.getElementById('live-banner');
  const statusLabel = document.getElementById('live-status-label');
  const pairTitle = document.getElementById('live-pair-title');
  const timeLeft = document.getElementById('live-time-left');

  const now = new Date();
  const todayKey = DAYS_META[now.getDay() === 0 ? 6 : now.getDay() - 1].key;
  const nowVal = now.getHours() * 60 + now.getMinutes();

  const currentMonday = getMondayOfDate(now);
  const weekType = getWeekTypeForMonday(currentMonday);

  const todayPairs = SCHEDULE_DATA.filter(p => {
    if (p.day !== todayKey) return false;
    if (p.week !== 'all' && p.week !== weekType) return false;
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

// --- Touch Gestures (Swipe between days and weeks on mobile) ---
function initTouchGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  const scheduleView = document.getElementById('view-schedule');

  scheduleView.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  scheduleView.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].screenX - touchStartX;
    const diffY = e.changedTouches[0].screenY - touchStartY;

    // Detect horizontal swipe if larger than 60px and more horizontal than vertical
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        // Swipe left => next day
        advanceDay(1);
      } else {
        // Swipe right => prev day
        advanceDay(-1);
      }
    }
  }, { passive: true });
}

function advanceDay(offset) {
  const cur = parseDateStr(state.selectedDateStr);
  cur.setDate(cur.getDate() + offset);
  state.selectedDateStr = toDateStr(cur);

  // If outside current week, shift currentMonday
  const newMonday = getMondayOfDate(cur);
  state.currentMonday = newMonday;

  renderApp();
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

  container.innerHTML = `
    <div class="settings-card">
      <h3 class="card-subtitle">Все предметы группы МБИ(б)-31</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${uniqueSubjects.map(s => `
          <div style="font-size: 13.5px; padding: 6px 0; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">${escapeHtml(s)}</span>
            <button class="quick-add-btn" style="padding: 2px 8px; font-size: 11px;" onclick="openHomeworkModal({ subject: '${escapeHtml(s)}', date: state.selectedDateStr })">+ ДЗ</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSearchResults(query, container) {
  const matchedPairs = SCHEDULE_DATA.filter(p => 
    p.subject.toLowerCase().includes(query) ||
    p.teacher.toLowerCase().includes(query) ||
    p.room.toLowerCase().includes(query)
  );

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
        <p>По запросу «${escapeHtml(query)}» ничего не найдено. Проверьте запрос.</p>
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
          <div class="hw-full-meta">
            ${hw.date ? `<span>Дата: ${formatShortDate(hw.date)}</span>` : ''}
            ${hw.dueDate ? `<span>Дедлайн: ${formatShortDate(hw.dueDate)}</span>` : ''}
          </div>
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

// --- Settings & Profile & Backup ---
function initSettings() {
  const subgroupSelect = document.getElementById('setting-default-subgroup');
  if (subgroupSelect) {
    subgroupSelect.value = state.subgroupFilter;

    subgroupSelect.addEventListener('change', () => {
      state.subgroupFilter = subgroupSelect.value;
      localStorage.setItem('aura_schedule_subgroup', state.subgroupFilter);
      const subgroupSelector = document.getElementById('subgroup-selector');
      if (subgroupSelector) {
        subgroupSelector.querySelectorAll('.sub-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.sub === state.subgroupFilter);
        });
      }
      renderScheduleCards();
      showToast('Настройка подгруппы сохранена');
    });
  }

  // Profile inputs & Save
  const saveProfileBtn = document.getElementById('save-profile-btn');
  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('setting-student-name');
      const groupInput = document.getElementById('setting-student-group');
      const idInput = document.getElementById('setting-student-id');

      const name = nameInput ? nameInput.value.trim() : state.student.name;
      const group = groupInput ? groupInput.value.trim() : state.student.group;
      const idNum = idInput ? idInput.value.trim() : state.student.idNum;

      if (!name || !group) {
        showToast('Заполните ФИО и группу');
        return;
      }

      state.student = { ...state.student, name, group, idNum };
      state.saveStudent();
      updateStudentProfileUI();
      showToast('Профиль студента сохранён');
    });
  }

  // Add custom grade subject button
  const addGradeBtn = document.getElementById('add-custom-grade-btn');
  if (addGradeBtn) {
    addGradeBtn.addEventListener('click', () => {
      const subj = prompt('Введите название учебного предмета:');
      if (!subj || !subj.trim()) return;
      const newGrade = {
        id: 'grade-' + Date.now(),
        subject: subj.trim(),
        teacher: 'Преподаватель ТОГУ',
        controlType: 'Экзамен',
        points: 75,
        notes: ''
      };
      state.grades.push(newGrade);
      state.saveGrades();
      renderGradesView();
      showToast('Предмет добавлен в БРС');
    });
  }

  // Export JSON (Full Backup)
  const exportBtn = document.getElementById('export-backup-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const fullBackup = {
        version: '2.0',
        exportDate: new Date().toISOString(),
        student: state.student,
        homework: state.homework,
        grades: state.grades,
        subgroupFilter: state.subgroupFilter
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
      const dlAnchorElem = document.createElement('a');
      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute("download", `togu_diary_backup_${state.todayStr}.json`);
      dlAnchorElem.click();
      showToast('Полный бэкап дневника скачан');
    });
  }

  // Import JSON
  const importInput = document.getElementById('import-backup-file');
  if (importInput) {
    importInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            // Legacy homework-only backup
            state.homework = imported;
            state.saveHomework();
          } else if (imported && typeof imported === 'object') {
            // Full diary backup
            if (Array.isArray(imported.homework)) {
              state.homework = imported.homework;
              state.saveHomework();
            }
            if (Array.isArray(imported.grades)) {
              state.grades = imported.grades;
              state.saveGrades();
            }
            if (imported.student) {
              state.student = { ...state.student, ...imported.student };
              state.saveStudent();
            }
          }
          renderApp();
          showToast('Данные успешно импортированы');
        } catch (err) {
          alert('Ошибка при чтении файла');
        }
      };
      reader.readAsText(file);
    });
  }

  // Reset to default
  const resetBtn = document.getElementById('reset-data-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Сбросить все домашние задания и баллы к начальным примерам?')) {
        state.homework = [...DEFAULT_HOMEWORK];
        state.saveHomework();
        state.grades = [...DEFAULT_GRADES];
        state.saveGrades();
        renderApp();
        showToast('Данные сброшены к начальным');
      }
    });
  }
}

// --- Student Profile UI Sync ---
function updateStudentProfileUI() {
  if (!state.student) return;
  const s = state.student;

  const headerStudent = document.getElementById('header-student-name');
  if (headerStudent) headerStudent.textContent = s.name;

  const headerGroup = document.getElementById('header-group-name');
  if (headerGroup) headerGroup.textContent = s.group;

  const sideName = document.getElementById('sidebar-student-name');
  if (sideName) sideName.textContent = s.name;

  const sideGroup = document.getElementById('sidebar-student-group');
  if (sideGroup) sideGroup.textContent = s.group;

  const sideCourse = document.getElementById('sidebar-student-course');
  if (sideCourse) sideCourse.textContent = s.course || '3 курс';

  const avatar = document.getElementById('sidebar-avatar-initials');
  if (avatar && s.name) {
    const parts = s.name.trim().split(/\s+/);
    avatar.textContent = parts.map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }

  const setStudentName = document.getElementById('setting-student-name');
  if (setStudentName && setStudentName !== document.activeElement) setStudentName.value = s.name;

  const setStudentGroup = document.getElementById('setting-student-group');
  if (setStudentGroup && setStudentGroup !== document.activeElement) setStudentGroup.value = s.group;

  const setStudentId = document.getElementById('setting-student-id');
  if (setStudentId && setStudentId !== document.activeElement) setStudentId.value = s.idNum || '';
}

// --- Quick Export Tools (Print & iCalendar) ---
function initQuickTools() {
  const printBtn = document.getElementById('quick-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', printSchedule);
  }

  const icalBtn = document.getElementById('quick-ical-btn');
  if (icalBtn) {
    icalBtn.addEventListener('click', exportICalendar);
  }
}

function printSchedule() {
  window.print();
}

function exportICalendar() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//TOGU//Student Schedule Diary//RU',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Расписание ' + (state.student.group || 'ТОГУ')
  ];

  const daysMap = { 'mon': 'MO', 'tue': 'TU', 'wed': 'WE', 'thu': 'TH', 'fri': 'FR', 'sat': 'SA' };

  SCHEDULE_DATA.forEach(pair => {
    if (state.subgroupFilter !== 'all' && pair.subgroup !== 'all' && pair.subgroup !== state.subgroupFilter) {
      return;
    }

    const tStart = pair.timeStart.replace(':', '') + '00';
    const tEnd = pair.timeEnd.replace(':', '') + '00';
    const byDay = daysMap[pair.day] || 'MO';

    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${pair.id}-2026@togu.ru`);
    lines.push(`DTSTAMP:20260901T000000Z`);
    lines.push(`DTSTART;TZID=Asia/Vladivostok:20260901T${tStart}`);
    lines.push(`DTEND;TZID=Asia/Vladivostok:20260901T${tEnd}`);
    lines.push(`RRULE:FREQ=WEEKLY;UNTIL=20270131T235959Z;BYDAY=${byDay}`);
    lines.push(`SUMMARY:[${pair.type === 'lecture' ? 'Лк' : 'Пр'}] ${pair.subject}`);
    lines.push(`LOCATION:ТОГУ, ауд. ${pair.room}`);
    lines.push(`DESCRIPTION:Преподаватель: ${pair.teacher}\\nГруппа: ${state.student.group}\\nТип: ${pair.week === 'numerator' ? 'Числитель' : (pair.week === 'denominator' ? 'Знаменатель' : 'Каждую неделю')}`);
    lines.push('END:VEVENT');
  });

  lines.push('END:VCALENDAR');
  const icsBlob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(icsBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `togu_schedule_${(state.student.group || 'mbi31').replace(/[^a-zA-Z0-9а-яА-Я]/g, '_')}.ics`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Календарь iCal (.ics) скачан');
}

// --- Desktop Keyboard Shortcuts ---
function initDesktopKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ignore when typing inside input / textarea / select
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key === '1') {
      switchView('view-schedule');
    } else if (e.key === '2') {
      switchView('view-homework');
    } else if (e.key === '3') {
      switchView('view-grades');
    } else if (e.key === '/') {
      e.preventDefault();
      switchView('view-search');
    } else if (e.key === '5') {
      switchView('view-settings');
    } else if (e.key === 'n' || e.key === 'N' || e.key === 'т' || e.key === 'Т') {
      if (!e.ctrlKey && !e.metaKey) {
        openHomeworkModal({ date: state.selectedDateStr });
      }
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

function formatShortDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [y, m, d] = dateStr.split('-');
    const mIdx = parseInt(m, 10) - 1;
    return `${parseInt(d, 10)} ${MONTH_NAMES_SHORT[mIdx]}`;
  } catch (e) {
    return dateStr;
  }
}

function formatFullDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = parseDateStr(dateStr);
    const dayMeta = DAYS_META[d.getDay() === 0 ? 6 : d.getDay() - 1];
    return `${dayMeta ? dayMeta.short : ''} ${d.getDate()} ${MONTH_NAMES_SHORT[d.getMonth()]}`;
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
