import { useEffect, useState } from 'react';
import 'src/components/Web/Web.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { Radar } from 'react-chartjs-2';
import { ToggleSwitch } from 'src/shared/ui/ToggleSwitch/ToggleSwitch';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { ChartEvent } from 'node_modules/chart.js/dist/core/core.plugins';
import { ActiveElement } from 'node_modules/chart.js/dist/plugins/plugin.tooltip';
import SkillCheckbox from 'src/shared/ui/SkillCheckbox/SkillCheckbox';
import { Skills } from 'src/services/types';
// import { useAppDispatch, useAppSelector } from 'src/store/hooks';
// import { fetchGetSkills, selectSkills } from 'src/store/features/slice/skillSlice';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Web = () => {
  // const { skills } = useAppSelector(selectSkills);
  // console.log('skills: ', skills);
// const dispatch = useAppDispatch();


// useEffect(() => {
//   dispatch(fetchGetSkills())
// }, [dispatch])

  const [skills, setEmployees] = useState<Skills[]>([])
  console.log('skills: ', skills);

  useEffect(() => {
    getEmployers()
    .then((data) => {
      setEmployees(data.data)
    })
  }, [])

const BASE_URL = 'https://rosb-hakaton.ddns.net/api/v1/';


const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// const getEmployers = () => {
//   return fetch(`${BASE_URL}teams/media/employees/2/`, {
//     headers,
//     method: 'GET',
//     }).then(getResponseData);
// };

const getEmployers = () => {
  return fetch(`${BASE_URL}teams/media/skills/`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      skillDomen: 'hard',
      // employeeIds: '2'
    })
  }).then(getResponseData);
};
 
  const [isCompetencies, setIsCompetencies] = useState<boolean>(true);
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

const labels = skills.map(skill => skill.skillName);
const plannedResults = skills.map(skill => skill.plannedResult);
const actualResults = skills.map(skill => skill.actualResult);

  const handleToggle = () => {
    setIsCompetencies((prev) => !prev);
  };

  const data: ChartData<'radar'> = {
    labels,
    datasets: [
      {
        label: 'Факт',
        data: plannedResults,
        borderColor: '#E10D34',
        pointBackgroundColor: (context) => {
          const index = context.dataIndex;
          return highlightedSkill === labels[index] ? '#E10D34' : 'transparent';
        },
        borderWidth: 1,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 5,
      },
      {
        label: 'План',
        data: actualResults,
        borderColor: '#EFEFEF',
        backgroundColor: '#EFEFEF',
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        left: 50,
      },
    },
    aspectRatio: 1.5,
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          z: 1,
        },
        grid: {
          lineWidth: 1.1,
          color: 'rgba(255, 102, 102, 0.3)',
          z: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    onClick(_: ChartEvent, elements: ActiveElement[]) {
      if (elements.length) {
        const index = elements[0].index;
        setHighlightedSkill(labels[index]);
      }
    },
  };

  return (
    <section className='web'>
      <div className='web__skills_wrapper'>
        <SkillCheckbox />
        <div className='web__skills_container'>
          <ToggleSwitch
            labelLeft='Компетенции'
            labelRight='Навыки'
            label='dfdf'
            isChecked={isCompetencies}
            onToggle={handleToggle}
          />
        </div>
      </div>
      <div className='web__radar'>
        <Radar data={data} options={options} />
      </div>
      <div className='web__border'>
        <div className='web__border_container'>
          <Icon id='fact' className='svg__border' />
          <p className='web__border_text'>Факт</p>
        </div>
        <div className='web__border_container'>
          <Icon id='plan' className='svg__border' />
          <p className='web__border_text'>Норма</p>
        </div>
      </div>
    </section>
  );
};
