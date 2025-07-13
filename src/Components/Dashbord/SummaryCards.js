import mockData from '../../asset/fakeApiResponce/mockData.json';

const SalesActivityCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-6 bg-white">
      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-blue-800 border-b border-blue-300 pb-1 mb-2">
         {mockData.salesActivity.title }
        </h2>
        <p className="text-sm font-medium text-blue-600">{mockData.salesActivity.quantity} Qty</p>
        <p className="text-sm font-semibold text-blue-500">{mockData.salesActivity.status}</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-orange-500 border-b border-orange-300 pb-1 mb-2">
          {mockData.toBeShipped.title}
        </h2>
        <p className="text-sm font-medium text-red-600">{mockData.toBeShipped.packages} Pkgs</p>
        <p className="text-sm font-semibold text-red-500">{mockData.toBeShipped.status}</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-green-600 border-b border-green-300 pb-1 mb-2">
          {mockData.toBeDelivered.title}
        </h2>
        <p className="text-sm font-medium text-blue-600">{mockData.toBeDelivered.packages} Pkgs</p>
        <p className="text-sm font-semibold text-blue-500">{mockData.toBeDelivered.status}</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-red-600 border-b border-blue-300 pb-1 mb-2">
          {mockData.toBeInvoiced.title}
        </h2>
        <p className="text-sm font-medium text-gray-700">{mockData.toBeInvoiced.quantity} Qty</p>
        <p className="text-sm font-semibold text-gray-600">{mockData.toBeInvoiced.status}</p>
      </div>

      <div className="rounded-xl border border-gray-200 shadow-md p-4 w-64 bg-white">
        <h2 className="font-semibold text-gray-800 border-b border-blue-300 pb-1 mb-2">
          {mockData.inventorySummary.title}
        </h2>
        <p className="text-sm font-medium text-gray-800">
          QUANTITY IN HAND &nbsp;&nbsp;{mockData.inventorySummary.quantityInHand}
        </p>
        <p className="text-sm font-semibold text-gray-700">
          QUANTITY TO BE RECEIVED {mockData.inventorySummary.quantityToBeReceived}
        </p>
      </div>
    </div>
  );
};

export default SalesActivityCard;
