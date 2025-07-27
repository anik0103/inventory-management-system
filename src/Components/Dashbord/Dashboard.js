import SummaryCards from "./SalesOverVew/SummaryCards";
import ItemDetails from "./ItemDetails";
import TopProducts from "./TopProducts";
import SalesOrder from "./SalesOrder";
import OrderStatus from "./OrderStatus";
import InventorySummary from "./SalesOverVew/InventorySummary";

const Dashboard = () => {
  return (
    <div className="dashboard w-full px-4">
      <h1 className="bg-white text-black shadow-md text-2xl -mt-3 p-3 rounded w-full text-left font-bold">
        Dashboard
      </h1>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-[2fr_0.7fr] gap-4 items-start">
        <div className="flex flex-col gap-4">
          <SummaryCards />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ItemDetails />
            <OrderStatus />
          </div>

          <TopProducts />
        </div>

        <InventorySummary />
      </div>
      <SalesOrder />
    </div>
  );
};

export default Dashboard;
