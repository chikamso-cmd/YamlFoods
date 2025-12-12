import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import tomatoes from "../assets/tomatoes.png";
import { Link } from "react-router-dom";
import Selectoptions from "../modals/Selectoptions";

export default function Snacks_and_drinks() {
  const [isOpen, setisOpen] = useState(false);

  const openModal = () => {
    setisOpen(true);
    console.log("clicked");
  };
  const closeModal = () => {
    setisOpen(false);
    console.log("was clicked");
  };

  return (
    <div
      className="w-full my-5 px-2 lg:px-0"
      data-aos="zoom-in-down"
      data-aos-delay="400"
      data-aos-duration="2000"
    >
      <div className="flex items-center justify-between px-3">
        <h1 className="text-[12px]">Snacks & Drinks</h1>
        <p className="text-green-600 flex items-center gap-2 text-[10px]">
          See All
          <FaChevronRight />
        </p>
      </div>
      {/* card content */}
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 mt-5 gap-4">
        <div className=" card bg-white border border-[#f9f6ec] shadow shadow-gray-200">
          <div className="bg-amber-100 h-[130px] ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[120px]  mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" card bg-white border border-[#f9f6ec] shadow shadow-gray-200">
          <div className="bg-amber-100 h-[130px] ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[120px]  mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" card bg-white border border-[#f9f6ec] shadow shadow-gray-200">
          <div className="bg-amber-100 h-[130px] ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[120px]  mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" card bg-white border border-[#f9f6ec] shadow shadow-gray-200">
          <div className="bg-amber-100 h-[130px] ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[120px]  mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block md:block card bg-white border border-[#f9f6ec] shadow shadow-gray-200">
          <div className="bg-amber-100 h-[130px] ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[120px]  mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block md:block card bg-white border border-[#f9f6ec] shadow shadow-gray-200">
          <div className="bg-amber-100 h-[130px] ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[120px]  mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <Selectoptions isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
