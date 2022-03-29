import React from 'react'

import { Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip, Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Monthly review',
        data: [12000, 19000, 3000, 5000, 8000, 3000, 10000, 9000, 4000, 7000, 14000, 25000 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 54, 0.2)',
          'rgba(255, 159, 44, 0.2)'
      ],
      borderColor: '#7C4CE0',
      tension: 0.4,
      borderWidth: 1.5
    }]
}


function LineChart() {
  return (
    <div>
      <div className="chart">
        <Line
          data = {data}
          height = {90}
          width = {400}
        />
        </div>
    </div>
  )
}

export default LineChart