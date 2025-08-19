import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RegionContext } from "../Dashbord/RegionContext";
import mockData from "../../asset/fakeApiResponce/mockData.json";

const ProductDetails = () => {
  const { productName } = useParams();
  const { selectedRegion } = useContext(RegionContext);
  const navigate = useNavigate();

  const activeRegion = selectedRegion || localStorage.getItem("selectedRegion");

  const regionData = Array.isArray(mockData)
    ? mockData.find(
        (region) =>
          region?.region?.toLowerCase() === activeRegion?.toLowerCase()
      )
    : null;

  const product = regionData?.regionWiseData?.products?.find(
    (item) => item?.name?.toLowerCase() === productName?.toLowerCase()
  );

  // 🔹 Save region + products for back navigation
  useEffect(() => {
    if (product && activeRegion) {
      localStorage.setItem("selectedRegion", activeRegion);
      const productList = regionData?.regionWiseData?.products || [];
      localStorage.setItem("products", JSON.stringify(productList));
    }
  }, [product, activeRegion, regionData]);

  if (!product) {
    return (
      <p className="text-center mt-10 text-lg text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-6">
      <div className="relative w-4/5 h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* ✅ Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Left Section */}
        <div className="w-full md:w-1/2 h-full p-6 flex flex-col justify-center items-start text-left">
          <h2 className="text-5xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg text-gray-700 font-bold mb-4">{product.category}</p>
          <p className="text-3xl font-bold text-purple-600 mb-4">₹{product.price}</p>

          <div className="mb-4">
            <label className="text-gray-700 font-bold text-xl">Quantity</label>
            <p className="text-md font-semibold">{product.quantity}</p>
          </div>

          <div>
            <label className="text-gray-700 font-bold text-xl">Description</label>
            <p className="text-lg">{product.description}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[70%] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;