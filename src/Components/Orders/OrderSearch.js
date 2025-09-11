import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoCloseCircle } from "react-icons/io5";

const OrderSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="grid grid-cols-2 py-4 pl-7 md:flex md:flex-row gap-3 items-center">
      <div className="relative w-full md:w-56">
              <input
                type="text"
                placeholder="Order No."
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
                value={searchTerm}
                onChange={handleInputChange}
              />
              {searchTerm && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSearchTerm("");
                    if (onSearch) {
                      onSearch("");
                    }
                  }}
                >
                  <IoCloseCircle size={20} />
                </button>
              )}
            </div>
      
    </div>
  );
};
OrderSearch.propTypes = {
  onSearch: PropTypes.func
};

export default OrderSearch;

