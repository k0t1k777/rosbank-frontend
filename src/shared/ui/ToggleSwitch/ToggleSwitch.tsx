import { ToggleSwitchProps } from 'src/services/types';
import 'src/shared/ui/ToggleSwitch/ToggleSwitch.scss';

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { isChecked = false, onToggle, labelLeft, labelRight, className } = props;

  return (
    <div className={`toggle-switch ${className ? className : ''}`}>
      <span className={`toggle-switch-label ${isChecked ? 'active' : ''}`}>
        {labelLeft}
      </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        id="toggle-switch"
        className="toggle-switch-input"
      />
      <span className={`toggle-switch-label ${!isChecked ? 'active' : ''}`}>
        {labelRight}
      </span>
    </div>
  );
};
