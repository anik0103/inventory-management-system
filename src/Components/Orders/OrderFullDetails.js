import { useParams, Link } from "react-router-dom";
import { OrderDetails } from "./Orderdetails";

const OrderFullDetails = () => {
  const { orderId } = useParams();

  const order = OrderDetails.flatMap((region) => region.orders).find(
    (o) => o.OrderNo === orderId
  );

  if (!order) {
    // ... (error handling remains the same)
  }
  
  // Check if the items are in the new detailed (object) format
  const hasDetailedItems = order.items && order.items.length > 0 && typeof order.items[0] === 'object';

  // Calculate total cost only if items are in the detailed format
  const totalCost = hasDetailedItems 
    ? order.items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    : 0;

  return (
    <div className="bg-neutral-background min-h-screen p-6">
      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <h2 className="text-2xl font-bold text-black">
          Order Details: {order.OrderNo}
        </h2>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Updated Grid to include Total Cost */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-sm text-gray-500">Customer Name</p>
            <p className="text-lg font-semibold">{order.CustomerName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="text-lg font-semibold">{order.OrderDate}</p>
          </div>
          {/* Display Total Cost prominently */}
          {hasDetailedItems && (
            <div>
              <p className="text-sm text-gray-500">Total Cost</p>
              <p className="text-2xl font-bold text-green-600">
                {totalCost.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
              </p>
            </div>
          )}
          <div>
            <p className="text-sm text-gray-500">Invoice No.</p>
            <p className="text-lg font-semibold">{order.InvoiceNo || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="text-lg font-semibold">{order.Status}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-lg font-semibold">{order.Location}</p>
          </div>
        </div>

        {/* Updated Items Section */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ordered Items</h3>
          {hasDetailedItems ? (
            // Render a table for detailed items
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b bg-gray-50 font-medium">
                  <tr>
                    <th className="py-2 px-4">Item Name</th>
                    <th className="py-2 px-4">Model</th>
                    <th className="py-2 px-4">Color</th>
                    <th className="py-2 px-4 text-center">Quantity</th>
                    <th className="py-2 px-4 text-right">Unit Price</th>
                    <th className="py-2 px-4 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.name}</td>
                      <td className="py-3 px-4">{item.model}</td>
                      <td className="py-3 px-4">{item.color}</td>
                      <td className="py-3 px-4 text-center">{item.quantity}</td>
                      <td className="py-3 px-4 text-right">{item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                      <td className="py-3 px-4 text-right font-semibold">{(item.quantity * item.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Fallback for old string-based items
            order.items && order.items.length > 0 ? (
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                    {order.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="mt-2 text-gray-500">No items in this order.</p>
            )
          )}
        </div>
        
        <div className="mt-10 text-center">
             <Link
                to="/app/orders"
                className="inline-block bg-gray-600 text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
             >
                &larr; Back to All Orders
            </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderFullDetails;