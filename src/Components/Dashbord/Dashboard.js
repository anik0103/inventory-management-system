import React, { useContext } from "react";
import SummaryCards from "./SalesOverVew/SummaryCards";
import ItemDetails from "./ItemDetails";
import TopProducts from "./TopProducts";
import OrderStatus from "./OrderStatus";
import InventorySummary from "./SalesOverVew/InventorySummary";
import mockData from "../../asset/fakeApiResponce/mockData.json";
import { RegionContext } from "../Dashbord/RegionContext";
import SalesOrder from "./SalesOrder";

const Dashboard = () => {
  const { selectedRegion } = useContext(RegionContext);

  // Find selected region data
  const regionData = mockData.find(region => region.region === selectedRegion);

  return (
    <div className="dashboard w-full px-4 py-4">
      <h1 className="bg-white text-black shadow-md text-2xl md:text-3xl p-4 rounded w-full text-left font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          <SummaryCards regionData={regionData} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ItemDetails regionData={regionData} />
            <OrderStatus regionData={regionData} />
          </div>
          <TopProducts regionData={regionData} />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <InventorySummary regionData={regionData} />
          <SalesOrder regionData={regionData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
