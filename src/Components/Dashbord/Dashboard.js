import SummaryCards from "./SalesOverVew/SummaryCards";
import SalesOverview from "./SalesOverview";
import TopProducts from "./TopProducts";
import OrderStatus from "./OrderStatus";
import PurchaseOrder from "./purchaseOrder";
import InventorySummary from "./SalesOverVew/InventorySummary";
const Dashboard = () => {
  return (
    <div className="dashboard w-auto position-absolute">
      <h1 className="bg-orange-300 font-bold text-2xl mb-4 p-2 rounded w-full text-center">
        Inventory Management Dashboard
      </h1>
      <SummaryCards />
      <InventorySummary />
      <SalesOverview />
      <TopProducts />
      <PurchaseOrder />
      <OrderStatus />
    </div>
  );
};

export default Dashboard;
