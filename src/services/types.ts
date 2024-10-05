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
  handleCheckboxChange?: (evt: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}