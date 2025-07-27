import { useParams } from "react-router-dom";
import PdtList from "./PdtList";

const ProductDetails = () => {
  const { productName } = useParams();
  const product = PdtList.find((item) => item.name === productName);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-64 object-contain rounded-md mx-auto"
      />
      <h2 className="text-2xl font-semibold mt-4 mb-2">{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p className="mt-2"><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetails;