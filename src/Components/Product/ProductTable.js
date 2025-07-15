const ProductTable = ({ products = [] }) => {
  return (
    <div className="px-6 py-4">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="text-gray-600 text-sm border-b">
            <th className="py-2">PRODUCT</th>
            <th className="py-2">CATEGORY</th>
            <th className="py-2">QUANTITY</th>
            <th className="py-2">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={index} className="border-b text-sm">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.category}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-400 py-4">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;