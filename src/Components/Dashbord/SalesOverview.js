import React from 'react';
import mockData from '../../asset/fakeApiResponce/mockData.json';

const SalesOverview = () => {
  const item = mockData.itemDetails;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-2/5  ml-[11.5rem] mt-[23px] h-[13rem]">
      <h2 className="font-bold text-xl pb-3 mb-3 border-b border-gray-200">
        {item.title || "Item Details"}
      </h2>
      <div className="flex flex-grow items-center h-full">
        <div className="w-1/2 pr-6 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2"> 
            <span className="text-sm text-red-500">Low Stock Items</span> 
            <span className="font-semibold text-xl text-red-500">{item.lowStockItems}</span> 
          </div> 
          <div className="flex items-center justify-between mb-2"> 
            <span className="text-sm text-gray-700">All Item Groups</span> 
            <span className="font-semibold text-xl text-gray-800">{item.allItemGroups}</span> 
          </div> 
          <div className="flex items-center justify-between"> 
            <span className="text-sm text-gray-700">All Items</span> 
            <span className="font-semibold text-xl text-gray-800">{item.allItems}</span> 
          </div>
        </div>
        <div className="w-1/2 border-l border-gray-200 pl-6 flex flex-col items-center justify-center">
          <p className="font-semibold text-gray-800 mb-2">Active Items</p> 
          <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-500 text-sm text-center p-2">
            {item.activeItems > 0 ? item.activeItems : "No Active Items"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;