import React, { useContext, useState, useEffect } from "react";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";
import Filters from "./Filters";

const PdtList = () => {
  const { selectedRegion } = useContext(RegionContext);

  const [filters, setFilters] = useState({
    productName: "",
    category: "",
    quantity: "",
    price: "",
    sortOrder: "",
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get products for the selected region
  const regionData = mockData.find(
    (region) => region.region.toLowerCase() === selectedRegion.toLowerCase()
  );
  const products = regionData ? regionData.products : [];

  // Apply filtering + sorting whenever filters or products change
  useEffect(() => {
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
        (p) => String(p.quantity) === String(filters.quantity)
      );
    }

    if (filters.price) {
      updatedList = updatedList.filter(
        (p) => parseFloat(p.price) <= parseFloat(filters.price)
      );
    }

    if (filters.sortOrder === "priceLowHigh") {
      updatedList.sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === "priceHighLow") {
      updatedList.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedList);
  }, [filters, products]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  if (!regionData || products.length === 0) {
    return <p className="text-center mt-5 text-lg">No products found</p>;
  }

  return (
    <div>
      {/* Filters */}
      <Filters
        onFilterChange={handleFilterChange}
        onSortFilterChange={handleFilterChange}
      />

      {/* Product List */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, idx) => (
          <div key={idx} className="border p-2 mb-2">
            <h3 className="font-semibold">{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No matching products</p>
      )}
    </div>
  );
};

export default PdtList;