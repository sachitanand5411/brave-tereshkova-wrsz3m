import React from "react";

function crptoDashboard(props) {
  return (
    <div>
      <h2>Here is you Dashboard</h2>
      <p>{props.coinName}</p>
      <p>{props.imageName}</p>
    </div>
  );
}

export default crptoDashboard;
