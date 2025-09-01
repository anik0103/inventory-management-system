import React from "react";

const CustomerTable = ({ customers }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full table-fixed bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-1/6 px-6 py-3 border-b text-left text-sm font-bold text-gray-700">
              Customer ID
            </th>
            <th className="w-1/6 px-6 py-3 border-b text-left text-sm font-bold text-gray-700">
              Name
            </th>
            <th className="w-1/6 px-6 py-3 border-b text-left text-sm font-bold text-gray-700">
              Email
            </th>
            <th className="w-1/6 px-6 py-3 border-b text-left text-sm font-bold text-gray-700">
              Phone
            </th>
            <th className="w-1/6 px-6 py-3 border-b text-left text-sm font-bold text-gray-700">
              Location
            </th>
            <th className="w-1/6 px-6 py-3 border-b text-left text-sm font-bold text-gray-700">
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="w-1/6 px-6 py-3 border-b text-left whitespace-nowrap">
                {customer.CustomerID || "-"}
              </td>
              <td className="w-1/6 px-6 py-3 border-b text-left whitespace-nowrap">
                {customer.CustomerName || customer.name || "-"}
              </td>
              <td className="w-1/6 px-6 py-3 border-b text-left whitespace-nowrap">
                {customer.email || "-"}
              </td>
              <td className="w-1/6 px-6 py-3 border-b text-left whitespace-nowrap">
                {customer.number || "-"}
              </td>
              <td className="w-1/6 px-6 py-3 border-b text-left whitespace-nowrap">
                {customer.location || "-"}
              </td>
              <td className="w-1/6 px-6 py-3 border-b text-left whitespace-nowrap">
                {customer.country || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
