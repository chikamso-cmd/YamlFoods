import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoBasketOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

function SignIn() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState ('')

  const showError = (msg) => {
    
    if (!email) {
      setEmailError(msg);
    }
    if (!password) {
      setPasswordError(msg);
    }

    setTimeout(() => {
      setEmailError("");
      setPasswordError('');
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
   console.log('btn clicked', email, password)

if (!email) {
  console.log("you need to fill all input fields");
  setTimeout(() => {
    setEmailError("");
    setPasswordError("");
  }, 3000);
    showError("This field cannot be empty");
}  else if(!password){
 console.log("password cannot be empty");
 showError("passowrd cannot be empty");
}else{
  showError('')
  console.log('welcome back user');
  Navigate('/seller/overview')
}
   
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 flex flex-col">
      <div className="w-full">
        {/* Top navigation bar */}
        <div className="bg-[#f5f1e4] py-2 px-5 flex justify-between text-xs">
          <span className="text-[10px] md:text-sm lg:text-2xl">Delivery within 24 hours</span>
          <span className="text-[10px] md:text-sm lg:text-2xl">Operates in Arambra and Awka for now</span>
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
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow">
          {/* User icon */}
          <div className="bg-green-50  w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            <FaRegUser className="text-green-600 text-[12px]" />
          </div>

          <h2 className="text-[12px] font-semibold m-0">Welcome Back!</h2>
          <p className="text-gray-600 text-[10px] mb-5">
            Sign in to your account to continue shopping
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
              />
             {emailError && <p className="text-red-600 text-[9px] mt-1 px-2">{emailError}</p>}
              
            </div>

            {/* Password field */}
            <div className="mb-4 text-left">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-green-600 text-[10px] no-underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                
                  className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                />
                {passworderror && <p className="text-red-600 text-[9px] mt-1 px-2">{passworderror}</p>}
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
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full text-[10px] py-3 bg-gray-100 border-none rounded-md text-gray-800 text-base cursor-pointer mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-[10px] text-gray-500">
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

          {/* Create account link */}
          <div className="mt-5 text-[10px]">
            <span>Don't have an account?</span>
            <Link to="/SignUp" className="text-green-600 no-underline ml-1">
              Create One
            </Link>
          </div>
        </div>
      </div>
      <Link to="/storekeeper/store-overview">layout</Link>
    </div>
  );
}

export default SignIn;
