import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // Ensure this import is present

const BarChart = () => {
  // Define the chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Threats Detected',
        backgroundColor: 'rgba(75,192,192,0.6)', // Adjust opacity for better visibility
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(0,0,0,1)',
        data: [65, 59, 80, 81, 56, 55], // Your chart data
      },
    ],
  };

  // Optional chart options
  const options = {
    responsive: true, // Ensure the chart resizes with the container
    maintainAspectRatio: false, // Allows chart to adjust its size
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
      },
    },
    plugins: {
      legend: {
        display: true, // Toggle legend display
        position: 'top',
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}> {/* Add responsive height and width */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
