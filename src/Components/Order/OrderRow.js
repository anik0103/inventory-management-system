function OrderRow({ order, index, onClick }) {
  return (
    // Ensure no whitespace immediately after <tr> and before first <td>
    <tr
      onClick={() => onClick(index)}
      className="border-b text-sm text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
    >
      <td className="py-3 px-4">{order.OrderNo}</td>
      <td className="py-3 px-4">{order.InvoiceNo}</td>
      <td className="py-3 px-4">{order.CustomerName}</td>
      <td className="py-3 px-4">{order.orderDate}</td>
      <td className="py-3 px-4">{order.Location}</td>
      <td className="py-3 px-4">{order.Status}</td>
      <td className="py-3 px-4">{order.Invoiced}</td>
    </tr>
  );
}
export default OrderRow;
