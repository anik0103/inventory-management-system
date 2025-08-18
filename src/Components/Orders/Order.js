import { useState } from "react";
import OrderHead from "./OrderHead";
import OrderTable from "./OrderTable";
import { OrderDetails } from "./Orderdetails";

const Orders = () => {
  const [orders] = useState(OrderDetails);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <OrderHead />
      <OrderTable
        data={orders}
        onRowClick={toggleExpand}
        expandedIndex={expandedIndex}
      />
    </div>
  );
};

export default Orders;
