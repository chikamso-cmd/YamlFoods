import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBasketOutline } from "react-icons/io5";
import logo from '../assets/LOGO.png' 
import { NavLink } from "react-router-dom";

export default function DashbordNav() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#f8f0d6] text-sm py-2 px-6 flex justify-between">
        <span className=" text-[10px] md:text-sm lg:text-xl">
          Delivery within 24 hours
        </span>
        <div className="flex gap-4">
          <span className=" text-[10px] md:text-sm lg:text-xl">
            24/7 Support
          </span>
          <span className=" text-[10px] md:text-sm lg:text-xl">
            Secure Payment
          </span>
        </div>
      </div>
      {/* logo */}
      <div className=" text-black p-4 px-8 text-lg font-semibold">
        <div className="flex items-center justify-between gap-3">
          <NavLink to="/">
            <img
              src={logo}
              alt="yalmfoods logo"
              className="w-20 lg:w-50 md:w-30"
            />
          </NavLink>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className=" border rounded border-gray-300 px-2 py-1 focus:outline-green-500 w-100 text-[12px] hidden lg:block md:block"
          />
          <div className=" lg:flex md:flex gap-8 items-center hidden  ">
            <button className="text-green-500 flex items-center gap-1.5 cursor-pointer text-[12px]">
              <FaRegUser className="text-[10px] " />
              John
            </button>

            <Link to="/Cart">
              <button className="flex gap-2 items-center text-[12px] cursor-pointer">
                {" "}
                <IoBasketOutline className=" text-amber-600 font-bold text-[1rem] " />
                My Basket
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
