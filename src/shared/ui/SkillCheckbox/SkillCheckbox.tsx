import 'src/shared/ui/SkillCheckbox/SkillCheckbox.scss';
import Checkbox from '../Checkbox/Checkbox';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  fetchGetSkills,
  selectSkills,
  setHard,
  setSoft,
} from 'src/store/features/slice/skillSlice';

export default function SkillCheckbox() {
  const { hard, soft } = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (name === 'hard') {
      dispatch(setHard(true));
      dispatch(setSoft(false));
    } else if (name === 'soft') {
      dispatch(setSoft(true));
      dispatch(setHard(false));
    }
  };

  useEffect(() => {
    const skillDomain = hard ? 'hard' : 'soft';
    dispatch(fetchGetSkills(skillDomain));
  }, [hard, soft, dispatch]);

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
