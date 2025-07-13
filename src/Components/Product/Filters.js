import { useState } from "react";

const Filters = ({ onSearch }) => {
  const[filters, setFilters] = useState("");
  const[productName, setProductName] = useState("");
  const[category, setCategory] = useState("");
  const[quantity, setQuantity] = useState("");
  const[price, setPrice] = useState("");

  const handleSearch = () => {
    console.log("Filter values:", {
      filters,
      productName,
      category,
      quantity,
      price,
    });
  };

  return (
    <div className="flex flex-wrap items-center ml-auto gap-2 px-6 py-4 bg-white shadow">
      <select className="border w-32 p-2 rounded-lg" value={Filters} onChange={(e) => setFilters(e.target.value)}>
        <option value="">All filter</option>
        <option value="lowPrice">Price: Low to High</option>
        <option value="highPrice">Price: High to Low</option>
        <option value="Electronics">ELECTRONIC</option>
        <option value="Fashion">FASHION</option>
        <option value="Accessories">ACCESSORIES</option>
      </select>
      <input
        type="text"
        placeholder="Product Name"
        className="border w-32 p-2 rounded-lg"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="border w-32 p-2 rounded-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        className="border w-32 p-2 rounded-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        className="border w-32 p-2 rounded-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-blue-300" onClick={handleSearch}>
        🔍
      </button>
      <button className="ml-auto bg-blue-300 text-black font-bold px-4 py-2 rounded-lg" onClick={()=> alert("Add Product on Clicked")}>
        +ADD
      </button>
    </div>
  );
};

export default Filters;