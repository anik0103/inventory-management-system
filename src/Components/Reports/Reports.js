import React from "react";
import Cards from "./Cards";
import LineChart from "./LineChart";
import Pichart from "./Pichart";
import mockDataReports from "../../asset/fakeApiResponce/mockDataReports.json";

const Reports = () => {
  const snapshot = mockDataReports.analyticsSnapshot;

  return (

<div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
      {/* Row 1, Column 1 */}
      <Cards
        title="Total Availability"
        value={snapshot.items[0]}
        percentageChange={snapshot.percentageChange[0]}
        description="Current supply stock levels are constantly updated..."
      />

      {/* Row 1, Column 2 */}
      <Cards
        title="New Added"
        value={snapshot.items[1]}
        percentageChange={snapshot.percentageChange[1]}
        description="The latest supply stock levels that were recently added..."
      />

      {/* Row 1, Column 3 */}
      <Cards
        title="Sold Out"
        value={snapshot.items[2]}
        percentageChange={snapshot.percentageChange[2]}
        description="The latest supply stock levels that recently sold..."
      />

      {/* Row 2, Spanning Columns 1 & 2 */}
      <div className="lg:col-span-2">
        <LineChart />
      </div>

      {/* Row 2, Column 3 */}
      <div>
        <Pichart />
      </div>
    </div>
  );
};

export default Reports;