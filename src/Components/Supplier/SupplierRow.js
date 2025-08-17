const SupplierRow = ({ supplier, index, onClick }) => {
  return (
    <tr
      onClick={() => onClick(index)}
      className="border-b text-sm text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
    >
      <td className="py-3 px-4">{supplier.vendorsName}</td>
      <td className="py-3 px-4">{supplier.pocName}</td>
      <td className="py-3 px-4">{supplier.contact}</td>
      <td className="py-3 px-4">{supplier.location}</td>
      <td className="py-3 px-4">{supplier.country}</td>
      <td className="py-3 px-4">{supplier.productType}</td>
      <td className="py-3 px-4">{supplier.email}</td>
    </tr>
  );
};

export default SupplierRow;
