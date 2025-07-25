import SummaryCards from "./SalesOverVew/SummaryCards";
import SalesOverview from "./SalesOverview";
import TopProducts from "./TopProducts";
import OrderStatus from "./OrderStatus";
import PurchaseOrder from "./purchaseOrder";
import InventorySummary from "./SalesOverVew/InventorySummary";
const Dashboard = () => {
  return (
    <div className="dashboard w-auto position-absolute">
      <h1 className="bg-white text-black  shadow-md text-2xl -mt-3 p-3 rounded min-w-full text-left font-bold">
        Dashboard
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 ml-4 mr-4 mt-4">
        <SummaryCards />
        <InventorySummary />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 ml-4 mr-4 mt-4">
        <SalesOverview />
        <PurchaseOrder />
      </div>
      <div className="flex flex-col lg:flex-row gap-1 ml-4 mr-4 mt-4">
        <OrderStatus />
        <TopProducts />
      </div>
 
      
    </div>
  );
};

export default Dashboard;

// "bg-white text-black font-bold text-2xl mb-4 p-3 rounded w-[72rem] text-center shadow-md flex justify-start ml-12
