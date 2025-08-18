import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.newSupplier) {
      const newSupplier = location.state.newSupplier;
      setSuppliers((prevSuppliers) => {
        const supplierExists = prevSuppliers.some(
          (supplier) => supplier.vendorsName === newSupplier.vendorsName
        );
        if (!supplierExists) {
          return [newSupplier, ...prevSuppliers];
        }
        return prevSuppliers;
      });
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const addProductToSupplier = (supplierIndex, newProduct) => {
    if (!newProduct.trim()) return;

    setSuppliers(currentSuppliers =>
      currentSuppliers.map((supplier, index) => {
        if (index === supplierIndex) {
          // Create a new supplier object with the new product added
          return {
            ...supplier,
            products: [...supplier.products, newProduct],
          };
        }
        return supplier;
      })
    );
  };

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
    <div className="bg-neutral-background min-h-screen p-6">
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
        onAddProduct={addProductToSupplier} // ++ PASS THE FUNCTION AS A PROP ++
      />
    </div>
  );
};

export default Suppliers;