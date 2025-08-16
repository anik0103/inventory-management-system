// import  from "./SupplierRow";
// import SplProductRow from "./SplProductRow";
import React from "react";
import OrderRow from "./OrderRow";

const Ordertable = ({ data = [], onRowClick }) => {
  if (!data) {
    return (
      <div className="px-6 py-6">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-6 overflow-x-auto">
      <table className="min-w-full border-collapse text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-gray-700 text-sm border-b bg-gray-100 uppercase tracking-wider">
            <th className="py-3 px-4">Order No.</th>
            <th className="py-3 px-4">Invoice NO.</th>
            <th className="py-3 px-4">Customer Name</th>
            <th className="py-3 px-4">Order Date</th>
            <th className="py-3 px-4">LOcation</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Invoiced</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <React.Fragment key={index}>
                <OrderRow Order={item} index={index} onClick={onRowClick} />
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-6">
                No Order Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Ordertable;