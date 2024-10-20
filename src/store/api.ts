const BASE_URL = 'https://rosb-hakaton.ddns.net/api/v1/';

type RequestOptionsType = RequestInit & {
  headers: Record<string, string>;
};

export const checkResponse = (response: Response) => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then((data) => {
    console.error('Ошибка ответа:', data);
    return Promise.reject(
      `Ошибка ${response.status}: ${data.message || 'Неизвестная ошибка'}`
    );
  });
};

const request = (endpoint: string, options?: RequestOptionsType) =>
  fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const buildQueryString = (params: Record<string, string>) => {
  return new URLSearchParams(params).toString();
};

export const getEmployees = async (
  position: string,
  grade: string,
  worker: string,
  competency?: string | null,
  skill? : string | null,
) => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  const params: Record<string, string> = {
    position,
    grade,
    worker,
  };
  if (competency) {
    params.competency = competency;
  } else if (skill) {
    params.skill = skill;
  }
  return await request(
    `teams/media/employees/?${buildQueryString(params)}`,
    options
  );
};

export const getAmountEmployees = async () => {
  const options: RequestOptionsType = {
    method: 'POST',
    headers: headers,
  };
  return await request('teams/media/count_employees/', options);
};

export const getEmployeesId = async (id: number) => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  return await request(`teams/media/employees/${id}/`, options);
};

export const getSkills = async (skillDomains: string, skillId?: string) => {
  const options: RequestOptionsType = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      skillDomen: skillDomains,
      ...(skillId && { employeeIds: skillId }),
    }),
  };
  return await request('teams/media/skills/', options);
};

// export const getSkillsId = async (employeeIds: string, skillDomen?: string) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       employeeIds: employeeIds,
//       ...(skillDomen && { employeeIds: skillDomen }),
//     }),
//   };
//   return await request('teams/media/skills/level/', options);
// };

export const getСompetencies = async (skillDomains: string, id?: string) => {
  const options: RequestOptionsType = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      skillDomen: skillDomains,
      ...(id && { employeeIds: id }),
    }),
  };
  return await request('teams/media/competencies/', options);
};