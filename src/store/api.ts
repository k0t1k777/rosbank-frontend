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
  worker: string
) => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  return await request(
    `teams/media/employees/?${buildQueryString({
      position,
      grade,
      worker,
    })}`,
    options
  );
};

export const getAmountEmployees = async () => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  return await request('teams/media/count_employees/', options);
};

export const getEmployeesId = async (id: number) => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  return await request(`/teams/media/employees/${id}/`, options);
};

export const getSkills = async (skillDomains: string) => {
    const options: RequestOptionsType = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        skillDomen: skillDomains,
      }),
    };
    return await request('/teams/media/skills/', options);
  };

// export const getSkills = async () => {
//   const response = await fetch('/teams/media/skills/', {
//     headers,
//     method: 'POST',
//     body: JSON.stringify({
//       skillDomen: 'hard',
//     }),
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return await response.json();
// };