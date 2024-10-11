import { Line } from 'react-chartjs-2';

export default function ChartEmployers() {
  const employeeData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'Сотрудники',
        data: [7, 7, 7, 7, 7],
        backgroundColor: 'white',
        borderColor: 'rgba(66, 67, 75, .5)',
        borderWidth: 5,
        border: 1,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Bus-фактор',
        data: [3, 4, 5, 4, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(225, 13, 52, .5)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Ключевые сотрудники',
        data: [3, 2, 3, 3, 6],
        backgroundColor: 'white',
        borderColor: 'rgba(89, 172, 153, .5)',
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
          text: 'Языки программирования',
        },
        min: 0,
        max: 10,
      },
      y: {
        title: {
          display: true,
          text: 'Сотрудники',
        },
        min: 0,
        max: 12,
      },
    },
  };

  const renderChart = () => {
    return (
      <Line data={employeeData} options={options} width={492} height={292} />
    );
  };
  return renderChart();
}
