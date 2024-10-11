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
import ChartEmployers from 'src/shared/ui/Charts/ChartEmployers';
import ChartIpr from 'src/shared/ui/Charts/ChartIpr';
import ChartEngagements from 'src/shared/ui/Charts/ChartEngagements';
import ChartSkills from 'src/shared/ui/Charts/ChartSkills';
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

  return (
    <section className='metric'>
      <div className='metric__header-container'>
        <Subtitile text='Основные метрики команды' />
        <div className='metric__container_wrapper'>
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
      </div>
      <div className='metric__chart'>
        {speciality === 'Сотрудники' && <ChartEmployers />}
        {speciality === 'Выполнение ИПР' && <ChartIpr />}
        {speciality === 'Оценка навыков' && <ChartSkills />}
        {speciality === 'Вовлеченность' && <ChartEngagements />} 
      </div>
    </section>
  );
};
