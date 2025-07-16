// SummaryCards.jsx
import Cards from "./SalesCards"; // Assuming SalesCards is the component you use for individual metrics
import mockData from "../../../asset/fakeApiResponce/mockData.json";

const SummaryCards = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-2/4 ml-[11rem]"> 
      
      {/* THIS IS THE SECTION FOR THE HEADING WITH THE BOTTOM BORDER */}
      {/* - 'pb-4': Adds padding below the "Sales Activity" text, before the border.
        - 'border-b': Creates the bottom border.
        - 'border-gray-200': Sets the color of the border to a light gray, making it subtle.
        - 'mb-4': Adds margin below this entire heading section (text + border),
                  creating space between it and the metric cards below.
      */}
      <div className="pb-4 border-b border-gray-200 mb-4">
         <h2 className="text-xl font-bold text-gray-800">Sales Activity</h2>
      </div>

      {/* The container for the individual metric cards */}
      {/* Removed 'p-2' from here, as 'p-4' on the main div gives overall padding. */}
      {/* Kept other styles as is for consistency with your request. */}
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