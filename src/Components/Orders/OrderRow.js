import { useNavigate } from "react-router-dom";

const OrderRow = ({ Order }) => { // Removed index and onClick props
  const navigate = useNavigate();

  // This handler will navigate to the details page
  const handleRowClick = () => {
    navigate(`/app/orders/${Order.OrderNo}`);
  };

  return (
    <tr
      onClick={handleRowClick} // Use the new handler
      className="border-b text-sm text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
    >
      <td className="py-3 px-4">{Order.OrderNo}</td>
      <td className="py-3 px-4">{Order.InvoiceNo}</td>
      <td className="py-3 px-4">{Order.CustomerName}</td>
      <td className="py-3 px-4">{Order.OrderDate}</td>
      <td className="py-3 px-4">{Order.Location}</td>
      <td className="py-3 px-4">{Order.Status}</td>
      <td className="py-3 px-4">{Order.Invoiced ? "Yes" : "No"}</td>
    </tr>
  );
};

export default OrderRow;