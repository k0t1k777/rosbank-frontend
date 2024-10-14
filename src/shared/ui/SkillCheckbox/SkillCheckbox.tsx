import 'src/shared/ui/SkillCheckbox/SkillCheckbox.scss';
import Checkbox from '../Checkbox/Checkbox';
import { useState } from 'react';

export default function SkillCheckbox() {
  const [hard, setHard] = useState(true);
  const [soft, setSoft] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (name === 'hard') {
      setHard(true);
      setSoft(false);
    } else if (name === 'soft') {
      setSoft(true);
      setHard(false);
    }
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
