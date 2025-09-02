import React, { useContext, useState, useEffect } from "react";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";
import Filters from "./Filters";

const PdtList = () => {
  const { selectedRegion } = useContext(RegionContext);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
  sortOrder: "",
  productName: "",
  category: "",
  quantity: "",
  price: ""
});

  // Load products
  useEffect(() => {
    const regionToUse = selectedRegion || localStorage.getItem("selectedRegion");
    if (regionToUse) {
      const regionData = mockData.find(
        (region) => region.region.toLowerCase() === regionToUse.toLowerCase()
      );
      if (regionData) {
        setProducts(regionData.regionWiseData.products || []);
      }
    }
  }, [selectedRegion]);

  // 🔹 Apply filters & sorting
  const filteredProducts = products
  .filter((p) => {
    // Product name filter
    if (filters.productName && !p.name.toLowerCase().includes(filters.productName.toLowerCase())) return false;

    // Category filter (from either category input OR All filter dropdown)
    if (filters.category && p.category?.toLowerCase() !== filters.category.toLowerCase()) return false;
    if (
      filters.sortOrder &&
      ["electronic", "fashion", "accessories"].includes(filters.sortOrder.toLowerCase())
    ) {
      if (p.category?.toLowerCase() !== filters.sortOrder.toLowerCase()) return false;
    }

    // Quantity filter
    if (filters.quantity && p.quantity < parseInt(filters.quantity)) return false;

    // Price filter
    if (filters.price && p.price > parseInt(filters.price)) return false;

    return true;
  })
  .sort((a, b) => {
    if (filters.sortOrder === "priceLowHigh") return a.price - b.price;
    if (filters.sortOrder === "priceHighLow") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((p) => (
          <div key={p.name} className="border p-4 rounded shadow">
            <Link href={`/app/product/${p.name}`}>
              <img src={p.image} alt={p.name} className="h-40 object-contain" />
              <h3 className="font-bold">{p.name}</h3>
              <p>₹{p.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdtList;