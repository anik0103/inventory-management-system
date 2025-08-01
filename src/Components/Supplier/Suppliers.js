import { useState } from "react";
import SuppliersHead from "./SuppliersHead";
import SupplierSearch from "./SupplierSearch";
import SupplierTable from "./SupplierTable";
import { SplDetails } from "./SplDetails";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(SplDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [productTypeTerm, setProductTypeTerm] = useState(""); // Changed from countryTerm

  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.vendorsName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    supplier.location.toLowerCase().includes(locationTerm.toLowerCase()) &&
    supplier.productType.toLowerCase().includes(productTypeTerm.toLowerCase()) // Changed from country
  );

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      <SuppliersHead />
      <div className="px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
        <SupplierSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          productTypeTerm={productTypeTerm} // Changed from countryTerm
          setProductTypeTerm={setProductTypeTerm} // Changed from setCountryTerm
        />
      </div>
      <SupplierTable
        data={filteredSuppliers}
        onRowClick={toggleExpand}
        expandedIndex={expandedIndex}
      />
    </div>
  );
};

export default Suppliers;