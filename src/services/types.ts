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