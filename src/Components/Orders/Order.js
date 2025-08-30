import { useState, useEffect, useContext } from "react";
import OrderHead from "./OrderHead";
import OrderTable from "./Ordertable";
import { OrderDetails } from "./Orderdetails";
import { RegionContext } from "../Dashbord/RegionContext";

const Orders = () => {
  const [displayedOrders, setDisplayedOrders] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

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

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <OrderHead />
      <OrderTable
        data={displayedOrders}
        onRowClick={toggleExpand}
        expandedIndex={expandedIndex}
      />
    </div>
  );
};

export default Orders;