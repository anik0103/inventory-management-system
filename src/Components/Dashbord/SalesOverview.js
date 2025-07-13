import mockData from '../../asset/fakeApiResponce/mockData.json';


const SalesOverview = () => {
  const item = mockData.itemDetails;

  return (
    <div>
      <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md mb-6 w-2/5 h-48 ml-[70px] mt-[23px] ">
        <h2 className="font-bold text-base pb-2 mb-2 border-b border-blue-300">
          {item.title}
        </h2>

        {/* Left Side of the card border */}
        <div className="w-1/2 pr-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-red-500">Low Stock Items</span>
            <span className="font-semibold text-red-500">{item.lowStockItems}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-green-400">All item Groups</span>
            <span className="font-semibold text-green-400">{item.allItemGroups}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-500">All Items</span>
            <span className="font-semibold text-blue-600">{item.allItems}</span>
          </div>
        </div>

        {/* Right Side of the card border */}
        <div className="w-1/2 border-l border-blue-300 pl-4 flex flex-col ml-[240px] mt-[-125px]">
          <p className="font-semibold text-gray-800 mb-2 ml-[-10px]">Active Items</p>
          <div className="w-24 h-24 rounded-full bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center text-white text-xs text-center p-2 ml-[50px]">
            {item.activeItems > 0 ? item.activeItems : "No Active Items"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
