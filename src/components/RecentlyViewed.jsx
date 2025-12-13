import React from 'react'
import rice from "../assets/rice.png";
import maryland from "../assets/Maryland.png";
import tomatoes from "../assets/tomatoes.png";
import { FaCaretDown } from "react-icons/fa";

export default function RecentlyViewed() {
  return (
    <div>
      <div
        className="grid grid-cols-3 overflow-x-scroll lg:grid-cols-3 gap-2 mt-4 mb-4"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="2000"
      >
        <div className=" bg-white shadow ">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={tomatoes}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Tomatoes</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaCaretDown />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow ">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={maryland}
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
                <FaCaretDown />
              </p>
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow ">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <img
              src={rice}
              alt="fresh tomatoes"
              className="w-[60px] mx-auto  "
            />
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Mama Gold Rice</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div className="flex items-center justify-between py-2">
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaCaretDown />
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
