import { FaHome, FaBox, FaTruck, FaClipboardList, FaUsers, FaChartBar } from "react-icons/fa";

const iconSize = 24;

export const menuItems = [
  { key: "Dashboard",
     icon: <FaHome size={iconSize} />,
      label: "Dashboard",
       to: "/" },
  { key: "Products",
     icon: <FaBox size={iconSize} />,
      label: "Products",
       to: "/products" },
  { key: "Suppliers",
     icon: <FaTruck size={iconSize} />,
      label: "Suppliers",
       to: "/suppliers" },
  { key: "Orders",
     icon: <FaClipboardList size={iconSize} />,
      label: "Orders",
       to: "/orders" },
  { key: "Customer",
     icon: <FaUsers size={iconSize} />,
      label: "Customer",
       to: "/customer" },
  { key: "Reports",
     icon: <FaChartBar size={iconSize} />,
      label: "Reports",
       to: "/reports" },
];

export default menuItems;