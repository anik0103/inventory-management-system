
const Sidebar = () => {
    return (
        <div className="sidebar h-full w-64 bg-gray-800 text-white flex flex-col">
            <ul className="flex-1 py-6 space-y-2">
                <li key="Dashboard" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
                <li key="Inventory" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Inventory</li>
                <li key="My Orders" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">My Orders</li>
                <li key="Browse Products" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Browse Products</li>
                <li key="Request Product" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Request Product</li>
                <li key="Logout" className="px-6 py-2 hover:bg-gray-700 rounded cursor-pointer">Logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;