export interface IconProps {
  id: string;
  className?: string;
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

export interface SelectProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
  className?: string;
  dissable?: string;
  border?: string;
}

export interface InfoTooltipTableProps {
  trainingNames: string[];
}

export interface AmountType {
  numberOfEmployee: string;
  numberOfBusFactor: string;
  numberOfKeyPeople: string;
}

export interface EmployeeType {
  id: number;
  position: string;
  worker: string;
  grade: string;
  key_people: boolean;
  bus_factor: boolean;
  education: EducationType[];
  assesmentOfPotention: AssessmentOfPotentialType;
  skill: number;
}

export interface EducationType {
  id: number;
  training_name: string;
}

export interface AssessmentOfPotentialType {
  assesmentLevel: number;
  involvmentLevel: number;
}

export interface Skills {
  skillDomen: string;
  skillId: number;
  skillName: string;
  plannedResult: number;
  actualResult: number;
}

export interface SkillData {
  data: Skills[];
}