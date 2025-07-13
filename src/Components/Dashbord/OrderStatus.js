import mockData from '../../asset/fakeApiResponce/mockData.json';


const SalesOrderCard = () => {
  const sales = mockData.salesOrder;

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md w-[500px] ml-[700px] mt-[-240px] h-56">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-4">
        <h2 className="font-bold text-blue-900">{sales.title}</h2>
        <span className="font-semibold text-blue-900 flex items-center gap-1">
          {sales.month}
          <span className="text-blue-600 text-lg">↓</span>
        </span>
      </div>

      
      <div className="grid grid-cols-6 gap-y-2 text-center text-sm font-semibold text-slate-800">
        
        <div>Channel</div>
        <div>Draft</div>
        <div>Confirmed</div>
        <div>Packed</div>
        <div>Shipped</div>
        <div>Invoiced</div>

        
        <div className="text-gray-700 font-medium">{sales.channel}</div>
        <div className="text-gray-700 font-medium">{sales.draft}</div>
        <div className="text-gray-700 font-medium">{sales.confirmed}</div>
        <div className="text-gray-700 font-medium">{sales.packed}</div>
        <div className="text-gray-700 font-medium">{sales.shipped}</div>
        <div className="text-gray-700 font-medium">{sales.invoiced}</div>
      </div>
    </div>
  );
};

export default SalesOrderCard;
