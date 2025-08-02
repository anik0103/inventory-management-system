import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
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

      <select className="border w-32 p-2 rounded-lg" value={Filters} onChange={(e) => onSortFilterChange(e.target.value)}>
        <option value="all">All filter</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="Electronic">ELECTRONIC</option>
        <option value="Fashion">FASHION</option>
        <option value="Accessories">ACCESSORIES</option>
      </select>
      <input
        type="text"
        placeholder="Product Name"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
          onSearch({ productName: e.target.value, category, quantity, price});
        }}
      />
      <input
        type="text"
        placeholder="Category"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          onSearch({ productName, category: e.target.value, quantity, price });
        }}
      />
      <input
        type="text"
        placeholder="Quantity"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
          onSearch({ productName, category, quantity: e.target.value, price });
        }}
      />
      <input
        type="text"
        placeholder="Price"
        className="border border-neutral-200 w-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          onSearch({ productName, category, quantity, price: e.target.value });
        }}
      />
      <button className=" bg-[#bd78b5] px-4 py-2 rounded-lg hover:bg-[#d19fca] transition" onClick={handleSearch}>
        <IoSearchSharp />
      </button>
      <button className="ml-auto bg-[#bd78b5] text-white px-4 py-2 rounded-lg hover:bg-[#d19fca] transition" onClick={handleAddClick}>
            + Add Product
      </button>
      
    </div>
  );
};

export default Filters;