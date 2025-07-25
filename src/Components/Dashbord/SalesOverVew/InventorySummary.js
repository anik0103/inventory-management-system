import React from "react";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const InventorySummaryCard = () => {
  const quantityInHand = mockData.inventorySummary?.packagesInHand || 0;
  const quantityToBeReceived =
    mockData.inventorySummary?.packagesToBeReceived || 0;

  return (
    <div className="flex justify-center sm:justify-start lg:justify-end px-4 mt-7 lg:-mb-6 lg:mr-16">
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-[0_3px_8px_#bd78b5] hover:shadow-[0_4px_12px_#a1609f] transition-all duration-300 w-full max-w-sm lg:h-48 p-4 flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <h2 className="text-lg font-bold text-[#bd78b5] border-b border-gray-200 pb-1 mb-2">
            Inventory Summary
          </h2>
        </div>

        {/* Quantity in Hand */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#bd78b5] uppercase">
            Quantity in Hand
          </span>
          <span className="text-xl font-bold text-gray-900">
            {quantityInHand}
          </span>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 my-1" />

        {/* Quantity to be Received */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#bd78b5] uppercase">
            Quantity to be Received
          </span>
          <span className="text-xl font-bold text-gray-900">
            {quantityToBeReceived}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InventorySummaryCard;
