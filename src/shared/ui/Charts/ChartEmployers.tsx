import { Line } from 'react-chartjs-2';
import { selectCharts } from 'src/store/features/slice/chartsSlice';
import { useAppSelector } from 'src/store/hooks';

export default function ChartEmployers() {
  const { employers_plan} = useAppSelector(selectCharts);
  if (!employers_plan || employers_plan.period.length === 0) {
    return <h2 className='charts__message'>Выберите период</h2>;
  }
  const numberOfEmployee = employers_plan.period.map(plan => Number(plan.numberOfEmployee));
  const numberOfBusFactor = employers_plan.period.map(plan => Number(plan.numberOfBusFactor));
  const numberOfKeyPeople = employers_plan.period.map(plan => Number(plan.numberOfKeyPeople));
  const labels = employers_plan.period.map((_, index) => (index + 1).toString());
  const employeeData = {
    labels: labels,
    datasets: [
      {
        label: 'Сотрудники',
        data: numberOfEmployee,
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
        data: numberOfBusFactor,
        backgroundColor: 'white',
        borderColor: 'rgba(225, 13, 52, .5)',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Ключевые сотрудники',
        data: numberOfKeyPeople,
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
        },
        min: 0,
        max: 20,
      },
      y: {
        title: {
          display: true,
          text: 'Сотрудники',
        },
        min: 0,
        max: Math.max(...numberOfEmployee, ...numberOfBusFactor, ...numberOfKeyPeople) + 1, 
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
