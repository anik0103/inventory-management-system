const SplProductRow = ({ products }) => {
  return (
    <tr>
      <td colSpan="7" className="bg-purple-50 px-6 py-3 text-sm text-gray-700 border-t border-purple-200"> {/* New background, border, padding */}
        <strong className="text-[#bd78b5]">Products:</strong> {products.join(", ")}
      </td>
    </tr>
  );
};

export default SplProductRow;