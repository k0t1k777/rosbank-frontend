import 'src/components/Metric/Metric.scss';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';
import { useState } from 'react';
import Select from 'src/shared/ui/Select/Select';
import { METRIC_DATA } from 'src/services/const';
import { Calendar } from 'src/shared/ui/Calendar/Calendar';
import { Icon } from 'src/shared/ui/Icon/Icon';
import cn from 'classnames/bind';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
const cx = cn.bind({});

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export const Metric = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [speciality, setSpeciality] = useState('Сотрудники');
  const handleSelectChange = (value: string) => {
      setSpeciality(value);
  };

// Пример данных для графиков
const employeeData = {
  labels: ['Иван', 'Мария', 'Петр'],
  datasets: [
    {
      label: 'Проект 1',
      data: [80, 70, 90],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Проект 2',
      data: [75, 85, 80],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      label: 'Проект 3',
      data: [90, 88, 85],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const skillsData = {
  labels: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'],
  datasets: [
    {
      label: 'Уровень навыка',
      data: [70, 85, 60, 90, 75],
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
    },
  ],
};

const iprData = {
  labels: ['Задача 1', 'Задача 2', 'Задача 3'],
  datasets: [
    {
      label: 'Статус выполнения',
      data: [100, 80, 60],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
  ],
};

const engagementData = {
  labels: ['Иван', 'Мария', 'Петр'],
  datasets: [
    {
      label: 'Вовлеченность',
      data: [85, 90, 80],
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
  ],
};

const options = {
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const renderChart = () => {
  switch (speciality) {
    case 'Сотрудники':
      return <Bar data={employeeData} options={options} width={492} height={292}/>;
    case 'Оценка навыков':
      return <Bar data={skillsData} options={options} width={492} height={292}/>;
    case 'Выполнение ИПР':
      return <Bar data={iprData} options={options} width={492} height={292}/>;
    case 'Вовлеченность':
      return <Bar data={engagementData} options={options} width={492} height={292}/>;
    default:
      return null;
  }
};

  return (
    <section className='metric'>
      <Subtitile text='Основные метрики команды' />
      <div className='metric__header-container'>
        <div
          className={cx('metric__picker', { 'metric__picker--open': isOpen })}
          onClick={() => setIsOpen(true)}
        >
          <p className='metric__picker_title'>Выбери период</p>
          <Icon id='calendar' />
          {isOpen && <Calendar setIsOpen={setIsOpen}/>}
        </div>
        <div className='metric__celect_container'>
          <Select
            label='Сотрудники'
            value={speciality}
            options={METRIC_DATA}
            setValue={(value) => handleSelectChange(value)}
          />
        </div>
      </div>
      <div className='metric__chart'>
        {renderChart()}
      </div>
    </section>
  );
};
