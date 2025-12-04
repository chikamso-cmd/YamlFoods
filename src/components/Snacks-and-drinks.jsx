import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import carrot from "../assets/carrot.png";
import tomatoes from "../assets/tomatoes.png";
import bellpepper from "../assets/bellpepper.png";
import redpepper from "../assets/redpepper.png";
import onion from "../assets/onions.png";
import Cabbage from "../assets/cabbage.png";

export default function Snacks_and_drinks() {
  return (
    <div className="w-full my-5">
      <div className="flex items-center justify-between px-5">
        <h1 className="text-[12px]">Snacks & Drinks</h1>
        <p className="text-green-600 flex items-center gap-2 text-[10px]">
          See All
          <FaChevronRight />
        </p>
      </div>
      {/* card content */}
      <div className="card-container">
        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={tomatoes}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Fanta</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px]" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
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
            <h1 className="text-[10px] pt-1">Maryland</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px]" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
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
            <h1 className="text-[10px] pt-1">Cocacola</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px]" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
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
            <h1 className="text-[10px] pt-1">Shortbread</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px]" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={bellpepper}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Sprite</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px]" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={Cabbage}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Commando</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px]" />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
