import { useState, useEffect, useContext } from "react";
import OrderHead from "./OrderHead";
import OrderTable from "./Ordertable";
import { OrderDetails } from "./Orderdetails";
import { RegionContext } from "../Dashbord/RegionContext";
import OrderSearch from "./OrderSearch";

const Orders = () => {
  const [displayedOrders, setDisplayedOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]); 
  const { selectedRegion } = useContext(RegionContext);

  useEffect(() => {
    const inventoryData = OrderDetails.find(
      (inv) => inv.region === selectedRegion
    );

    if (inventoryData) {
      setDisplayedOrders(inventoryData.orders);
      setFilteredOrders(inventoryData.orders); // default: show all
    } else {
      setDisplayedOrders([]);
      setFilteredOrders([]);
    }
  }, [selectedRegion]);

  // handle search logic
  const handleSearch = (term) => {
    if (!term.trim()) {
      setFilteredOrders(displayedOrders);
    } else {
      const lowerTerm = term.toLowerCase();
      setFilteredOrders(
        displayedOrders.filter((order) =>
          order.OrderNo.toLowerCase().includes(lowerTerm)
        )
      );
    }
  };

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <OrderHead />
      {/* Search Bar */}
      <OrderSearch onSearch={handleSearch} />
      {/* Pass filtered orders to table */}
      <OrderTable data={filteredOrders} />
    </div>
  );
};

export default Orders;
