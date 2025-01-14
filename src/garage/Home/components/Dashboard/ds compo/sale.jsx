import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

const MultiChart = () => {
  const gradientBar = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(255, 130, 14, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    return gradient;
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        type: "bar",
        label: "Net Sales",
        data: [30000, 40000, 50000, 52626.2, 40000, 38000, 45000],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const index = context.dataIndex;
          return index === 3 ? gradientBar(ctx) : "rgba(0, 128, 128, 0.1)";
        },
        borderRadius: 10,
        barPercentage: 0.5,
      },
      {
        type: "line",
        label: "Trend 1",
        data: [32000, 45000, 48000, 50000, 42000, 41000, 46000],
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "rgba(0, 0, 0, 1)",
        pointRadius: 4,
      },
      {
        type: "line",
        label: "Trend 2",
        data: [28000, 42000, 52000, 51000, 39000, 36000, 44000],
        borderColor: "rgba(255, 130, 14, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "rgba(255, 130, 14, 1)",
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "rgba(116, 118, 129, 1)" },
      },
      y: {
        ticks: { callback: (value) => `${value / 1000}k`, color: "rgba(116, 118, 129, 1)" },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `₹ ${context.raw.toLocaleString()}`,
        },
      },
      legend: { display: false },
    },
  };

  return (
    <div className="w-full relative h-[25vh]">
      <Line data={data} options={options} />
    </div>
  );
};

export default MultiChart;
