import { useState } from "react";

const SupplierForm = ({ onAdd }) => {
  const [form, setForm] = useState({name: "",contact: "",email: "",location: "",country: "",});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    onAdd({ ...form });
    setForm({ name: "", contact: "", email: "", location: "", country: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 m-2 rounded shadow grid md:grid-cols-3 gap-2"
    >
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="contact"
        placeholder="Contact"
        value={form.contact}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-[#bd78b5] text-white rounded p-2 hover:bg-[#bd78b5]"
      >
        Add Supplier
      </button>
    </form>
  );
};

export default SupplierForm;
