import { Bar } from 'react-chartjs-2';

export default function ChartSkills() {
  
    const skillsData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'JS',
        data: [4],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 5,
        border: 1,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Python',
        data: [3],
        backgroundColor: 'white',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Java',
        data: [2],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 191, 255, 1)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'C++',
        data: [3],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Ruby',
        data: [1],
        backgroundColor: 'white',
        borderColor: 'yellow',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
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
        max: 10,
      },
      y: {
        title: {
          display: false,
        },
        min: 0,
        max: 4,
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
