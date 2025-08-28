import { FaHome, FaBox, FaTruck, FaClipboardList, FaUsers, FaChartBar } from "react-icons/fa";

const iconSize = 24;

export const menuItems = [
  { key: "Dashboard",
     icon: <FaHome size={iconSize} />,
      label: "Dashboard",
       to: "/app" },
  { key: "Products",
     icon: <FaBox size={iconSize} />,
      label: "Products",
       to: "/app/products" },
  { key: "Suppliers",
     icon: <FaTruck size={iconSize} />,
      label: "Suppliers",
       to: "/app/suppliers" },
  { key: "Orders",
     icon: <FaClipboardList size={iconSize} />,
      label: "Orders",
       to: "/app/orders" },
  { key: "Customer",
     icon: <FaUsers size={iconSize} />,
      label: "Customer",
       to: "/app/customer" },
  { key: "Reports",
     icon: <FaChartBar size={iconSize} />,
      label: "Reports",
       to: "/app/reports" },
];
