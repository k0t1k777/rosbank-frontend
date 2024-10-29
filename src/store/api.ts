import { monthsChart } from 'src/services/const';
import {
  employers_plan,
  development,
  involvement,
} from 'src/services/mock/ChartsMock';
import { EMPLOYES_DATA } from 'src/services/mock/MembersMock';
import { competencies, skills } from 'src/services/mock/SkillsMock';
import {
  AmountType,
  CompetencyType,
  Development,
  EmployeeType,
  Employers_plan,
  Involvement,
  Period_Employers,
  Skills,
} from 'src/services/types';

// На моках:
export const getSkills = async (skillDomains: string): Promise<Skills[]> => {
  return new Promise<Skills[]>((resolve) => {
    setTimeout(() => {
      const filteredSkills = skills.filter(
        (skill) => skill.skillDomen === skillDomains
      );
      resolve(filteredSkills);
    }, 500);
  });
};

export const getСompetencies = async (
  skillDomains: string
): Promise<CompetencyType[]> => {
  return new Promise<CompetencyType[]>((resolve) => {
    setTimeout(() => {
      const filteredSkills = competencies.filter(
        (skill) => skill.skillDomen === skillDomains
      );
      resolve(filteredSkills);
    }, 500);
  });
};

const filterEmployees = (
  employees: EmployeeType[],
  filters: Partial<EmployeeType>
) => {
  return employees.filter((employee) => {
    return Object.keys(filters).every((key) => {
      const filterValue = filters[key as keyof EmployeeType];
      if (filterValue === null || filterValue === '') return true;
      return employee[key as keyof EmployeeType] === filterValue;
    });
  });
};

export const getEmployees = async (
  position?: string | null,
  grade?: string | null,
  worker?: string | null,
  competency?: string | null,
  skill?: number | null
): Promise<EmployeeType[]> => {
  const filters: Partial<EmployeeType> = {
    position,
    grade,
    worker,
    competency,
    skill,
  };
  return new Promise((resolve) => {
    const filteredEmployees = filterEmployees(EMPLOYES_DATA, filters);
    resolve(filteredEmployees);
  });
};

export const getEmployeesId = async (id: number) => {
  return new Promise<EmployeeType>((resolve, reject) => {
      const employee = EMPLOYES_DATA.find((emp) => emp.id === id);
      if (employee) {
        resolve(employee);
      } else {
        reject(new Error('Employee not found'));
      }
  });
};

export const getEmployers = async (
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string
) => {
  return new Promise<Employers_plan>((resolve) => {
    const filteredPeriod: Period_Employers[] = employers_plan.period.filter(
      (item) => {
        const itemYear = parseInt(item.startDate.year);
        const itemMonthIndex = monthsChart.indexOf(item.startDate.month);
        const startMonthIndex = monthsChart.indexOf(startMonth);
        const endMonthIndex = monthsChart.indexOf(endMonth);

        const isAfterStart =
          itemYear > parseInt(startYear) ||
          (itemYear === parseInt(startYear) &&
            itemMonthIndex >= startMonthIndex);
        const isBeforeEnd =
          itemYear < parseInt(endYear) ||
          (itemYear === parseInt(endYear) && itemMonthIndex <= endMonthIndex);

        return isAfterStart && isBeforeEnd;
      }
    );

    setTimeout(() => {
      const employersPlan: Employers_plan = {
        period: filteredPeriod,
        numberOfEmployee: employers_plan.numberOfEmployee,
        numberOfBusFactor: employers_plan.numberOfBusFactor,
        numberOfKeyPeople: employers_plan.numberOfKeyPeople,
      };

      resolve(employersPlan);
    }, 100);
  });
};

export const getDevelopment = async (
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string
) => {
  return new Promise<Development[]>((resolve) => {
    const filteredPeriod = development.filter((item) => {
      const itemYear = parseInt(item.period.year);
      const itemMonthIndex = monthsChart.indexOf(item.period.month);
      const startMonthIndex = monthsChart.indexOf(startMonth);
      const endMonthIndex = monthsChart.indexOf(endMonth);
      const isAfterStart =
        itemYear > parseInt(startYear) ||
        (itemYear === parseInt(startYear) && itemMonthIndex >= startMonthIndex);
      const isBeforeEnd =
        itemYear < parseInt(endYear) ||
        (itemYear === parseInt(endYear) && itemMonthIndex <= endMonthIndex);

      return isAfterStart && isBeforeEnd;
    });

    setTimeout(() => {
      resolve(filteredPeriod);
    }, 100);
  });
};

export const getInvolvement = async (
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string
) => {
  return new Promise<Involvement[]>((resolve) => {
    const filteredPeriod = involvement.filter((item) => {
      const itemYear = parseInt(item.period.year);
      const itemMonthIndex = monthsChart.indexOf(item.period.month);
      const startMonthIndex = monthsChart.indexOf(startMonth);
      const endMonthIndex = monthsChart.indexOf(endMonth);

      const isAfterStart =
        itemYear > parseInt(startYear) ||
        (itemYear === parseInt(startYear) && itemMonthIndex >= startMonthIndex);
      const isBeforeEnd =
        itemYear < parseInt(endYear) ||
        (itemYear === parseInt(endYear) && itemMonthIndex <= endMonthIndex);

      return isAfterStart && isBeforeEnd;
    });

    setTimeout(() => {
      resolve(filteredPeriod);
    }, 100);
  });
};

export const getAmountEmployees = async () => {
  return new Promise<AmountType>((resolve) => {
    resolve(employers_plan);
  });
};

// При подключении сервера разкомитить

// const BASE_URL = 'https://rosb-hakaton.ddns.net/api/v1/';

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

// const headers = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

// export const getSkills = async (skillDomains: string, skillId?: string) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       skillDomen: skillDomains,
//       ...(skillId && { employeeIds: skillId }),
//     }),
//   };
//   return await request('teams/media/skills/', options);
// };

// export const getСompetencies = async (skillDomains: string, id?: string) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       skillDomen: skillDomains,
//       ...(id && { employeeIds: id }),
//     }),
//   };
//   return await request('teams/media/competencies/', options);
// };

// const buildQueryString = (params: Record<string, string>) => {
//     return new URLSearchParams(params).toString();
//   };

// export const getEmployees = async (
//   position: string,
//   grade: string,
//   worker: string,
//   competency?: string | null,
//   skill?: string | null
// ) => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: headers,
//   };
//   const params: Record<string, string> = {
//     position,
//     grade,
//     worker,
//   };
//   if (competency) {
//     params.competency = competency;
//   } else if (skill) {
//     params.skill = skill;
//   }
//   return await request(
//     `teams/media/employees/?${buildQueryString(params)}`,
//     options
//   );
// };

// export const getEmployeesId = async (id: number) => {
//   const options: RequestOptionsType = {
//     method: 'GET',
//     headers: headers,
//   };
//   return await request(`teams/media/employees/${id}/`, options);
// };

// export const getAmountEmployees = async () => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//   };
//   return await request('teams/media/count_employees/', options);
// };

// export const getInvolvement = async (
//   startMonth: string,
//   startYear: string,
//   endMonth: string,
//   endYear: string
// ) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       startPeriod: {
//         month: startMonth,
//         year: startYear,
//       },
//       endPeriod: {
//         month: endMonth,
//         year: endYear,
//       },
//     }),
//   };
//   return await request('teams/media/involvement/', options);
// };

// export const getDevelopment = async (
//   startMonth: string,
//   startYear: string,
//   endMonth: string,
//   endYear: string
// ) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       startPeriod: {
//         month: startMonth,
//         year: startYear,
//       },
//       endPeriod: {
//         month: endMonth,
//         year: endYear,
//       },
//     }),
//   };
//   return await request('teams/media/development_plan/', options);
// };

// export const getEmployers = async (
//   startMonth: string,
//   startYear: string,
//   endMonth: string,
//   endYear: string
// ) => {
//   const options: RequestOptionsType = {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({
//       startPeriod: {
//         month: startMonth,
//         year: startYear,
//       },
//       endPeriod: {
//         month: endMonth,
//         year: endYear,
//       },
//     }),
//   };
//   return await request('teams/media/count_employees/', options);
// };
