import { useState } from 'react';
import 'src/components/Filter/Filter.scss';
import { EMPLOYERS_DATA, GRAIDE_DATA, SPECIALITY_DATA } from 'src/services/const';
import Select from 'src/shared/ui/Select/Select';

export const Filter = () => {
  const [speciality, setSpeciality] = useState('');
  const [greid, setGreid] = useState('');
  const [employer, setEmployer] = useState('');

  const handleSelectChange = (
    value: string,
    type: 'speciality' | 'greid' | 'employer' | 'skill'
  ) => {
    if (type === 'speciality') {
      setSpeciality(value);
    } else if (type === 'greid') {
      setGreid(value);
    } else if (type === 'employer') {
      setEmployer(value);
    }
  };

  return (
    <ul className='filter'>
      <li className='filter__item' style={{ width: '150px' }}>
        <Select
          label='Специальность'
          value={speciality}
          options={SPECIALITY_DATA}
          setValue={(value) => handleSelectChange(value, 'speciality')}
        />
      </li>
      <li className='filter__item' style={{ width: '80px' }}>
        <Select
          label='Грейд'
          value={greid}
          options={GRAIDE_DATA}
          setValue={(value) => handleSelectChange(value, 'greid')}
        />
      </li>
      <li className='filter__item' style={{ width: '240px' }}>
        <Select
          label='Сотрудник'
          value={employer}
          options={EMPLOYERS_DATA}
          setValue={(value) => handleSelectChange(value, 'employer')}
        />
      </li>
      <li className='filter__item' style={{ width: '60px' }}>
        <p className='filter__skill'>Skill</p>
      </li>
    </ul>
  );
};
