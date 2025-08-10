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

const Navbar = () => {
  const { selectedRegion, setSelectedRegion } = useContext(RegionContext);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <nav className="w-full p-4 flex bg-[#d19fca]">
      <div className="container-fluid flex space-x-40 items-center">
        <div className="flex items-center space-x-2">
          <img src={Cart} alt="logo" className="w-6" />
          <h3 className="font-semibold text-lg">Athena Inventory</h3>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="form-control w-60 rounded-2xl px-2 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn text-green-500 rounded px-2 py-1 hover:text-white transition">
            <img src={SearchIcon} alt="search" className="w-4" />
          </button>
        </div>
      </div>

      <div className="flex space-x-12 ml-auto items-center relative">
        <div className="flex items-center space-x-2">
          <img src={location} alt="location" className="w-8 cursor-pointer" />
          <select
            value={selectedRegion}
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
