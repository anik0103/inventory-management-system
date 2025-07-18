import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const SalesOrderCard = () => {
  const sales = mockData.salesOrder;

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-4 max-w-xl ml-14 mt-6 flex flex-col h-[14rem]">
      <div className="flex justify-between items-center border-b border-[#bd78b5] pb-2 mb-4">
        <h2 className="font-bold text-[#bd78b5]">{sales.title}</h2>
        <span className="font-semibold text-[#bd78b5] flex items-center gap-1">
          {sales.month}
          <span className="text-[#bd78b5] text-lg">↓</span>
        </span>
      </div>

      <div className="grid grid-cols-6 gap-y-2 text-center text-sm font-semibold text-slate-800">
        <div>Channel</div>
        <div>Draft</div>
        <div>Confirmed</div>
        <div>Packed</div>
        <div>Shipped</div>
        <div>Invoiced</div>

        <div className="text-gray-700 font-medium">{sales.channel}</div>
        <div className="text-gray-700 font-medium">{sales.draft}</div>
        <div className="text-gray-700 font-medium">{sales.confirmed}</div>
        <div className="text-gray-700 font-medium">{sales.packed}</div>
        <div className="text-gray-700 font-medium">{sales.shipped}</div>
        <div className="text-gray-700 font-medium">{sales.invoiced}</div>
      </div>
    </div>
  );
};

export default SalesOrderCard;
