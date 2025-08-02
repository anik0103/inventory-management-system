import React from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const SalesOrder = () => {
  const { salesOrder, salesActivity } = mockData;

  // Extract sales order status data into an array for easier mapping
  const orderStatuses = [
    { label: "Draft", value: salesOrder?.draft || 0 },
    { label: "Confirmed", value: salesOrder?.confirmed || 0 },
    { label: "Packed", value: salesOrder?.packed || 0 },
    { label: "Shipped", value: salesOrder?.shipped || 0 },
    { label: "Invoiced", value: salesOrder?.invoiced || 0 },
  ];

  return (
    <div className="w-full mt-4 lg:mt-6">
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-4 w-full">
        <div className="flex justify-between items-center border-b border-[#bd78b5] pb-2 mb-4">
          <h2 className="font-bold text-lg text-[#bd78b5]">
            {salesActivity?.title || "Sales Activity"}
          </h2>
          <span className="text-sm text-[#bd78b5] font-semibold">
            {salesOrder?.month || "N/A"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-purple-200 rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-600 font-medium">Status</h3>
            <p className="text-lg font-bold text-purple-600">
              {salesActivity?.status || "N/A"}
            </p>
          </div>
          <div className="bg-white border border-purple-200 rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-600 font-medium">Packages</h3>
            <p className="text-lg font-bold text-purple-600">
              {salesActivity?.packages || 0}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
          {orderStatuses.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-purple-200 rounded-lg shadow p-4 flex flex-col items-center"
            >
              <h4 className="text-sm text-gray-600 font-medium">
                {item.label}
              </h4>
              <p className="text-xl font-bold text-purple-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOrder;
