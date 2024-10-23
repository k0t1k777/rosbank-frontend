import { Line } from 'react-chartjs-2';
import 'src/shared/ui/Charts/Charts.scss';
import { selectCharts } from 'src/store/features/slice/chartsSlice';
import { useAppSelector } from 'src/store/hooks';

export default function ChartEngagements() {
  const { involvement } = useAppSelector(selectCharts);
  console.log('involvement: ', involvement);
  if (!involvement || involvement.length === 0) {
    return <h2 className='charts__message'>Выберите период</h2>;
  }
  const labels = involvement.map(
    (item) => `${item.period.month} ${item.period.year}`
  );
  const data = involvement.flatMap((item) =>
    item.involvementData.map((plan) => plan.involvement)
  );

  const engagementData = {
    labels: labels,
    datasets: [
      {
        label: 'Вовлеченность',
        data: data,
        backgroundColor: 'white',
        borderColor: 'rgba(66, 67, 75, .5)',
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
        bottom: 90,
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
        max: 6,
      },
      y: {
        title: {
          display: true,
          text: 'Вовлеченность',
        },
        min: 0,
        max: 6,
      },
    },
  };

  const renderChart = () => {
    return (
      <>
        <Line
          data={engagementData}
          options={options}
          width={392}
          height={292}
        />
        <div className='charts__percent'>
          <div className='charts__percent_container'>
            <div className='charts__percent_line'></div>
            <p className='charts__percent_number'>0</p>
            <p className='charts__percent_number'>50</p>
            <p className='charts__percent_number'>100</p>
          </div>
          <p className='charts__percent__text'>Выполнение ИПР</p>
        </div>
      </>
    );
  };
  return renderChart();
}
