import { useRef, useState } from 'react';
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
  const labels = ['JS', 'React', 'Python'];
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);
  const chartRef = useRef<ChartJS | null>(null); // Указываем тип для chartRef

  const data = {
    labels,
    datasets: [
      {
        label: 'Факт',
        data: [2, 2, 4],
        borderColor: '#E10D34',
        pointBackgroundColor: (context) => {
          const index = context.dataIndex;
          return highlightedSkill === labels[index] ? 'red' : 'blue';
        },
        borderWidth: 2,
        fill: false,
        pointRadius: 5,
      },
      {
        label: 'План',
        data: [4, 3, 4],
        borderColor: '#EFEFEF',
        backgroundColor: '#EFEFEF',
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
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
    onClick: (event) => {
      const chart = chartRef.current;
      if (chart) {
        const elements = chart.getElementsAtEventForMode(event.native, 'nearest', { intersect: true }, true);
        
        if (elements.length > 0) {
          const index = elements[0].index;
          const label = labels[index];
          setHighlightedSkill(label);
        }
      }
    },
  };

  return (
    <section className='web'>
      <div className='web__radar'>
        <Radar ref={chartRef} data={data} options={options} />
      </div>
    </section>
  );
};


