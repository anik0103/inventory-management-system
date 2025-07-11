const SalesOrderCard = () => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md w-[500px] ml-[800px] mt-[-220px] h-56">
      <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-4">
        <h2 className="font-bold text-blue-900">Sales Order</h2>
        <span className="font-semibold text-blue-900 flex items-center gap-1">
          This Month
          <span className="text-blue-600 text-lg">↓</span>
        </span>
      </div>

      <div className="flex justify-between text-sm font-semibold text-slate-800 px-2">
        <span>Channel</span>
        <span>Draft</span>
        <span>Confirmed</span>
        <span>Packed</span>
        <span>Shipped</span>
        <span>Invoiced</span>
      </div>
    </div>
  );
};

export default SalesOrderCard;
