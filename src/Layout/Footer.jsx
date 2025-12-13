import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { TbHome2, TbShoppingCart, TbBasket, TbUser } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [hide, setHide] = useState(false);
  const [Hide, sethide] = useState(false);

  return (
    <div className="lg:bg-green-900 md:bg-green-900 lg:text-white md:text-white text-black lg:px-9 lg:py-5 md:px-5 md:py-3 px-2 bg-white">
      {/* Footer */}
      <div className="lg:bg-green-900 md:bg-green-900 lg:text-white md:text-white text-black lg:p-10 grid lg:grid-cols-4 md:grid-cols-2  gap-6 md:p-3 p-2 pb-10">
        <div className=" lg:hidden md:hidden">
          <h1 className="text-[10px] px-3 py-3">Get the App</h1>
          <button className="flex items-center gap-3 cursor-pointer bg-black  rounded-xl text-white px-7 py-1">
            <FaApple />
            <span>
              <p className="text-[10px]">Download on</p>
              <p className="text-[10px]">App Store</p>
            </span>
          </button>
        </div>
        <div>
          <p className="text-sm">
            Your trusted online grocery store for fresh, quality products
            delivered fast.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2 hidden lg:block md:block">
            <h1 className="flex items-center justify-between border-b mb-2 pb-2 border-b-gray-300 cursor-pointer lg:border-b-0">
              Quick Links
            </h1>
            <ul className="text-sm space-y-1 transition-all">
              <li>About Us</li>
              <li>How it works</li>
              <li>Delivery Info</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="font-semibold mb-2 lg:hidden md:hidden">
            <h1
              className="flex items-center justify-between border-b mb-2 pb-2 border-b-gray-200 cursor-pointer lg:border-b-0"
              onClick={() => setHide(!hide)}
            >
              Company
              <BsChevronUp
                className={`transition-transform lg:block ${
                  hide ? "" : "rotate-180"
                }`}
              />
            </h1>

            {hide && (
              <ul className="text-sm space-y-1 transition-all">
                <li className="font-light">About Us</li>
                <li className="font-light">How it works</li>
                <li className="font-light">Delivery Info</li>
                <li className="font-light">Contact Us</li>
              </ul>
            )}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2 hidden lg:block md:block">
            <h1 className="flex items-center justify-between border-b mb-2 pb-2 border-b-gray-200 lg:border-b-0 cursor-pointer">
              Socials
            </h1>

            <ul className="text-sm space-y-1 transition-all">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>

          <div className="font-semibold mb-2 lg:hidden md:hidden">
            <h1
              className="flex items-center justify-between border-b mb-2 pb-2 border-b-gray-200 cursor-pointer"
              onClick={() => sethide(!Hide)}
            >
              Socials
              <BsChevronUp
                className={`transition-transform ${Hide ? "" : "rotate-180"}`}
              />
            </h1>

            {Hide && (
              <ul className="text-sm space-y-1 transition-all">
                <li className="font-light">Facebook</li>
                <li className="font-light">Twitter</li>
                <li className="font-light">Instagram</li>
                <li className="font-light">Linkedin</li>
              </ul>
            )}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">FAQ</div>
          {/* <ul className="text-sm space-y-1">
            <li>Call: +234 700 123 4567</li>
            <li>support@freshmart.ng</li>
          </ul> */}
        </div>
      </div>

      <hr className="text-gray-500" />

      <div className="text-center text-xs py-4 text-gray-400">
        © 2025 FreshMart. All rights reserved.
      </div>
      {/* mobile footer */}
      <div className="bg-white shadow-inner shadow-gray-100 px-3 py-4 flex items-center justify-between  lg:hidden md:hidden fixed z-50 bottom-0 left-0 w-full px-8">
        <div className="text-center flex flex-col justify-center items-center text-sm font-semibold cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 text-center justify-center" : ""}`
            }
          >
            <TbHome2 className="mx-auto font-bold text-[20px]" />
            <h1 className="text-[13px]">Home</h1>
          </NavLink>
        </div>
        <div className="text-center flex flex-col justify-center items-center text-sm font-semibold cursor-pointer">
          <NavLink
            to=".cart"
            className={({ isActive }) => `${isActive ? "text-green-600" : ""}`}
          >
            <TbShoppingCart className="mx-auto text-[20px]" />
            <h1 className="text-[13px]">Shop</h1>
          </NavLink>
        </div>
        <div className="text-center flex flex-col justify-center items-center text-sm font-semibold cursor-pointer">
          <NavLink
            to="/cart"
            className={({ isActive }) => `${isActive ? "text-green-600" : ""}`}
          >
            <TbBasket className="mx-auto text-[20px]" />
            <h1 className="text-[13px]">My Basket</h1>
          </NavLink>
        </div>
        <div className="text-center flex flex-col justify-center items-center text-sm font-semibold cursor-pointer">
          <NavLink
            to="/signin"
            className={({ isActive }) => `${isActive ? "text-green-600" : ""}`}
          >
            <TbUser className="mx-auto text-[20px]" />
            <h1 className="text-[13px]">Profile</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
