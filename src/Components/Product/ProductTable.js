import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ products = [] }) => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    navigate(`/product/${item.name}`);
  };

  return (
    <div className="px-6 py-4">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="text-gray-600 text-sm border-b">
            <th className="py-2">PRODUCT</th>
            <th className="py-2">CATEGORY</th>
            <th className="py-2">QUANTITY</th>
            <th className="py-2">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={index} className="border-b text-sm">
                <td className="py-2 pr-8">{item.name}</td>
              <tr
                key={index}
                className="border-b text-sm cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 cursor-pointer" onClick={() => handleProductClick(item)}>{item.name}</td>
                <td className="py-2">{item.category}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-400 py-4">
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