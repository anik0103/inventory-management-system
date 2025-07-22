import { useState } from "react";
import SuppliersHead from "./SuppliersHead";
import SuppliersTable from "./SplTable";
import { SplDetails } from "./SplDetails";
import SupplierSearch from "./SupplierSearch";

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuppliers = SplDetails.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* //<h1>svd</h1> */}
      <SuppliersHead />
      <SupplierSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SuppliersTable data={filteredSuppliers} />
    </div>
  );
};

export default Suppliers;
