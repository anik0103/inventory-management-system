import React, { useContext, useState, useEffect, useMemo } from "react";
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

  const [debouncedCustomerID, setDebouncedCustomerID] = useState("");
  const [debouncedName, setDebouncedName] = useState("");
  const [debouncedEmail, setDebouncedEmail] = useState("");

  useEffect(() => {

    const timerId = setTimeout(() => {
      setDebouncedCustomerID(searchCustomerID);
      setDebouncedName(searchName);
      setDebouncedEmail(searchEmail);
    }, 500); 
    return () => {
      clearTimeout(timerId);
    };
  }, [searchCustomerID, searchName, searchEmail]);

  useEffect(() => {
    const regionToUse = selectedRegion || localStorage.getItem("selectedRegion");
    if (regionToUse) {
      const regionData = mockData.find(
        (region) => region.region.toLowerCase() === regionToUse.toLowerCase()
      );
      if (regionData) {
        setCustomers(regionData.regionWiseData?.customer || []);
      } else {
        setCustomers([]);
      }
    } else {
      setCustomers([]);
    }
  }, [selectedRegion]);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      return (
        (customer.CustomerID || "")
          .toLowerCase()
          .includes(debouncedCustomerID.toLowerCase()) &&
        (customer.CustomerName || customer.name || "")
          .toLowerCase()
          .includes(debouncedName.toLowerCase()) &&
        (customer.email || "")
          .toLowerCase()
          .includes(debouncedEmail.toLowerCase())
      );
    });
  }, [customers, debouncedCustomerID, debouncedName, debouncedEmail]);

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