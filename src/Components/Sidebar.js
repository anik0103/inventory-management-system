import { useState } from "react";
import { FaHome, FaBox, FaTruck, FaClipboardList, FaUsers, FaChartBar, FaBars } from "react-icons/fa";

const menuItems = [
    { key: "Dashboard", icon: <FaHome />, label: "Dashboard" },
    { key: "Products", icon: <FaBox />, label: "Products" },
    { key: "Suppliers", icon: <FaTruck />, label: "Suppliers" },
    { key: "Orders", icon: <FaClipboardList />, label: "Orders" },
    { key: "Customer", icon: <FaUsers />, label: "Customer" },
    { key: "Reports", icon: <FaChartBar />, label: "Reports" },
];

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div
            className={`sidebar h-screen ${expanded ? "w-64" : "w-16"} bg-purple-600 text-white flex flex-col transition-all duration-300`}
            style={{ minHeight: "100vh" }}
        >
            <div className={`flex items-center ${expanded ? "justify-between" : "justify-center"}`}>
                {expanded && <span className="px-6 py-4 font-bold text-lg">Menu</span>}
                <button
                    className={`p-4 focus:outline-none hover:bg-purple-700 flex items-center justify-center ${expanded ? "ml-auto" : ""}`}
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <FaBars />
                </button>
            </div>
            <ul className="flex-1 py-6 space-y-2">
                {menuItems.map((item) => (
                    <li
                        key={item.key}
                        className="px-6 py-2 hover:bg-purple-800 rounded cursor-pointer flex items-center gap-3"
                    >
                        {item.icon}
                        {expanded && <span>{item.label}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;