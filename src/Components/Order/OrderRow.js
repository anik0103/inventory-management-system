const OrderRow = ({ Order, index, onClick }) => {
  return (
    // Ensure no whitespace immediately after <tr> and before first <td>
    <tr
      onClick={() => onClick(index)}
      className="border-b text-sm text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
    >
      <td className="py-3 px-4">{Order.OrderNo}</td>
      <td className="py-3 px-4">{Order.InvoiceNo}</td>
      <td className="py-3 px-4">{Order.CustomerName}</td>
      <td className="py-3 px-4">{Order.OrderDate}</td>
      <td className="py-3 px-4">{Order.Location}</td>
      <td className="py-3 px-4">{Order.Status}</td>
      <td className="py-3 px-4">{Order.Invoiced}</td>
    </tr>
  );
};

export default OrderRow;
