import { FaSearch } from "react-icons/fa";

const SupplierSearch = ({
  searchTerm,setSearchTerm,
  locationTerm,setLocationTerm,
  countryTerm,setCountryTerm,
}) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <input
        type="text"
        placeholder="Search name"
        className="border border-gray-300 px-3 py-2 rounded-md w-48 text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search location"
        className="border border-gray-300 px-3 py-2 rounded-md w-48 text-sm"
        value={locationTerm}
        onChange={(e) => setLocationTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search country"
        className="border border-gray-300 px-3 py-2 rounded-md w-48 text-sm"
        value={countryTerm}
        onChange={(e) => setCountryTerm(e.target.value)}
      />
      <button
        className="bg-[#bd78b5] text-white px-3 py-2 rounded hover:bg-[#d19fca]"
        onClick={() => console.log("Searching...")}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SupplierSearch;
