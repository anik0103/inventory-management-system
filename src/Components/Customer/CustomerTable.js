import React from "react";
import CustomerRow from "./CustomerRow";

const CustomerTable = ({ customers }) => {
  return (
    <div className="px-6 py-6 overflow-x-auto">
      <table className="min-w-full border-collapse text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-gray-700 text-sm border-b bg-gray-100 uppercase tracking-wider">
            <th className="py-3 px-4">Customer ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Phone</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Country</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, index) => (
              <CustomerRow key={index} customer={customer} />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 py-6">
                No Customers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;