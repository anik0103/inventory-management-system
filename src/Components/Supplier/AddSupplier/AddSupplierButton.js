import { useNavigate } from "react-router-dom";

const AddSupplierButton = () => {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/app/AddSupplier");
  };
  return (

    <button
      className="w-full md:w-auto md:ml-auto bg-[#bd78b5] text-white px-4 py-2 rounded-lg hover:bg-[#d19fca] transition whitespace-nowrap"
      onClick={handleAddClick}
    >
      + Add Supplier
    </button>
  );
};

export default AddSupplierButton;