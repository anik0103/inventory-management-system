import { useState } from "react";
import Head from "./Head";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import PdtList from "./PdtList";

const Products = () => {
  const fullProductList = PdtList;
  const [filteredProducts, setFilteredProducts] = useState(fullProductList);

  const handleSearch = ({ productName, category, quantity, price }) => {
  const filtered = fullProductList.filter((product) => {
    const nameMatch = productName
      ? product.name.toLowerCase().includes(productName.toLowerCase())
      : true;

    const categoryMatch = category
      ? product.category.toLowerCase().includes(category.toLowerCase())
      : true;

    const quantityMatch = quantity
      ? product.quantity.toString().includes(quantity)
      : true;

    const priceMatch = price
      ? product.price.toString().includes(price)
      : true;

    return nameMatch && categoryMatch && quantityMatch && priceMatch;
  });

  setFilteredProducts(filtered);
  };

  const handleSortFilterChange = (value) => {
  let updatedList = [...fullProductList];

  if (value === "priceLowHigh") {
    updatedList.sort((a, b) => a.price - b.price);
  } else if (value === "priceHighLow") {
    updatedList.sort((a, b) => b.price - a.price);
  } else if (value !== "all") {
    updatedList = fullProductList.filter(
      (pdt) => pdt.category.toLowerCase() === value.toLowerCase()
    );
  }

  setFilteredProducts(updatedList);
};

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <Head/>
      <Filters onSearch={handleSearch}
      onSortFilterChange={handleSortFilterChange}/>
      <ProductTable products={filteredProducts}/>
    </div>
  );
};
export default Products;