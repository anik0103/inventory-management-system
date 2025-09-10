import { useState, useEffect, useContext } from "react";
import OrderHead from "./OrderHead";
import OrderTable from "./Ordertable";
import { OrderDetails } from "./Orderdetails";
import { RegionContext } from "../Dashbord/RegionContext";

const Orders = () => {
  const [displayedOrders, setDisplayedOrders] = useState([]);
  // REMOVED: No longer need to track expanded index
  // const [expandedIndex, setExpandedIndex] = useState(null);

  const { selectedRegion } = useContext(RegionContext);

  useEffect(() => {
    const inventoryData = OrderDetails.find(
      (inv) => inv.region === selectedRegion
    );

    if (inventoryData) {
      setDisplayedOrders(inventoryData.orders);
    } else {
      setDisplayedOrders([]);
    }
  }, [selectedRegion]);

  // REMOVED: The toggleExpand function is no longer needed
  // const toggleExpand = (index) => {
  //   setExpandedIndex((prev) => (prev === index ? null : index));
  // };

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <OrderHead />
      {/* REMOVED: Pass only the data prop to OrderTable */}
      <OrderTable data={displayedOrders} />
    </div>
  );
};

export default Orders;