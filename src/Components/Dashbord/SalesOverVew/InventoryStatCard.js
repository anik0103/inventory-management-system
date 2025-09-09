import React from "react";

const InventoryStatCard = ({ value, label, status, valueColor, labelColor, dotColor }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md px-3 py-4 flex flex-col justify-center items-center text-center min-h-[100px]">
      <p className={`text-xl font-bold ${valueColor}`}>{value}</p>
      <p className={`text-sm font-semibold ${labelColor}`}>{label}</p>
      <div className="flex items-center text-xs font-medium text-gray-600 mt-1">
        {/* solid dot */}
        <span className={`w-3 h-3 mr-1 rounded-full flex-shrink-0 ${dotColor}`}></span>
        <span className="whitespace-nowrap text-xs sm:text-sm">{status}</span>
      </div>
    </div>
  );
};

export default InventoryStatCard;
