import React from "react";
import { FaRegCircle } from "react-icons/fa";

const Cards = ({ value, label, status, valueColor, labelColor }) => {
  return (
    <div className="w-full h-full p-3 sm:p-4 bg-white rounded-xl shadow-sm transition-all duration-300 grid grid-rows-[auto_auto_auto] place-items-center">
      {/* Value */}
      {value !== undefined && (
        <p className={`text-lg lg:text-xl font-bold ${valueColor}`}>
          {value}
        </p>
      )}

      {/* Label */}
      {label && (
        <p className={`text-base lg:text-sm font-semibold ${labelColor}`}>
          {label}
        </p>
      )}

      {/* Status */}
      {status !== undefined && (
        <div className="flex items-center text-sm lg:text-base font-medium text-gray-600">
          <FaRegCircle className="mr-1 text-gray-400" />
          {status}
        </div>
      )}
    </div>
  );
};

export default Cards;
