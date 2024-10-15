// Сокращение имени
export const formatEmployeeName = (fullName: string) => {
  const [lastName, firstName] = fullName.split(' ');
  return `${firstName} ${lastName.charAt(0)}.`;
};

// Округление до целого числа
export const roundSkill = (skill: number) => {
  return Math.round(skill); 
};