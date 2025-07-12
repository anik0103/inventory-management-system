import SearchIcon from "../asset/search.png";
import Cart from "../asset/shopping-cart.png";
import theme from "../asset/themes.png";
import man from "../asset/man.png";
import location from "../asset/location.png";
import { useState } from "react";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggledropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="w-full p-4 flex bg-[#9dc3e6]">
      <div className="container-fluid flex space-x-40 items-center">
        <div className="flex items-center space-x-2">
          <img src={Cart} alt="logo" className="w-6" />
          <h3 className="font-semibold text-lg">Alpha Inventory</h3>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="form-control w-60 rounded-xl px-2 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn border border-green-500 text-green-500 rounded px-2 py-1 hover:bg-green-500 hover:text-white transition">
            <img src={SearchIcon} alt="search" className="w-4" />
          </button>
        </div>
      </div>
      <div className="flex space-x-8 ml-auto items-center relative">
        <div className="flex align-middle">
        <img src={location} alt="location" className="w-8 cursor-pointer" onClick={toggledropdown} />
        <h1>kolkata</h1>
        </div>
        {dropdown && (
          <ul className="absolute top-12 left-0 bg-gray-700 text-white list-none p-2 rounded shadow-lg z-50 min-w-[120px]">
            <li className="py-1 px-3 hover:bg-gray-600 cursor-pointer">kolkata</li>
            <li className="py-1 px-3 hover:bg-gray-600 cursor-pointer">kolkata</li>
            <li className="py-1 px-3 hover:bg-gray-600 cursor-pointer">kolkata</li>
          </ul>
        )}
        <img src={theme} alt="theme" className="w-8" />
        <img src={man} alt="man" className="w-8" />
      </div>
    </nav>
  );
};
export default Navbar;
