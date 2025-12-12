import React from "react";
import { LuClock4 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { TiInputChecked } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Ordercategory() {
  return (
    <div className="w-full bg-white rounded shadow shadow-gray-200 px-1 py-2 mt-3">
      <div className=" hidden lg:flex md:flex border-b border-b-gray-200 justify-end items-center">
        <div className="flex items-center gap-3 mb-3 mx-4">
          <input
            type="search"
            placeholder="search"
            className="rounded border px-3 py-1 border-gray-300 w-80"
          />
          <button className="bg-white text-[10px] flex items-center gap-3 rounded-full border border-gray-200 px-8 py-2 cursor-pointer">
            Filters
          </button>
        </div>
      </div>
      {/* view order elements */}
      <div
        className="border border-gray-200 rounded mt-4"
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <div className="flex items-center gap-4 px-3 py-2">
          <div className="hidden lg:block md:block  bg-amber-100 text-amber-600 w-[25px] h-[25px] rounded px-1 py-1.5">
            <LuClock4 />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <h1 className="text-[12px] font-bold">FG-2024-1005-7653</h1>
                <p className="bg-amber-100 text-[9px] text-amber-600 rounded-full px-3 py-0.5">
                  Pending
                </p>
              </div>
              <p className="text-[12px] font-bold text-green-500 lg:text-black md:text-black ">
                #20,500
              </p>
            </div>
            <div className="md:flex lg:flex block items-center justify-between pt-1">
              <div className="lg:flex md:flex gap-2">
                <p className=" font-bold flex items-center gap-1 text-[8px] ">
                  {" "}
                  <FaRegUser />
                  Emeka Okonkwo
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <MdLocalPhone /> 0803-456-7890
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <VscLocation /> Lagos
                </p>
                <p className="lg:flex hidden md:flex items-center gap-1 text-[8px]">
                  <LuClock4 /> 2025-10-27 09:30 Am
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <BsBoxSeam /> 3 Items
                </p>
              </div>
              <Link to="/storekeeper/my-orders/view-orders">
                <button className="bg-green-600 text-white text-[12px] w-full mt-3 px-3 py-0.5 rounded cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200 rounded mt-4"
        data-aos="zoom-in-up"
        data-aos-delay="400"
        data-aos-duration="1700"
      >
        <div className="flex items-center gap-4 px-3 py-2 ">
          <div className="hidden lg:block md:block bg-purple-100 text-purple-600 --[25px] h-[25px] rounded px-1 py-1.5">
            <TbTruckDelivery />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <h1 className="text-[12px] font-bold">FG-2024-1005-7653</h1>
                <p className="bg-purple-100 text-[9px] text-purple-600 rounded-full px-3 py-0.5">
                  In Progress
                </p>
              </div>
              <p className="text-[12px] font-bold">#20,500</p>
            </div>
            <div className="lg:flex md:flex items-center justify-between pt-1">
              <div className="lg:flex md:flex gap-2">
                <p className="flex items-center gap-1 text-[8px]  font-bold">
                  {" "}
                  <FaRegUser />
                  Emeka Okonkwo
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <MdLocalPhone /> 0803-456-7890
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <VscLocation /> Lagos
                </p>
                <p className="lg:flex md:flex hidden items-center gap-1 text-[8px] ">
                  <LuClock4 /> 2025-10-27 09:30 Am
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <BsBoxSeam /> 3 Items
                </p>
              </div>
              <Link to="/storekeeper/my-orders/view-orders">
                <button className="bg-green-600 text-white text-[12px] px-3 py-0.5 rounded cursor-pointer mt-3 w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200 rounded mt-4"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="1900"
      >
        <div className="flex items-center gap-4 px-3 py-2 ">
          <div className="hidden lg:block md:block bg-green-100 text-green-600 w-[25px] h-[25px] rounded px-1 py-1.5">
            <TiInputChecked />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <h1 className="text-[12px] font-bold">FG-2024-1005-7653</h1>
                <p className="bg-green-100 text-[9px] text-green-600 rounded-full px-3 py-0.5">
                  Delivered
                </p>
              </div>
              <p className="text-[12px] font-bold">#20,500</p>
            </div>
            <div className="lg:flex md:flex items-center justify-between pt-1">
              <div className="lg:flex md:flex gap-2">
                <p className="flex items-center gap-1 text-[8px] font-bold">
                  {" "}
                  <FaRegUser />
                  Emeka Okonkwo
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <MdLocalPhone /> 0803-456-7890
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <VscLocation /> Lagos
                </p>
                <p className="lg:flex md:flex items-center gap-1 text-[8px] hidden">
                  <LuClock4 /> 2025-10-27 09:30 Am
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <BsBoxSeam /> 3 Items
                </p>
              </div>
              <Link to="/storekeeper/my-orders/view-orders">
                <button className="bg-green-600 text-white text-[12px] px-3 py-0.5 rounded cursor-pointer w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200 rounded mt-4"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="1900"
      >
        <div className="flex items-center gap-4 px-3 py-2 ">
          <div className="hidden lg:block md:block bg-green-100 text-green-600 w-[25px] h-[25px] rounded px-1 py-1.5">
            <TiInputChecked />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <h1 className="text-[12px] font-bold">FG-2024-1005-7653</h1>
                <p className="bg-green-100 text-[9px] text-green-600 rounded-full px-3 py-0.5">
                  Delivered
                </p>
              </div>
              <p className="text-[12px] font-bold">#20,500</p>
            </div>
            <div className="lg:flex md:flex items-center justify-between pt-1">
              <div className="lg:flex md:flex gap-2">
                <p className="flex items-center gap-1 text-[8px] font-bold">
                  {" "}
                  <FaRegUser />
                  Emeka Okonkwo
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <MdLocalPhone /> 0803-456-7890
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <VscLocation /> Lagos
                </p>
                <p className="lg:flex md:flex items-center gap-1 text-[8px] hidden">
                  <LuClock4 /> 2025-10-27 09:30 Am
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <BsBoxSeam /> 3 Items
                </p>
              </div>
              <Link to="/storekeeper/my-orders/view-orders">
                <button className="bg-green-600 text-white text-[12px] px-3 py-0.5 rounded cursor-pointer w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200 rounded mt-4"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="1900"
      >
        <div className="flex items-center gap-4 px-3 py-2 ">
          <div className="hidden lg:block md:block bg-green-100 text-green-600 w-[25px] h-[25px] rounded px-1 py-1.5">
            <TiInputChecked />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <h1 className="text-[12px] font-bold">FG-2024-1005-7653</h1>
                <p className="bg-green-100 text-[9px] text-green-600 rounded-full px-3 py-0.5">
                  Delivered
                </p>
              </div>
              <p className="text-[12px] font-bold">#20,500</p>
            </div>
            <div className="lg:flex md:flex items-center justify-between pt-1">
              <div className="lg:flex md:flex gap-2">
                <p className="flex items-center gap-1 text-[8px] font-bold">
                  {" "}
                  <FaRegUser />
                  Emeka Okonkwo
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <MdLocalPhone /> 0803-456-7890
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <VscLocation /> Lagos
                </p>
                <p className="lg:flex md:flex items-center gap-1 text-[8px] hidden">
                  <LuClock4 /> 2025-10-27 09:30 Am
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <BsBoxSeam /> 3 Items
                </p>
              </div>
              <Link to="/storekeeper/my-orders/view-orders">
                <button className="bg-green-600 text-white text-[12px] px-3 py-0.5 rounded cursor-pointer w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200 rounded mt-4"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="1900"
      >
        <div className="flex items-center gap-4 px-3 py-2 ">
          <div className="hidden lg:block md:block bg-green-100 text-green-600 w-[25px] h-[25px] rounded px-1 py-1.5">
            <TiInputChecked />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <h1 className="text-[12px] font-bold">FG-2024-1005-7653</h1>
                <p className="bg-green-100 text-[9px] text-green-600 rounded-full px-3 py-0.5">
                  Delivered
                </p>
              </div>
              <p className="text-[12px] font-bold">#20,500</p>
            </div>
            <div className="lg:flex md:flex items-center justify-between pt-1">
              <div className="lg:flex md:flex gap-2">
                <p className="flex items-center gap-1 text-[8px] font-bold">
                  {" "}
                  <FaRegUser />
                  Emeka Okonkwo
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <MdLocalPhone /> 0803-456-7890
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <VscLocation /> Lagos
                </p>
                <p className="lg:flex md:flex items-center gap-1 text-[8px] hidden">
                  <LuClock4 /> 2025-10-27 09:30 Am
                </p>
                <p className="flex items-center gap-1 text-[8px]">
                  <BsBoxSeam /> 3 Items
                </p>
              </div>
              <Link to="/storekeeper/my-orders/view-orders">
                <button className="bg-green-600 text-white text-[12px] px-3 py-0.5 rounded cursor-pointer w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
