import { EmployeeType } from '../types';

export const EMPLOYES_DATA: EmployeeType[] = [
  {
    id: 9,
    position: 'Системный аналитик',
    worker: 'Адам Львов',
    grade: 'Junior',
    key_people: true,
    bus_factor: true,
    education: [],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 7,
      involvmentLevel: 8,
    },
    skill: 90,
  },
  {
    id: 15,
    position: null,
    worker: 'Адам Львов',
    grade: null,
    key_people: false,
    bus_factor: false,
    education: [],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 0,
      involvmentLevel: null,
    },
    skill: 0,
  },
  {
    id: 4,
    position: 'Разработчик',
    worker: 'Денис Волков',
    grade: 'Junior',
    key_people: true,
    bus_factor: false,
    education: [
      {
        id: 2,
        training_name: 'Middle Python Programmers',
      },
    ],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 9,
      involvmentLevel: 4,
    },
    skill: 95,
  },
  {
    id: 16,
    position: 'Python-разработчик',
    worker: 'йцукен цукен',
    grade: 'Junior',
    key_people: true,
    bus_factor: true,
    education: [
      {
        id: 17,
        training_name: 'SQL команды',
      },
    ],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 0,
      involvmentLevel: 5,
    },
    skill: 98,
  },
  {
    id: 3,
    position: 'Тестировщик',
    worker: 'Ксения Озерова',
    grade: 'Middle',
    key_people: false,
    bus_factor: false,
    education: [
      {
        id: 14,
        training_name: 'Middle Python Programmers',
      },
      {
        id: 15,
        training_name: 'Алгоритмы курсы',
      },
      {
        id: 12,
        training_name: 'Английский курсы',
      },
      {
        id: 13,
        training_name: 'Кибербезопастность курсы',
      },
    ],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 5,
      involvmentLevel: 5,
    },
    skill: 59,
  },
  {
    id: 11,
    position: 'Тестировщик',
    worker: 'Максим Журавлев',
    grade: 'Middle',
    key_people: true,
    bus_factor: true,
    education: [],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 6,
      involvmentLevel: 5,
    },
    skill: 66,
  },
  {
    id: 5,
    position: 'Бизнес Аналитик',
    worker: 'Максим Сорокин',
    grade: 'Junior',
    key_people: true,
    bus_factor: false,
    education: [
      {
        id: 1,
        training_name: 'Middle Python Programmers',
      },
    ],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 87,
      involvmentLevel: 2,
    },
    skill: 84,
  },
  {
    id: 13,
    position: 'Менеджер продукта',
    worker: 'Милана Смирнова',
    grade: 'Senior',
    key_people: false,
    bus_factor: true,
    education: [],
    assesmentOfPotention: {
      assesmentLevel: 6,
      involvmentLevel: 6,
    },
    skill: 59,
  },
  {
    id: 10,
    position: 'Менеджер проекта',
    worker: 'Михаил Костин',
    grade: 'Middle',
    key_people: false,
    bus_factor: false,
    education: [],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 9,
      involvmentLevel: 3,
    },
    skill: 83,
  },
  {
    id: 2,
    position: 'Разработчик',
    worker: 'Роман Кузнецов',
    grade: 'Senior',
    key_people: false,
    bus_factor: false,
    education: [
      {
        id: 11,
        training_name: 'Middle Python Programmers',
      },
      {
        id: 8,
        training_name: 'Алгоритмы курсы',
      },
    ],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 3,
      involvmentLevel: 3,
    },
    skill: 27,
  },
  {
    id: 14,
    position: null,
    worker: 'Сидр Винный',
    grade: null,
    key_people: false,
    bus_factor: false,
    education: [],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 0,
      involvmentLevel: null,
    },
    skill: 0,
  },
  {
    id: 6,
    position: 'Менеджер продукта',
    worker: 'Тихон Филатов',
    grade: 'Middle',
    key_people: true,
    bus_factor: true,
    education: [
      {
        id: 3,
        training_name: 'SQL команды',
      },
      {
        id: 4,
        training_name: 'Алгоритмы курсы',
      },
      {
        id: 9,
        training_name: 'Кибербезопастность курсы',
      },
    ],
    competency: 'Разработка ПО',
    assesmentOfPotention: {
      assesmentLevel: 6,
      involvmentLevel: 3,
    },
    skill: 45,
  },
];
