import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItems";

const Sidebar = ({ expanded, setExpanded }) => {
  const iconSize = 24;

  return (
    <div className={`h-screen fixed top-0 left-0 z-40 bg-[#bd78b5] text-white font-semibold flex flex-col transition-all duration-300 ${expanded ? "w-52" : "w-16"} pt-16`}>
      {/* Header with toggle */}
      <div className={`flex items-center ${expanded ? "justify-between px-4" : "justify-center"} py-4`}>
        {expanded && <span className="text-lg font-bold">Menu</span>}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="p-2 hover:bg-[#d19fca] rounded"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}>
          <FaBars size={iconSize} />
        </button>
      </div>

      {/* Menu */}
      <ul className="space-y-2 mt-4">
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link to={item.to} className="flex items-center gap-3 px-4 py-2 hover:bg-[#d19fca] rounded">
              <div className="w-6 text-center">{item.icon}</div>
              {expanded && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
