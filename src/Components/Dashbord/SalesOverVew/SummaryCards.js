// SummaryCards.jsx
import Cards from "./SalesCards"; 
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const SummaryCards = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-2/4 ml-[11rem]"> 
      <div className="pb-4 border-b border-gray-200 mb-4">
         <h2 className="text-xl font-bold text-gray-800">Sales Activity</h2>
      </div>
      <div className="flex justify-around items-center divide-x divide-gray-300 gap-4">

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