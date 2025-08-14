import { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../../asset/pictures1.png";
import SignUpForm from "./SignUpForm";
import { sendWelcomeEmail, notifyAdmin } from "./SignUpEmail";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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

      alert("Sign up successful! Please check your email for a welcome message.");
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.error("Error during signup email process:", error);
      alert("Error sending emails. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-around min-h-screen bg-white w-full space-x-4">
      <div className="mt-16">
        <h1 className="text-[#bd78b5] text-4xl font-bold text-center">Welcome To Alpha Inventory</h1>
        <img src={pic} alt="Logo" className="w-auto h-[30rem] mx-auto mb-4" />
      </div>

      <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
