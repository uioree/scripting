const SCHEDULE_DATA = [

  {
    id: 'tue-1-num',
    day: 'tue',
    pairNum: 1,
    timeStart: '08:30',
    timeEnd: '10:00',
    subject: 'Анализ хозяйственной деятельности предприятия',
    type: 'practice',
    room: '301л',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'numerator',
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
    type: 'lecture',
    room: '440л',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator',
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
    type: 'lecture',
    room: '434ц',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'numerator',
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
    type: 'lecture',
    room: '434ц',
    teacher: 'Пенегина И. Т.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator',
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
    type: 'lecture',
    room: '434ц',
    teacher: 'Тюленева Т. И.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
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
    type: 'lecture',
    room: '434ц',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator',
    subgroup: 'all',
    hasEuk: false
  },

  {
    id: 'wed-1-num',
    day: 'wed',
    pairNum: 1,
    timeStart: '08:30',
    timeEnd: '10:00',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    type: 'lecture',
    room: '404л',
    teacher: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    week: 'numerator',
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
    type: 'lecture',
    room: '229па',
    teacher: 'Безродных А. Ю.',
    teacherRole: 'Преподаватель',
    week: 'numerator',
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
    type: 'practice',
    room: '359ца',
    teacher: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    week: 'denominator',
    subgroup: '1',
    hasEuk: true
  },
  {
    id: 'wed-3',
    day: 'wed',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Международные валютно-кредитные отношения',
    type: 'practice',
    room: '106п',
    teacher: 'Безродных А. Ю.',
    teacherRole: 'Преподаватель',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },

  {
    id: 'thu-2',
    day: 'thu',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Международный менеджмент',
    type: 'practice',
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
    type: 'practice',
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
    type: 'lecture',
    room: '137л',
    teacher: 'Сигитова М. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: true
  },

  {
    id: 'fri-2',
    day: 'fri',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Анализ хозяйственной деятельности предприятия',
    type: 'practice',
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
    type: 'practice',
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
    type: 'practice',
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
    type: 'practice',
    room: '329ца',
    teacher: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'all',
    subgroup: 'all',
    hasEuk: false
  },

  {
    id: 'sat-2-num',
    day: 'sat',
    pairNum: 2,
    timeStart: '10:10',
    timeEnd: '11:40',
    subject: 'Экономика стран и регионов: азиатско-тихоокеанский регион',
    type: 'lecture',
    room: '229па',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'numerator',
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
    type: 'practice',
    room: '359ца',
    teacher: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    week: 'numerator',
    subgroup: '2',
    hasEuk: true
  },
  {
    id: 'sat-3-den',
    day: 'sat',
    pairNum: 3,
    timeStart: '11:50',
    timeEnd: '13:20',
    subject: 'Экономика стран и регионов: азиатско-тихоокеанский регион',
    type: 'practice',
    room: '229па',
    teacher: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    week: 'denominator',
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

const ANCHOR_MONDAY = new Date(2026, 8, 21);

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

function getMondayOfDate(d) {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1 - day);
  date.setDate(date.getDate() + diff);
  return date;
}

function getWeekTypeForMonday(mondayDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const m1 = new Date(ANCHOR_MONDAY.getFullYear(), ANCHOR_MONDAY.getMonth(), ANCHOR_MONDAY.getDate(), 12);
  const m2 = new Date(mondayDate.getFullYear(), mondayDate.getMonth(), mondayDate.getDate(), 12);
  const diffDays = Math.round((m2 - m1) / oneDay);
  const diffWeeks = Math.round(diffDays / 7);

  return (Math.abs(diffWeeks % 2) === 0) ? 'denominator' : 'numerator';
}

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


const DEFAULT_USERS = {
  'student-mbi': {
    id: 'u_student_1',
    role: 'student',
    name: 'Студент',
    group: 'МБИ(б)-31',
    course: '3 курс',
    idNum: ''
  },
  'starosta': {
    id: 'u_starosta_1',
    role: 'starosta',
    name: 'Даниил Кузнецов (Староста)',
    group: 'МБИ(б)-31',
    course: '3 курс',
    idNum: '2023100801'
  },
  'teacher-murashova': {
    id: 'u_teacher_1',
    role: 'teacher',
    name: 'Мурашова Е. В.',
    roleTitle: 'Доцент, к.э.н.',
    dept: 'Кафедра «Экономика и менеджмент»',
    subjects: [
      'Анализ хозяйственной деятельности предприятия',
      'Международные экономические организации и региональные объединения',
      'Экономика стран и регионов: азиатско-тихоокеанский регион'
    ]
  },
  'teacher-loginova': {
    id: 'u_teacher_2',
    role: 'teacher',
    name: 'Логинова В. А.',
    roleTitle: 'Доцент, к.э.н.',
    dept: 'Кафедра «Менеджмент и внешнеэкономическая деятельность»',
    subjects: [
      'Организация и техника внешнеторговых операций'
    ]
  },
  'teacher-penegina': {
    id: 'u_teacher_3',
    role: 'teacher',
    name: 'Пенегина И. Т.',
    roleTitle: 'Доцент, к.э.н.',
    dept: 'Кафедра «Менеджмент и внешнеэкономическая деятельность»',
    subjects: [
      'Стратегический менеджмент'
    ]
  },
  'teacher-ostapenko': {
    id: 'u_teacher_4',
    role: 'teacher',
    name: 'Остапенко А. Б.',
    roleTitle: 'Доцент, к.ф.н.',
    dept: 'Кафедра «Иностранные языки»',
    subjects: [
      'Подготовка к международному экзамену IELTS/TOEFL'
    ]
  }
};

const DEFAULT_GROUP_HOMEWORK = [
  {
    id: 'ghw-seed-1',
    group: 'МБИ(б)-31',
    subject: 'Анализ хозяйственной деятельности предприятия',
    title: 'Практикум: Расчет показателей ликвидности',
    description: 'По данным бухгалтерского баланса предприятия (Приложение 1 методички) рассчитать коэффициент текущей и абсолютной ликвидности. Сделать выводы о платежеспособности в тетради.',
    date: '2026-09-29',
    dueDate: '2026-10-06',
    type: 'lab',
    teacherName: 'Мурашова Е. В.',
    teacherRole: 'Доцент, к.э.н.',
    link: 'https://portal.togudv.ru',
    createdAt: '2026-09-28T09:00:00.000Z'
  },
  {
    id: 'ghw-seed-2',
    group: 'МБИ(б)-31',
    subject: 'Стратегический менеджмент',
    title: 'Контрольная точка №1: Матрица BCG и SWOT',
    description: 'Подготовить аналитическую записку по диверсификации продуктового портфеля компании. Критерии оценки: полнота выводов, наглядность графиков (до 25 баллов БРС).',
    date: '2026-09-25',
    dueDate: '2026-10-02',
    type: 'brs_checkpoint',
    teacherName: 'Пенегина И. Т.',
    teacherRole: 'Доцент, к.э.н.',
    link: '',
    createdAt: '2026-09-24T10:00:00.000Z'
  },
  {
    id: 'ghw-seed-3',
    group: 'МБИ(б)-31',
    subject: 'Организация и техника внешнеторговых операций',
    title: 'Кейс-стади: Базисные условия Инкотермс 2020',
    description: 'Проанализировать внешнеторговый контракт поставки оборудования из КНР на условиях FOB Далянь и CIF Владивосток. Определить критические точки перехода рисков и расходов.',
    date: '2026-09-25',
    dueDate: '2026-10-02',
    type: 'regular',
    teacherName: 'Логинова В. А.',
    teacherRole: 'Доцент, к.э.н.',
    link: 'https://portal.togudv.ru',
    createdAt: '2026-09-24T12:00:00.000Z'
  },
  {
    id: 'ghw-seed-4',
    group: 'МБИ(б)-31',
    subject: 'Подготовка к международному экзамену IELTS/TOEFL',
    title: 'IELTS Academic Writing: Task 1 (Process Diagram)',
    description: 'Write an essay of at least 150 words describing the process diagram from Unit 4. Focus on passive voice structures and sequencing connectors.',
    date: '2026-09-30',
    dueDate: '2026-10-07',
    type: 'regular',
    teacherName: 'Остапенко А. Б.',
    teacherRole: 'Доцент, к.ф.н.',
    link: 'https://portal.togudv.ru',
    createdAt: '2026-09-29T14:00:00.000Z'
  }
];

const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 'ann-seed-1',
    group: 'МБИ(б)-31',
    author: 'Мурашова Е. В. (Кафедра ЭиМ)',
    text: 'Консультация перед защитой расчетно-графической работы пройдет в четверг в 15:30 в ауд. 301л. Явка старосте обязательна.',
    date: '2026-09-28',
    isUrgent: true,
    createdAt: '2026-09-28T08:30:00.000Z'
  }
];

const GROUP_STUDENTS_ROSTER = [
  { name: 'Алексеев Максим Сергеевич', idNum: '2023100101' },
  { name: 'Васильева Мария Дмитриевна', idNum: '2023100102' },
  { name: 'Григорьев Артем Павлович', idNum: '2023100103' },
  { name: 'Дмитриева Ксения Олеговна', idNum: '2023100104' },
  { name: 'Кузнецов Даниил Игоревич', idNum: '2023100801' },
  { name: 'Морозова Анна Петровна', idNum: '2023100106' },
  { name: 'Новиков Кирилл Евгеньевич', idNum: '2023100107' },
  { name: 'Попова Виктория Андреевна', idNum: '2023100108' },
  { name: 'Романов Егор Александрович', idNum: '2023100109' },
  { name: 'Смирнов Алексей Денисович', idNum: '2023100110' }
];

const syncChannel = (typeof window !== 'undefined' && 'BroadcastChannel' in window)
  ? new BroadcastChannel('togu_diary_sync')
  : null;

class AppState {
  constructor() {
    const today = new Date();
    this.todayStr = toDateStr(today);
    this.currentMonday = getMondayOfDate(today);

    this.selectedDateStr = this.todayStr;

    this.displayMode = localStorage.getItem('aura_schedule_mode') || 'calendar';
    this.subgroupFilter = localStorage.getItem('aura_schedule_subgroup') || 'all';
    this.scheduleFormat = localStorage.getItem('aura_schedule_format') || 'day';
    this.theme = localStorage.getItem('aura_schedule_theme') || 'dark';
    this.currentView = 'view-schedule';
    this.hwFilter = 'active';
    this.homework = this.loadHomework();
    this.grades = this.loadGrades();
    this.student = this.loadStudent();
    this.user = this.loadUser();
    this.groupHomework = this.loadGroupHomework();
    this.announcements = this.loadAnnouncements();
    this.studentCompleted = this.loadStudentCompleted();
  }

  loadUser() {
    try {
      const stored = localStorage.getItem('togu_diary_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.role) return parsed;
      }
    } catch (e) {
      console.error('Failed to load user:', e);
    }
    const student = this.loadStudent();
    return {
      id: 'u_student_default',
      role: 'student',
      name: (student && student.name) ? student.name : 'Студент',
      group: (student && student.group) ? student.group : 'МБИ(б)-31',
      course: (student && student.course) ? student.course : '3 курс',
      idNum: (student && student.idNum) ? student.idNum : ''
    };
  }

  saveUser() {
    try {
      localStorage.setItem('togu_diary_user', JSON.stringify(this.user));
      if (syncChannel) syncChannel.postMessage({ type: 'USER_CHANGED', timestamp: Date.now() });
    } catch (e) {
      console.error('Failed to save user:', e);
    }
  }

  loadGroupHomework() {
    try {
      const stored = localStorage.getItem('togu_group_homework');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load group homework:', e);
    }
    return DEFAULT_GROUP_HOMEWORK;
  }

  saveGroupHomework() {
    try {
      localStorage.setItem('togu_group_homework', JSON.stringify(this.groupHomework));
      if (syncChannel) syncChannel.postMessage({ type: 'GROUP_HW_UPDATED', timestamp: Date.now() });
    } catch (e) {
      console.error('Failed to save group homework:', e);
    }
  }

  loadAnnouncements() {
    try {
      const stored = localStorage.getItem('togu_group_announcements');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load announcements:', e);
    }
    return DEFAULT_ANNOUNCEMENTS;
  }

  saveAnnouncements() {
    try {
      localStorage.setItem('togu_group_announcements', JSON.stringify(this.announcements));
      if (syncChannel) syncChannel.postMessage({ type: 'ANNOUNCEMENT_POSTED', timestamp: Date.now() });
    } catch (e) {
      console.error('Failed to save announcements:', e);
    }
  }

  loadStudentCompleted() {
    try {
      const stored = localStorage.getItem('togu_student_completed');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch (e) {
      console.error('Failed to load completed state:', e);
    }
    return { 'ghw-seed-3': true };
  }

  saveStudentCompleted() {
    try {
      localStorage.setItem('togu_student_completed', JSON.stringify(this.studentCompleted));
      if (syncChannel) syncChannel.postMessage({ type: 'COMPLETION_UPDATED', timestamp: Date.now() });
    } catch (e) {
      console.error('Failed to save completed state:', e);
    }
  }

  toggleGroupHwCompletion(hwId, isDone) {
    this.studentCompleted[hwId] = !!isDone;
    this.saveStudentCompleted();
  }

  loadHomework() {
    try {
      const stored = localStorage.getItem('aura_schedule_homework');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {

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
      const stored = localStorage.getItem('togu_diary_student') || localStorage.getItem('aura_schedule_student');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.name && parsed.name !== 'Студент' && parsed.idNum !== '2023100990') return parsed;
      }
    } catch (e) {
      console.error('Failed to load student profile:', e);
    }
    return {
      name: '',
      group: 'МБИ(б)-31',
      idNum: '',
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

  getCurrentWeekType() {
    return getWeekTypeForMonday(this.currentMonday);
  }

  getSelectedDayKey() {
    const d = parseDateStr(this.selectedDateStr);
    const map = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
    return map[d.getDay()] || 'mon';
  }

  isViewingCurrentWeek() {
    const todayMonday = getMondayOfDate(new Date());
    return toDateStr(this.currentMonday) === toDateStr(todayMonday);
  }

  goToPrevWeek() {
    const prevM = new Date(this.currentMonday);
    prevM.setDate(prevM.getDate() - 7);
    this.currentMonday = prevM;

    const selD = parseDateStr(this.selectedDateStr);
    selD.setDate(selD.getDate() - 7);
    this.selectedDateStr = toDateStr(selD);
  }

  goToNextWeek() {
    const nextM = new Date(this.currentMonday);
    nextM.setDate(nextM.getDate() + 7);
    this.currentMonday = nextM;

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
  initOnboardingModal();
  initProfileClickHandlers();
  initAuthModal();
  initTeacherPortal();
  initSyncTools();
  initSyncBroadcastListener();

  renderApp();

  setInterval(updateLiveTicker, 30000);
  updateLiveTicker();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

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

function switchView(targetView) {
  if (!targetView) return;
  state.currentView = targetView;

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === targetView);
  });

  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === targetView);
  });

  const titleMap = {
    'view-schedule': 'Расписание учебных занятий',
    'view-homework': 'Домашние задания и дедлайны',
    'view-grades': 'Успеваемость и баллы БРС',
    'view-teacher': 'Кабинет преподавателя ТОГУ',
    'view-search': 'Справочник и поиск по вузу',
    'view-settings': 'Профиль студента и настройки'
  };
  const titleEl = document.getElementById('page-title-text');
  if (titleEl && titleMap[targetView]) {
    titleEl.textContent = titleMap[targetView];
  }

  if (targetView === 'view-schedule') {
    renderScheduleCards();
  } else if (targetView === 'view-homework') {
    renderAllHomeworkView();
  } else if (targetView === 'view-grades') {
    renderGradesView();
  } else if (targetView === 'view-teacher') {
    renderTeacherView();
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

function initFilters() {

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

  document.querySelectorAll('.hw-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hw-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.hwFilter = btn.dataset.hwFilter;
      renderAllHomeworkView();
    });
  });
}

function renderApp() {
  renderWeekBar();
  renderDayTabs();
  renderScheduleCards();
  renderTeacherAnnouncementsBanner();
  updateHomeworkBadges();
  populateSubjectDropdown();
  renderGradesView();
  updateStudentProfileUI();

  const isTeacher = state.user && state.user.role === 'teacher';
  const sideTeacherBtn = document.getElementById('sidebar-btn-teacher');
  if (sideTeacherBtn) sideTeacherBtn.classList.toggle('hidden', !isTeacher);
  const navTeacherBtn = document.getElementById('nav-btn-teacher');
  if (navTeacherBtn) navTeacherBtn.classList.toggle('hidden', !isTeacher);
}

function renderWeekBar() {
  const weekRangeEl = document.getElementById('week-range-text');
  const weekStatusPill = document.getElementById('week-status-pill');
  const todayBtn = document.getElementById('today-jump-btn');

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

  const isCurrent = state.isViewingCurrentWeek();
  todayBtn.classList.toggle('hidden', isCurrent);
}

function renderDayTabs() {
  const tabsContainer = document.getElementById('day-tabs');
  tabsContainer.innerHTML = '';

  const today = new Date();
  state.todayStr = toDateStr(today);

  for (let i = 0; i < 7; i++) {
    const tabDate = new Date(state.currentMonday);
    tabDate.setDate(tabDate.getDate() + i);

    const dateStr = toDateStr(tabDate);
    const dayMeta = DAYS_META[i];

    const tab = document.createElement('button');
    tab.className = 'day-tab';
    tab.dataset.date = dateStr;
    tab.dataset.day = dayMeta.key;

    const isToday = (dateStr === state.todayStr);
    const isSelected = (dateStr === state.selectedDateStr);

    if (isToday) tab.classList.add('today');
    if (isSelected) tab.classList.add('active');

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

  const dayPairs = SCHEDULE_DATA.filter(pair => {
    if (pair.day !== selectedDayKey) return false;

    if (state.displayMode !== 'all') {
      if (pair.week !== 'all' && pair.week !== weekType) {
        return false;
      }
    }

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

    const [startH, startM] = pair.timeStart.split(':').map(Number);
    const [endH, endM] = pair.timeEnd.split(':').map(Number);
    const startTimeVal = startH * 60 + startM;
    const endTimeVal = endH * 60 + endM;

    const isCurrent = isToday && (nowTimeVal >= startTimeVal && nowTimeVal <= endTimeVal);
    if (isCurrent) {
      card.classList.add('current-pair');
    }

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

    const isTeacher = state.user && state.user.role === 'teacher';
    const pairGroupHw = (state.groupHomework || []).filter(ghw => ghw.subject === pair.subject);

    let officialHwHtml = '';
    if (pairGroupHw.length > 0 || isTeacher) {
      const ghwItemsHtml = pairGroupHw.map(ghw => {
        const isDone = !!state.studentCompleted[ghw.id];
        return `
          <div class="card-ghw-item ${isDone ? 'completed' : ''}" data-ghw-id="${ghw.id}">
            <div class="card-ghw-top">
              <span class="badge-dept">🏛️ Кафедра · ${escapeHtml(ghw.teacherName || 'Преподаватель')}</span>
              <span class="card-ghw-due">Срок: до ${formatShortDate(ghw.dueDate)}</span>
            </div>
            <div class="card-ghw-title">${escapeHtml(ghw.title)}</div>
            <div class="card-ghw-desc">${escapeHtml(ghw.description)}</div>
            <div class="card-ghw-footer">
              ${ghw.link ? `<a href="${escapeHtml(ghw.link)}" target="_blank" rel="noopener" class="card-ghw-link">ЭУК ТОГУ ↗</a>` : '<span></span>'}
              <div style="display: flex; align-items: center; gap: 8px;">
                <label class="custom-checkbox-container" style="margin: 0; font-size: 11px;">
                  <input type="checkbox" class="card-ghw-checkbox" data-ghw-id="${ghw.id}" ${isDone ? 'checked' : ''}>
                  <span class="custom-checkbox-mark" style="width: 14px; height: 14px;"></span>
                  <span class="checkbox-text" style="font-size: 11px;">${isDone ? 'Сдано мною' : 'Отметить сданным'}</span>
                </label>
                ${isTeacher ? `<button class="card-hw-delete-btn card-ghw-del-btn" data-ghw-id="${ghw.id}" title="Снять задание кафедры">✕</button>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('');

      officialHwHtml = `
        <div class="pair-official-hw-section">
          <div class="pair-official-hw-header">
            <span class="official-hw-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Задания кафедры (${pairGroupHw.length})
            </span>
            ${isTeacher ? `
              <button class="btn-card-teacher-post" data-subject="${escapeHtml(pair.subject)}">
                + Вывесить группе
              </button>
            ` : ''}
          </div>
          ${ghwItemsHtml ? `<div class="card-hw-items">${ghwItemsHtml}</div>` : ''}
        </div>
      `;
    }

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
              Личные заметки к ${formatShortDate(state.selectedDateStr)} (${pairHomework.length})
            </span>
            <button class="btn-card-add-hw" data-subject="${escapeHtml(pair.subject)}" data-date="${state.selectedDateStr}">
              + Заметка
            </button>
          </div>
          <div class="card-hw-items">${itemsHtml}</div>
        </div>
      `;
    } else {
      hwHtml = `
        <div class="pair-homework-section">
          <div class="hw-section-header">
            <span class="hw-section-label">Личные заметки</span>
            <button class="btn-card-add-hw" data-subject="${escapeHtml(pair.subject)}" data-date="${state.selectedDateStr}">
              + Записать
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

      ${officialHwHtml}
      ${hwHtml}
    `;

    attachHomeworkCardEvents(card);
    container.appendChild(card);
  });
}

function attachHomeworkCardEvents(card) {

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

  card.querySelectorAll('.hw-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      e.stopPropagation();
      const itemEl = chk.closest('.card-hw-item');
      const hwId = itemEl.dataset.hwId;
      toggleHomeworkStatus(hwId, chk.checked);
    });
  });

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

  card.querySelectorAll('.card-hw-delete-btn').forEach(delBtn => {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemEl = delBtn.closest('.card-hw-item');
      if (itemEl) {
        const hwId = itemEl.dataset.hwId;
        deleteHomework(hwId);
      }
    });
  });

  const teacherPostBtn = card.querySelector('.btn-card-teacher-post');
  if (teacherPostBtn) {
    teacherPostBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openTeacherPostModal({ subject: teacherPostBtn.dataset.subject });
    });
  }

  card.querySelectorAll('.card-ghw-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      e.stopPropagation();
      const ghwId = chk.dataset.ghwId;
      state.toggleGroupHwCompletion(ghwId, chk.checked);
      renderApp();
      showToast(chk.checked ? 'Задание кафедры отмечено сданным!' : 'Отметка о сдаче снята');
    });
  });

  card.querySelectorAll('.card-ghw-del-btn').forEach(delBtn => {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteGroupHomework(delBtn.dataset.ghwId);
    });
  });
}

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

function toggleHomeworkStatus(hwId, isCompleted) {
  const hw = state.homework.find(h => h.id === hwId);
  if (hw) {
    hw.isCompleted = isCompleted;
    state.saveHomework();
    updateHomeworkBadges();
    renderDayTabs();
    if (state.currentView === 'view-schedule') {
      renderScheduleCards();
    } else if (state.currentView === 'view-homework') {
      renderAllHomeworkView();
    }
    showToast(isCompleted ? 'Задание выполнено' : 'Задание возвращено в активные');
  }
}

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

function renderAllHomeworkView() {
  const listContainer = document.getElementById('all-homework-list');
  const activeCountEl = document.getElementById('hw-active-count');
  const doneCountEl = document.getElementById('hw-done-count');
  const totalCountEl = document.getElementById('hw-total-count');

  const personalTasks = state.homework.map(h => ({
    ...h,
    isGroup: false,
    displayTitle: h.text,
    displayDesc: ''
  }));

  const groupTasks = (state.groupHomework || []).map(gh => ({
    id: gh.id,
    subject: gh.subject,
    displayTitle: gh.title,
    displayDesc: gh.description,
    date: gh.date,
    dueDate: gh.dueDate,
    isCompleted: !!state.studentCompleted[gh.id],
    isGroup: true,
    teacherName: gh.teacherName,
    teacherRole: gh.teacherRole,
    type: gh.type,
    link: gh.link,
    isUrgent: false
  }));

  const combinedTasks = [...groupTasks, ...personalTasks];

  const activeTasks = combinedTasks.filter(h => !h.isCompleted);
  const doneTasks = combinedTasks.filter(h => h.isCompleted);

  if (activeCountEl) activeCountEl.textContent = activeTasks.length;
  if (doneCountEl) doneCountEl.textContent = doneTasks.length;
  if (totalCountEl) totalCountEl.textContent = combinedTasks.length;

  let displayTasks = [];
  if (state.hwFilter === 'active') {
    displayTasks = activeTasks;
  } else if (state.hwFilter === 'completed') {
    displayTasks = doneTasks;
  } else {
    displayTasks = combinedTasks;
  }

  displayTasks.sort((a, b) => {
    if (a.isCompleted !== b.isCompleted) return a.isCompleted ? 1 : -1;
    if (a.isGroup !== b.isGroup) return a.isGroup ? -1 : 1;
    const dateA = a.dueDate || a.date || '';
    const dateB = b.dueDate || b.date || '';
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

  const isTeacher = state.user && state.user.role === 'teacher';

  displayTasks.forEach(hw => {
    const card = document.createElement('div');
    card.className = `hw-full-card ${hw.isGroup ? 'official-hw-card' : ''} ${hw.isCompleted ? 'completed' : ''}`;
    card.dataset.hwId = hw.id;

    const classDateFormatted = hw.date ? formatFullDate(hw.date) : '';
    const dueDateFormatted = hw.dueDate ? formatShortDate(hw.dueDate) : '';

    const headerBadge = hw.isGroup
      ? `<span class="badge-dept" style="margin-bottom: 4px; display: inline-block;">🏛️ Кафедра · ${escapeHtml(hw.teacherName || 'Преподаватель')}</span>`
      : '';

    card.innerHTML = `
      <input type="checkbox" class="hw-checkbox" ${hw.isCompleted ? 'checked' : ''} aria-label="Отметить">
      <div class="hw-full-content" style="cursor: pointer;">
        ${headerBadge}
        <span class="hw-full-subject">${escapeHtml(hw.subject)}</span>
        <div class="hw-full-text" style="font-weight: ${hw.isGroup ? '700' : '500'};">${escapeHtml(hw.displayTitle)}</div>
        ${hw.displayDesc ? `<div class="card-ghw-desc" style="margin-top: 4px;">${escapeHtml(hw.displayDesc)}</div>` : ''}
        <div class="hw-full-meta">
          ${classDateFormatted ? `<span>Занятие: ${classDateFormatted}</span>` : ''}
          ${dueDateFormatted ? `<span>Дедлайн: ${dueDateFormatted}</span>` : ''}
          ${hw.isUrgent ? `<span class="hw-urgent-tag">Срочно</span>` : ''}
          ${hw.link ? `<a href="${escapeHtml(hw.link)}" target="_blank" rel="noopener" class="hw-full-link">Материалы ↗</a>` : ''}
        </div>
      </div>
      ${(!hw.isGroup || isTeacher) ? `<button class="card-hw-delete-btn" aria-label="Удалить" title="Удалить">✕</button>` : ''}
    `;

    card.querySelector('.hw-checkbox').addEventListener('change', (e) => {
      e.stopPropagation();
      if (hw.isGroup) {
        state.toggleGroupHwCompletion(hw.id, e.target.checked);
        renderAllHomeworkView();
        updateHomeworkBadges();
        showToast(e.target.checked ? 'Задание кафедры отмечено сданным!' : 'Отметка снята');
      } else {
        toggleHomeworkStatus(hw.id, e.target.checked);
      }
    });

    card.querySelector('.hw-full-content').addEventListener('click', () => {
      if (hw.isGroup) {
        if (isTeacher) {
          const ghw = state.groupHomework.find(h => h.id === hw.id);
          if (ghw) openTeacherPostModal(ghw);
        } else {
          showToast(`Задание кафедры: ${hw.displayTitle}`);
        }
      } else {
        openHomeworkModal(hw);
      }
    });

    const delBtn = card.querySelector('.card-hw-delete-btn');
    if (delBtn) {
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (hw.isGroup) {
          deleteGroupHomework(hw.id);
        } else {
          deleteHomework(hw.id);
        }
      });
    }

    listContainer.appendChild(card);
  });
}

function renderGradesView() {
  const container = document.getElementById('grades-cards-list');
  const avgValEl = document.getElementById('brs-avg-val');
  const avgStatusEl = document.getElementById('brs-avg-status');
  const dopuskEl = document.getElementById('brs-dopusk-val');
  const stipendEl = document.getElementById('brs-stipend-val');
  const stipendSubEl = document.getElementById('brs-stipend-sub');

  if (!container || !state.grades) return;

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

function initHomeworkModal() {
  const backdrop = document.getElementById('hw-modal-backdrop');
  const closeBtn = document.getElementById('hw-modal-close');
  const form = document.getElementById('hw-form');
  const deleteBtn = document.getElementById('hw-delete-btn');

  closeBtn.addEventListener('click', closeHomeworkModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeHomeworkModal();
  });

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
        nextDate.setDate(nextDate.getDate() + 7);
        dueDateInput.value = toDateStr(nextDate);
      } else if (preset === 'tomorrow') {
        const tomDate = new Date(baseDate);
        tomDate.setDate(tomDate.getDate() + 1);
        dueDateInput.value = toDateStr(tomDate);
      }
    });
  });

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

    modalTitle.textContent = 'Записать домашку к дате';
    editIdInput.value = '';
    if (presetData.subject) {
      subjectSelect.value = presetData.subject;
    }
    const targetDate = presetData.date || state.selectedDateStr;
    dateInput.value = targetDate;
    textInput.value = '';

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

function populateSubjectDropdown() {
  const select = document.getElementById('hw-subject-select');
  if (select.children.length > 0) return;

  const subjects = [...new Set(SCHEDULE_DATA.map(p => p.subject))].sort();
  select.innerHTML = subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
}

function updateHomeworkBadges() {
  const badgeTotal = document.getElementById('badge-hw-total');
  const sidebarBadge = document.getElementById('sidebar-badge-hw');
  const activePersonal = state.homework.filter(h => !h.isCompleted).length;
  const activeGroup = (state.groupHomework || []).filter(gh => !state.studentCompleted[gh.id]).length;
  const activeCount = activePersonal + activeGroup;

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

    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {

        advanceDay(1);
      } else {

        advanceDay(-1);
      }
    }
  }, { passive: true });
}

function advanceDay(offset) {
  const cur = parseDateStr(state.selectedDateStr);
  cur.setDate(cur.getDate() + offset);
  state.selectedDateStr = toDateStr(cur);

  const newMonday = getMondayOfDate(cur);
  state.currentMonday = newMonday;

  renderApp();
}

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

            state.homework = imported;
            state.saveHomework();
          } else if (imported && typeof imported === 'object') {

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

function updateStudentProfileUI() {
  const u = state.user || { role: 'student', name: 'Студент', group: 'МБИ(б)-31' };
  const displayName = (u.name && u.name.trim()) ? u.name.trim() : 'Студент';

  const headerStudent = document.getElementById('header-student-name');
  if (headerStudent) headerStudent.textContent = displayName;

  const headerGroup = document.getElementById('header-group-name');
  if (headerGroup) headerGroup.textContent = u.role === 'teacher' ? (u.dept ? u.dept.replace('Кафедра ', '') : 'Кафедра') : (u.group || 'МБИ(б)-31');

  const sideName = document.getElementById('sidebar-student-name');
  if (sideName) sideName.textContent = displayName;

  const sideGroup = document.getElementById('sidebar-student-group');
  if (sideGroup) sideGroup.textContent = u.role === 'teacher' ? (u.roleTitle || 'Преподаватель') : (u.group || 'МБИ(б)-31');

  const sideCourse = document.getElementById('sidebar-student-course');
  if (sideCourse) sideCourse.textContent = u.role === 'teacher' ? (u.dept || 'ТОГУ') : (u.course || '3 курс');

  const roleText = u.role === 'teacher' ? 'Преподаватель' : (u.role === 'starosta' ? 'Староста' : 'Студент');
  const roleClass = u.role === 'teacher' ? 'role-teacher' : (u.role === 'starosta' ? 'role-starosta' : 'role-student');

  const sideBadge = document.getElementById('sidebar-role-badge');
  if (sideBadge) {
    sideBadge.textContent = roleText;
    sideBadge.className = `sidebar-role-badge ${roleClass}`;
  }

  const headPill = document.getElementById('header-role-pill');
  if (headPill) {
    headPill.textContent = roleText;
    headPill.className = `mobile-role-pill ${roleClass}`;
  }

  const avatar = document.getElementById('sidebar-avatar-initials');
  if (avatar) {
    if (u.name && u.name.trim()) {
      const parts = u.name.trim().split(/\s+/);
      avatar.textContent = parts.map(p => p[0]).slice(0, 2).join('').toUpperCase();
    } else {
      avatar.textContent = u.role === 'teacher' ? 'ПР' : 'СТ';
    }
  }

  const authAvatar = document.getElementById('auth-profile-avatar');
  if (authAvatar) {
    authAvatar.textContent = avatar ? avatar.textContent : 'СТ';
  }
  const authName = document.getElementById('auth-profile-name');
  if (authName) authName.textContent = displayName;
  const authMeta = document.getElementById('auth-profile-meta');
  if (authMeta) authMeta.textContent = `Роль: ${roleText} · ${u.role === 'teacher' ? (u.dept || 'Кафедра') : (u.group || 'МБИ(б)-31')}`;

  const setStudentName = document.getElementById('setting-student-name');
  if (setStudentName && setStudentName !== document.activeElement) setStudentName.value = u.name || '';

  const setStudentGroup = document.getElementById('setting-student-group');
  if (setStudentGroup && setStudentGroup !== document.activeElement) setStudentGroup.value = u.group || 'МБИ(б)-31';

  const setStudentId = document.getElementById('setting-student-id');
  if (setStudentId && setStudentId !== document.activeElement) setStudentId.value = u.idNum || '';
}

function initProfileClickHandlers() {
  const sidebarCard = document.getElementById('sidebar-student-card');
  if (sidebarCard) {
    sidebarCard.addEventListener('click', () => {
      openAuthModal();
    });
  }

  const mobileProfile = document.getElementById('header-profile-block');
  if (mobileProfile) {
    mobileProfile.addEventListener('click', () => {
      openAuthModal();
    });
  }
}

function initOnboardingModal() {
  const backdrop = document.getElementById('onboarding-modal-backdrop');
  const closeBtn = document.getElementById('onboarding-modal-close');
  const form = document.getElementById('onboarding-form');
  const nameInput = document.getElementById('onboarding-name-input');
  const groupInput = document.getElementById('onboarding-group-input');
  const idInput = document.getElementById('onboarding-id-input');

  if (!backdrop || !form) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeOnboardingModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeOnboardingModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const group = groupInput.value.trim() || 'МБИ(б)-31';
    const idNum = idInput ? idInput.value.trim() : '';

    if (!name) return;

    state.student.name = name;
    state.student.group = group;
    state.student.idNum = idNum;
    state.saveStudent();

    updateStudentProfileUI();
    closeOnboardingModal();
    showToast(`Добро пожаловать, ${name}!`);
  });

  const storedStudent = localStorage.getItem('aura_schedule_student');
  if (!storedStudent || !state.student.name) {
    setTimeout(() => {
      openOnboardingModal();
    }, 450);
  }
}

function openOnboardingModal() {
  const backdrop = document.getElementById('onboarding-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('hidden');
    const nameInput = document.getElementById('onboarding-name-input');
    if (nameInput) setTimeout(() => nameInput.focus(), 150);
  }
}

function closeOnboardingModal() {
  const backdrop = document.getElementById('onboarding-modal-backdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

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

function initDesktopKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {

    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key === '1') {
      switchView('view-schedule');
    } else if (e.key === '2') {
      switchView('view-homework');
    } else if (e.key === '3') {
      switchView('view-grades');
    } else if (e.key === '4') {
      if (state.user && state.user.role === 'teacher') switchView('view-teacher');
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


// ==========================================
// Phase 2: Teacher Portal, Auth & Sync Logic
// ==========================================

function initAuthModal() {
  const backdrop = document.getElementById('auth-modal-backdrop');
  const closeBtn = document.getElementById('auth-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeAuthModal();
    });
  }

  const quickTabBtn = document.getElementById('authtab-btn-quick');
  const regTabBtn = document.getElementById('authtab-btn-register');
  const quickPanel = document.getElementById('authtab-quick-switch');
  const regPanel = document.getElementById('authtab-register');

  if (quickTabBtn && regTabBtn) {
    quickTabBtn.addEventListener('click', () => {
      quickTabBtn.classList.add('active');
      regTabBtn.classList.remove('active');
      quickPanel.classList.remove('hidden');
      quickPanel.classList.add('active');
      regPanel.classList.add('hidden');
      regPanel.classList.remove('active');
    });

    regTabBtn.addEventListener('click', () => {
      regTabBtn.classList.add('active');
      quickTabBtn.classList.remove('active');
      regPanel.classList.remove('hidden');
      regPanel.classList.add('active');
      quickPanel.classList.add('hidden');
      quickPanel.classList.remove('active');
    });
  }

  document.querySelectorAll('.account-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const userKey = btn.dataset.quickUser;
      if (DEFAULT_USERS[userKey]) {
        switchActiveUser(DEFAULT_USERS[userKey]);
        closeAuthModal();
        showToast(`Вы вошли как: ${DEFAULT_USERS[userKey].name}`);
      }
    });
  });

  const studentRoleBtn = document.getElementById('role-select-student');
  const teacherRoleBtn = document.getElementById('role-select-teacher');
  const groupField = document.getElementById('auth-group-field');
  const deptField = document.getElementById('auth-dept-field');
  const subjectField = document.getElementById('auth-subject-field');
  let selectedRole = 'student';

  if (studentRoleBtn && teacherRoleBtn) {
    studentRoleBtn.addEventListener('click', () => {
      selectedRole = 'student';
      studentRoleBtn.classList.add('active');
      teacherRoleBtn.classList.remove('active');
      if (groupField) groupField.classList.remove('hidden');
      if (deptField) deptField.classList.add('hidden');
      if (subjectField) subjectField.classList.add('hidden');
    });

    teacherRoleBtn.addEventListener('click', () => {
      selectedRole = 'teacher';
      teacherRoleBtn.classList.add('active');
      studentRoleBtn.classList.remove('active');
      if (groupField) groupField.classList.add('hidden');
      if (deptField) deptField.classList.remove('hidden');
      if (subjectField) subjectField.classList.remove('hidden');
    });
  }

  const form = document.getElementById('auth-custom-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('auth-name-input');
      const name = nameInput ? nameInput.value.trim() : '';
      if (!name) return;

      const isTeacher = selectedRole === 'teacher';
      const groupInput = document.getElementById('auth-group-input');
      const deptInput = document.getElementById('auth-dept-input');
      const subInput = document.getElementById('auth-subject-input');

      const customUser = {
        id: 'u_' + Date.now(),
        role: isTeacher ? 'teacher' : 'student',
        name: name,
        group: isTeacher ? '' : (groupInput && groupInput.value.trim() ? groupInput.value.trim() : 'МБИ(б)-31'),
        course: isTeacher ? '' : '3 курс',
        dept: isTeacher ? (deptInput && deptInput.value.trim() ? deptInput.value.trim() : 'Кафедра ТОГУ') : '',
        roleTitle: isTeacher ? 'Преподаватель' : '',
        subjects: isTeacher ? (subInput && subInput.value.trim() ? subInput.value.split(',').map(s => s.trim()).filter(Boolean) : []) : []
      };

      switchActiveUser(customUser);
      closeAuthModal();
      showToast(`Вы вошли как: ${customUser.name}`);
    });
  }
}

function openAuthModal() {
  const backdrop = document.getElementById('auth-modal-backdrop');
  if (!backdrop) return;
  updateStudentProfileUI();

  const currentKey = Object.keys(DEFAULT_USERS).find(k => DEFAULT_USERS[k].name === state.user.name);
  document.querySelectorAll('.account-choice-btn').forEach(btn => {
    btn.classList.toggle('selected-account', btn.dataset.quickUser === currentKey);
  });

  backdrop.classList.remove('hidden');
  setTimeout(() => backdrop.classList.add('open'), 10);
}

function closeAuthModal() {
  const backdrop = document.getElementById('auth-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  setTimeout(() => backdrop.classList.add('hidden'), 200);
}

function switchActiveUser(userObj) {
  state.user = { ...userObj };
  state.saveUser();

  if (state.user.role === 'student' || state.user.role === 'starosta') {
    state.student.name = state.user.name;
    state.student.group = state.user.group || 'МБИ(б)-31';
    state.saveStudent();
  }

  if (state.currentView === 'view-teacher' && state.user.role !== 'teacher') {
    switchView('view-schedule');
  }

  renderApp();
}

function renderTeacherAnnouncementsBanner() {
  const banner = document.getElementById('teacher-announcements-banner');
  if (!banner) return;

  if (!state.announcements || state.announcements.length === 0) {
    banner.innerHTML = '';
    banner.classList.add('hidden');
    return;
  }

  banner.classList.remove('hidden');
  const isTeacher = state.user && state.user.role === 'teacher';

  banner.innerHTML = state.announcements.map(ann => `
    <div class="announcement-banner-item ${ann.isUrgent ? 'urgent' : ''}" data-ann-id="${ann.id}">
      <div class="announcement-icon-badge">${ann.isUrgent ? '⚠️' : '📢'}</div>
      <div class="announcement-body">
        <div class="announcement-header">
          <span class="announcement-author">${escapeHtml(ann.author || 'Кафедра')}</span>
          <span class="announcement-date">${formatShortDate(ann.date)}</span>
          ${ann.isUrgent ? '<span class="hw-urgent-tag">Важно</span>' : ''}
        </div>
        <div class="announcement-text">${escapeHtml(ann.text)}</div>
      </div>
      ${isTeacher ? `<button class="announcement-dismiss-btn" data-delete-ann="${ann.id}" title="Удалить объявление">✕</button>` : ''}
    </div>
  `).join('');

  banner.querySelectorAll('.announcement-dismiss-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteAnnouncement(btn.dataset.deleteAnn);
    });
  });
}

function deleteAnnouncement(annId) {
  state.announcements = state.announcements.filter(a => a.id !== annId);
  state.saveAnnouncements();
  renderTeacherAnnouncementsBanner();
  if (state.currentView === 'view-teacher') renderTeacherView();
  showToast('Объявление удалено');
}

function initTeacherPortal() {
  const switchBtn = document.getElementById('teacher-profile-switch-btn');
  if (switchBtn) switchBtn.addEventListener('click', openAuthModal);

  const openHwBtn = document.getElementById('open-teacher-hw-btn');
  if (openHwBtn) {
    openHwBtn.addEventListener('click', () => {
      openTeacherPostModal();
    });
  }

  const tabHw = document.getElementById('ttab-btn-hw');
  const tabAnn = document.getElementById('ttab-btn-ann');
  const tabStudents = document.getElementById('ttab-btn-students');

  const contentHw = document.getElementById('teacher-tab-posted-hw');
  const contentAnn = document.getElementById('teacher-tab-announcements');
  const contentStudents = document.getElementById('teacher-tab-group-students');

  function setTeacherTab(tabKey) {
    [tabHw, tabAnn, tabStudents].forEach(b => {
      if (b) b.classList.toggle('active', b.dataset.ttab === tabKey);
    });
    if (contentHw) {
      contentHw.classList.toggle('active', tabKey === 'posted-hw');
      contentHw.classList.toggle('hidden', tabKey !== 'posted-hw');
    }
    if (contentAnn) {
      contentAnn.classList.toggle('active', tabKey === 'announcements');
      contentAnn.classList.toggle('hidden', tabKey !== 'announcements');
    }
    if (contentStudents) {
      contentStudents.classList.toggle('active', tabKey === 'group-students');
      contentStudents.classList.toggle('hidden', tabKey !== 'group-students');
    }
  }

  if (tabHw) tabHw.addEventListener('click', () => setTeacherTab('posted-hw'));
  if (tabAnn) tabAnn.addEventListener('click', () => setTeacherTab('announcements'));
  if (tabStudents) tabStudents.addEventListener('click', () => setTeacherTab('group-students'));

  const annForm = document.getElementById('announcement-form');
  if (annForm) {
    annForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const textInput = document.getElementById('announcement-text-input');
      const urgentInput = document.getElementById('announcement-is-urgent');
      const text = textInput ? textInput.value.trim() : '';
      if (!text) return;

      const newAnn = {
        id: 'ann-' + Date.now(),
        group: 'МБИ(б)-31',
        author: `${state.user.name} (${state.user.dept ? state.user.dept.replace('Кафедра ', '') : 'Кафедра'})`,
        text: text,
        date: toDateStr(new Date()),
        isUrgent: urgentInput ? urgentInput.checked : false,
        createdAt: new Date().toISOString()
      };

      state.announcements.unshift(newAnn);
      state.saveAnnouncements();
      textInput.value = '';
      if (urgentInput) urgentInput.checked = false;

      renderTeacherAnnouncementsBanner();
      renderTeacherView();
      showToast('Объявление опубликовано для группы!');
    });
  }

  const postBackdrop = document.getElementById('teacher-post-modal-backdrop');
  const postCloseBtn = document.getElementById('teacher-post-modal-close');
  if (postCloseBtn) postCloseBtn.addEventListener('click', closeTeacherPostModal);
  if (postBackdrop) {
    postBackdrop.addEventListener('click', (e) => {
      if (e.target === postBackdrop) closeTeacherPostModal();
    });
  }

  const postForm = document.getElementById('teacher-post-hw-form');
  if (postForm) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const editId = document.getElementById('teacher-post-edit-id').value;
      const group = document.getElementById('teacher-post-group').value.trim() || 'МБИ(б)-31';
      const subject = document.getElementById('teacher-post-subject').value;
      const type = document.getElementById('teacher-post-type').value;
      const title = document.getElementById('teacher-post-title').value.trim();
      const desc = document.getElementById('teacher-post-text').value.trim();
      const dueDate = document.getElementById('teacher-post-due-date').value;
      const link = document.getElementById('teacher-post-link').value.trim();

      if (editId) {
        const idx = state.groupHomework.findIndex(h => h.id === editId);
        if (idx !== -1) {
          state.groupHomework[idx] = {
            ...state.groupHomework[idx],
            group, subject, type, title, description: desc, dueDate, link
          };
          showToast('Задание кафедры обновлено');
        }
      } else {
        const newGhw = {
          id: 'ghw-' + Date.now(),
          group: group,
          subject: subject,
          title: title,
          description: desc,
          date: state.selectedDateStr || toDateStr(new Date()),
          dueDate: dueDate,
          type: type,
          teacherName: state.user.name || 'Преподаватель ТОГУ',
          teacherRole: state.user.roleTitle || 'Преподаватель',
          link: link,
          createdAt: new Date().toISOString()
        };
        state.groupHomework.unshift(newGhw);
        showToast('Задание вывешено для всей группы!');
      }

      state.saveGroupHomework();
      closeTeacherPostModal();
      renderApp();
      if (state.currentView === 'view-teacher') renderTeacherView();
    });
  }

  const postDeleteBtn = document.getElementById('teacher-post-delete-btn');
  if (postDeleteBtn) {
    postDeleteBtn.addEventListener('click', () => {
      const editId = document.getElementById('teacher-post-edit-id').value;
      if (editId) {
        deleteGroupHomework(editId);
        closeTeacherPostModal();
      }
    });
  }
}

function openTeacherPostModal(preset = {}) {
  const backdrop = document.getElementById('teacher-post-modal-backdrop');
  if (!backdrop) return;

  const titleEl = document.getElementById('teacher-modal-title');
  const editIdInput = document.getElementById('teacher-post-edit-id');
  const groupInput = document.getElementById('teacher-post-group');
  const subjectSelect = document.getElementById('teacher-post-subject');
  const typeSelect = document.getElementById('teacher-post-type');
  const postTitleInput = document.getElementById('teacher-post-title');
  const textInput = document.getElementById('teacher-post-text');
  const dueDateInput = document.getElementById('teacher-post-due-date');
  const linkInput = document.getElementById('teacher-post-link');
  const deleteBtn = document.getElementById('teacher-post-delete-btn');

  const allSubjects = [...new Set(SCHEDULE_DATA.map(p => p.subject))].sort();
  const teacherSubs = (state.user && state.user.subjects) ? state.user.subjects : [];

  let optionsHtml = '';
  if (teacherSubs.length > 0) {
    optionsHtml += `<optgroup label="Мои дисциплины">` +
      teacherSubs.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('') +
      `</optgroup>`;
    const otherSubs = allSubjects.filter(s => !teacherSubs.includes(s));
    if (otherSubs.length > 0) {
      optionsHtml += `<optgroup label="Все дисциплины">` +
        otherSubs.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('') +
        `</optgroup>`;
    }
  } else {
    optionsHtml = allSubjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
  }
  subjectSelect.innerHTML = optionsHtml;

  if (preset.id) {
    titleEl.textContent = 'Редактировать задание кафедры';
    editIdInput.value = preset.id;
    groupInput.value = preset.group || 'МБИ(б)-31';
    if (preset.subject) subjectSelect.value = preset.subject;
    typeSelect.value = preset.type || 'regular';
    postTitleInput.value = preset.title || '';
    textInput.value = preset.description || '';
    dueDateInput.value = preset.dueDate || toDateStr(new Date());
    linkInput.value = preset.link || '';
    deleteBtn.classList.remove('hidden');
  } else {
    titleEl.textContent = 'Вывесить задание для группы';
    editIdInput.value = '';
    groupInput.value = 'МБИ(б)-31';
    if (preset.subject) {
      subjectSelect.value = preset.subject;
    } else if (teacherSubs.length > 0) {
      subjectSelect.value = teacherSubs[0];
    }
    typeSelect.value = preset.type || 'regular';
    postTitleInput.value = '';
    textInput.value = '';
    const defDue = new Date();
    defDue.setDate(defDue.getDate() + 7);
    dueDateInput.value = toDateStr(defDue);
    linkInput.value = '';
    deleteBtn.classList.add('hidden');
  }

  backdrop.classList.remove('hidden');
  setTimeout(() => backdrop.classList.add('open'), 10);
  setTimeout(() => postTitleInput.focus(), 200);
}

function closeTeacherPostModal() {
  const backdrop = document.getElementById('teacher-post-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  setTimeout(() => backdrop.classList.add('hidden'), 200);
}

function deleteGroupHomework(ghwId) {
  state.groupHomework = state.groupHomework.filter(h => h.id !== ghwId);
  delete state.studentCompleted[ghwId];
  state.saveGroupHomework();
  state.saveStudentCompleted();
  renderApp();
  if (state.currentView === 'view-teacher') renderTeacherView();
  showToast('Задание кафедры снято');
}

function renderTeacherView() {
  const u = state.user || { role: 'teacher', name: 'Преподаватель', dept: 'ТОГУ' };

  const nameEl = document.getElementById('teacher-view-name');
  if (nameEl) nameEl.textContent = u.name;

  const deptEl = document.getElementById('teacher-view-dept');
  if (deptEl) deptEl.textContent = u.dept || (u.roleTitle ? `${u.roleTitle} ТОГУ` : 'Кафедра ТОГУ');

  const avatarEl = document.getElementById('teacher-avatar-big');
  if (avatarEl) {
    const parts = (u.name || 'ПР').trim().split(/\s+/);
    avatarEl.textContent = parts.map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }

  const subjectsEl = document.getElementById('teacher-view-subjects');
  if (subjectsEl) {
    const subs = u.subjects && u.subjects.length > 0
      ? u.subjects
      : ['Все предметы кафедры'];
    subjectsEl.innerHTML = subs.map(s => `<span class="subject-tag">${escapeHtml(s)}</span>`).join('');
  }

  const hwCountEl = document.getElementById('teacher-hw-count');
  if (hwCountEl) hwCountEl.textContent = state.groupHomework.length;

  const annCountEl = document.getElementById('teacher-ann-count');
  if (annCountEl) annCountEl.textContent = state.announcements.length;

  const hwList = document.getElementById('teacher-hw-list');
  if (hwList) {
    if (state.groupHomework.length === 0) {
      hwList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <h3>Нет опубликованных заданий</h3>
          <p>Нажмите «Вывесить ДЗ группе», чтобы опубликовать задачу, лабораторную или контрольную точку.</p>
        </div>
      `;
    } else {
      const typeLabels = {
        regular: 'Домашнее задание',
        lab: 'Лабораторная работа',
        brs_checkpoint: 'Контрольная точка БРС',
        exam_debt: 'Зачёт / Экзамен'
      };

      hwList.innerHTML = state.groupHomework.map(ghw => {
        const totalRoster = GROUP_STUDENTS_ROSTER.length;
        let completedCount = 0;
        if (state.studentCompleted[ghw.id]) completedCount = 1;
        const pseudoDone = (ghw.id.length * 3) % (totalRoster - 1) + 2;
        const displayDone = Math.min(totalRoster, Math.max(completedCount, pseudoDone));

        return `
          <div class="teacher-post-card">
            <div class="teacher-post-header">
              <div class="teacher-post-title-col">
                <span class="teacher-post-subject">${escapeHtml(ghw.subject)}</span>
                <h4 class="teacher-post-title">${escapeHtml(ghw.title)}</h4>
              </div>
              <span class="teacher-status-badge">${typeLabels[ghw.type] || 'Задание'}</span>
            </div>
            <div class="teacher-post-meta-row">
              <span>Целевая группа: <b>${escapeHtml(ghw.group || 'МБИ(б)-31')}</b></span>
              <span>Дедлайн: <b>${formatShortDate(ghw.dueDate)}</b></span>
            </div>
            <div class="teacher-post-text">${escapeHtml(ghw.description)}</div>
            ${ghw.link ? `<div style="font-size: 12px;"><a href="${escapeHtml(ghw.link)}" target="_blank" rel="noopener" class="card-ghw-link">ЭУК ТОГУ / Портал ↗</a></div>` : ''}

            <div class="teacher-post-footer">
              <div class="teacher-post-stats">
                Сдано студентами: <b>${displayDone} из ${totalRoster}</b>
              </div>
              <div class="teacher-post-actions">
                <button class="btn btn-secondary btn-sm teacher-edit-btn" data-ghw-id="${ghw.id}">Редактировать</button>
                <button class="btn btn-danger-subtle btn-sm teacher-del-btn" data-ghw-id="${ghw.id}">Снять</button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      hwList.querySelectorAll('.teacher-edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ghw = state.groupHomework.find(h => h.id === btn.dataset.ghwId);
          if (ghw) openTeacherPostModal(ghw);
        });
      });

      hwList.querySelectorAll('.teacher-del-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          deleteGroupHomework(btn.dataset.ghwId);
        });
      });
    }
  }

  const annList = document.getElementById('teacher-announcements-list');
  if (annList) {
    if (state.announcements.length === 0) {
      annList.innerHTML = '<p class="settings-hint">Нет активных объявлений.</p>';
    } else {
      annList.innerHTML = state.announcements.map(ann => `
        <div class="announcement-banner-item ${ann.isUrgent ? 'urgent' : ''}">
          <div class="announcement-icon-badge">${ann.isUrgent ? '⚠️' : '📢'}</div>
          <div class="announcement-body">
            <div class="announcement-header">
              <span class="announcement-author">${escapeHtml(ann.author)}</span>
              <span class="announcement-date">${formatShortDate(ann.date)}</span>
              ${ann.isUrgent ? '<span class="hw-urgent-tag">Важно</span>' : ''}
            </div>
            <div class="announcement-text">${escapeHtml(ann.text)}</div>
          </div>
          <button class="announcement-dismiss-btn btn-del-ann" data-ann-id="${ann.id}" title="Удалить">✕</button>
        </div>
      `).join('');

      annList.querySelectorAll('.btn-del-ann').forEach(btn => {
        btn.addEventListener('click', () => {
          deleteAnnouncement(btn.dataset.annId);
        });
      });
    }
  }

  const rosterList = document.getElementById('teacher-students-roster');
  if (rosterList) {
    const totalAssignments = state.groupHomework.length || 1;
    rosterList.innerHTML = GROUP_STUDENTS_ROSTER.map((student, idx) => {
      const doneRatio = (idx === 4) ? 1.0 : (0.6 + ((idx * 7) % 4) * 0.1);
      const studentDone = Math.min(totalAssignments, Math.round(totalAssignments * doneRatio));
      const isAllDone = studentDone >= totalAssignments;
      const initials = student.name.split(' ').map(p => p[0]).slice(0, 2).join('');

      return `
        <div class="roster-student-item">
          <div class="roster-student-info">
            <div class="roster-student-avatar">${initials}</div>
            <div>
              <div class="roster-student-name">${escapeHtml(student.name)}</div>
              <div class="roster-student-sub">Зачетка № ${student.idNum}</div>
            </div>
          </div>
          <div class="roster-check-pill ${isAllDone ? 'done' : 'pending'}">
            ${studentDone} / ${totalAssignments} сдано
          </div>
        </div>
      `;
    }).join('');
  }
}

function initSyncTools() {
  const syncBackdrop = document.getElementById('sync-code-modal-backdrop');
  const syncClose = document.getElementById('sync-modal-close');
  if (syncClose) {
    syncClose.addEventListener('click', () => {
      syncBackdrop.classList.remove('open');
      setTimeout(() => syncBackdrop.classList.add('hidden'), 200);
    });
  }
  if (syncBackdrop) {
    syncBackdrop.addEventListener('click', (e) => {
      if (e.target === syncBackdrop) {
        syncBackdrop.classList.remove('open');
        setTimeout(() => syncBackdrop.classList.add('hidden'), 200);
      }
    });
  }

  const exportBtn = document.getElementById('export-group-code-btn');
  const importBtn = document.getElementById('import-group-code-btn');
  const actionBtn = document.getElementById('sync-code-action-btn');
  const syncTextarea = document.getElementById('sync-code-textarea');
  const syncTitle = document.getElementById('sync-modal-title');
  const syncHint = document.getElementById('sync-modal-hint');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      syncTitle.textContent = 'Код синхронизации группы МБИ(б)-31';
      syncHint.textContent = 'Скопируйте этот JSON-код и отправьте одногруппникам. При вставке они получат все актуальные задания кафедры и объявления.';
      const payload = {
        version: 1,
        group: 'МБИ(б)-31',
        exportedAt: new Date().toISOString(),
        groupHomework: state.groupHomework,
        announcements: state.announcements
      };
      syncTextarea.value = JSON.stringify(payload, null, 2);
      actionBtn.textContent = '📋 Скопировать в буфер';
      actionBtn.onclick = () => {
        navigator.clipboard.writeText(syncTextarea.value).then(() => {
          showToast('Код синхронизации скопирован!');
        }).catch(() => {
          syncTextarea.select();
          showToast('Выделите и скопируйте текст');
        });
      };

      syncBackdrop.classList.remove('hidden');
      setTimeout(() => syncBackdrop.classList.add('open'), 10);
    });
  }

  if (importBtn) {
    importBtn.addEventListener('click', () => {
      syncTitle.textContent = 'Импорт базы группы';
      syncHint.textContent = 'Вставьте сюда JSON-код, полученный от преподавателя или старосты:';
      syncTextarea.value = '';
      actionBtn.textContent = '📥 Импортировать задания';
      actionBtn.onclick = () => {
        try {
          const raw = syncTextarea.value.trim();
          if (!raw) return showToast('Вставьте код в поле');
          const data = JSON.parse(raw);
          let addedHw = 0;
          let addedAnn = 0;

          if (Array.isArray(data.groupHomework)) {
            data.groupHomework.forEach(item => {
              if (!state.groupHomework.some(h => h.id === item.id)) {
                state.groupHomework.push(item);
                addedHw++;
              }
            });
            state.saveGroupHomework();
          }

          if (Array.isArray(data.announcements)) {
            data.announcements.forEach(item => {
              if (!state.announcements.some(a => a.id === item.id)) {
                state.announcements.push(item);
                addedAnn++;
              }
            });
            state.saveAnnouncements();
          }

          syncBackdrop.classList.remove('open');
          setTimeout(() => syncBackdrop.classList.add('hidden'), 200);
          renderApp();
          showToast(`Импортировано: ${addedHw} заданий, ${addedAnn} объявлений!`);
        } catch (e) {
          showToast('Ошибка: неверный формат кода');
        }
      };

      syncBackdrop.classList.remove('hidden');
      setTimeout(() => syncBackdrop.classList.add('open'), 10);
      setTimeout(() => syncTextarea.focus(), 200);
    });
  }

  const saveCloudBtn = document.getElementById('save-cloud-settings-btn');
  if (saveCloudBtn) {
    const urlInput = document.getElementById('setting-supabase-url');
    const keyInput = document.getElementById('setting-supabase-key');
    if (urlInput && localStorage.getItem('togu_supabase_url')) {
      urlInput.value = localStorage.getItem('togu_supabase_url');
    }
    if (keyInput && localStorage.getItem('togu_supabase_key')) {
      keyInput.value = localStorage.getItem('togu_supabase_key');
    }

    saveCloudBtn.addEventListener('click', () => {
      if (urlInput) localStorage.setItem('togu_supabase_url', urlInput.value.trim());
      if (keyInput) localStorage.setItem('togu_supabase_key', keyInput.value.trim());
      showToast('Настройки облачной базы сохранены');
    });
  }
}

function initSyncBroadcastListener() {
  if (!syncChannel) return;
  syncChannel.onmessage = (event) => {
    const data = event.data;
    if (!data || !data.type) return;

    if (data.type === 'GROUP_HW_UPDATED') {
      state.groupHomework = state.loadGroupHomework();
      renderApp();
      if (state.currentView === 'view-teacher') renderTeacherView();
      showToast('Преподаватель обновил задания кафедры');
    } else if (data.type === 'ANNOUNCEMENT_POSTED') {
      state.announcements = state.loadAnnouncements();
      renderTeacherAnnouncementsBanner();
      if (state.currentView === 'view-teacher') renderTeacherView();
      showToast('Новое объявление кафедры!');
    } else if (data.type === 'COMPLETION_UPDATED') {
      state.studentCompleted = state.loadStudentCompleted();
      renderApp();
      if (state.currentView === 'view-teacher') renderTeacherView();
    }
  };
}
