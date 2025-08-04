import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const AddProduct = () => { 
  const navigate = useNavigate(); 
  const [productImage, setProductImage] = useState(null); 
  const [preview, setPreview] = useState(null); 
  const [productName, setProductName] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [discount, setDiscount] = useState("");

const handleImageChange = (e) => { 
  const file = e.target.files[0]; 
  setProductImage(file); 
  setPreview(URL.createObjectURL(file)); 
};

const handleSubmit = (e) => { 
  e.preventDefault(); 
  console.log({ productName, category, price, description, supplier, discount, productImage }); 
  navigate("/"); 
};

return ( 
      <div className="min-h-screen bg-gray-100 p-6"> 
        <div className="flex justify-between items-center mb-6"> 
          <h1 className="text-2xl font-bold">Add Product</h1> 
        
        <div className="flex gap-4">  
          <button type="submit" form="addProductForm" className="px-4 py-2 bg-[#bd78b5] text-white rounded hover:bg-[#d19fca] transition"
            > Add Product </button> 
        </div>
        </div>

      <div className="grid grid-cols-3 gap-6">
          <form
            id="addProductForm"
            onSubmit={handleSubmit}
            className="col-span-2 space-y-4"
          >
      <div>
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

      <div className="flex gap-4">
        <div className="w-full">
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
        <div className="w-full">
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
      <div className="flex gap-4">
        <div className="w-full">
          <label className="block font-medium">Supplier</label>
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter supplier name"
            required
          />
        </div>
        <div className="w-full">
          <label className="block font-medium">Discounts</label>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter % discount"
            required
          />
        </div>
      </div>
    </form>

    <div className="col-span-1 space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <label className="block font-medium mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        {productImage && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-full h-72 object-contain rounded border"
          />
        )}
      </div>
    </div>
  </div>
</div>

); };

export default AddProduct;