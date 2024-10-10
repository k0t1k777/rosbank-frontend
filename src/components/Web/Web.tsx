import { useState } from 'react';
import 'src/components/Web/Web.scss';
import Checkbox from 'src/shared/ui/Checkbox/Checkbox';
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
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Web = () => {
  const [hard, setHard] = useState(true);
  const [soft, setSoft] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (name === 'hard') {
      setHard(true);
      setSoft(false);
    } else if (name === 'soft') {
      setSoft(true);
      setHard(false);
    }
  };

  const [isCompetencies, setIsCompetencies] = useState<boolean>(true);

  const handleToggle = () => {
    setIsCompetencies((prev) => !prev);
  };

  const labels = [
    'Параметр 1',
    'Параметр 2',
    'Параметр 3',
    'Параметр 4',
    'Параметр 5',
    'Параметр 6',
    'Параметр 7',
    'Параметр 8',
    'Параметр 9',
    'Параметр 10',
    'Параметр 11',
    'Параметр 12',
    'Параметр 13',
    'Параметр 14',
    'Параметр 15',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Факт',
        data: [2, 2, 4, 1, 1, 2, 4, 1, 3, 2, 4, 1, 3, 2, 1],
        borderColor: '#E10D34',
        pointBackgroundColor: 'red',
        borderWidth: 1,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 0,
      },
      {
        label: 'План',
        data: [2, 3, 4, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
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
  };

  return (
    <section className='web'>
      <div className='web__skills_wrapper'>
        <div className='web__skills_container'>
          <div className='web__skills_container-item'>
            <Checkbox
              checkboxLabel='Hard'
              checkboxName='hard'
              isChecked={hard}
              checkboxChange={handleCheckboxChange}
            />
          </div>
          <div className='web__skills_container-item'>
            <Checkbox
              checkboxLabel='Soft'
              checkboxName='soft'
              isChecked={soft}
              checkboxChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className='web__skills_container-toggle'>
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
