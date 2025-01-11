import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const InventoryReport = () => {
  // Individual datasets for layers
  const forkOilSealData = {
    datasets: [
      {
        data: [30, 70], // 30% filled, 70% empty
        backgroundColor: ["#FFA726", "#F5F5F5"], // Orange and grey for empty space
        borderWidth: 0,
      },
    ],
  };

  const linkBushData = {
    datasets: [
      {
        data: [20, 80], // 20% filled, 80% empty
        backgroundColor: ["#FF7043", "#F5F5F5"], // Red and grey
        borderWidth: 0,
      },
    ],
  };

  const engineOilData = {
    datasets: [
      {
        data: [23, 77], // 23% filled, 77% empty
        backgroundColor: ["#42A5F5", "#F5F5F5"], // Blue and grey
        borderWidth: 0,
      },
    ],
  };

  const airFilterData = {
    datasets: [
      {
        data: [17, 83], // 17% filled, 83% empty
        backgroundColor: ["#66BB6A", "#F5F5F5"], // Green and grey
        borderWidth: 0,
      },
    ],
  };

  const othersData = {
    datasets: [
      {
        data: [10, 90], // 10% filled, 90% empty
        backgroundColor: ["#26C6DA", "#F5F5F5"], // Cyan and grey
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "80%", // Large cutout for donut effect
    plugins: {
      legend: {
        display: false, // Hiding legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    responsive: true,
  };

  return (
    <div style={{ position: "relative", width: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Inventory Report
      </h2>

      {/* Layer 1: Fork Oil Seal */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
        }}
      >
        <Doughnut data={forkOilSealData} options={options} />
      </div>

      {/* Layer 2: Link Bush */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "250px",
          height: "250px",
        }}
      >
        <Doughnut data={linkBushData} options={options} />
      </div>

      {/* Layer 3: Engine Oil */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
        }}
      >
        <Doughnut data={engineOilData} options={options} />
      </div>

      {/* Layer 4: Air Filter */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "150px",
          height: "150px",
        }}
      >
        <Doughnut data={airFilterData} options={options} />
      </div>

      {/* Layer 5: Others */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
        }}
      >
        <Doughnut data={othersData} options={options} />
      </div>
    </div>
  );
};

export default InventoryReport;
