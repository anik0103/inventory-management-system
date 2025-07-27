import { FaSearch } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5"; // Example for clear button

const SupplierSearch = ({
  searchTerm, setSearchTerm,
  locationTerm, setLocationTerm,
  productTypeTerm, setProductTypeTerm,
}) => {
  return (
    <div className="flex flex-wrap gap-3 items-center"> {/* Increased gap */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Vendor Name" // Corrected placeholder
          className="border border-gray-300 px-4 py-2 rounded-md w-56 text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]" // Increased width, padding, text size, added focus ring
          value={searchTerm}
          onChange={(item) => setSearchTerm(item.target.value)}
        />
        {searchTerm && ( // Show clear button only if text is present
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setSearchTerm("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      {/* Repeat for location and productType with clear buttons */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search location"
          className="border border-gray-300 px-4 py-2 rounded-md w-56 text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
          value={locationTerm}
          onChange={(item) => setLocationTerm(item.target.value)}
        />
        {locationTerm && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setLocationTerm("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Product Type"
          className="border border-gray-300 px-4 py-2 rounded-md w-56 text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
          value={productTypeTerm}
          onChange={(item) => setProductTypeTerm(item.target.value)}
        />
        {productTypeTerm && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setProductTypeTerm("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>
      <button
        className="bg-[#bd78b5] text-white px-4 py-2 rounded-md hover:bg-[#d19fca] transition-colors duration-200 flex items-center gap-1" // Added gap for icon
        onClick={() => console.log("Searching...")}
      >
        <FaSearch /> Search
      </button>
    </div>
  );
};

export default SupplierSearch;