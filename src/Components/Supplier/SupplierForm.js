import { useState } from "react";

const SupplierForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    country: "",
  });

  const handleChange = (item) => {
    setForm({ ...form, [item.target.name]: item.target.value });
  };

  const handleSubmit = (item) => {
    item.preventDefault();
    if (!form.name) return;
    onAdd({ ...form });
    setForm({
      name: "",
      contact: "",
      email: "",
      location: "",
      country: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-3 gap-3 bg-white p-4 mt-2 rounded-lg shadow">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" required />
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact" className="border p-2 rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
        <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className="border p-2 rounded" />

        <button type="submit" className="bg-[#bd78b5] text-white rounded p-2 hover:bg-[#d19fca] col-span-1">
            + Add Supplier
        </button>
    </form>
  );
};

export default SupplierForm;
