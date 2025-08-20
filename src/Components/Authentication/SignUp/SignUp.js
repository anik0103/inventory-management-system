import { useState } from "react";
import pic from "../../../asset/pictures1.png";
import SignUpForm from "./SignUpForm";
import { sendWelcomeEmail, notifyAdmin } from "./SignUpEmail";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (item) => {
    const { name, value } = item.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (item) => {
    item.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const templateParams = { username, email };

    try {
      await sendWelcomeEmail(templateParams);
      await notifyAdmin(templateParams);

      alert(
        "Sign up successful! Please check your email for a welcome message."
      );
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error during signup email process:", error);
      alert("Error sending emails. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-white overflow-x-hidden">
      <div className="w-full md:w-1/2 flex flex-col items-center md:justify-center text-center px-4">
        <h1 className="text-[#bd78b5] text-3xl md:text-4xl font-bold mt-10 md:mt-12 mb-2">
          Welcome To Alpha Inventory
        </h1>
        <img
          src={pic}
          alt="Logo"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto mt-2"
        />
      </div>

      <SignUpForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUp;
