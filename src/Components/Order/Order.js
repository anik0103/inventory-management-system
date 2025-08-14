import Ordertable from "./Ordertable";
import Orderdetails from "./Orderdetails"

 const Order = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <Ordertable/>
      {/* Other components or content can be added here */}
    </div>
  );
}
export default Order;