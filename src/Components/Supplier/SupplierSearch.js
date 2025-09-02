import { IoCloseCircle } from "react-icons/io5";
import AddSupplierButton from "./AddSupplier/AddSupplierButton";

const SupplierSearch = ({
  searchTerm, setSearchTerm,
  locationTerm, setLocationTerm,
  productTypeTerm, setProductTypeTerm,
}) => {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-row gap-3 items-center">

      <div className="relative w-full md:w-40">
        <input
          type="text"
          placeholder="Vendor Name"
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
          value={searchTerm}
          onChange={(item) => setSearchTerm(item.target.value)}
        />
        {searchTerm && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setSearchTerm("")}
          >
            <IoCloseCircle size={20} />
          </button>
        )}
      </div>

      <div className="relative w-full md:w-40">
        <input
          type="text"
          placeholder="Location"
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
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
      
      <div className="relative w-full md:w-40">
        <input
          type="text"
          placeholder="Product Type"
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
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
      <AddSupplierButton />
    </div>
  );
};

export default SupplierSearch;