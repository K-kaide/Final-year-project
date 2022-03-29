import React from 'react'
import './styles/DoughnutChart.css'

import { Chart as ChartJS,
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, 
    Tooltip, 
    Legend);

function DoughnutChart() {

    const data = {
        labels: ['Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            
        data: [12000, 19000, 3000, 5000, 8000, 3000, 10000, 9000, 4000, 7000, 14000, 25000 ],
        
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    return (
        <div className='Doughnut-container'>
            <span>
                <Doughnut 
                    data = {data}  
                    height = {250}
                    width = {200}                  
	                options={{
	                	maintainAspectRatio: false
	                }}
                    
                />
        </span>
    </div>
  )
}

export default DoughnutChart