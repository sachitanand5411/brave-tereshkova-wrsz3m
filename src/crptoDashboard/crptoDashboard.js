import React from "react";

function crptoDashboard({ dashboardData }) {
  return (
    <div className="detail-view dashboard">
      <h2>{dashboardData.name}</h2>
      <p>dashboardData Price: ${dashboardData.current_price}</p>
      <p>24h High: ${dashboardData.high_24h}</p>
      <p>Market Cap: ${dashboardData.market_cap}</p>
    </div>
  );
}

export default crptoDashboard;
