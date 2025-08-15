import React, { useContext, useState, useEffect } from "react";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";
import Filters from "./Filters";

const PdtList = () => {
  const { selectedRegion, setSelectedRegion } = useContext(RegionContext);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    sort: "",
  });

  // 🔹 Load products based on region (from context or localStorage)
  useEffect(() => {
    const regionToUse = selectedRegion || localStorage.getItem("selectedRegion");

    if (regionToUse) {
      const regionData = mockData.find(
        (region) => region.region.toLowerCase() === regionToUse.toLowerCase()
      );

      if (regionData) {
        const productList = regionData.regionWiseData.products || [];
        setProducts(productList);

        // Save for reload/back navigation
        localStorage.setItem("selectedRegion", regionToUse);
        localStorage.setItem("products", JSON.stringify(productList));
      }
    }
  }, [selectedRegion]);

  // 🔹 Apply filters & sorting
  const filteredProducts = products
    .filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "priceLowHigh") return a.price - b.price;
      if (filters.sort === "priceHighLow") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((p) => (
          <div
            key={p.name}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <a href={`/product/${p.name}`}>
              <img src={p.image} alt={p.name} className="h-40 object-contain" />
              <h3 className="font-bold">{p.name}</h3>
              <p>₹{p.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdtList;