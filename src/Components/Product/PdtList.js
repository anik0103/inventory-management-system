import React, { useContext, useState, useMemo } from "react";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const PdtList = () => {
  const { selectedRegion } = useContext(RegionContext);
  const [filterText, setFilterText] = useState("");

  // Finding region data
  const regionData = mockData.find(
    (region) => region.region.toLowerCase() === selectedRegion.toLowerCase()
  );
  const products = regionData ? regionData.products : [];

   // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [products, filterText]);

  if (!regionData || !regionData.products || regionData.products.length === 0) {
    return <p className="text-center mt-5 text-lg">No products found</p>;
  }

  return (
    <div>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search product..."
        className="border border-neutral-300 px-3 py-2 rounded-md w-full mb-4"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
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