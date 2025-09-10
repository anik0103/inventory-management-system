import { IoIosLogOut } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="icon-hover bg-slate-50 p-4 w-36 border rounded-md shadow-lg relative z-50">
      <Link to="/app/userdetails" className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
        <FcBusinessman size={20} />
        <p className="text-sm text-left">profile</p>
      </Link>
      <Link
        to="/"
        className="flex items-center gap-2 mt-2 hover:text-red-500 text-sm text-left"
      >
        <IoIosLogOut size={20} />
        <span>Logout</span>
      </Link>
    </div>
  );
};
export default Profile;
