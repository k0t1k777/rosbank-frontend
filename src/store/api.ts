// http://127.0.0.1:8000/api/v1/workers/list

// При подключении сервера закомитить код сверху и раскомитить этот код:

// export const BASE_URL = 'https://gazprom.hopto.org';

// const getToken = () => {
//   return localStorage.getItem('token');
// };

// const createHeaders = () => {
//   const TOKEN = getToken();
//   return {
//     authorization: `Bearer ${TOKEN}`,
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   };
// };

// type RequestOptionsType = RequestInit & {
//   headers: Record<string, string>;
// };

// export const checkResponse = (response: Response) => {
//   if (response.ok) {
//     return response.json();
//   }
//   return response.json().then((data) => {
//     console.error('Ошибка ответа:', data);
//     return Promise.reject(
//       `Ошибка ${response.status}: ${data.message || 'Неизвестная ошибка'}`
//     );
//   });
// };

// const request = (endpoint: string, options?: RequestOptionsType) =>
//   fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);

// const buildQueryString = (params: Record<string, any>) => {
//   return new URLSearchParams(params).toString();
// };

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
//       headers: createHeaders(),
//     }
//   ).then(checkResponse);
// };

// export const registration = async ({ email, password }: RegisterDataProps) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: createHeaders(),
//     body: JSON.stringify({ email, password }),
//   };
//   return await request('/api/token/', options);
// };

// export const getProfile = async () => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: createHeaders(),
//   };
//   const response = await request('/api/v1/users/me/', options);
//   return response;
// };

// export const getTeams = async () => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: createHeaders(),
//   };
//   return await request('/api/v1/teams/', options);
// };

// export const getSelects = async () => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: createHeaders(),
//   };
//   return await request('/api/v1/filters/', options);
// };

// export const getProjects = async () => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: createHeaders(),
//   };
//   return await request('/api/v1/projects/', options);
// };

// export const getTeamsId = async (id: number) => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: createHeaders(),
//   };
//   return await request(`/api/v1/teams/${id}/`, options);
// };

// export const getMemberId = async (id: number) => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: createHeaders(),
//   };
//   return await request(`/api/v1/members/${id}/`, options);
// };
