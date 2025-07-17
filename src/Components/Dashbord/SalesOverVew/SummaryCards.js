import Cards from "./SalesCards";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const SummaryCards = () => {
  return (
    <div className="flex justify-start px-4 mt-6">
      <div className="bg-gradient-to-br from-white to-purple-50 border border-[#bd78b5] rounded-xl shadow-[6px_6px_0px_#bd78b5] hover:shadow-[4px_4px_0px_#a1609f] transition-all duration-300 w-2/3 max-w-6xl p-4">
        <div className="border-b border-gray-300 pb-2 mb-4">
          <h2 className="text-xl font-bold text-center text-[#bd78b5]">
            Sales Activity
          </h2>
        </div>

        <div className="flex justify-between items-center divide-x divide-gray-300">
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
    </div>
  );
};

export default SummaryCards;
