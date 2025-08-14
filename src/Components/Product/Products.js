import React, { useContext, useState, useEffect } from "react";
import Head from "./Head";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const Products = () => {
  const { selectedRegion } = useContext(RegionContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (selectedRegion && Array.isArray(mockData)) {
      const regionObj = mockData.find(
        (item) =>
          item.region.toLowerCase().trim() ===
          selectedRegion.toLowerCase().trim()
      );

      if (regionObj) {
        const productsList = regionObj.regionWiseData?.products || [];
        setProducts(productsList);
        setFilteredProducts(productsList);
      } else {
        console.warn("No matching products for", selectedRegion);
        setProducts([]);
        setFilteredProducts([]);
      }
    }
  }, [selectedRegion]);

  // Handle filtering
  const handleFilterChange = (filters) => {
    let updatedList = [...products];

    if (filters.productName) {
      updatedList = updatedList.filter((p) =>
        p.name.toLowerCase().includes(filters.productName.toLowerCase())
      );
    }

    if (filters.category) {
      updatedList = updatedList.filter((p) =>
        p.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.quantity) {
      updatedList = updatedList.filter(
        (p) => p.quantity === parseFloat(filters.quantity)
      );
    }

    if (filters.price) {
      updatedList = updatedList.filter(
        (p) => p.price === parseFloat(filters.price)
      );
    }

    setFilteredProducts(updatedList);
  };

  // Handle sorting
  const handleSortFilterChange = (sortOption) => {
    let sortedList = [...filteredProducts];

    if (sortOption === "priceLowHigh") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      sortedList.sort((a, b) => b.price - a.price);
    } else if (sortOption === "nameAZ") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameZA") {
      sortedList.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(sortedList);
  };

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <Head />
      <Filters
        onFilterChange={handleFilterChange}
        onSortFilterChange={handleSortFilterChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default Products;
