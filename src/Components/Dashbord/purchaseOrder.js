import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const OrderStatus = () => {
  const orderData = mockData.orderStatus || {};

  return (
    <div className="flex justify-end w-full pr-4 sm:pr-8 lg:pr-14 mt-6">
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col justify-start">
        <div className="flex justify-between items-center border-b border-[#bd78b5] pb-2 mb-4">
          <h2 className="font-bold text-base text-[#bd78b5]">
            {orderData.title || "Order Status"}
          </h2>
          <span className="font-semibold text-[#bd78b5] flex items-center gap-1 text-sm">
            {orderData.timePeriod || "N/A"}
            <span className="text-[#bd78b5] text-lg">↓</span>
          </span>
        </div>

        <div>
          <p className="font-semibold text-gray-700">
            Quantity Ordered: {mockData.purchaseOrder.quantityOrdered ?? "N/A"}
          </p>
          <p className="font-semibold text-gray-700">
            Quantity Pending: {mockData.purchaseOrder.quantityPending ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
