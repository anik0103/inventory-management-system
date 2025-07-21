import { Link } from "react-router-dom";
import pic from "../../asset/pictures1.png";
const SignIn = () => {
  return (
    <div
      className={`flex items-center justify-around min-h-screen bg-white w-full space-x-4`}
    >
      <div className="mt-16">
        <h1 className="text-[#bd78b5] text-4xl font-bold text-center">
          {" "}
          Welcome To Alpha Inventory
        </h1>
        <img src={pic} alt="Logo" className="w-auto h-[30rem] mx-auto mb-4" />
      </div>
      <div className="w-2/4 h-2/3 max-w-md p-8 space-y-2 bg-white border shadow-2xl rounded-xl">
        <h2 className="text-2xl font-bold text-center text-[#bd78b5]">
          Sign In
        </h2>
        <form className="space-y-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded-3xl shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-28 py-2 font-semibold text-slate-400 bg-white shadow-xl rounded-3xl hover:bg-slate-200 items-center mt-4"
            >
              Sign In
            </button>
          </div>
          <div>
            <p className="text-sm text-center">
              Create an account?
              <Link to="/signup" className="text-blue-600">
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
