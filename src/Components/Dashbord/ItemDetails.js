import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const ItemDetails = () => {
  const item = mockData.itemDetails;

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <h2 className="font-bold text-lg text-[#bd78b5] border-b pb-2 mb-4">Item Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-red-500">Low Stock</span>
            <span className="font-semibold">{item.lowStockItems}</span>
          </div>
          <div className="flex justify-between">
            <span>Item Groups</span>
            <span className="font-semibold">{item.allItemGroups}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Items</span>
            <span className="font-semibold">{item.allItems}</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-semibold mb-2">Active Items</p>
          <div className="w-14 h-14 rounded-full bg-white border border-[#bd78b5] text-[#bd78b5] flex items-center justify-center text-sm font-bold">
            {item.activeItems > 0 ? item.activeItems : "0"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
