import React from "react";

const CustomerRow = ({ customer }) => {
  return (
    <tr className="border-b text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-150">
      <td className="py-3 px-4">{customer.CustomerID || "-"}</td>
      <td className="py-3 px-4">
        {customer.CustomerName || customer.name || "-"}
      </td>
      <td className="py-3 px-4">{customer.email || "-"}</td>
      <td className="py-3 px-4">{customer.number || "-"}</td>
      <td className="py-3 px-4">{customer.location || "-"}</td>
      <td className="py-3 px-4">{customer.country || "-"}</td>
    </tr>
  );
};

export default CustomerRow;