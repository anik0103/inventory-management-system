import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import mockDataReports from "../../asset/fakeApiResponce/mockDataReports.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const trend = mockDataReports.analyticsTrend;

  const data = {
    labels: trend.labels,
    datasets: [
      {
        label: trend.datasets[0].label,
        data: trend.datasets[0].data,
        borderColor: "#bd78b5",
        backgroundColor: "rgba(189, 120, 181, 0.3)",
        tension: 0.3,
        fill: false,
        yAxisID: "y",
      },
      {
        label: trend.datasets[1].label,
        data: trend.datasets[1].data,
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.3)",
        tension: 0.3,
        fill: false,
        yAxisID: "y1",
      },
      {
        label: trend.datasets[2].label,
        data: trend.datasets[2].data,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        tension: 0.3,
        fill: false,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Inventory Trends (Sept 2024 - Aug 2025)",
        color: "#bd78b5",
        font: { size: 14, weight: "bold" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { color: "#eee" },
      },
      y: {
        type: "linear",
        position: "left",
        ticks: { color: "#bd78b5" },
        grid: { color: "#eee" },
      },
      y1: {
        type: "linear",
        position: "right",
        ticks: { color: "#666" },
        grid: { drawOnChartArea: false },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-[#bd78b5] h-72 lg:ml-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
