import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoBasketOutline, IoCloseOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full  bg-white">
      <div className="flex justify-between font-medium bg-[#fff8e1] px-8 py-6 text-[10px] text-[#663d00] sm:text-[12px]  ">
        <h1 className="">Delivery within 24 hours</h1>
        <h1>Operates in Anambra and Awka for now</h1>
        <div className=" justify-between w-[200px] hidden  sm:flex   ">
          <h1>24/7 Support</h1>
          <h1>Secure Payment</h1>
        </div>
      </div>
      <div className="flex lg:justify-evenly md:justify-between items-center px-8 py-7 lg:w-full">
        <Link to="/">
          <img
            className="w-[40%] sm:w-[20%] md:w-50 lg:w-[50%] cursor-pointer"
            src={Logo}
            alt="company-logo"
          />
        </Link>
        {/* select btn */}
        <div className=" hidden md:flex lg:flex items-center gap-1 lg:mr-10">
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
            className="border rounded px-2 py-0.5 capitalize text-[14px] w-30 md:w-80 border-gray-400 placeholder:text-[10px]"
            type="search"
            name=""
            id="search"
            placeholder="search"
          />
        </div>
        <div className=" hidden md:hidden lg:flex items-center justify-between gap-4 text-[10px] ">
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

        <div>
          {/* Sidebar */}
          {isOpen && (
            <div className="px-6 py-5 fixed top-0 left-0 bg-black/80 backdrop-blur-sm h-full z-50 w-70 lg:hidden md:block overflow-y-auto">
              <Link to="/">
                <img
                  className="w-[60%] cursor-pointer mb-5"
                  src={Logo}
                  alt="company-logo"
                />
              </Link>

              <select className="bg-green-700 w-full text-white py-1.5 px-3 mb-3 rounded text-[10px]">
                <option className="bg-white text-green-700" value="anambra">
                  Anambra
                </option>
                <option className="bg-white text-green-700" value="awka">
                  Awka
                </option>
              </select>

              <input
                className="border rounded px-2 py-1 text-white capitalize text-[14px] w-full border-white placeholder:text-[10px] mb-3"
                type="search"
                placeholder="search"
              />

              <div className="text-[10px] lg:hidden md:block">
                <button className="text-[10px] bg-[#358b38] rounded text-white px-4 py-2 cursor-pointer hover:bg-green-600 duration-400 w-full mb-3">
                  Install App
                </button>

                <Link to="/signin">
                  <button className="text-green-500 text-sm flex items-center gap-1 cursor-pointer mb-2 mt-2">
                    <FaRegUser className="text-sm" />
                    Login
                  </button>
                </Link>

                <Link to="/Cart">
                  <button className="flex text-white items-center gap-1 cursor-pointer text-sm">
                    <IoBasketOutline className="text-sm text-[#ff9900]" />
                    My Basket
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Hamburger / Close button */}
          {!isOpen ? (
            <RxHamburgerMenu
              size={20}
              className="cursor-pointer lg:hidden md:block"
              onClick={() => setisOpen(true)}
            />
          ) : (
            <IoCloseOutline
              size={20}
              className="cursor-pointer lg:hidden md:block"
              onClick={() => setisOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
