import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBasketOutline } from "react-icons/io5";

export default function DashbordNav() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#f8f0d6] text-sm py-2 px-6 flex justify-between">
        <span>Delivery within 24 hours</span>
        <div className="flex gap-4">
          <span>24/7 Support</span>
          <span>Secure Payment</span>
        </div>
      </div>
      {/* logo */}
      <div className=" text-black p-4 px-8 text-lg font-semibold">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-bold"> LOGO</h1>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className=" border rounded border-gray-300 px-2 py-1 focus:outline-green-500 w-100 text-[12px]"
          />
          <div className=" flex gap-8 items-center ">
            <Link to="/SignIn">
              <button className="text-green-500 flex items-center gap-1.5 cursor-pointer text-[12px]">
                <FaRegUser className="text-[10px] " />
                John
              </button>
            </Link>
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
