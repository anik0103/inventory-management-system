import { useState } from "react";

const Filters = () => {
  const [filter, setFilter] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    console.log("Filter values:", {
      filter,
      productName,
      category,
      price,
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 px-6 py-4 border-b bg-white shadow-sm">
      <select
        className="border p-2 rounded-lg"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All filter</option>
        <option value="lowPrice">Price: Low to High</option>
        <option value="highPrice">Price: High to Low</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>

      <input
        type="text"
        placeholder="Product Name"
        className="border p-2 rounded-lg"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        className="border p-2 rounded-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="border p-2 rounded-lg w-28"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        className="bg-gray-300 px-4 py-2 rounded-lg" onClick={handleSearch}
      >
        🔍
      </button>

      <button
        className="ml-auto bg-white border border-gray-400 px-4 py-2 rounded-md font-medium" onClick={() => alert("Add Product on Clicked")}
      >
        +ADD
      </button>
    </div>
  );
};

export default Filters;