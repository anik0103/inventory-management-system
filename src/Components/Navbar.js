import SearchIcon from "../asset/search.png";
import Cart from "../asset/shopping-cart.png";
import theme from "../asset/themes.png";
import man from "../asset/man.png";
import location from "../asset/location.png";
import notifiaction from "../asset/notification.png";
import plus from "../asset/add.png";
import React, { useContext } from "react";
import mockData from "../asset/fakeApiResponce/mockData.json";
import { RegionContext } from "../Components/Dashbord/RegionContext";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

const Navbar = ({ expanded, setExpanded }) => {
  const { selectedRegion, setSelectedRegion } = useContext(RegionContext);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <nav className="w-full p-4 flex bg-[#d19fca] items-center">
      {/* Container for Hamburger, Logo, and Title */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Button */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="p-2 hover:bg-[#bd78b5] rounded-full text-white"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <FaBars size={24} />
        </button>

        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={Cart} alt="logo" className="w-6" />
          <h3 className="font-semibold text-lg whitespace-nowrap">Athena Inventory</h3>
        </div>
      </div>

      {/* Search Bar - pushed to the center */}
      <div className="flex-1 flex justify-center px-8">
        <div className="flex items-center space-x-2 w-full max-w-md">
          <input
            className="form-control w-full rounded-2xl px-3 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn text-green-500 rounded px-2 py-1 hover:text-white transition">
            <img src={SearchIcon} alt="search" className="w-4" />
          </button>
        </div>
      </div>

      {/* Right side icons and dropdown */}
      <div className="flex space-x-12 items-center">
        <div className="flex items-center space-x-2">
          <img src={location} alt="location" className="w-8 cursor-pointer" />
          <select
            value={selectedRegion || ""}
            onChange={handleRegionChange}
            className="p-1 border rounded-md w-[102px]"
          >
            <option value="">Choose a location</option>
            {mockData.map((region, index) => (
              <option key={index} value={region.region}>
                {region.region}
              </option>
            ))}
          </select>
        </div>
        <img src={plus} alt="plus" className="w-6" />
        <img src={notifiaction} alt="notifiaction" className="w-6" />
        <img src={theme} alt="theme" className="w-8" />
        <img src={man} alt="man" className="w-8" />
      </div>
    </nav>
  );
};

export default Navbar;