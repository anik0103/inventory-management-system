import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const SalesOverview = () => {
  const item = mockData.itemDetails;

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-2 w-[20rem] ml-[6.2rem] mt-[23px] h-[9rem] flex flex-col">
      <h2 className="font-bold text-lg pb-1 mb-1 border-b border-gray-200">
        {item.title || "Item Details"}
      </h2>
      <div className="flex flex-grow items-center">
        <div className="w-1/2 pr-6 flex flex-col justify-evenly">
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
        <div className="w-1/2 border-l border-gray-200 pl-6 flex flex-col items-center justify-center">
          <p className="font-semibold text-sm text-gray-800 mb-0.5">
            Active Items
          </p>
          <div className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-500 text-[0.6rem] leading-none text-center p-0.5">
            {item.activeItems > 0 ? item.activeItems : "No Active Items"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
