import SupplierRow from "./SupplierRow";
import SplProductRow from "./SplProductRow";
import React from "react";

// ++ 1. RECEIVE onAddProduct PROP ++
const SupplierTable = ({ data, onRowClick, expandedIndex, onAddProduct }) => {
  return (
    <div className="px-6 py-6 overflow-x-auto">
      <table className="min-w-full border-collapse text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-gray-700 text-sm border-b bg-gray-100 uppercase tracking-wider">
            <th className="py-3 px-4">VENDOR NAME</th>
            <th className="py-3 px-4">POINT OF CONTACT</th>
            <th className="py-3 px-4">CONTACT</th>
            <th className="py-3 px-4">LOCATION</th>
            <th className="py-3 px-4">COUNTRY</th>
            <th className="py-3 px-4">PRODUCT TYPE</th>
            <th className="py-3 px-4">E-MAIL</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <React.Fragment key={index}>
                <SupplierRow
                  supplier={item}
                  index={index}
                  onClick={onRowClick}
                />
                {expandedIndex === index && (
                  // ++ 2. PASS PROPS TO SplProductRow ++
                  <SplProductRow
                    products={item.products}
                    supplierIndex={index}
                    onAddProduct={onAddProduct}
                  />
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-6">
                No Suppliers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;