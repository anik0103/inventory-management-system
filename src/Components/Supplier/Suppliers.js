import { useState } from "react";
import SuppliersHead from "./SuppliersHead";
import SuppliersTable from "./SplTable";
import { SplDetails } from "./SplDetails";
import SupplierSearch from "./SupplierSearch";


const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(SplDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [countryTerm, setCountryTerm] = useState("");


  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    supplier.location.toLowerCase().includes(locationTerm.toLowerCase()) &&
    supplier.country.toLowerCase().includes(countryTerm.toLowerCase())
  );


  return (
    <div>
      <SuppliersHead />

      <div className="px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-wrap gap-3">
          <SupplierSearch
            searchTerm={searchTerm}setSearchTerm={setSearchTerm}
            locationTerm={locationTerm}setLocationTerm={setLocationTerm}
            countryTerm={countryTerm}setCountryTerm={setCountryTerm}
          />
        </div>
       
      </div>


      <SuppliersTable data={filteredSuppliers} />
    </div>
  );
};

export default Suppliers;
