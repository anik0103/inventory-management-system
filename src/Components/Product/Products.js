import Head from "./Head";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
const Products = () => {
    return(
        <div className="w-full">
            {/* Add Components here */}
            <Head/>
            <Filters/>
            <ProductTable/>
        </div>
    )
}
export default Products;