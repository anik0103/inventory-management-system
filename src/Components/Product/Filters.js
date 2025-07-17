import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Filters = ({ onSearch }) => {
  const[filters, setFilters] = useState("");
  const[productName, setProductName] = useState("");
  const[category, setCategory] = useState("");
  // const[quantity, setQuantity] = useState("");
  // const[price, setPrice] = useState("");

  const handleSearch = () => {
    console.log("Filter values:", {
      filters,
      productName,
      category,
      // quantity,
      // price,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center m-3">

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
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none text-sm"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none text-sm"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none text-sm"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none text-sm"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className=" bg-[#bd78b5] px-4 py-2 rounded-lg hover:bg-[#d19fca] transition" onClick={handleSearch}>
        <IoSearchSharp />
      </button>
      <button className="ml-auto bg-[#bd78b5] text-white px-4 py-2 rounded-lg hover:bg-[#d19fca] transition">
            + Add Product
      </button>
      
    </div>
  );
};

export default Filters;