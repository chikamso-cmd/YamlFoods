import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaRegUser } from "react-icons/fa";
import rectangle from "../assets/Rectangle.png";
import Footer from "../Layout/Footer";
import RecentlyViewed from "../components/RecentlyViewed";
import OrderSummary from "./OrderSummaries";
import CheckoutNav from "../common/CheckoutNav";



export default function Checkout() {
  return (
    <div className="w-full min-h-screen">
      {/* Top Bar */}
      <CheckoutNav />

      {/* Header */}

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
      <div
        className="w-full px-2 py-5"
        data-aos="slide-up"
        data-aos-delay="500"
        data-aos-duration="4000"
      >
        <div className="px-8">
          {/* Checkout Items */}
          <div className="flex gap-4 flex-col lg:flex-row ">
            <div className="shadow-lg p-4 rounded-lg bg-white flex-1">
              <Link
                to="/Cart"
                className="text-green-700 text-sm px-3 mb-4 block"
              >
                Continue Shopping
              </Link>
              <div className="flex justify-center w-full max-w-2xl mx-auto">
                <div className="flex items-center justify-center py-3 gap-4 text-center">
                  <div>
                    <div className="bg-amber-500 rounded-full w-[30px] h-[30px] text-white text-center text-[10px] mx-auto">
                      <h1 className="pt-2">1</h1>
                    </div>
                    <p className="text-[10px] py-2">Delivery Address</p>
                  </div>
                  <img className="w-[30%]" src={rectangle} alt="rectangle" />
                  <div>
                    <div className="bg-amber-500 rounded-full w-[30px] h-[30px] text-white text-center text-[10px] mx-auto">
                      <h1 className="pt-2">2</h1>
                    </div>
                    <p className="text-[10px] py-2">Review Order</p>
                  </div>
                </div>
              </div>
              {/* user inrormation/ delivery address */}
              <form className="w-full px-2 py-3">
                <div className="px-2">
                  {/* form inputs/ username */}
                  <div className="block md:flex lg:flex items-center w-full gap-1 py-2">
                    <div className="block flex-1">
                      <label className="text-[10px] font-medium">
                        First Name
                      </label>
                      <input
                        className="border w-full rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="Fname"
                        required
                      />
                    </div>
                    <div className="block flex-1">
                      <label className="text-[10px] font-medium">
                        Last Name
                      </label>
                      <input
                        className="border w-full rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="Lname"
                        required
                      />
                    </div>
                  </div>

                  {/* form inputs/ phone & email */}
                  <div className="block md:flex lg:flex items-center w-full gap-1 pb-3">
                    <div className="block flex-1">
                      <label className="text-[10px] font-medium">
                        Phone Number{" "}
                      </label>
                      <input
                        className="border w-full rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="phone"
                        required
                      />
                    </div>
                    <div className="block flex-1">
                      <label className="text-[10px] font-medium"> Email</label>
                      <input
                        className="border w-full rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="email"
                        name=""
                        id="email"
                        required
                      />
                    </div>
                  </div>

                  {/* form inputs/ city & state */}
                  <div className="block md:flex lg:flex items-center w-full gap-4 pb-1">
                    <div className="block flex-1">
                      <label className="text-[10px] font-medium">City </label>
                      <input
                        className="border w-full rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
                        type="text"
                        name=""
                        id="city"
                        required
                      />
                    </div>
                    <div className="block flex-1">
                      <label className="text-[10px] font-medium">State </label>
                      <input
                        className="border w-full rounded py-1 border-gray-300 mt-2 focus:outline-green-500"
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
                    <Link to="/ReviewOrder" className="w-full">
                      <button className="bg-gray-300 text-gray-400 px-4 w-full rounded text-[12px] py-1 cursor-pointer">
                        Save and Review Order
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <OrderSummary />
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
