import 'src/components/Metric/Metric.scss';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';
import { useState } from 'react';
import Select from 'src/shared/ui/Select/Select';
import { METRIC_DATA } from 'src/services/const';
import { Calendar } from 'src/shared/ui/Calendar/Calendar';
import { Icon } from 'src/shared/ui/Icon/Icon';
import cn from 'classnames/bind';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const cx = cn.bind({});

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Metric = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [speciality, setSpeciality] = useState('Сотрудники');
  const handleSelectChange = (value: string) => {
    setSpeciality(value);
  };

  const employeeData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'Человек 1',
        data: [3, 2, 3, 3, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 5,
        border: 1,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Человек 2',
        data: [3, 4, 5, 4, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Человек 3',
        data: [7, 7, 7, 7, 7],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 191, 255, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const skillsData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'JS',
        data: [3, 2, 3, 3, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 5,
        border: 1,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Python',
        data: [3, 4, 5, 4, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Java',
        data: [1, 2, 2, 1, 2],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 191, 255, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'C++',
        data: [3, 4, 1, 4, 7],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Ruby',
        data: [1, 4, 6, 2, 3],
        backgroundColor: 'white',
        borderColor: 'yellow',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const iprData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'IPR',
        data: [7, 7, 7, 7, 7],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 191, 255, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const engagementData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'Вовлеченность',
        data: [3, 2, 3, 3, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 5,
        border: 1,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        left: 30,
        right: 0,
        top: 30,
        bottom: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Языки программирования',
        },
        min: 0,
        max: 10,
      },
      y: {
        title: {
          display: false,
          text: 'Уровень навыка',
        },
        min: 0,
        max: 10,
      },
    },
  };

  const renderChart = () => {
    switch (speciality) {
      case 'Сотрудники':
        return (
          <Line
            data={employeeData}
            options={options}
            width={492}
            height={292}
          />
        );
      case 'Оценка навыков':
        return (
          <Line data={skillsData} options={options} width={492} height={292} />
        );
      case 'Выполнение ИПР':
        return (
          <Line data={iprData} options={options} width={492} height={292} />
        );
      case 'Вовлеченность':
        return (
          <Line
            data={engagementData}
            options={options}
            width={492}
            height={292}
          />
        );
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
          <Icon id='arrow' />
          {isOpen && <Calendar setIsOpen={setIsOpen} />}
        </div>
        <div className='metric__celect_container'>
          <Select
            label='Сотрудники'
            value={speciality}
            options={METRIC_DATA}
            setValue={(value) => handleSelectChange(value)}
            dissable='dissable'
            border='border'
          />
        </div>
      </div>
      <div className='metric__chart'>{renderChart()}</div>
    </section>
  );
};
