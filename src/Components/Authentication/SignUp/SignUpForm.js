import { Link } from "react-router-dom";
import SignUpInput from "./SignUpInput";


const SignUpForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="w-2/4 h-2/3 max-w-md p-8 space-y-2 bg-white border shadow-2xl rounded-xl">
      <h2 className="text-2xl font-bold text-center text-[#bd78b5]">Sign Up</h2>

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
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
            Accept the terms & Conditions
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-28 py-2 font-semibold text-slate-400 bg-white shadow-xl rounded-3xl hover:bg-[#f6c3f0]"
          >
            Sign Up
          </button>
        </div>

        <div>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#bd78b5]">Signin</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
