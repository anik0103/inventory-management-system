import SearchIcon from "../asset/search.png";
import Cart from "../asset/shopping-cart.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-[#9dc3e6] w-full p-4 flex">
      <div className="container-fluid flex space-x-40">
        <div className="flex items-center space-x-2">
          <img src={Cart} alt="logo" className="w-6" />
          <h3>Alpha Inventory</h3>
        </div>
        <div className="align-items-center flex space-x-2">
          <input
            className="form-control me-2 w-60 rounded-xl px-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            <img src={SearchIcon} alt="search" className="w-4" />
          </button>
        </div>
      </div>
      <div className="flex space-x-4 ml-auto items-center">
        <p>Anik</p>
        <p>Anik</p>
        <p>rick</p>
      </div>
    </nav>
  );
};
export default Navbar;
