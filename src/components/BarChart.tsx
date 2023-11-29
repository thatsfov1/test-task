import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {Company} from "../types/types";

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const BarChart = ({company}: Company) => {
    const data = {
        labels: ['Capital', 'Loan', 'Net Profit', 'Turnover'],
        datasets: [
            {
                label: company.name,
                data: [
                    company.capital,
                    company.loan_amount,
                    company.net_profit,
                    company.turnover],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Company finance situation</h2>
            <div style={{height: '400px', width: '600px'}}>
                <Bar data={data} options={options}/>
            </div>
        </div>
    );
};

export default BarChart;
