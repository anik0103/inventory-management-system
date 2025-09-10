import React from "react";
import OrderRow from "./OrderRow";
// REMOVED: OrderItemsRow is no longer used here
// import OrderItemsRow from "./OrderItemsRow";

const OrderTable = ({ data }) => { // Removed onRowClick and expandedIndex
  return (
    <div className="px-6 py-6 overflow-x-auto">
      <table className="min-w-full border-collapse text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-gray-700 text-sm border-b bg-gray-100 uppercase tracking-wider">
            <th className="py-3 px-4">Order No.</th>
            <th className="py-3 px-4">Invoice No.</th>
            <th className="py-3 px-4">Customer Name</th>
            <th className="py-3 px-4">Order Date</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Invoiced</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              // SIMPLIFIED: No need for Fragment or expanded row logic
              <OrderRow key={index} Order={item} />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-6">
                No Orders Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;