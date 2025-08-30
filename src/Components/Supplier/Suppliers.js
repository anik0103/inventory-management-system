import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SuppliersHead from "./SuppliersHead";
import SupplierSearch from "./SupplierSearch";
import SupplierTable from "./SupplierTable";
import { SplDetails } from "./SplDetails"; 
import { RegionContext } from "../Dashbord/RegionContext";

const Suppliers = () => {
  const [displayedSuppliers, setDisplayedSuppliers] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [productTypeTerm, setProductTypeTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { selectedRegion } = useContext(RegionContext);

  useEffect(() => {
   
    const inventoryData = SplDetails.find(
      (inv) => inv.region === selectedRegion
    );

    if (inventoryData) {
      setDisplayedSuppliers(inventoryData.suppliers);
    } else {
      setDisplayedSuppliers([]); 
    }
  }, [selectedRegion]); 

  
  useEffect(() => {
    if (location.state?.newSupplier) {
      const newSupplier = location.state.newSupplier;
      setDisplayedSuppliers((prev) => [newSupplier, ...prev]);
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const addProductToSupplier = (supplierIndex, newProduct) => {
    if (!newProduct.trim()) return;

    setDisplayedSuppliers(currentSuppliers =>
      currentSuppliers.map((supplier, index) => {
        if (index === supplierIndex) {
          return {
            ...supplier,
            products: [...supplier.products, newProduct],
          };
        }
        return supplier;
      })
    );
  };

  const filteredSuppliers = displayedSuppliers.filter(
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
      
      <div className="px-6 py-4">
        <SupplierSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          productTypeTerm={productTypeTerm}
          setProductTypeTerm={setProductTypeTerm}
        />
      </div>

      <SupplierTable
        data={filteredSuppliers}
        onRowClick={toggleExpand}
        expandedIndex={expandedIndex}
        onAddProduct={addProductToSupplier}
      />
    </div>
  );
};

export default Suppliers;