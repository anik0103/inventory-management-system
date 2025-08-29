import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Filters = ({ filters = {}, setFilters }) => {
  const navigate = useNavigate();

  const clearField = (fieldName) => {
    setFilters((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const handleAddClick = () => {
    navigate("/app/add-product");
  };

  return (
    <div className="flex flex-wrap gap-3 items-center m-3">
      {/* Sort */}
      <select
        className="border w-28 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
        value={filters.sortOrder || ""}
        onChange={(e) => {
          const value = e.target.value;

          // 🔹 if dropdown is a category, update category filter
          if (["fashion", "electronic", "accessories"].includes(value.toLowerCase())) {
            setFilters({
              ...filters,
              category: value,   // set category
              sortOrder: ""      // clear sort order
            });
          } else {
            // 🔹 otherwise update sorting
            setFilters({
              ...filters,
              sortOrder: value,
              category: ""       // clear category when sorting
            });
          }
        }}
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
          value={filters.productName}
          onChange={(e) => setFilters((prev) => ({ ...prev, productName: e.target.value }))
          }
        />
        {filters.productName && (
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
          value={filters.category}
          onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))
          }
        />
        {filters.category && (
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
          value={filters.quantity}
          onChange={(e) => setFilters((prev) => ({ ...prev, quantity: e.target.value }))
          }
        />
        {filters.quantity && (
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
          value={filters.price}
          onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        {filters.price && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => clearField("price")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>

        {/* Add Product Button */}
          <button
            className="lg:ml-auto bg-[#bd78b5] text-white w-28 px-2 py-2 rounded-lg hover:bg-[#d19fca] transition text-sm"
            onClick={handleAddClick}
          >
            + Add Product
          </button>
      
    </div>
  );
};

export default Filters;