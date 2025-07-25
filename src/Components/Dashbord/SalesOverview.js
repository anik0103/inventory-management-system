import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const SalesOverview = () => {
  const item = mockData.itemDetails;

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-4 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-2xl ml-0 sm:ml-2 md:ml-8 lg:ml-4 mt-6 flex flex-col justify-start">
      <h2 className="font-bold text-lg pb-1 mb-2 border-b border-[#bd78b5] text-[#bd78b5]">
        {item.title || "Item Details"}
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-start justify-start gap-4 w-full">
        {/* Left Block */}
        <div className="flex-1 flex flex-col gap-2">
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

        {/* Divider */}
        <div className="hidden sm:block border-l border-gray-200 h-full" />

        {/* Right Block (Active Items) */}
        <div className="sm:w-1/3 flex flex-col items-start justify-start pt-1">
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
