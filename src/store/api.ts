import {
  FilterParams,
  Member,
  MembersResult,
  ProfileProps,
  ProjectseProps,
  RegisterDataProps,
  SelectsProps,
  TeamsProps,
} from 'src/services/types';
import { mockSearchFields } from 'src/services/mocks/mockSearchFields';
import { mockProfile } from 'src/services/mocks/mockProfile';
import { mockTeams } from 'src/services/mocks/mockTeams';
import { mockProjects } from 'src/services/mocks/mockProjects';
import { mockTeam } from 'src/services/mocks/mockTeamId';
import { mockMembers } from 'src/services/mocks/mockMembers';


const mockTokenResponse = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1MTkxNzI1LCJpYXQiOjE3MjQ3NTk3MjUsImp0aSI6ImI2NmNmZTE3MzExMDQyYTY5NzQwMjM3MTQ5NGYyZjBkIiwidXNlcl9pZCI6ODJ9.JQ5H6uZ-EFLJQ4W4BW-Kgr1aPuC60KWUmJMbMIFl7p4',
};

export const registration = async ({ email, password }: RegisterDataProps) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTokenResponse;
};

registration({ email: 'admin@admin.com', password: 'admin' })
  .then((response) => {
    console.log('Registered successfully:', response);
  })
  .catch((error) => {
    console.error('Registration failed:', error);
  });

const filterMembers = (
  members: Member[],
  { search, position, department, city }: FilterParams
): Member[] => {
  return members.filter((member) => {
    const matchesSearch = member.full_name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPosition = position ? member.position === position : true;
    const matchesDepartment = department
      ? member.department === department
      : true;
    const matchesCity = city ? member.city === city : true;

    return matchesSearch && matchesPosition && matchesDepartment && matchesCity;
  });
};

export const getMembersData = (
  page: number = 1,
  search: string = '',
  position: string = '',
  department: string = '',
  city: string = ''
): Promise<MembersResult> => {
  const filteredMembers = filterMembers(mockMembers.results, {
    search,
    position,
    department,
    city,
  });

  // Пагинация
  const startIndex = (page - 1) * 12;
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + 12);

  return Promise.resolve({
    count: filteredMembers.length,
    results: paginatedMembers,
  });
};

export const getMemberId = async (id: number) => {
  const selectedMember: MembersResult = mockMembers;
  const res = await Promise.resolve(
    selectedMember.results.find((element) => element.id === id.toString())
  );
  return res;
};

export const getSelects = async () => {
  const searchFields: SelectsProps = mockSearchFields;
  const res = await Promise.resolve(searchFields);
  return res;
};

export const getProfile = async () => {
  const profile: ProfileProps = mockProfile;
  const res = await Promise.resolve(profile);
  return res;
};

export const getTeams = async () => {
  const teams: TeamsProps[] = mockTeams;
  const res = await Promise.resolve(teams);
  return res;
};

export const getTeamsId = async (id: number) => {
  const team: TeamsProps[] = mockTeam;
  const res = await Promise.resolve(
    team.find((element) => element.id === id.toString())
  );
  return res;
};

export const getProjects = async () => {
  const projects: ProjectseProps[] = mockProjects;
  const res = await Promise.resolve(projects);
  return res;
};


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
