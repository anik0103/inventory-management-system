import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ products = [] }) => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    navigate(`/app/${item.name}`);
  };

  return (
    <div className="px-6 py-6 overflow-x-auto">
      <table className="min-w-full border-collapse text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-gray-700 text-sm border-b bg-gray-100 uppercase tracking-wider">
            <th className="py-3 px-4">PRODUCT</th>
            <th className="py-3 px-4">CATEGORY</th>
            <th className="py-3 px-4">QUANTITY</th>
            <th className="py-3 px-4">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr
                key={index}
                className="border-b text-sm cursor-pointer hover:bg-gray-100"
              >
                <td className="py-3 px-4 cursor-pointer" onClick={() => handleProductClick(item)}>{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4">{item.quantity}</td>
                <td className="py-3 px-4">${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-6">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;