import styles from 'src/ui/FilterList/FilterList.module.scss';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  fetchSelects,
  selectFilter,
  setCity,
  setDepartment,
  setPosition,
} from 'src/store/features/slice/filterSlice';
import { useEffect } from 'react';
import Select from 'src/ui/Select/Select';

interface currentPageFilterProps {
  setCurrentPageFilter: (type: number) => void;
}

export default function FilterList({ setCurrentPageFilter}: currentPageFilterProps) {
  const { selects, department, position, city } = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const handleSelectChange = (
    value: string,
    type: 'position' | 'department' | 'city'
  ) => {
    if (type === 'position') {
      dispatch(setPosition(value));
    } else if (type === 'department') {
      dispatch(setDepartment(value));
    } else if (type === 'city') {
      dispatch(setCity(value));
    }
    setCurrentPageFilter(1);
  };

  useEffect(() => {
    return () => {
      dispatch(setPosition(''));
      dispatch(setDepartment(''));
      dispatch(setCity(''));
      
    setCurrentPageFilter(1);
    };
  }, [location.pathname, dispatch]);

  useEffect(() => {
    dispatch(fetchSelects());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      <li className={styles.containerItem}>
        <Select
          text='Должность'
          options={selects.positions}
          value={position}
          setValue={(value) => handleSelectChange(value, 'position')}
        />
      </li>
      <li className={styles.containerItem}>
        <Select
          text='Отдел'
          options={selects.departments}
          value={department}
          setValue={(value) => handleSelectChange(value, 'department')}
        />
      </li>
      <li className={styles.containerItem}>
        <Select
          text='Город'
          options={selects.cities}
          value={city}
          setValue={(value) => handleSelectChange(value, 'city')}
        />
      </li>
    </ul>
  );
}
