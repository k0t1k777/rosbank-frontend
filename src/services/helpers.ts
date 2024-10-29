// Сокращение имени
export const formatEmployeeName = (fullName: string | null ) => {
  if (!fullName) return "Неизвестный сотрудник"
  const [lastName, firstName] = fullName.split(' ');
  return `${firstName} ${lastName.charAt(0)}.`;
};

// Округление до целого числа
export const roundSkill = (skill: number) => {
  return Math.round(skill); 
};

