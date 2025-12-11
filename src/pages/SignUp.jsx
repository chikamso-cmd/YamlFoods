import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoBasketOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 flex flex-col shadow">
      <div className="w-full">
        {/* Top navigation bar */}
        <div className="bg-[#f5f1e4] py-2 px-5 flex justify-between text-xs">
          <span className="text-[10px] md:text-sm lg:text-2xl">
            Delivery within 24 hours
          </span>
          <span className="text-[10px] md:text-sm lg:text-2xl">
            Operates in Arambra and Awka for now
          </span>
          <span className="hidden md:block lg:block">24/7 Support</span>
          <span className="hidden md:block lg:block">Secure Payment</span>
        </div>

        {/* Logo section */}
        <div className="bg-white py-4 px-5 flex justify-between items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <Link to="/Cart">
            <button className="flex text-[12px] font-semibold items-center gap-2 cursor-pointer ">
              <IoBasketOutline className="text-[14px] font-semibold text-[#ff9900] " />
              Back to shop
            </button>
          </Link>
        </div>
      </div>

      {/* Main form container */}
      <div
        className="flex-1 flex justify-center items-center p-5"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="bg-[#ffffff] rounded-lg p-8 w-full max-w-md text-cente shadow">
          {/* User icon */}
          <div className="bg-[#f7ebd0] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            <FaRegUser className="text-amber-500 text-[12px]" />
          </div>

          <h2 className="text-xl font-semibold m-0 text-center text-[15px]">
            Create Account
          </h2>
          <p className="text-gray-600 text-sm mb-5 text-center text-[10px]">
            Join us and start shopping fresh groceries
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name fields */}
            <div className="flex gap-3 mb-4">
              <div className="w-1/2 text-left">
                <label htmlFor="firstName" className="block text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="James"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="w-1/2 text-left">
                <label htmlFor="lastName" className="block text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
              />
            </div>

            {/* Phone Number field */}
            <div className="mb-4 text-left">
              <label htmlFor="phoneNumber" className="block text-sm mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="09054678929"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
              />
            </div>

            {/* Password field */}
            <div className="mb-2 text-left">
              <label htmlFor="password" className="block text-sm mb-1">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                />
                <button
                  type="button"
                  className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEye className="bg-white w-[30px]" />
                  ) : (
                    <IoEyeOffOutline className="bg-white w-[30px]" />
                  )}
                </button>
              </div>
              <p className="text-xs text-amber-600 mt-1 hidden">
                Password must be at least 8 characters
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="mr-2"
                required
              />
              <label htmlFor="agreeToTerms" className="text-[10px]">
                I agree to the{" "}
                <Link to="/terms" className="text-amber-500 no-underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-amber-500 no-underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Create Account button */}
            <button
              type="submit"
              className="w-full py-3 text-[12px] bg-gray-200 border-none rounded-md text-gray-800 text-base cursor-pointer mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#ffffff] px-2 text-[10px] text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google sign in */}
          <button className="w-full py-2.5 bg-white border border-gray-300 rounded-md flex items-center justify-center gap-2 cursor-pointer text-[10px]">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google logo"
              className="w-3 h-3"
            />
            Sign in with Google
          </button>

          {/* Already have an account link */}
          <div className="mt-5 text-[10px] text-center">
            <span>Already have an account?</span>
            <Link to="/signin" className="text-green-600 no-underline ml-1">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
