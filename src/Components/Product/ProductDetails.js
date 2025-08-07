import { useParams } from "react-router-dom";
import PdtList from "./PdtList";

const ProductDetails = () => {
  const { productName } = useParams();
  const product = PdtList.find((item) => item.name === productName);

  if (!product)
    return (
      <p className="text-center mt-10 text-lg text-red-500">
        Product not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-6">
      <div className="w-4/5 h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-full p-6 flex flex-col justify-center items-start text-left">
          <h2 className="text-6xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg text-gray-700 font-bold mb-4">{product.category}</p>
          <p className="text-3xl font-bold text-purple-600 mb-4">${product.price}</p>

          <div className="mb-4">
            <label className="text-gray-700 font-bold text-xl">Quantity</label>
            <p className="text-md font-semibold">{product.quantity}</p>
          </div>

          <div>
            <label className="text-gray-700 font-bold text-xl">Description</label>
            <p className="text-lg">{product.description}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[70%] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;