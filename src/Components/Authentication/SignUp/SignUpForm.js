import { Link } from "react-router-dom";
import SignUpInput from "./SignUpInput";

const SignUpForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0 px-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-4 md:p-6 bg-white border shadow-2xl rounded-xl mb-8 sm:mb-8 md:mb-0 lg:mb-14
">
        <h2 className="text-2xl font-bold text-center text-[#bd78b5] mb-2">
          Sign Up
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <SignUpInput
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <SignUpInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <SignUpInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <SignUpInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="ml-2 flex">
            <input type="checkbox" id="terms" name="terms" required />
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-blue-600"
            >
              Accept the terms & Conditions
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-28 py-2 font-semibold text-[#bd78b5] bg-white shadow rounded-3xl hover:bg-slate-100 mt-4"
            >
              Sign Up
            </button>
          </div>

          <div>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 font-medium">
                Signin
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
