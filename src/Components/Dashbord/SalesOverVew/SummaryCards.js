import SalesCards from "./SalesCards";
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const SummaryCards = () => {
  return (
    <div className="flex gap-4 p-4">
      <SalesCards
        title="Sales Activity"
        packages={mockData.salesActivity.packages}
        status={mockData.salesActivity.status}
        titleColor="text-blue-700"
        textColor="text-blue-500"
      />
      <SalesCards
        title="TO BE SHIPPED"
        packages={mockData.toBeShipped.packages}
        status={mockData.toBeShipped.status}
        titleColor="text-orange-600"
        textColor="text-red-600"
      />
      <SalesCards
        title="TO BE DELIVERED"
        packages={mockData.toBeDelivered.packages}
        status={mockData.toBeDelivered.status}
        titleColor="text-green-600"
        textColor="text-blue-600"
      />
      <SalesCards
        title="TO BE INVOICED"
        packages={mockData.toBeInvoiced.packages}
        status={mockData.toBeInvoiced.status}
        titleColor="text-red-600"
        textColor="text-gray-700"
      />

      <SalesCards
        title="Inventory Summary"
        packages={`QUANTITY IN HAND ${mockData.inventorySummary.packagesInHand}`}
        status={`QUANTITY TO BE RECEIVED ${mockData.inventorySummary.packagesToBeReceived}`}
        titleColor="text-blue-800"
        textColor="text-black"
      />
    </div>
  );
};

export default SummaryCards;
