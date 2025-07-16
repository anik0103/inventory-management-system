import SalesCards from "./SalesCards";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const SummaryCards = () => {
  return (
    <div className="w-3/6 ml-44 mb-6">
      <h2 className="px-0 mb-2 ml-">
        <span className="text-xl font-bold text-gray-800">Sales Summary</span>
      </h2>
      <div className="flex gap-4 p-4 rounded-xl shadow-md">
        <SalesCards
          packages={mockData.salesActivity.packages}
          status={mockData.salesActivity.status}
          titleColor="text-blue-700"
          textColor="text-blue-500"
        />
        <SalesCards
          packages={mockData.toBeShipped.packages}
          status={mockData.toBeShipped.status}
          titleColor="text-orange-600"
          textColor="text-red-600"
        />
        <SalesCards
          packages={mockData.toBeDelivered.packages}
          status={mockData.toBeDelivered.status}
          titleColor="text-green-600"
          textColor="text-blue-600"
        />
        <SalesCards
          packages={mockData.toBeInvoiced.packages}
          status={mockData.toBeInvoiced.status}
          titleColor="text-red-600"
          textColor="text-gray-700"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
