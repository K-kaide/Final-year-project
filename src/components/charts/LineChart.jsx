import React from 'react'
import './styles/LineChart.css'

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
  labels: ['Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
      label: 'Weekly review',
      data: [1200, 9000, 3000, 5000, 4000, 3000, 7000, 9000, 4000, 7000, 1000, 2500 ],
        borderColor: '#7C4CE0',
      tension: 0.4,
    }]



}


function LineChart() {
  return (
    <div>
      <div className="chart">
        <Line
          data = {data}
          height = {135}
          width = {260}

          option = {{
            maintainAspectRatio: false
          }}
        />
        </div>
    </div>
  )
}

export default LineChart