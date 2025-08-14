import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Filters = ({ onFilterChange }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const navigate = useNavigate();

  // Debounce filter change
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange({
        productName,
        category,
        quantity,
        price,
        sortOrder,
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [productName, category, quantity, price, sortOrder]); // removed onFilterChange from deps

  const clearField = (fieldName) => {
    if (fieldName === "productName") setProductName("");
    if (fieldName === "category") setCategory("");
    if (fieldName === "quantity") setQuantity("");
    if (fieldName === "price") setPrice("");
  };

  const handleAddClick = () => {
    navigate("/add-product");
  };

  return (
    <div className="flex flex-wrap gap-4 items-center m-3">
      {/* Sort & Filter */}
      <select
        className="border w-28 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">All filter</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="Electronic">Electronic</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
      </select>

      {/* Product Name */}
      <div className="relative">
        <input
          type="text"
          placeholder="Product Name"
          className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {productName && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => clearField("productName")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="relative">
        <input
          type="text"
          placeholder="Category"
          className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {category && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => clearField("category")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>

      {/* Quantity */}
      <div className="relative">
        <input
          type="text"
          placeholder="Quantity"
          className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        {quantity && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => clearField("quantity")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>

      {/* Price */}
      <div className="relative">
        <input
          type="text"
          placeholder="Price"
          className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {price && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => clearField("price")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>

      {/* Search Button */}
      <button
        className="bg-[#bd78b5] text-white px-4 py-2 rounded-md hover:bg-[#d19fca] transition-colors duration-200 flex items-center gap-1"
        onClick={() =>
          onFilterChange({
            productName,
            category,
            quantity,
            price,
            sortOrder,
          })
        }
      >
        <FaSearch /> Search
      </button>

      {/* Add Product Button */}
      <button
        className="ml-auto bg-[#bd78b5] text-white px-4 py-2 rounded-lg hover:bg-[#d19fca] transition"
        onClick={handleAddClick}
      >
        + Add Product
      </button>
    </div>
  );
};

export default Filters;