import React, { useState } from "react";

const SplProductRow = ({ products, supplierIndex, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState("");

  const handleAddClick = () => {
    onAddProduct(supplierIndex, newProduct);
    setNewProduct("");
  };

  const handleKeyDown = (item) => {
    if (item.key === 'Enter') {
      handleAddClick();
    }
  };

  return (
    <tr>
      <td colSpan="7" className="bg-purple-50 px-6 py-4 text-sm text-gray-700 border-t border-purple-200">
        <div>
          <strong className="text-[#bd78b5]">Products:</strong>
          {products.length > 0 ? products.join(", ") : " No products listed."}
        </div>

        {/* ++ 4. ADD UI FOR THE INPUT AND BUTTON ++ */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={newProduct}
            onChange={(item) => setNewProduct(item.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter product name"
            className="border border-gray-300 px-3 py-1 rounded-md text-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
          />
          <button
            onClick={handleAddClick}
            className="bg-[#bd78b5] text-white font-semibold px-4 py-1 rounded-md text-sm hover:bg-[#d19fca] transition-colors duration-200 whitespace-nowrap"
          >
            + Add Product
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SplProductRow;