const SalesActivityCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-6 bg-white">
      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-blue-800 border-b border-blue-300 pb-1 mb-2">
          Sales Activity
        </h2>
        <p className="text-sm font-medium text-blue-600">0 Qty</p>
        <p className="text-sm font-semibold text-blue-500">TO BE PACKED</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-orange-500 border-b border-orange-300 pb-1 mb-2">
          TO BE SHIPPED
        </h2>
        <p className="text-sm font-medium text-red-600">0 Pkgs</p>
        <p className="text-sm font-semibold text-red-500">TO BE SHIPPED</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-green-600 border-b border-green-300 pb-1 mb-2">
          TO BE DELIVERED
        </h2>
        <p className="text-sm font-medium text-blue-600">0 Pkgs</p>
        <p className="text-sm font-semibold text-blue-500">TO BE DELIVERED</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-red-600 border-b border-blue-300 pb-1 mb-2">
          TO BE INVOICED
        </h2>
        <p className="text-sm font-medium text-gray-700">0 Qty</p>
        <p className="text-sm font-semibold text-gray-600">TO BE INVOICED</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-gray-800 border-b border-blue-300 pb-1 mb-2">
          Inventory Summary
        </h2>
        <p className="text-sm font-medium text-gray-800">
          QUANTITY IN HAND &nbsp;&nbsp; 0
        </p>
        <p className="text-sm font-semibold text-gray-700">
          QUANTITY TO BE RECEIVED 0
        </p>
      </div>
    </div>
  );
};

export default SalesActivityCard;
