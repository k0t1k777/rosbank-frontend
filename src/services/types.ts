export interface IconProps {
  id: string;
  className?: string;
}

export interface SelectProps {
  label: string;
  options: string[];
  selectedValue?: string;
  isValid?: boolean;
  handleSelectChange: (selectedValue: string) => void;
}

export interface CheckboxProps {
  checkboxLabel: string;
  checkboxName: string;
  checkboxError?: string;
  isChecked?: boolean;
  checkboxClass?: string;
  checkboxChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  labelLeft: string;
  labelRight: string;
}
