import { useState } from "react";
import SuppliersHead from "./SuppliersHead";
import SupplierSearch from "./SupplierSearch";
import SupplierTable from "./SupplierTable";
import { SplDetails } from "./SplDetails";
import AddSupplierButton from "./AddSupplier/AddSupplierButton";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(SplDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [productTypeTerm, setProductTypeTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.vendorsName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      supplier.location.toLowerCase().includes(locationTerm.toLowerCase()) &&
      supplier.productType.toLowerCase().includes(productTypeTerm.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <SuppliersHead />
      <div className="px-6 py-4 flex flex-wrap justify-between items-end gap-4">
        <SupplierSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          productTypeTerm={productTypeTerm}
          setProductTypeTerm={setProductTypeTerm}
        />
        <div className="self-end">
          <AddSupplierButton />
        </div>
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
