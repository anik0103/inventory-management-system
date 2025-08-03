import { useParams } from "react-router-dom";
import PdtList from "./PdtList";

const ProductDetails = () => {
  const { productName } = useParams();
  const product = PdtList.find((item) => item.name === productName);

  if (!product) return <p className="text-center mt-10 text-lg text-red-500">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10"> 
        <h1 className="text-2xl font-bold">Product Details</h1>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mx-auto p-6 max-w-4xl"> 
          <div className="flex-1">
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 max-w-sm mx-auto object-contain"
            />
          </div>

        <div className="flex-1 space-y-4 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block font-medium">Product Name</label>
            <div className="bg-white w-full border px-3 py-2 rounded">{product.name}</div>
            </div>

          <div>
            <label className="block font-medium">Category</label>
            <div className="bg-white w-full border px-3 py-2 rounded">{product.category}</div>
          </div>

          <div>
            <label className="block font-medium">Price</label>
            <div className="bg-white w-full border px-3 py-2 rounded">${product.price}</div>
          </div>

          <div>
            <label className="block font-medium">Quantity</label>
            <div className="bg-white w-full border px-3 py-2 rounded">{product.quantity}</div>
          </div>
        </div>  

          <div className="sm:col-span-2">
            <label className="block font-medium">Description</label>
            <div className="bg-white w-full border px-3 py-2 rounded">{product.description}</div>
          </div>
       </div>
      </div>
    </div>
  );
};

export default ProductDetails;