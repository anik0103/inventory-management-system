import React from "react";

const ItemDetails = ({ regionData }) => {
  const item = regionData?.regionWiseData?.itemDetails;

  const hasItemData =
    item &&
    (item.lowStockItems !== undefined ||
      item.allItemGroups !== undefined ||
      item.allItems !== undefined ||
      item.activeItems !== undefined);

  if (!hasItemData) {
    return (
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-6 flex items-center justify-center h-full text-gray-500 text-sm">
        🚫 No item data available for this location.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <h2 className="font-bold text-lg text-[#bd78b5] border-b pb-2 mb-4">Item Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-red-500">Low Stock</span>
            <span className="font-semibold">
              {item.lowStockItems !== undefined ? item.lowStockItems : "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Item Groups</span>
            <span className="font-semibold">
              {item.allItemGroups !== undefined ? item.allItemGroups : "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Items</span>
            <span className="font-semibold">
              {item.allItems !== undefined ? item.allItems : "N/A"}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-semibold mb-2">Active Items</p>
          <div className="w-14 h-14 rounded-full bg-white border border-[#bd78b5] text-[#bd78b5] flex items-center justify-center text-sm font-bold">
            {item.activeItems !== undefined ? item.activeItems : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
