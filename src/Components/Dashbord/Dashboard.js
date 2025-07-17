import SummaryCards from "./SalesOverVew/SummaryCards";
import SalesOverview from "./SalesOverview";
import TopProducts from "./TopProducts";
import OrderStatus from "./OrderStatus";
import PurchaseOrder from "./purchaseOrder";
import InventorySummary from "./SalesOverVew/InventorySummary";
const Dashboard = () => {
  return (
    <div className="dashboard w-auto position-absolute">
      <h1 className="bg-[#bd78b5] text-white shadow-[4px_4px_0px_#a1609f] hover:shadow-[2px_2px_0px_#894d81] transition-all duration-300 font-bold text-2xl mb-4 p-3 rounded w-full text-center">
        Dashboard
      </h1>

      <SummaryCards />
      <InventorySummary />
      <SalesOverview />
      <PurchaseOrder />
      {/* <TopProducts />
      
      <OrderStatus /> */}
    </div>
  );
};

export default Dashboard;
