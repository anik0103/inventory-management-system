const OrderStatus =()=>{
    return(
        <div>
           <div className="bg-slate-400 p-4 rounded-lg   shadow-md mb-6 w-[600px] h-[300px]  mt-[-500px] ml-[1500px]">
              <h2 className="font-bold text-lg w-auto h-auto">Order Status</h2>
              <div className="bg-slate-300 p-4 w-[120px]  rounded-lg mt-4  ">
                <h1 className="text-xl font-semibold">Delivered</h1>
                <p className="text-2xl font-bold">50</p>
              </div>
            <div className="bg-slate-300 p-4 w-[160px] rounded-lg ml-[150px] mt-[-92px] ">
                <h1 className="text-xl font-semibold">In Process</h1>
                <p className="text-2xl font-bold">20</p>
            </div>
            
            </div>
        </div>
    )
}
export default OrderStatus;