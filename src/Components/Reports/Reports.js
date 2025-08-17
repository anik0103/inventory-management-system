import React from "react";
import ReportCards from "./ReportCards";
import LineChart from "./LineChart";

const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top Cards */}
      <ReportCards />

      {/* Bottom Row with Half-width Line Chart + Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart />

        {/* Placeholder for future Pie Chart */}
        <div className="bg-white rounded-2xl shadow-md border border-[#bd78b5] flex items-center justify-center">
          <p className="text-[#bd78b5] font-semibold">Pie Chart</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
