import React from "react";

const CustomerFilters = ({
  searchName,
  setSearchName,
  searchNumber,
  setSearchNumber,
  searchEmail,
  setSearchEmail,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6 w-auto mt-6">
      <input
        type="text"
        placeholder="Search Customer Name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
      />
      <input
        type="text"
        placeholder="Search Email"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
      />
    </div>
  );
};

export default CustomerFilters;
