import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const OrderStatus = () => {
  const orderData = mockData.orderStatus || {};
  const purchase = mockData.purchaseOrder || {};

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5]
      transition-all duration-300 px-5 py-4 w-full h-full flex flex-col gap-4">

      {/* Heading */}
      <h2 className="font-bold text-lg border-b border-[#bd78b5] text-[#bd78b5] pb-2">
        {orderData.title || "Order Status"}
      </h2>

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-800">

        {/* Qty Ordered */}
        <div className="flex flex-col bg-white rounded-md p-3 shadow-sm border border-gray-200">
          <span className="text-gray-500">Qty Ordered</span>
          <span className="font-semibold text-base">{purchase.quantityOrdered ?? "N/A"}</span>
        </div>

        {/* Qty Pending */}
        <div className="flex flex-col bg-white rounded-md p-3 shadow-sm border border-gray-200">
          <span className="text-gray-500">Qty Pending</span>
          <span className="font-semibold text-base">{purchase.quantityPending ?? "N/A"}</span>
        </div>

        {/* Time Period */}
        <div className="flex flex-col bg-white rounded-md p-3 shadow-sm border border-gray-200">
          <span className="text-gray-500">Time Period</span>
          <span className="font-semibold text-base">{orderData.timePeriod ?? "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
