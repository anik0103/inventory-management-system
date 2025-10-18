import React, { useState } from "react";
import mockData from "../../asset/fakeApiResponce/mockData.json"; // adjust path as per your project

const ProductAction = ({ action }) => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("");

  const handleSearch = () => {
    // Find product by ID (e.g., P-1001, P-1002)
    const found = mockData.products.find((p) => p.id === product.Id.trim());
    setProduct(found || null);
    setQuantity(""); // reset input when searching a new product
  };

  const handleSubmit = () => {
    if (!product) return;
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const actionWord = action === "pick" ? "Picked" : "Put";
    alert(`${actionWord} ${quantity} units of ${product.name} (ID: ${product.id})`);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">
        {action === "pick" ? "Pick Product" : "Put Product"}
      </h1>

      {/* Product ID Input */}
      <input
        type="text"
        placeholder="Enter Product ID (e.g., P-1001)"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border px-3 py-2 w-full rounded mb-2"
      />
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded mb-4"
        onClick={handleSearch}
      >
        Search
      </button>

      {/* Show product details if found */}
      {product ? (
        <div className="border p-4 rounded bg-gray-100">
          <div className="flex items-center gap-4 mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <p className="font-bold text-lg">{product.name}</p>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-sm text-gray-600">Available: {product.quantity}</p>
              <p className="text-sm text-gray-600">Price: ${product.price}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-3">{product.description}</p>

          {/* Quantity Input */}
          <input
            type="number"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border px-3 py-2 w-full rounded"
          />

          <button
            className={`mt-3 px-4 py-2 rounded text-white w-full ${
              action === "pick" ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={handleSubmit}
          >
            {action === "pick" ? "Pick" : "Put"}
          </button>
        </div>
      ) : (
        productId && (
          <p className="text-red-500">No product found with ID {productId}</p>
        )
      )}
    </div>
  );
};

export default ProductAction;
