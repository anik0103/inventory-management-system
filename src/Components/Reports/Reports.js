import React, { useContext } from "react";
import Cards from "./Cards";
import LineChart from "./LineChart";
import PieChart from "./Pichart";
import mockData from "../../asset/fakeApiResponce/mockData.json";
import { RegionContext } from "../Dashbord/RegionContext";

const Reports = () => {
  const { selectedRegion } = useContext(RegionContext);

  const regionData = mockData.find((r) => r.region === selectedRegion);

  const report = regionData?.regionWiseData?.reports?.[0] || {};
  const snapshot = report.analyticsSnapshot || { items: [], percentageChange: [] };
  const trend = report.analyticsTrend || null;

  const renderCard = (title, value, percentageChange, description) => {
    if (value === undefined || value === null) {
      return (
        <div className="flex items-center justify-center h-32 border rounded-lg shadow bg-white text-gray-500">
          No data available
        </div>
      );
    }
    return (
      <Cards
        title={title}
        value={value}
        percentageChange={percentageChange}
        description={description}
      />
    );
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {renderCard(
        "Total Availability",
        snapshot?.items?.[0],
        snapshot?.percentageChange?.[0],
        "Current supply stock levels are constantly updated..."
      )}
      {renderCard(
        "New Added",
        snapshot?.items?.[1],
        snapshot?.percentageChange?.[1],
        "The latest supply stock levels that were recently added..."
      )}
      {renderCard(
        "Sold Out",
        snapshot?.items?.[2],
        snapshot?.percentageChange?.[2],
        "The latest supply stock levels that recently sold..."
      )}

      <div className="lg:col-span-2">
        {trend ? (
          <LineChart trend={trend} />
        ) : (
          <div className="flex items-center justify-center h-64 border rounded-lg shadow bg-white text-gray-500">
            ⚠️ No trend data available
          </div>
        )}
      </div>
      <div>
        {snapshot?.items?.length ? (
          <PieChart snapshot={snapshot} />
        ) : (
          <div className="flex items-center justify-center h-64 border rounded-lg shadow bg-white text-gray-500">
            ⚠️ No snapshot data available
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
