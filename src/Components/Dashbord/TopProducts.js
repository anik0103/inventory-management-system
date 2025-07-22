import React from "react";

const TopProducts = () => {
  return (
    <div className="flex justify-end px-4 -mt-56 sm:mr-14">
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] shadow-md shadow-[#bd78b5] transition-all duration-300 p-4 rounded-lg mb-6 w-[30rem] h-[14rem]">
        <div className="flex justify-between items-center border-b border-[#bd78b5] pb-2 mb-4">
          <h2 className="font-bold text-base text-[#bd78b5]">
            Top Selling Items
          </h2>
          <span className="font-semibold text-[#bd78b5] flex items-center gap-1 text-sm">
            This Month
            <span className="text-[#bd78b5] text-lg">↓</span>
          </span>
        </div>

        <p className="text-gray-700 font-medium text-sm">
          Add top selling product details here.
        </p>
      </div>
    </div>
  );
};

export default TopProducts;
