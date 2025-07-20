const SuppliersTable = ({ data }) => {
  return (
    <div className="px-6 py-4">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="text-gray-600 text-sm border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Contact</th>
            <th className="py-2">Email</th>
            <th className="py-2">Location</th>
            <th className="py-2">Country</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b text-sm">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.contact}</td>
                <td className="py-2">{item.email}</td>
                <td className="py-2">{item.location}</td>
                <td className="py-2">{item.country}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-4">
                No Suppliers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SuppliersTable;
