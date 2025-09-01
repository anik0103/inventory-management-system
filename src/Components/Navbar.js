import React, { useContext, useState, useRef, useEffect } from "react";
import SearchIcon from "../asset/search.png";
import Cart from "../asset/shopping-cart.png";
// import theme from "../asset/themes.png";
import man from "../asset/man.png";
import location from "../asset/location.png";
import notifiaction from "../asset/notification.png";
import plus from "../asset/add.png";
import mockData from "../asset/fakeApiResponce/mockData.json";
import { RegionContext } from "../Components/Dashbord/RegionContext";
import { FaBars } from "react-icons/fa";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Navbar = ({ expanded, setExpanded }) => {
  const { selectedRegion, setSelectedRegion } = useContext(RegionContext);
  const [showSearch, setShowSearch] = useState(false);
  const [showHover, setShowHover] = useState(false);
  const menuRef = useRef(null);
  // Plus dropdown
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const plusMenuRef = useRef(null);

  const navigate = useNavigate();

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  // Close profile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowHover(false);
      }
      if (plusMenuRef.current && !plusMenuRef.current.contains(e.target)) {
        setShowPlusMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full p-4 flex items-center justify-between bg-[#d19fca]">
      {/* Container for Hamburger and Logo */}
      <div className="flex items-center space-x-2">
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
          <h3 className="font-semibold text-lg">Athena Inventory</h3>
        </div>
      </div>

      {/* Middle - Search */}
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
      <div className="flex items-center space-x-4 md:space-x-6 relative">
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
        {/* Plus Dropdown */}
        <div className="relative" ref={plusMenuRef}>
          <img
            src={plus}
            alt="plus"
            className="w-5 md:w-6 cursor-pointer"
            onClick={() => setShowPlusMenu((prev) => !prev)}
          />
          {showPlusMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg p-2 z-50">
              <button
                onClick={() => {
                  setShowPlusMenu(false);
                  navigate("/app/add-product");
                }}
                className="block text-left px-3 py-2 hover:bg-gray-100"
              >
                ➕ Add Product
              </button>
              <button
                onClick={() => {
                  setShowPlusMenu(false);
                  navigate("/app/AddSupplier");
                }}
                className="block text-left px-3 py-2 hover:bg-gray-100"
              >
                🏭 Add Supplier
              </button>
            </div>
          )}
        </div>
        {/* Notification */}
        <img
          src={notifiaction}
          alt="notifiaction"
          className="w-5 md:w-6 cursor-pointer"
        />
        {/* <img src={theme} alt="theme" className="w-6 md:w-8 cursor-pointer" /> */}

        {/* Man icon with Profile dropdown */}
        <div className="relative" ref={menuRef}>
          <img
            src={man}
            alt="man"
            className="w-6 md:w-8 cursor-pointer"
            onClick={() => setShowHover((prev) => !prev)}
          />
          {showHover && (
            <div className="absolute right-0 mt-2">
              <Profile />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;