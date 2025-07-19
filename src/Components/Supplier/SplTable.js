import { SplDetails } from "./SplDetails";

const SupplierTable = () => {
  
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
          {SplDetails.length > 0 ? (
            SplDetails.map((item, index) => (
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
              <td colSpan="4" className="text-center text-gray-400 py-4">
                No Suppliers
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
