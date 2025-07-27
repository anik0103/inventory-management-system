import Cards from "./SalesCards";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const SummaryCards = () => {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-[0_4px_12px_#bd78b5] hover:shadow-[0_6px_18px_#a1609f] transition-all duration-300 w-full p-3 lg:p-4 h-full lg:h-50 flex flex-col justify-between">
      <div className="border-b border-gray-300 pb-2 mb-3">
        <h2 className="text-lg lg:text-xl font-bold text-center text-[#bd78b5]">
          Sales Activity
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Cards
          value={mockData.salesActivity.packages}
          label="Qty"
          status="TO BE PACKED"
          valueColor="text-blue-700"
          labelColor="text-gray-600"
        />
        <Cards
          value={mockData.toBeShipped.packages}
          label="Pkgs"
          status="TO BE SHIPPED"
          valueColor="text-red-500"
          labelColor="text-gray-600"
        />
        <Cards
          value={mockData.toBeDelivered.packages}
          label="Pkgs"
          status="TO BE DELIVERED"
          valueColor="text-green-500"
          labelColor="text-gray-600"
        />
        <Cards
          value={mockData.toBeInvoiced.packages}
          label="Qty"
          status="TO BE INVOICED"
          valueColor="text-yellow-600"
          labelColor="text-gray-600"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
