import React from 'react';
import { FaRegCircle } from 'react-icons/fa'; 

const Cards = ({ value, label, status, valueColor, labelColor }) => {
  return (
    <div className="flex flex-col items-center py-4 px-2 flex-grow w-56">
      {value !== undefined && (
        <p className={`text-xl font-bold ${valueColor} mb-1`}>
          {value}
        </p>
      )}

      {label && (
        <p className={`text-lg font-semibold ${labelColor} mb-4`}>
          {label}
        </p>
      )}

      {status !== undefined && (
        <div className="flex items-center text-sm font-medium text-gray-600">
          <FaRegCircle className="mr-2 text-gray-400" />
          {status}
        </div>
      )}
    </div>
  );
};

export default Cards;