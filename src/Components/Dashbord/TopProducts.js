import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const TopProducts = () => {
  return (
    <div>
      <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md mb-6 w-[25rem] h-[23rem] ml-[53.125rem] mt-[-8.75rem]">
        <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-2">
          <h2 className="font-bold text-base text-blue-900">
            Top Selling Items
          </h2>
          <span className="font-semibold text-blue-900 flex items-center gap-1 text-sm">
            This Month
            <span className="text-blue-600 text-lg">↓</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
