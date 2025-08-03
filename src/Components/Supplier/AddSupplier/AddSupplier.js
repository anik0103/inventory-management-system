import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    supplier: "",
    discount: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                placeholder="Enter product name"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                value={formData.productName}
              />
            </div>

            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                rows="4"
                placeholder="Write something about the product..."
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                value={formData.description}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter category"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={formData.category}
                />
              </div>
              <div>
                <label className="block font-medium">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={formData.price}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter supplier name"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={formData.supplier}
                />
              </div>
              <div>
                <label className="block font-medium">Discounts</label>
                <input
                  type="number"
                  name="discount"
                  placeholder="Enter % discount"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={formData.discount}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="border p-4 rounded shadow bg-gray-50 mb-4">
              <label className="block font-medium mb-2">Upload Image</label>
              <input
                type="file"
                name="image"
                className="w-full"
                onChange={handleChange}
              />
              {formData.image && (
                <p className="text-sm text-gray-600 mt-2">{formData.image.name}</p>
              )}
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
