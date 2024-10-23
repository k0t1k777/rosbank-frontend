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
  id: number | null;
  position: string | null;
  worker: string;
  grade: string | null;
  key_people: boolean;
  bus_factor: boolean;
  education: EducationType[];
  competency?: string | null;
  assesmentOfPotention: AssessmentOfPotentialType;
  skill: number;
}

export interface EducationType {
  id: number | null;
  training_name: string;
}

export interface AssessmentOfPotentialType {
  assesmentLevel: number;
  involvmentLevel: number | null;
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

export interface CompetencyType {
  competencyId: number;
  competencyName: string;
  plannedResult: number;
  actualResult: number;
}

export interface Competency {
  competencies: CompetencyType[];
}

export interface Period {
  month: string;
  year: string;
}

export interface InvolvementData {
  involvement: number;
}

export interface DevelopmentPlanData {
  progress: number;
}

export interface Involvement {
  period: Period;
  involvementData: InvolvementData[];
}

export interface Development {
  period: Period;
  developmentPlanData: DevelopmentPlanData[];
}

export interface Employers_period {
  startDate: {
    month: string;
    year: string;
  };
  endDate: {
    month: string;
    year: string;
  };
}

export interface Period_Employers {
  numberOfEmployee: string;
  numberOfBusFactor: string;
  numberOfKeyPeople: string;
  startDate: {
    month: string;
    year: string;
  };
  endDate: {
    month: string;
    year: string;
  };
}

export interface Employers_plan {
  period: Period_Employers[];
  numberOfEmployee: string;
  numberOfBusFactor: string;
  numberOfKeyPeople: string;
}