import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Filters = ({ onSearch , onSortFilterChange}) => {
  const[productName, setProductName] = useState("");
  const[category, setCategory] = useState("");
  const[quantity, setQuantity] = useState("");
  const[price, setPrice] = useState("");

  const handleSearch = () => {
    onSearch({
      productName,
      category,
      quantity,
      price,
    });
  };

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/add-product");
  }

  return (
    <div className="flex flex-wrap gap-4 items-center m-3">

      <select className="border w-28 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd78b5]" value={Filters} onChange={(e) => onSortFilterChange(e.target.value)}>
        <option value="all">All filter</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="Electronic">ELECTRONIC</option>
        <option value="Fashion">FASHION</option>
        <option value="Accessories">ACCESSORIES</option>
      </select>
      <div className="relative">
        <input
        type="text"
        placeholder="Product Name"
        className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={productName}
        onChange={(item) => {
          setProductName(item.target.value);
          onSearch({ productName: item.target.value, category, quantity, price});
        }}
        />
        {productName && ( 
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setProductName("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      <div className="relative">
        <input
        type="text"
        placeholder="Category"
        className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={category}
        onChange={(item) => {
          setCategory(item.target.value);
          onSearch({ productName, category: item.target.value, quantity, price });
        }} 
        />
        {category && ( 
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setCategory("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      <div className="relative">
        <input
        type="text"
        placeholder="Quantity"
        className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={quantity}
        onChange={(item) => {
          setQuantity(item.target.value);
          onSearch({ productName, category, quantity: item.target.value, price });
        }}
        />
        {quantity && ( 
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setQuantity("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      <div className="relative">
        <input
        type="text"
        placeholder="Price"
        className="border border-neutral-200 w-28 px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={price}
        onChange={(item) => {
          setPrice(item.target.value);
          onSearch({ productName, category, quantity, price: item.target.value });
        }}
        />
        {price && ( 
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setPrice("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      
      <button
        className="bg-[#bd78b5] text-white px-4 py-2 rounded-md hover:bg-[#d19fca] transition-colors duration-200 flex items-center gap-1" onClick={handleSearch}>
        <FaSearch /> Search
      </button>
      <button className="ml-auto bg-[#bd78b5] text-white px-4 py-2 rounded-lg hover:bg-[#d19fca] transition" onClick={handleAddClick}>
            + Add Product
      </button>
      
    </div>
  );
};

export default Filters;