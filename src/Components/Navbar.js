import SearchIcon from "../asset/search.png";
import Cart from "../asset/shopping-cart.png";
import theme from "../asset/themes.png";
import man from "../asset/man.png";
import location from "../asset/location.png";
import notifiaction from "../asset/notification.png";
import plus from "../asset/add.png";
import { useState } from "react";
import mockData from "../asset/fakeApiResponce/mockData.json";

const Navbar = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  // Extract region names directly from the mockData array
  const regions = mockData.map((item) => item.region);

  const handleRegionChange = (e) => {
    const regionName = e.target.value;
    setSelectedRegion(regionName);

    // Find the region data from mockData
    const selectedRegionData = mockData.find((item) => item.region === regionName);

    // If you want to show a path (or some additional info), update it here
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
            className="p-1 border rounded-md w-[140px]"
          >
            <option value="">Choose a location</option>
            {regions.length > 0 ? (
              regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))
            ) : (
              <option disabled>No regions found</option>
            )}
          </select>
        </div>

        {/* Display the selected path if needed */}
        {/* {selectedPath && (
          <span className="ml-2 text-sm text-gray-700">{selectedPath}</span>
        )} */}

        <img src={plus} alt="plus" className="w-6" />
        <img src={notifiaction} alt="notifiaction" className="w-6" />
        <img src={theme} alt="theme" className="w-8" />
        <img src={man} alt="man" className="w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
