import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="App">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex pt-16">
        <Sidebar onToggle={setSidebarExpanded} />
        {/* 👇 Shift content based on sidebar width */}
        <div className={`transition-all duration-300 ${sidebarExpanded ? "ml-64" : "ml-16"} flex-1 p-4`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
