import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    setProductImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productName,category,price,description });
    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Product Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {productImage && (
            <img
              src={productImage}
              alt="Preview"
              className="mt-2 h-32 rounded border"
            />
          )}
        </div>

    <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter category"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block font-medium">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter price"
            required
          />
        </div>
    </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            placeholder="Write something about the product..."
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#bd78b5] text-white rounded hover:bg-[#d19fca] transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;