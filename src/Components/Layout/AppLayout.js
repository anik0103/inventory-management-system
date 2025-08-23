import { useState } from "react";
import Sidebar from "../SystemNavigation/Sidebar";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { RegionProvider } from "../Dashbord/RegionContext";

const AppLayout = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="App">
      <RegionProvider>
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar expanded={expanded} setExpanded={setExpanded} />
        </div>

        {/* Sidebar and Main content */}
        <div className="flex pt-16">
          <Sidebar expanded={expanded} setExpanded={setExpanded} />
          <div
            className={`transition-all duration-300 p-4 flex-1 ${
              expanded ? "ml-52" : "ml-16"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </RegionProvider>
    </div>
  );
};

export default AppLayout;