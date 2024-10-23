import { Line } from 'react-chartjs-2';
import 'src/shared/ui/Charts/Charts.scss';
import { selectCharts } from 'src/store/features/slice/chartsSlice';
import { useAppSelector } from 'src/store/hooks';

export default function ChartIpr() {
  const { development } = useAppSelector(selectCharts);
  if (!development || development.length === 0) {
    return <h2 className='charts__message'>Выберите период</h2>;
  }
  const labels = development.map(
    (item) => `${item.period.month} ${item.period.year}`
  );
  const data = development.flatMap((item) =>
    item.developmentPlanData.map((plan) => plan.progress)
  );

  const iprData = {
    labels: labels,
    datasets: [
      {
        label: 'IPR',
        data: data,
        backgroundColor: 'white',
        borderColor: '#FCAB20',
        borderWidth: 5,
        fill: false,
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 0,
        left: 30,
        right: 0,
        bottom: 80,
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
        max: Math.max(...data, 10),
      },
      y: {
        title: {
          display: true,
          text: 'Выполнение',
        },
        min: 0,
        max: Math.max(...data, 10),
      },
    },
  };

  const renderChart = () => {
    return (
      <>
        <Line data={iprData} options={options} width={492} height={252} />
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
