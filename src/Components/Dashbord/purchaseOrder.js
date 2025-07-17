import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const PurchaseOrder = () => {
  return (
    <div className="bg-gray-50 border-gray-300 p-4 rounded-lg shadow-md mb-6 w-[20.5rem] h-[9rem] ml-[30.625rem] mt-[-24.8rem]">
      <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-4">
        <h2 className="font-bold text-base text-blue-900">
          {mockData.purchaseOrder.title}
        </h2>
        <span className="font-semibold text-blue-900 flex items-center gap-1 text-sm">
          {mockData.purchaseOrder.timePeriod}
          <span className="text-blue-600 text-lg">↓</span>
        </span>
      </div>

      <div>
        <p className="font-semibold text-gray-700">
          Quantity Ordered: {mockData.purchaseOrder.quantityOrdered}
        </p>
        <p className="font-semibold text-gray-700">
          Quantity Pending: {mockData.purchaseOrder.quantityPending}
        </p>
      </div>
    </div>
  );
};

export default PurchaseOrder;
