import React from "react";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const InventorySummaryCard = () => {
  const quantityInHand = mockData.inventorySummary?.packagesInHand || 0;
  const quantityToBeReceived =
    mockData.inventorySummary?.packagesToBeReceived || 0;

  return (
    <div className="flex justify-end px-4 lg:-mt-48 lg:mr-16">
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-[0_4px_12px_#bd78b5] hover:shadow-[0_6px_18px_#a1609f] transition-all duration-300 p-4 w-[17rem] h-[12rem]">
        <div className="pb-2 border-b border-gray-200 mb-3">
          <h2 className="text-xl font-bold text-[#bd78b5]">Inventory Summary</h2>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-[#bd78b5] uppercase">
              Quantity in Hand
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {quantityInHand}
            </span>
          </div>
          <div className="border-b border-gray-200" />
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-[#bd78b5] uppercase">
              Quantity to be Received
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {quantityToBeReceived}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySummaryCard;
