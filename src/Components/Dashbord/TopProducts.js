const TopProducts =()=>{
    return(
        <div>
            <div className="bg-white border border-gray-300 p-4 rounded-3xl shadow-md mb-6 w-[500px] h-56 ml-[800px] mt-[-235px] ">
                <h2 className="font-bold text-base border-b border-blue-300 pb-2 mb-2">Top Selling items</h2>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 ml-[1000px] mt-[-300px]">Product A</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 ml-[1000px] mt-[-300px]">Product B</span>
                    <span className="font-semibold text-blue-600">80</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 ml-[1000px] mt-[-300px]">Product C</span>
                    <span className="font-semibold text-blue-600">60</span>
                </div>
            </div>
        </div>
    )
}
export default TopProducts;