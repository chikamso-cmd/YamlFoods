import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaRegUser } from "react-icons/fa";
import rectangle from "../assets/Rectangle.png";
import Footer from "../Layout/Footer";
import RecentlyViewed from "../components/RecentlyViewed";

export default function Checkout() {
  return (
    <div className="w-full min-h-screen">
      {/* Top Bar */}
      <div className="w-full bg-[#f8f0d6] text-sm py-2 px-6 flex justify-between">
        <span>Delivery within 24 hours</span>
        <span>Operates in Anambra and Awka for now</span>
        <div className="flex gap-4">
          <span>24/7 Support</span>
          <span>Secure Payment</span>
        </div>
      </div>

      {/* Header */}
      <div className=" text-black p-4 px-8 text-lg font-semibold">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-bold"> LOGO</h1>
          <button className="text-green-500 flex items-center gap-1.5 cursor-pointer text-[10px]">
            <FaRegUser className="text-[10px] " />
            Login
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-8 py-4 text-gray-800 text-sm flex items-center gap-1">
        <h1 className="text-[12px]">
          <Link to="/">Home</Link>
        </h1>
        <FaCaretRight className="text-[12px]" />
        <Link to="/Cart">
          <p className=" text-gray-400 text-[9px] ">My Basket</p>
        </Link>
        <FaCaretRight className="text-[12px]" />
        <p className="font-bold text-[9px] ">Checkout</p>
      </div>

      {/* main content */}
      <div className="h-screen w-full px-6 py-5">
        <div className="px-8">
          {/* Checkout Items */}
          <div className="flex gap-7">
            <div className="shadow px-1 py-1 ">
              <Link to="/Cart" className="text-green-700 text-sm px-3">
                Continue Shopping
              </Link>
              <div className=" flex justify-center w-[700px] mx-auto ">
                <div className="flex items-center justify-center py-3 gap-4 text-center">
                  <div>
                    <div className="bg-amber-500 rounded-full w-[30px] h-[30px] text-white text-center text-[10px] mx-auto">
                      <h1 className="pt-2">1</h1>
                    </div>
                    <p className="text-[10px] py-2">Devivery Address</p>
                  </div>
                  <img className="w-[30%]" src={rectangle} alt="rectangle" />
                  <div>
                    <div className="bg-amber-500 rounded-full w-[30px] h-[30px] text-white text-center text-[10px] mx-auto">
                      <h1 className=" pt-2">2</h1>
                    </div>
                    <p className="text-[10px] py-2">Review Order</p>
                  </div>
                </div>
              </div>
              {/* user inrormation/ delivery address */}
              <form className="w-full px-2 py-3">
                <div className="px-2">
                  {/* form inputs/ username */}
                  <div className="flex items-center w-full gap-1  py-2">
                    <div className="block ">
                      <label className="text-[10px] font-medium">
                        First Name
                      </label>
                      <input
                        className="border w-100 rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="Fname"
                        required
                      />
                    </div>
                    <div className="block ">
                      <label className="text-[10px] font-medium">
                        Last Name
                      </label>
                      <input
                        className="border w-100 rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="Lname"
                        required
                      />
                    </div>
                  </div>

                  {/* form inputs/ phone & email */}
                  <div className="flex items-center w-full gap-1 pb-3 ">
                    <div className="block">
                      <label className="text-[10px] font-medium">
                        Phone Number{" "}
                      </label>
                      <input
                        className="border w-100 rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="phone"
                        required
                      />
                    </div>
                    <div className="block">
                      <label className="text-[10px] font-medium"> Email</label>
                      <input
                        className="border w-100 rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="email"
                        name=""
                        id="email"
                        required
                      />
                    </div>
                  </div>

                  {/* form inputs/ city & state */}
                  <div className="flex items-center w-full gap-4  pb-1">
                    <div className="block">
                      <label className="text-[10px] font-medium">City </label>
                      <input
                        className="border w-100 rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="city"
                        required
                      />
                    </div>
                    <div className="block">
                      <label className="text-[10px] font-medium">State </label>
                      <input
                        className="border w-100 rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="state"
                        required
                      />
                    </div>
                  </div>
                  <div className=" pb-3">
                    <label className="text-[10px] font-medium">
                      Delivery Address
                    </label>
                    <input
                      className="border w-full rounded py-1 border-gray-300 mt-2 placeholder:text-[10px] focus:outline-green-500 placeholder:px-3"
                      type="text"
                      name=""
                      id="address"
                      placeholder="Street address, apartmemt"
                      required
                    />
                  </div>
                  <div className="flex w-full gap-4 my-3 items-center ">
                    <button className="cursor-pointer text-green-500 border border-green-500 px-3 py-1 text-[10px] rounded hover:bg-green-500 hover:text-white duration-500 ">
                      Back
                    </button>
                    <button className="bg-gray-300 text-gray-400 px-4 w-full rounded text-[12px] py-1 cursor-pointer">
                      Save and Review Order
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="w-80 bg-white shadow p-4 rounded-lg h-fit">
              <div className="font-semibold mb-4 text-[11px]">
                Order Summary
              </div>
              <div className="flex justify-between py-2 text-[10px]">
                <span>Subtotal</span>
                <span>₦7,000</span>
              </div>
              <div className="flex justify-between py-2 text-[10px]">
                <span>Discount</span>
                <span>₦-</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold text-[10px] py-2">
                <span>Total</span>
                <span>₦7,000</span>
              </div>
              <Link to="/Checkout">
                <button className="bg-gray-300 mb-3 text-gray-400 text-[10px] w-full py-2 rounded mt-3 cursor-pointer">
                  Proceed to Pay
                </button>
              </Link>
              <p className=" text-[10px] ">
                <span className="text-green-500 pr-1">✓</span> Secure Payment
                Processing
              </p>
              <p className=" text-[10px] ">
                <span className="text-green-500 pr-1">✓</span> Fresh produce
                guranteed
              </p>
              <p className=" text-[10px] ">
                <span className="text-green-500 pr-1">✓</span> 24hr delivery
                promise
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 my-6">
        <h1 className="font-medium text-[12px]">Recently Viewed</h1>
    <RecentlyViewed />
      </div>
      <Footer />
    </div>
  );
}
