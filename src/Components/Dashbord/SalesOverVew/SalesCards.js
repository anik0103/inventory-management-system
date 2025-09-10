import React from "react";

const Cards = ({ value, label, status, valueColor, labelColor, dotColor }) => {
  return (
    <div className="w-full h-full p-3 sm:p-4 bg-white rounded-xl shadow-sm transition-all duration-300 grid grid-rows-[auto_auto_auto] place-items-center">
      {value !== undefined && (
        <p className={`text-lg lg:text-xl font-bold ${valueColor}`}>{value}</p>
      )}

      {label && (
        <p className={`text-base lg:text-sm font-semibold ${labelColor}`}>
          {label}
        </p>
      )}

      {status !== undefined && (
        <div className="flex items-center text-sm lg:text-base font-medium text-gray-600 mt-2">
          {/* solid dot */}
          <span className={`w-3 h-3 mr-1 rounded-full flex-shrink-0 ${dotColor}`}></span>
          <span className="whitespace-nowrap text-xs sm:text-sm">{status}</span>
        </div>
      )}
    </div>
  );
};

export default Cards;
