import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const SalesOverview = () => {
  const item = mockData.itemDetails;

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-4 max-w-xl ml-14 mt-6 flex flex-col">
      <h2 className="font-bold text-lg pb-1 mb-2 border-b border-[#bd78b5] text-[#bd78b5]">
        {item.title || "Item Details"}
      </h2>
      <div className="flex items-center">
        <div className="w-1/2 pr-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-red-500">Low Stock Items</span>
            <span className="font-semibold text-base text-red-500">
              {item.lowStockItems}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-700">All Item Groups</span>
            <span className="font-semibold text-base text-gray-800">
              {item.allItemGroups}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-700">All Items</span>
            <span className="font-semibold text-base text-gray-800">
              {item.allItems}
            </span>
          </div>
        </div>
        <div className="w-1/2 border-l border-gray-200 pl-4 flex flex-col items-center justify-center">
          <p className="font-semibold text-sm text-gray-800 mb-1">
            Active Items
          </p>
          <div className="w-12 h-12 rounded-full bg-white border border-[#bd78b5] text-[#bd78b5] flex items-center justify-center text-[0.6rem] leading-tight text-center p-1">
            {item.activeItems > 0 ? item.activeItems : "No Active Items"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
