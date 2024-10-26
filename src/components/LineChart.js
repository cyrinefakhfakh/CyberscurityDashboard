import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Network Traffic',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        data: [65, 59, 80, 81]
      }
    ]
  };

  return <Line data={data} />;
};

export default LineChart;
