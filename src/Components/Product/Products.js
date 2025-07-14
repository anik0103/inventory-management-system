import { useState } from "react";
import Head from "./Head";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import PdtList from "./PdtList";

const Products = () => {
  const fullProductList = PdtList;
  const [filteredProducts, setFilteredProducts] = useState(fullProductList);

  const handleSearch = ({ productName, category }) => {
    const filtered = fullProductList.filter((product) => {
      return (
        product.name.toLowerCase().includes(productName.toLowerCase()) &&
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Head/>
      <Filters onSearch={handleSearch}/>
      <ProductTable products={filteredProducts}/>
    </div>
  );
};
export default Products;