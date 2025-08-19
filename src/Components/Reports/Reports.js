import React from "react";
import ReportCards from "./ReportCards";
import LineChart from "./LineChart";
import Pichart from "./Pichart";

const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      <ReportCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart />
        <Pichart />
      </div>
    </div>
  );
};

export default Reports;
