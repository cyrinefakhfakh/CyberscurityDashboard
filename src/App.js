// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import OverviewCard from './components/OverviewCard';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import DoughnutChart from './components/DoughnutChart';
import ScatterChart from './components/ScatterChart';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="dashboard-container">
        <div className="overview-section">
          <OverviewCard title="Threats Detected Today" value="23" />
          <OverviewCard title="Network Activity" value="1,245 MB" />
          <OverviewCard title="Anomalies (24h)" value="7" />
          
        </div>
        <div className="charts-grid">
          <div className="chart-item">
            <BarChart />
          </div>
          <div className="chart-item">
            <LineChart />
          </div>
          <div className="chart-item">
            <PieChart />
          </div>
          <div className="chart-item">
            <RadarChart />
          </div>
          <div className="chart-item">
            <DoughnutChart />
          </div>
          <div className="chart-item">
            <ScatterChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
