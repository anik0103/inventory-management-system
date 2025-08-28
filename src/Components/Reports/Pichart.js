import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import mockDataReports from "../../asset/fakeApiResponce/mockDataReports.json";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Pichart = () => {
  const snapshotData = mockDataReports.analyticsSnapshot;

  const data = {
    labels: ["Total Availability", "New Added", "Sold Out"],
    datasets: [
      {
        label: "Inventory Items",
        data: snapshotData.items,
        backgroundColor: [
          "rgba(189, 120, 181, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(189, 120, 181, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Inventory Composition",
        color: "#bd78b5",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-[#bd78b5] h-72">
      <Pie data={data} options={options} />
    </div>
  );
};

export default Pichart;