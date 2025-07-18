import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const PurchaseOrder = () => {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] shadow-[5px_5px_0px_#bd78b5] hover:shadow-[3px_3px_0px_#a1609f] transition-all duration-300 p-4 rounded-lg mb-6 w-[20.5rem] h-[10rem] mx-auto lg:ml-[33rem] mt-[-10rem]">
      <div className="flex justify-between items-center border-b border-[#bd78b5] pb-2 mb-4">
        <h2 className="font-bold text-base text-[#bd78b5]">
          {mockData.purchaseOrder.title}
        </h2>
        <span className="font-semibold text-[#bd78b5] flex items-center gap-1 text-sm">
          {mockData.purchaseOrder.timePeriod}
          <span className="text-[#bd78b5] text-lg">↓</span>
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
