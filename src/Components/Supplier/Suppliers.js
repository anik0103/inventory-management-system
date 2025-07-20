import { useState } from "react";
import SuppliersHead from "./SuppliersHead";
import SuppliersTable from "./SplTable";
import { SplDetails } from "./SplDetails";
import SupplierForm from "./SupplierForm";
import SupplierSearch from "./SupplierSearch"; // ✅ single file import

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(SplDetails);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddSupplier = (newSupplier) => {
    setSuppliers([...suppliers, newSupplier]);
  };

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SuppliersHead />
      <SupplierSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SupplierForm onAdd={handleAddSupplier} />
      <SuppliersTable data={filteredSuppliers} />
    </div>
  );
};

export default Suppliers;
