import 'src/components/Metric/Metric.scss';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';
import { useState } from 'react';
import Select from 'src/shared/ui/Select/Select';
import { METRIC_DATA } from 'src/services/const';
import { Calendar } from 'src/shared/ui/Calendar/Calendar';
import { Icon } from 'src/shared/ui/Icon/Icon';
import cn from 'classnames/bind';

const cx = cn.bind({});

export const Metric = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [speciality, setSpeciality] = useState('');
  const handleSelectChange = (value: string) => {
      setSpeciality(value);
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
            label='Специальность'
            value={speciality}
            options={METRIC_DATA}
            setValue={(value) => handleSelectChange(value)}
          />
        </div>
      </div>
    </section>
  );
};
