'use client'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DougnetChart = ({accounts}:DoughnutChartProps) => {
  const data = {
    datasets: [{
      labels: 'Banks',
      data: [40, 25, 30],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
    }],
    labels:['Banks1', 'Banks2', 'Banks3']
  }

  return <Doughnut 
    data={data}
    options={{
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
    />
}

export default DougnetChart