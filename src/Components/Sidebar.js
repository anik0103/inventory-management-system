
const Sidebar = () => {
    return (
        <div className="sidebar h-full w-64 bg-gray-800 text-white flex flex-col">
            <ul className="flex-1 py-6 space-y-2">
                <li key="Dashboard" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
                <li key="Products" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Products</li>
                <li key="Suppliers" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Suppliers</li>
                <li key="Orders" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer"> Orders</li>
                <li key="Customer" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Customer</li>
                <li key="Reports" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Reports</li>
            </ul>
        </div>
    );
};

export default Sidebar;