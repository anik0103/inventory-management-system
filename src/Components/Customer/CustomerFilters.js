import React from "react";

const CustomerFilters = ({
  searchName,
  setSearchName,
  searchLocation,
  setSearchLocation,
  searchCountry,
  setSearchCountry,
  searchEmail,
  setSearchEmail,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-6 w-auto mt-6">
      <input
        type="text"
        placeholder="Search Customer Name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="Search Location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="Search Country"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="Search Email"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
};

export default CustomerFilters;
