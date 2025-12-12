import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import carrot from "../assets/carrot.png";
import tomatoes from "../assets/tomatoes.png";
import bellpepper from "../assets/bellpepper.png";
import redpepper from "../assets/redpepper.png";
import onion from "../assets/onions.png";
import Cabbage from "../assets/cabbage.png";
// import { Link } from "react-router-dom";
import Selectoptions from "../modals/Selectoptions";

export default function Riceandgrains() {
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
      className="w-full my-5"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1500"
    >
      <div className="flex items-center justify-between px-5">
        <h1 className="text-[12px]">Rice & Grains</h1>
        <p className="text-green-600 flex items-center gap-2 text-[10px]">
          See All
          <FaChevronRight />
        </p>
      </div>
      {/* card content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={tomatoes}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Rice</h1>
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

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={redpepper}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Mama Pride Rice</h1>
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

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={carrot}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Mama Gold Rice</h1>
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

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={onion}
              alt="fresh tomatoes"
              className="w-[45px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Cap Rice</h1>
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

        <div className=" card bg-white hidden lg:block md:block">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={bellpepper}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Basmati Rice</h1>
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

        <div className=" card bg-white hidden lg:block md:block">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={Cabbage}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Amazon Basmati</h1>
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
