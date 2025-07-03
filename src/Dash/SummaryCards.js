import React from "react";

const SummaryCards = () => {
  return (
    <div>
      <div className="bg-slate-300 w-fit p-6 rounded-xl  mx-auto ml-[900] ">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sales Summary</h2>

        <div className="flex flex-col gap-4">
          <div className="bg-slate-400 w-52 h-24 p-4 rounded-lg shadow">
            <h3 className="text-sm font-semibold text-white">Total Product</h3>
            <p className="text-2xl font-bold text-white">120</p>
          </div>

          <div className="bg-slate-400 w-52 h-24 p-4 rounded-lg shadow">
            <h3 className="text-sm font-semibold text-white">Low Stock Items</h3>
            <p className="text-2xl font-bold text-white">10</p>
          </div>

          <div className="bg-slate-400 w-52 h-24 p-4 rounded-lg shadow">
            <h3 className="text-sm font-semibold text-white">New Orders</h3>
            <p className="text-2xl font-bold text-white">10</p>
          </div>

          <div className="bg-slate-400 w-52 h-24 p-4  rounded-lg shadow">
            <h3 className="text-sm font-semibold text-white">Pending Deliveries</h3>
            <p className="text-2xl font-bold text-white">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
