import React, { useContext, useState, useEffect } from "react";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";

import CustomerHeader from "../Customer/CustomerHeader";
import CustomerFilters from "../Customer/CustomerFilters";
import CustomerTable from "../Customer/CustomerTable";

const CustomerPage = () => {
  const { selectedRegion } = useContext(RegionContext);
  const [customers, setCustomers] = useState([]);

  const [searchCustomerID, setSearchCustomerID] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  useEffect(() => {
    const regionToUse = selectedRegion || localStorage.getItem("selectedRegion");
    if (regionToUse) {
      const regionData = mockData.find(
        (region) => region.region.toLowerCase() === regionToUse.toLowerCase()
      );
      if (regionData) {
        setCustomers(regionData.regionWiseData?.customer || []);
      }
    }
  }, [selectedRegion]);

  const filteredCustomers = customers.filter((customer) => {
    return (
      (customer.CustomerID || "")
        .toLowerCase()
        .includes(searchCustomerID.toLowerCase()) &&
      (customer.CustomerName || customer.name || "")
        .toLowerCase()
        .includes(searchName.toLowerCase()) &&
      (customer.email || "")
        .toLowerCase()
        .includes(searchEmail.toLowerCase())
    );
  });

  return (
    <div className="p-6">
      <CustomerHeader />
      <CustomerFilters
        searchCustomerID={searchCustomerID}
        setSearchCustomerID={setSearchCustomerID}
        searchName={searchName}
        setSearchName={setSearchName}
        searchEmail={searchEmail}
        setSearchEmail={setSearchEmail}
      />
      <CustomerTable customers={filteredCustomers} />
    </div>
  );
};

export default CustomerPage;
