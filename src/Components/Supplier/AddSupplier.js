const AddSupplier = ({ showForm, setShowForm }) => {
  return (
    <button
      onClick={() => setShowForm(!showForm)}
      className="bg-[#bd78b5] text-white px-4 py-2 rounded hover:bg-[#d19fca]"
    >
      {showForm ? "Close" : "+ Add Supplier"}
    </button>
  );
};

export default AddSupplier;
