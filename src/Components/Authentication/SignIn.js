import { Link, useNavigate } from "react-router-dom";
import pic from "../../asset/pictures1.png";
import { useState } from "react";
import users from "../../asset/fakeApiResponce/mockdata2.json";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // find matching user
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(matchedUser.user));
    
          if (matchedUser.user.role === "admin") {
              navigate("/app");
          } else {
              navigate("/app/products");
          }
        } else {
          setError("Invalid email or password");
        }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-white overflow-x-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[#bd78b5] text-3xl md:text-4xl font-bold mt-10">
          Welcome To Alpha Inventory
        </h1>
        <img
          src={pic}
          alt="Logo"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 bg-white border shadow-2xl rounded-xl">
          <h2 className="text-xl md:text-2xl font-bold text-center text-[#bd78b5] mb-4">
            Sign In
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#bd78b5] shadow-xl"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#bd78b5] shadow-xl"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-28 py-2 font-semibold text-[#bd78b5] bg-white shadow rounded-3xl hover:bg-slate-100"
              >
                Sign In
              </button>
            </div>
            <p className="text-sm text-center">
              Create an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
