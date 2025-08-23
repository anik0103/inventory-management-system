import React from "react";

const Cards = ({ title, value, percentageChange, description }) => {
  const changeColor = percentageChange > 0 ? "text-green-600" : "text-red-600";
  const changeSymbol = percentageChange > 0 ? "▲" : "▼";

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-[#bd78b5] flex flex-col text-left">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-md font-semibold text-black">{title}</h3>
        {percentageChange !== undefined && (
          <span className={`text-sm font-semibold ${changeColor}`}>
            {changeSymbol} {percentageChange}%
          </span>
        )}
      </div>
      <div className="w-full h-0.5 bg-[#bd78b5]/60 mb-3"></div>
      <p className="text-2xl font-extrabold text-black">{value} Items</p>
      {description && (
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      )}
    </div>
  );
};

export default Cards;
