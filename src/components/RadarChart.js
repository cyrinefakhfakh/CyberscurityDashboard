// src/components/RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  const data = {
    labels: ['Malware', 'Phishing', 'DDoS', 'Brute Force', 'SQL Injection', 'XSS'],
    datasets: [
      {
        label: 'Threat Frequency',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [20, 30, 40, 35, 50, 45]
      },
      {
        label: 'Threat Severity',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [30, 40, 50, 45, 55, 50]
      }
    ]
  };

  return <Radar data={data} />;
};

export default RadarChart;
