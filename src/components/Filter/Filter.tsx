import { useState } from 'react';
import 'src/components/Filter/Filter.scss';
import { PROFESSION_DATA } from 'src/services/const';
import Select from 'src/shared/ui/Select/Select';

export const Filter = () => {
  const [speciality, setSpeciality] = useState('');
  const [greid, setGreid] = useState('');
  const [employer, setEmployer] = useState('');
  const [edu, setEdu] = useState('');

  const handleSelectChange = (
    value: string,
    type: 'speciality' | 'greid' | 'employer' | 'skill' | 'edu'
  ) => {
    if (type === 'speciality') {
      setSpeciality(value);
    } else if (type === 'greid') {
      setGreid(value);
    } else if (type === 'employer') {
      setEmployer(value);
    } else if (type === 'edu') {
      setEdu(value);
    }
  };

  return (
    <ul className='filter'>
      <li className='filter__item' style={{ width: '133px' }}>
        <Select
          label='Специальность'
          value={speciality}
          options={PROFESSION_DATA}
          setValue={(value) => handleSelectChange(value, 'speciality')}
        />
      </li>
      <li className='filter__item' style={{ width: '75px' }}>
        <Select
          label='Грейд'
          value={greid}
          options={PROFESSION_DATA}
          setValue={(value) => handleSelectChange(value, 'greid')}
        />
      </li>
      <li className='filter__item' style={{ width: '202px' }}>
        <Select
          label='Сотрудник'
          value={employer}
          options={PROFESSION_DATA}
          setValue={(value) => handleSelectChange(value, 'employer')}
        />
      </li>
      <li className='filter__item' style={{ width: '58px' }}>
        <p className='filter__skill'>Skill</p>
      </li>
      <li className='filter__item' style={{ width: '96px' }}>
        <Select
          label='Edu'
          value={edu}
          options={PROFESSION_DATA}
          setValue={(value) => handleSelectChange(value, 'edu')}
        />
      </li>
    </ul>
  );
};
