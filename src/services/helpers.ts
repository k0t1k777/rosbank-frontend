export const formatEmployeeName = (fullName: string) => {
  const [lastName, firstName] = fullName.split(' ');
  return `${firstName} ${lastName.charAt(0)}.`;
};