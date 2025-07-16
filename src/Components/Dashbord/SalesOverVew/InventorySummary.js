import React from 'react';
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const InventorySummaryCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[20rem] ml-[61rem] mt-[-12rem] h-[12rem]">
      <div className="pb-2 border-b border-gray-200 mb-2">
        <h2 className="text-xl font-bold text-gray-800">Inventory Summary</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-1"> 
          <span className="text-sm font-medium text-gray-600 uppercase">QUANTITY IN HAND</span>
          <span className="text-2xl font-semibold text-gray-800">{mockData.inventorySummary.packagesInHand}</span> 
        </div>
        <div className="border-b border-gray-200 my-1"></div> 
        <div className="flex justify-between items-center py-1">
          <span className="text-sm font-medium text-gray-600 uppercase">QUANTITY TO BE RECEIVED</span>
          <span className="text-2xl font-semibold text-gray-800">{mockData.inventorySummary.packagesToBeReceived}</span>
        </div>
      </div>
    </div>
  );
};

export default InventorySummaryCard;