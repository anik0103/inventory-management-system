import React from "react";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = ({ trend }) => {
  const safeTrend = trend || {};
  const months = safeTrend.labels || [];
  const datasets = safeTrend.datasets || [];

  // Build data dynamically
  const data = months.map((month, i) => {
    let row = { month };
    datasets.forEach((ds) => {
      row[ds.label] = ds.data?.[i] ?? 0;
    });
    return row;
  });

  if (data.length === 0) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-4 text-center text-gray-500">
        ⚠️ No trend data available
      </div>
    );
  }

  // Define some colors for each dataset (you can customize)
  const colors = ["#9b59b6", "#27ae60", "#e74c3c", "#2980b9", "#f39c12"];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <h3 className="text-center font-semibold text-purple-700 mb-2">
        Inventory Trends (Sept 2024 - Aug 2025)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {datasets.map((ds, idx) => (
            <Line
              key={ds.label}
              type="monotone"
              dataKey={ds.label}
              stroke={colors[idx % colors.length]}
              strokeWidth={2}
            />
          ))}
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
