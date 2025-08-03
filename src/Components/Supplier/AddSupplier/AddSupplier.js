import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSupplier = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vendorsName: "",
    pointOfContact: "",
    contact: "",
    location: "",
    country: "",
    productType: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.vendorsName) newErrors.vendorsName = "Vendor name is required";
    if (!formData.pointOfContact) newErrors.pointOfContact = "Point of contact is required";
    if (!formData.contact) newErrors.contact = "Contact number is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.productType) newErrors.productType = "Product type is required";
    if (!formData.email) newErrors.email = "Email is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Supplier Data Submitted:", formData);
    navigate("/suppliers");
  };

  return (
    <div className="bg-[#f5f5fa] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-[#bd78b5] mb-6 text-center">Add New Supplier</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Vendor Name", name: "vendorsName", type: "text" },
            { label: "Point of Contact", name: "pointOfContact", type: "text" },
            { label: "Contact", name: "contact", type: "text" },
            { label: "Location", name: "location", type: "text" },
            { label: "Country", name: "country", type: "text" },
            { label: "Product Type", name: "productType", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type={type}
                name={name}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd78b5]"
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}
        </form>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#bd78b5] hover:bg-[#a65fa0] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            Add Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
