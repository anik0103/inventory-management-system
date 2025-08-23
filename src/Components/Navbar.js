import React, { useContext, useState } from "react";
import SearchIcon from "../asset/search.png";
import Cart from "../asset/shopping-cart.png";
import theme from "../asset/themes.png";
import man from "../asset/man.png";
import location from "../asset/location.png";
import notifiaction from "../asset/notification.png";
import plus from "../asset/add.png";
import mockData from "../asset/fakeApiResponce/mockData.json";
import { RegionContext } from "../Components/Dashbord/RegionContext";

const Navbar = () => {
  const { selectedRegion, setSelectedRegion } = useContext(RegionContext);
  const [showSearch, setShowSearch] = useState(false);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <nav className="w-full p-4 flex items-center justify-between bg-[#d19fca]">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <img src={Cart} alt="logo" className="w-6" />
        <h3 className="font-semibold text-lg">Athena Inventory</h3>
      </div>

      {/* Middle - Search (hidden on mobile unless toggled) */}
      <div className="hidden md:flex items-center space-x-2">
        <input
          className="w-60 rounded-2xl px-2 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="text-green-500 rounded px-2 py-1 hover:text-white transition">
          <img src={SearchIcon} alt="search" className="w-4" />
        </button>
      </div>

      {/* Mobile Search toggle */}
      <div className="flex md:hidden items-center">
        {showSearch ? (
          <div className="flex items-center space-x-2">
            <input
              className="w-40 rounded-2xl px-2 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="text-red-500 px-2"
            >
              ✖
            </button>
          </div>
        ) : (
          <button onClick={() => setShowSearch(true)}>
            <img src={SearchIcon} alt="search" className="w-5" />
          </button>
        )}
      </div>

      {/* Right - Actions */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Location dropdown */}
        <div className="flex items-center space-x-2">
          <img
            src={location}
            alt="location"
            className="w-6 md:w-8 cursor-pointer"
          />
          <select
            value={selectedRegion || ""}
            onChange={handleRegionChange}
            className="p-1 border rounded-md w-[100px] md:w-[120px]"
          >
            <option value="">Choose a location</option>
            {mockData.map((region, index) => (
              <option key={index} value={region.region}>
                {region.region}
              </option>
            ))}
          </select>
        </div>

        {/* Action icons */}
        <img src={plus} alt="plus" className="w-5 md:w-6 cursor-pointer" />
        <img
          src={notifiaction}
          alt="notifiaction"
          className="w-5 md:w-6 cursor-pointer"
        />
        <img src={theme} alt="theme" className="w-6 md:w-8 cursor-pointer" />
        <img src={man} alt="man" className="w-6 md:w-8 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
{/* <responsive nav>---------------------------</responsive> */}