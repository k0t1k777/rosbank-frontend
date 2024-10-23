import 'src/components/Filter/Filter.scss';
import {
  EMPLOYERS_DATA,
  GRAIDE_DATA,
  SPECIALITY_DATA,
} from 'src/services/const';
import Select from 'src/shared/ui/Select/Select';
import {
  fetchGetEmployees,
  selectEmployees,
  setWorker,
  setGrade,
  setPosition,
} from 'src/store/features/slice/membersSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

export const Filter = () => {
  const { position, grade, worker } = useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();

  const handleSelectChange = async (
    value: string,
    type: 'position' | 'grade' | 'worker'
  ) => {
    if (type === 'position') {
      dispatch(setPosition(value));
    } else if (type === 'grade') {
      dispatch(setGrade(value));
    } else if (type === 'worker') {
      dispatch(setWorker(value));
    }
    await dispatch(fetchGetEmployees({ position, grade, worker}));
  };

  return (
    <ul className='filter'>
      <li className='filter__item' style={{ width: '150px' }}>
        <Select
          label='Специальность'
          value={position}
          options={SPECIALITY_DATA}
          setValue={(value) => handleSelectChange(value, 'position')}
        />
      </li>
      <li className='filter__item' style={{ width: '80px' }}>
        <Select
          label='Грейд'
          value={grade}
          options={GRAIDE_DATA}
          setValue={(value) => handleSelectChange(value, 'grade')}
        />
      </li>
      <li className='filter__item' style={{ width: '240px' }}>
        <Select
          label='Сотрудник'
          value={worker}
          options={EMPLOYERS_DATA}
          setValue={(value) => handleSelectChange(value, 'worker')}
        />
      </li>
      <li className='filter__item' style={{ width: '60px' }}>
        <p className='filter__skill'>Skill</p>
      </li>
    </ul>
  );
};
