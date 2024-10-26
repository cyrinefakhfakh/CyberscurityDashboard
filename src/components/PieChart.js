import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Malware', 'Phishing', 'DDoS'],
    datasets: [
      {
        label: 'Threat Types',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        data: [300, 50, 100]
      }
    ]
  };

  return <Pie data={data} />;
};

export default PieChart;
