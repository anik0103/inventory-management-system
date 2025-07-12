const PurchaseOrder = () => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md mb-6 w-[500px] h-48 ml-[200px] mt-[-40px]">
      <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-4">
        <h2 className="font-bold text-base text-blue-900">Purchase Order</h2>
        <span className="font-semibold text-blue-900 flex items-center gap-1 text-sm">
          This Month
          <span className="text-blue-600 text-lg">↓</span>
        </span>
      </div>

      <div>
        <p className="font-semibold text-gray-700">Quantity Ordered: 50</p>
      </div>
    </div>
  );
};

export default PurchaseOrder;
