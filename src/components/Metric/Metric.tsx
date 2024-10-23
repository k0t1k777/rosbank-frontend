import 'src/components/Metric/Metric.scss';
import Subtitile from 'src/shared/ui/Subtitle/Subtitle';
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
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  selectSkills,
  setIsOpen,
  setSpeciality,
} from 'src/store/features/slice/skillSlice';
import SkillCheckbox from 'src/shared/ui/SkillCheckbox/SkillCheckbox';
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
  const { speciality, isOpen } = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    dispatch(setSpeciality(value));
  };


  function toggleOpen() {
    dispatch(setIsOpen(!isOpen))
  }

  return (
    <section className='metric' >
      <div className='metric__header-container'>
        <Subtitile text='Основные метрики команды' />
        <div className='metric__container_wrapper'>
          <div
            className={cx('metric__picker', { 'metric__picker--open': isOpen })}
            onClick={toggleOpen}
          >
            <p className='metric__picker_title'>Выбери период</p>
            <Icon id='arrow' />
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
          {speciality === 'Оценка навыков' && <SkillCheckbox />}
        </div>
      </div>
      <div className='metric__chart'>
        {speciality === 'Сотрудники' && <ChartEmployers />}
        {speciality === 'Выполнение ИПР' && <ChartIpr />}
        {speciality === 'Оценка навыков' && <ChartSkills />}
        {speciality === 'Вовлеченность' && <ChartEngagements />}
      </div>
      {isOpen && <Calendar />}
    </section>
  );
};
