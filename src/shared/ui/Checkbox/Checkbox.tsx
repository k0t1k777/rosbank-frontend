import { CheckboxProps } from 'src/services/types'
import 'src/shared/ui/Checkbox/Checkbox.scss';

const Checkbox = ({
  isChecked,
  checkboxLabel,
  checkboxName,
  checkboxClass,
  handleCheckboxChange,
}: CheckboxProps) => {
  return (
    <div className='checkbox-container'>
      <input
        className='checkbox-input'
        type='checkbox'
        name={checkboxName}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={checkboxName}
        className={`checkbox-label ${checkboxClass}`}
      >
        {checkboxLabel}
      </label>
    </div>
  );
};

export default Checkbox;
