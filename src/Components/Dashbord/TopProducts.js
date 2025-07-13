import mockData from '../../asset/fakeApiResponce/mockData.json';

const TopProducts = () => {
  return (
    <div>
      <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md mb-6 w-[500px] h-56 ml-[700px] mt-[-235px] ">

        
        <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-2">
          <h2 className="font-bold text-base text-blue-900">Top Selling Items</h2>
          <span className="font-semibold text-blue-900 flex items-center gap-1 text-sm">
            This Month
            <span className="text-blue-600 text-lg">↓</span>
          </span>
        </div>

      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-500 ml-[820px] mt-[-350px]">{mockData.topSellingItems[0].name}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-500 ml-[820px] mt-[-310px]">{mockData.topSellingItems[1].name}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-500 ml-[820px] mt-[-270px]">{mockData.topSellingItems[2].name}</span>
        </div>
        
      </div>
    </div>
  );
};

export default TopProducts;



// <div className="flex flex-col">
//        {mockData.topSellingItems.slice(0, 3).map((item,index)=>(
//         <div key={index}  className={`ml-[820px]  ${MarginTop[index]}`}>
//           {item.name}
//         </div>
//        ))}
//       </div>