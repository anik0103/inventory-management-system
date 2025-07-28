import React from "react";
import SummaryCards from "./SalesOverVew/SummaryCards";
import ItemDetails from "./ItemDetails";
import TopProducts from "./TopProducts";
import SalesOrder from "./SalesOrder";
import OrderStatus from "./OrderStatus";
import InventorySummary from "./SalesOverVew/InventorySummary";

const Dashboard = () => {
  return (
    <div className="dashboard w-full px-4 py-4">
      <h1 className="bg-white text-black shadow-md text-2xl md:text-3xl p-4 rounded w-full text-left font-bold mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          <SummaryCards />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ItemDetails />
            <OrderStatus />
          </div>

          <TopProducts />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <InventorySummary />
          <SalesOrder />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
