import { useState } from "react";
import {FaHome,FaBox,FaTruck,FaClipboardList,FaUsers,FaChartBar,FaBars,} from "react-icons/fa";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const iconSize = 24;

  const menuItems = [
    { key: "Dashboard", icon: <FaHome size={iconSize} />, label: "Dashboard" },
    { key: "Products", icon: <FaBox size={iconSize} />, label: "Products" },
    { key: "Suppliers", icon: <FaTruck size={iconSize} />, label: "Suppliers" },
    { key: "Orders", icon: <FaClipboardList size={iconSize} />, label: "Orders" },
    { key: "Customer", icon: <FaUsers size={iconSize} />, label: "Customer" },
    { key: "Reports", icon: <FaChartBar size={iconSize} />, label: "Reports" },
  ];

  return (
    <div className={`sidebar h-screen ${expanded ? "w-64" : "w-16"} bg-purple-600 text-white font-semibold flex flex-col transition-all duration-300`}>
      {/* Header section with toggle */}
        <div className={`flex items-center ${expanded ? "justify-between px-6" : "justify-center"} py-4`}>
        {expanded && <span className="font-bold text-lg">Menu</span>}
            <button
                className="p-2 focus:outline-none hover:bg-purple-700 rounded"
                onClick={() => setExpanded((prev) => !prev)}
                aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}>
                <FaBars size={iconSize} />
            </button>
        </div>

        {/* Menu items */}
        <ul className="flex-1 space-y-2">
            {menuItems.map((item) => (
                <li
                    key={item.key}
                    className="hover:bg-purple-800 rounded cursor-pointer flex items-center gap-3 px-4 py-2">
                        <div className="flex justify-center w-6">{item.icon}</div>
                        {expanded && <span className="whitespace-nowrap">{item.label}</span>}
                </li>
           ))}
        </ul>
    </div>
  );
};

export default Sidebar;