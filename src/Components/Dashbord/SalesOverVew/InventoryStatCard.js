import React from "react";
import { FaRegCircle } from "react-icons/fa";

const InventoryStatCard = ({ value, label, status, valueColor, labelColor }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md px-3 py-4 flex flex-col justify-center items-center text-center min-h-[100px]">
      <p className={`text-xl font-bold ${valueColor}`}>{value}</p>
      <p className={`text-sm font-semibold ${labelColor}`}>{label}</p>
      <div className="flex items-center text-xs font-medium text-gray-600 mt-1">
        <FaRegCircle className="mr-1 text-gray-400" />
        {status}
      </div>
    </div>
  );
};

export default InventoryStatCard;
