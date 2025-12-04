import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoBasketOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full  ">
      <div className="flex justify-between font-medium bg-[#fff8e1] px-8 py-6 text-[10px] text-[#663d00] sm:text-[12px]  ">
        <h1 className="">Delivery within 24 hours</h1>
        <h1>Operates in Anambra and Awka for now</h1>
        <div className=" justify-between w-[200px] hidden  sm:flex   ">
          <h1>24/7 Support</h1>
          <h1>Secure Payment</h1>
        </div>
      </div>
      <div className="flex justify-between items-center px-8 py-7 lg:w-full">
        <img
          className="w-[6%] sm:w-[5%] h-[6%] lg:w-[4%]"
          src={Logo}
          alt="company-logo"
        />
        <div className="flex items-center gap-1">
          <select
            className="bg-green-700 text-white py-1.5 px-3 rounded text-[10px]"
            name=""
            id="select"
          >
            <option className="bg-white text-green-700" value="anambra">
              Anambra
            </option>
            <option className="bg-white text-green-700" value="awka">
              Awka
            </option>
          </select>
          <IoMdSearch
            width={20}
            className="hidden fixed right-95 text-gray-400 cursor-pointer md:right-209"
          />
          <input
            className="border rounded px-2 py-0.5 capitalize text-[14px] w-30 md:w-100 border-gray-400 placeholder:text-[10px]"
            type="search"
            name=""
            id="search"
            placeholder="search"
          />
        </div>
        <div className="flex items-center justify-between gap-4 text-[10px] ">
          <button className="text-[10px] bg-[#4CAF4F] rounded text-white px-4 py-1 cursor-pointer hover:bg-green-600 duration-400">
            Install App
          </button>

          <Link to="/signin">
            <button className="text-green-500 flex items-center gap-1 cursor-pointer">
              <FaRegUser className="text-[12px] " />
              Login
            </button>
          </Link>

          <Link to="/Cart">
            <button className="flex items-center gap-1 cursor-pointer ">
              <IoBasketOutline className="text-[12px] text-[#ff9900] " />
              My Basket
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
