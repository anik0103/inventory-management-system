import { FaSearch } from "react-icons/fa";

const SupplierSearch = ({ searchTerm, setSearchTerm }) => {
  const handleSearchClick = () => {
    console.log("Search clicked:", searchTerm);
  };

  return (
    <div className="px-6 mb-2 py-4 flex justify-start">
        <div className="flex flex-wrap gap-3 items-center m-3">
            <input
                type="text"
                placeholder="supplier name..."
                className="border border-neutral-200 w-52 px-3 py-2 rounded-md focus:outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                onClick={handleSearchClick}
                className="bg-[#bd78b5] px-3 py-2 rounded-lg hover:bg-[#d19fca] transition"
            >
                <FaSearch />
            </button>
        </div>
    </div>
  );
};

export default SupplierSearch;
