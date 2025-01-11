import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const MultiStackedBarChart = () => {
  const data = {
    labels: ['24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan'],
    datasets: [
      {
        label: 'Positive',
        data: [4, 5, 0, 2, 6, 4],
        backgroundColor: '#B2FF59', // Green
        barThickness: 15,
      },
      {
        label: 'Negative',
        data: [2, 2, 2, 1, 5, 2],
        backgroundColor: '#FF6D00', // Orange
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: '90%', height: '70%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MultiStackedBarChart;
