import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in border border-cyan-100 rounded-lg p-8 max-w-md mx-auto mt-10 shadow-md bg-white">
      <h2 className="font-bold text-2xl text-center mb-6 text-cyan-700">Sign In</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-cyan-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-cyan-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition-colors"
        >
          Sign In
        </button>
        {/* <div className="flex justify-between items-center mt-4">
          <Link to="/forgot-password" className="text-cyan-600 hover:underline text-sm">
            Forgot Password?
          </Link>
          <Link to="/signup" className="font-bold text-cyan-700 hover:underline text-sm">
            Sign Up
          </Link>
        </div> */}
      </form>
    </div>
  );
};

export default SignIn;