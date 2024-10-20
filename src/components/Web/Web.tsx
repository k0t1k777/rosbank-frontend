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
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  fetchGetCompetencies,
  fetchGetSkills,
  selectSkills,
  setActualResults,
  setCompetencyName,
  setHighlightedSkill,
  setLabels,
  setPlannedResults,
  setSkillName,
} from 'src/store/features/slice/skillSlice';
import { selectEmployees } from 'src/store/features/slice/membersSlice';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Web = () => {
  const {
    highlightedSkill,
    competencies,
    hard,
    skills,
    labels,
    plannedResults,
    actualResults,
  } = useAppSelector(selectSkills);
  const { member } = useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const newLabels = isChecked
      ? competencies.map((skill) => skill.competencyName)
      : skills.map((skill) => skill.skillName);

    const newPlannedResults = isChecked
      ? competencies.map((skill) => skill.plannedResult)
      : skills.map((skill) => skill.plannedResult);

    const newActualResults = isChecked
      ? competencies.map((skill) => skill.actualResult)
      : skills.map((skill) => skill.actualResult);

    dispatch(setLabels(newLabels));
    dispatch(setPlannedResults(newPlannedResults));
    dispatch(setActualResults(newActualResults));
  }, [isChecked, competencies, skills]);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const skillDomain = hard ? 'hard' : 'soft';
    if (isChecked) {
      dispatch(
        fetchGetCompetencies({
          skillDomains: skillDomain,
        })
      );
    } else {
      dispatch(
        fetchGetSkills({
          skillDomains: skillDomain,
        })
      );
    }
  }, [dispatch, hard, member, isChecked, highlightedSkill]);

  const data: ChartData<'radar'> = {
    labels,
    datasets: [
      {
        label: 'Факт',
        data: actualResults,
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
        data: plannedResults,
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
        max: 4,
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
        const selectedSkill = labels[index];
        if (isChecked) {
          dispatch(setCompetencyName(selectedSkill));
          dispatch(setHighlightedSkill(selectedSkill));
        } else {
          dispatch(setSkillName(selectedSkill));
          dispatch(setHighlightedSkill(selectedSkill));
        }
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
            isChecked={isChecked}
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
