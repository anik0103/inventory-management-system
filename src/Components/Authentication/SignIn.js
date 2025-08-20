import { Link } from "react-router-dom";
import pic from "../../asset/pictures1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mockData from "../../asset/fakeApiResponce/mockdata2.json";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const match = mockData.find(
      (entry) => entry.email === email && entry.password === password
    );

    if (!match) {
      alert("Invalid credentials");
      return;
    }

    const { token, user } = match;
    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);

    if (user.role === "admin") {
      navigate("/");
    } else if (user.role === "user") {
      navigate("/products");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-white overflow-x-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:justify-center text-center px-4">
        <h1 className="text-[#bd78b5] text-3xl md:text-4xl font-bold mt-10 md:mt-12 mb-4">
          Welcome To Alpha Inventory
        </h1>
        <img
          src={pic}
          alt="Logo"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto mt-4"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 px-4">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 bg-white border shadow-2xl rounded-xl mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold text-center text-[#bd78b5] mb-4">
            Sign In
          </h2>
          <form className="space-y-4" method="POST">
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-3xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-28 py-2 font-semibold text-[#bd78b5] bg-white shadow rounded-3xl hover:bg-slate-100 mt-4"
                onClick={handleLogin}
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
