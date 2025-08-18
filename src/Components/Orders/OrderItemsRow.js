const OrderItemsRow = ({ items }) => {
  return (
    <tr>
      <td colSpan="7" className="bg-purple-50 px-6 py-4 text-sm text-gray-700 border-t border-purple-200">
        <div>
          <strong className="text-[#bd78b5]">Ordered Items:</strong>
          {items && items.length > 0 ? (
            <ul className="list-disc list-inside mt-2">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <span> No items in this order.</span>
          )}
        </div>
      </td>
    </tr>
  );
};

export default OrderItemsRow;
