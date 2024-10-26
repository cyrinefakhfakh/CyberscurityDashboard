import React from 'react';

function OverviewCard({ title, value }) {
  return (
    <div className="overview-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default OverviewCard;
