import React from "react";

const TopProducts = ({ regionData }) => {
  const topSellingItems = regionData?.regionWiseData?.topSellingItems || [];

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] p-4 transition-all duration-300 w-full">
      <h2 className="text-lg font-bold text-[#bd78b5] border-b border-[#bd78b5] pb-2 mb-4">
        Top Selling Products
      </h2>

      {topSellingItems.length > 0 ? (
        <div className="space-y-3">
          {topSellingItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-purple-200 rounded-lg shadow p-3"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 object-contain rounded-md mr-3"
              />

              {/* Product Info */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">{topSellingItems.name}</p>
              </div>

              {/* Quantity Sold */}
              <span className="text-sm font-bold text-purple-600">
                {item.quantitySold}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          No top-selling items available
        </p>
      )}
    </div>
  );
};

export default TopProducts;
