import { EmployeeType } from './types';

export const NAV_MENU = [
  { icon: 'dashboard', title: 'Дашборд' },
  { icon: 'calendar', title: 'Календарь' },
  { icon: 'book', title: 'Обучение' },
  { icon: 'tasks', title: 'Задачи' },
  { icon: 'ipr', title: 'ИПР' },
];

export const EMPLOYERS_DATA = [
  'Адам Львов',
  'Аделина Михайлова',
  'Василий Матвеев',
  'Вера Комарова',
  'Денис Волков',
  'Ксения Озерова',
  'Максим Журавлев',
  'Максим Сорокин',
  'Милана Смирнова',
  'Михаил Костин',
  'Роберт Акимов',
  'Роман Кузнецов',
  'Тихон Филатов',
];

export const GRAIDE_DATA = ['Junior', 'Middle', 'Senior'];

export const SPECIALITY_DATA = [
  'Бизнес Аналитик',
  'Дизайнер',
  'Менеджер продукта',
  'Менеджер проекта',
  'Разработчик/программист',
  'Системный аналитик',
  'Тестировщик',
];

export const METRIC_DATA = [
  'Сотрудники',
  'Выполнение ИПР',
  'Оценка навыков',
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

export const inintialMember: EmployeeType = {
  id: 0,
  position: '',
  worker: '',
  grade: '',
  key_people: false,
  bus_factor: false,
  education: [
    {
      id: 0,
      training_name: '',
    },
  ],
  assesmentOfPotention: {
    assesmentLevel: 0,
    involvmentLevel: 0,
  },
  skill: 0,
};
