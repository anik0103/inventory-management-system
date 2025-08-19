import React, { useContext, useState, useEffect } from "react";
import Head from "./Head";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import { RegionContext } from "../Dashbord/RegionContext";
import { useProducts } from "./PdtContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const Products = () => {
  const { selectedRegion } = useContext(RegionContext);
  const { products: addedProducts } = useProducts(); // ✅ products from context
  const [regionProducts, setRegionProducts] = useState([]);
  const [filters, setFilters] = useState({
    sortOrder: "",
    productName: "",
    category: "",
    quantity: "",
    price: ""
  });
  
  // Load products based on selected region
  useEffect(() => {
    let regionToUse = selectedRegion || localStorage.getItem("selectedRegion");

    if (regionToUse && Array.isArray(mockData)) {
      const regionObj = mockData.find(
        (item) =>
          item.region.toLowerCase().trim() === regionToUse.toLowerCase().trim()
      );

      if (regionObj) {
        const productsList = regionObj.regionWiseData?.products || [];
        setRegionProducts(productsList);
      } else {
        console.warn("No matching products for", regionToUse);
        setRegionProducts([]);
      }
    }
  }, [selectedRegion]);

  // ✅ Combine mockData products + added products
  const allProducts = [...regionProducts, ...addedProducts];

  // 🔹 Apply filters & sorting
  const filteredProducts = [...allProducts]
    // ✅ 1. Reorder so category matches come first
    .sort((a, b) => {
      if (filters.category) {
        const aMatch = a.category?.toLowerCase().includes(filters.category.toLowerCase());
        const bMatch = b.category?.toLowerCase().includes(filters.category.toLowerCase());
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
      }
      return 0;
    })
    // ✅ 2. Apply other filters
    .filter((p) => {
      if (filters.productName && !p.name.toLowerCase().includes(filters.productName.toLowerCase()))
        return false;

      if (filters.quantity && p.quantity < parseInt(filters.quantity)) return false;

      if (filters.price && p.price > parseInt(filters.price)) return false;

      return true;
    })
    // ✅ 3. Apply sorting
    .sort((a, b) => {
      if (filters.sortOrder === "priceLowHigh") return a.price - b.price;
      if (filters.sortOrder === "priceHighLow") return b.price - a.price;
      if (filters.sortOrder === "nameAZ") return a.name.localeCompare(b.name);
      if (filters.sortOrder === "nameZA") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <Head />
      <Filters filters={filters} setFilters={setFilters} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default Products;