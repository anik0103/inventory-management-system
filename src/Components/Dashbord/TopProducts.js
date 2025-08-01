import React from "react";

const TopProductCard = () => {
  // Mock product data
  const topProduct = {
    name: "Wireless Headphones",
    category: "Electronics",
    sold: 1540,
    inStock: 320,
    image: "https://cdns3.thecosmicbyte.com/wp-content/uploads/white-bg-2.jpg.webp", // Replace with actual product image URL
  };

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-md shadow-[#bd78b5] transition-all duration-300 p-6 flex flex-col justify-between h-full">
      <h2 className="font-bold text-lg text-[#bd78b5] border-b pb-2 mb-4">Top Product</h2>

      <div className="flex items-center space-x-4">
        <img
          src={topProduct.image}
          alt={topProduct.name}
          className="w-16 h-16 rounded-lg border border-[#bd78b5]"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{topProduct.name}</span>
          <span className="text-xs text-gray-500">{topProduct.category}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-800">
        <div className="flex flex-col items-center">
          <span className="text-xs">Sold</span>
          <span className="font-bold">{topProduct.sold}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs">In Stock</span>
          <span className="font-bold">{topProduct.inStock}</span>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
