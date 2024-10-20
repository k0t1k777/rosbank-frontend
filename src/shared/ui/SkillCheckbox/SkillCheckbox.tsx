import 'src/shared/ui/SkillCheckbox/SkillCheckbox.scss';
import Checkbox from '../Checkbox/Checkbox';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  selectSkills, toggleCheckbox } from 'src/store/features/slice/skillSlice';

export default function SkillCheckbox() {
  const { hard, soft } = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    dispatch(toggleCheckbox({ skillType: name }));
  };

  return (
    <div className='skill-checkbox'>
      <div className='skill-checkbox__item'>
        <Checkbox
          checkboxLabel='Hard'
          checkboxName='hard'
          isChecked={hard}
          checkboxChange={handleCheckboxChange}
        />
      </div>
      <div className='skill-checkbox__item'>
        <Checkbox
          checkboxLabel='Soft'
          checkboxName='soft'
          isChecked={soft}
          checkboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}
