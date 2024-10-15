import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { selectSkills } from 'src/store/features/slice/skillSlice';
import { useAppSelector } from 'src/store/hooks';

export default function ChartSkills() {
  const { skills } = useAppSelector(selectSkills);

  const skillNames = skills.map(skill => skill.skillName);
  const actualResults = skills.map(skill => skill.actualResult);

  const skillsData = {
    labels: skillNames,
    datasets: [
      {
        label: 'Hard / Soft',
        data: actualResults,
        backgroundColor: 'white',
        borderColor: 'rgba(66, 67, 75, .5)',
        borderWidth: 8,
        border: 1,
        fill: false,
        pointRadius: 0,
        tension: 0,
      },
    ],
  };
   
  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    layout: {
      padding: {
        top: 0,
        left: 30,
        right: 0,
        bottom: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        min: 0,
        max: 4,
      },
      y: {
        title: {
          display: false,
        },
      },
    },
  };

  const renderChart = () => {
    return (
      <Bar data={skillsData} options={options} width={492} height={292} />
    );
  };
  return renderChart();
}
