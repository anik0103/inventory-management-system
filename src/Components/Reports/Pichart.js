import React from "react";
import {
  PieChart as PChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#9b59b6", "#27ae60", "#e74c3c"];

const PieChart = ({ snapshot }) => {
  // fallback if snapshot is missing
  const items = snapshot?.items || [];

  const data = [
    { name: "Total Availability", value: items[0] ?? 0 },
    { name: "New Added", value: items[1] ?? 0 },
    { name: "Sold Out", value: items[2] ?? 0 },
  ];

  // if all values are 0, show no data
  const hasData = data.some((d) => d.value > 0);

  if (!hasData) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-4 text-center text-gray-500">
        ⚠️ No snapshot data available
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <h3 className="text-center font-semibold text-purple-700 mb-2">
        Inventory Composition
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
