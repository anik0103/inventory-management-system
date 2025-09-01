import React from "react";

const CustomerFilters = ({
  searchCustomerID,
  setSearchCustomerID,
  searchName,
  setSearchName,
  searchEmail,
  setSearchEmail,
}) => {
  return (
    <div className="flex items-center gap-3 mb-6 mt-6">
      <div>
        <input
          type="text"
          placeholder="Search Customer ID"
          value={searchCustomerID}
          onChange={(e) => setSearchCustomerID(e.target.value)}
          className="w-40 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Customer Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="w-40 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="w-40 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bd78b5] text-sm"
        />
      </div>
    </div>
  );
};

export default CustomerFilters;
