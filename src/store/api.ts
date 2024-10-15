// const BASE_URL = 'https://rosb-hakaton.ddns.net/api/v1/';
const BASE_URL = 'http://127.0.0.1:8000/api/v1/';

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

// const buildQueryString = (params: Record<string, any>) => {
//   return new URLSearchParams(params).toString();
// };

export const getEmployees = async () => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  return await request('teams/media/employees/', options);
};

export const getAmountEmployees = async () => {
  const options: RequestOptionsType = {
    method: 'GET',
    headers: headers,
  };
  return await request('teams/media/count_employees/', options);
};

// export const getMembersData = (
//   page: number,
//   search: string,
//   position: string,
//   department: string,
//   city: string
// ) => {
//   return fetch(
//     `${BASE_URL}/api/v1/members/?${buildQueryString({
//       page,
//       search,
//       position,
//       department,
//       city,
//     })}`,
//     {
//       method: 'GET',
//       headers: headers,
//     }
//   ).then(checkResponse);
// };



// export const getTeamsId = async (id: number) => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: headers,
//   };
//   return await request(`/api/v1/teams/${id}/`, options);
// };

// export const getMemberId = async (id: number) => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: headers,
//   };
//   return await request(`/api/v1/members/${id}/`, options);
// };
