import { Line } from 'react-chartjs-2';
import 'src/shared/ui/Charts/Charts.scss';

export default function ChartEngagements() {
  const engagementData = {
    labels: ['0', '2', '4', '6', '8'],
    datasets: [
      {
        label: 'Вовлеченность',
        data: [3, 2, 3, 3, 4],
        backgroundColor: 'white',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 5,
        border: 1,
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
          text: 'Вовлеченность',
        },
        min: 0,
        max: 8,
      },
    },
  };

  const renderChart = () => {
    return (
      <>
        <Line
          data={engagementData}
          options={options}
          width={492}
          height={292}
        />
        <div className='charts__percent'>
          <div className='charts__percent_container'>
            <p className='charts__percent_number'>0</p>
            <p className='charts__percent_number'>50</p>
            <p className='charts__percent_number'>100</p>
          </div>
          <p className='charts__percent__text'>Выполнение ИПР на сегодня</p>
        </div>
      </>
    );
  };
  return renderChart();
}
