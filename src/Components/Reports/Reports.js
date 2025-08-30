import React, { useContext } from "react";
import Cards from "./Cards";
import LineChart from "./LineChart";
import PieChart from "./Pichart";
import mockData from "../../asset/fakeApiResponce/mockData.json";
import { RegionContext } from "../Dashbord/RegionContext";

const Reports = () => {
  const { selectedRegion } = useContext(RegionContext);

  // get data for selected region
  const regionData = mockData.find((r) => r.region === selectedRegion);

  if (!regionData || !regionData.regionWiseData.reports) {
    return (
      <div className="p-6 text-center text-gray-500">
        ⚠️ No report data available for {selectedRegion}
      </div>
    );
  }

  const report = regionData.regionWiseData.reports?.[0] || {};
  const snapshot = report.analyticsSnapshot || { items: [], percentageChange: [] };
  const trend = report.analyticsTrend || null;


  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Cards */}
      <Cards
        title="Total Availability"
        value={snapshot?.items?.[0] ?? 0}
        percentageChange={snapshot?.percentageChange?.[0] ?? 0}
        description="Current supply stock levels are constantly updated..."
      />
      <Cards
        title="New Added"
        value={snapshot?.items?.[1] ?? 0}
        percentageChange={snapshot?.percentageChange?.[1] ?? 0}
        description="The latest supply stock levels that were recently added..."
      />
      <Cards
        title="Sold Out"
        value={snapshot?.items?.[2] ?? 0}
        percentageChange={snapshot?.percentageChange?.[2] ?? 0}
        description="The latest supply stock levels that recently sold..."
      />

      {/* Charts */}
      <div className="lg:col-span-2">
        <LineChart trend={trend} />
      </div>
      <div>
        <PieChart snapshot={snapshot} />
      </div>
    </div>
  );
};

export default Reports;
