import React from "react";
import InventoryStatCard from "./InventoryStatCard";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const InventorySummary = () => {
  const quantityInHand = mockData.inventorySummary?.packagesInHand || 0;
  const quantityToBeReceived = mockData.inventorySummary?.packagesToBeReceived || 0;

  return (
    <div className="w-full lg:w-full mt-2">
      <div className="h-50 bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-[0_4px_12px_#bd78b5] hover:shadow-[0_6px_18px_#a1609f] transition-all duration-300 w-full px-4 py-4 flex flex-col justify-between">
        <h2 className="text-base font-bold text-[#bd78b5] border-b border-gray-200 pb-2 text-center">
          Inventory Summary
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <InventoryStatCard
            value={quantityInHand}
            label="Qty"
            status="IN HAND"
            valueColor="text-purple-800"
            labelColor="text-purple-600"
          />
          <InventoryStatCard
            value={quantityToBeReceived}
            label="Qty"
            status="TO BE RECEIVED"
            valueColor="text-purple-800"
            labelColor="text-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default InventorySummary;
