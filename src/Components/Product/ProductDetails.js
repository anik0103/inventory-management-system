import { useParams } from "react-router-dom";
import PdtList from "./PdtList";

const ProductDetails = () => {
  const { productName } = useParams();
  const product = PdtList.find((item) => item.name === productName);

  if (!product) return <p className="text-center mt-10 text-lg text-red-500">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Product Details</h2>
        {/* This will show the image */}
        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-96 h-64 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 font-semibold">Product Name</label>
            <div className="border rounded-lg px-3 py-2 text-gray-800 bg-gray-50">{product.name}</div>
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Category</label>
            <div className="border rounded-lg px-3 py-2 text-gray-800 bg-gray-50">{product.category}</div>
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Price</label>
            <div className="border rounded-lg px-3 py-2 text-gray-800 bg-gray-50">${product.price}</div>
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Quantity</label>
            <div className="border rounded-lg px-3 py-2 text-gray-800 bg-gray-50">{product.quantity}</div>
          </div>

          <div className="sm:col-span-2">
            <label className="text-gray-600 font-semibold">Description</label>
            <div className="border rounded-lg px-3 py-2 text-gray-800 bg-gray-50">{product.description}</div>
          </div>
       </div>
    </div>
  );
};

export default ProductDetails;