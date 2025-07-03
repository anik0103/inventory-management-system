import Image from "./Image";
const TopProducts = () => {
  return (
    <div className="bg-slate-400 rounded-xl p-4 w-[500px] mx-auto mt-[-550px] ml-[300px] shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Products</h2>
      <div className="grid grid-cols-1 gap-4">
        <Image/>
        <Image/> 
        <Image/> 
        <Image/> 
        <Image/>    
      </div>
    </div>
  );
};

export default TopProducts;
