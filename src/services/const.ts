import { EmployeeType, MonthsProps } from './types';

export const inintialMember: EmployeeType = {
  id: null,
  position: '',
  worker: '',
  grade: '',
  key_people: false,
  bus_factor: false,
  education: [
    {
      id: null,
      training_name: '',
    },
  ],
  assesmentOfPotention: {
    assesmentLevel: 0,
    involvmentLevel: 0,
  },
  skill: 0,
};

export const NAV_MENU = [
  { icon: 'dashboard', title: 'Дашборд' },
  { icon: 'calendar', title: 'Календарь' },
  { icon: 'book', title: 'Обучение' },
  { icon: 'tasks', title: 'Задачи' },
  { icon: 'ipr', title: 'ИПР' },
];

export const EMPLOYERS_DATA = [
  'Адам Львов',
  'Денис Волков',
  'Ксения Озерова',
  'Максим Журавлев',
  'Максим Сорокин',
  'Милана Смирнова',
  'Михаил Костин',
  'Роман Кузнецов',
  'Тихон Филатов',
];

export const GRAIDE_DATA = ['Junior', 'Middle', 'Senior'];

export const SPECIALITY_DATA = [
  'Бизнес Аналитик',
  'Менеджер продукта',
  'Менеджер проекта',
  'Разработчик',
  'Системный аналитик',
  'Тестировщик',
];

export const METRIC_DATA = [
  'Оценка навыков',
  'Сотрудники',
  'Выполнение ИПР',
  'Вовлеченность',
];

export const MATRIX_DATA = {
  mentor: 'Назначить в роли менторов',
  iniciative: 'Участвовать в инициативах',
  careare: 'Достигать карьерные цели',
  task: 'Правильно распределять задачи',
  education: 'Создавать возможности для обучения и развития',
  project: 'Вовлекать в стратегические проекты',
  editTask: 'Изменить роли/задачи',
  learning: 'Разработать программу поддержки и обучения',
  engagement: 'Повышение вовлеченности',
};

export const years = ['2022', '2023', '2024'];

export const months: MonthsProps = [
  {
    label: 'янв',
    value: 'January'
  },
  {
    label: 'фев',
    value: 'February'
  },
  {
    label: 'мар',
    value: 'March'
  },
  {
    label: 'апр',
    value: 'April'
  },
  {
    label: 'май',
    value: 'May'
  },
  {
    label: 'июн',
    value: 'June'
  },
  {
    label: 'июл',
    value: 'July'
  },
  {
    label: 'авг',
    value: 'August'
  },
  {
    label: 'сен',
    value: 'September'
  },
  {
    label: 'окт',
    value: 'October'
  },
  {
    label: 'ноя',
    value: 'November'
  },
  {
    label: 'дек',
    value: 'December'
  }
];

export const minValue = 3.3;
export const maxValue = 6.6;

export const monthsChart = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];