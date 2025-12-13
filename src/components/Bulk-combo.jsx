import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import oat from "../assets/oat.png";
import rice from "../assets/brown_rice.png";
import fruit from "../assets/dried_fruitd.png";
import bread from "../assets/fruit_bread.png";
import walnut from "../assets/walnuts.png";
import yoghurt from "../assets/yoghurt.png";

export default function Bulk_combo() {
  return (
    <div
      className="lg:px-3 px-2 py-6"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="flex items-center justify-between px-2 lg:px-5 md:px-5">
        <h1 className="text-[12px] font-medium">Healthy Choices</h1>
        <Link to="/storekeeper/product-management/bulk-product">
          <p className="text-green-600 flex items-center font-medium cursor-pointer gap-2 text-[10px]">
            See All Categories
            <FaChevronRight />
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4">
        {/* oats */}
        <div className="my-3  lg:w-45  ">
          <div className="bg-white  shadow p-1 rounded">
            <div className="  bg-amber-100 flex items-center justify-center">
              <img src={oat} alt="variety of products" className="" />
            </div>
            <div>
              <h1 className="text-[16px] py-0.5">Oats</h1>
              <p className="text-[16px] pb-0.5 font-bold">#3,500 - 5,500</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[12px] flex items-center gap-3 ">
                  1 Paint <FaChevronDown />
                </p>
                <button className="bg-amber-500 text-white text-[14px] px-2 rounded py-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3  lg:w-45">
          <div className="bg-white  shadow p-1 rounded">
            <div className="  bg-amber-100 flex items-center justify-center">
              <img src={rice} alt="variety of products" className="" />
            </div>
            <div>
              <h1 className="text-[16px] py-0.5">Oats</h1>
              <p className="text-[16px] pb-0.5 font-bold">#3,500 - 5,500</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[12px] flex items-center gap-3 ">
                  1 Paint <FaChevronDown />
                </p>
                <button className="bg-amber-500 text-white text-[14px] px-2 rounded py-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3  lg:w-45">
          <div className="bg-white  shadow p-1 rounded">
            <div className="  bg-amber-100 flex items-center justify-center">
              <img src={fruit} alt="variety of products" className="" />
            </div>
            <div>
              <h1 className="text-[16px] py-0.5">Oats</h1>
              <p className="text-[16px] pb-0.5 font-bold">#3,500 - 5,500</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[12px] flex items-center gap-3 ">
                  1 Paint <FaChevronDown />
                </p>
                <button className="bg-amber-500 text-white text-[14px] px-2 rounded py-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3  lg:w-45">
          <div className="bg-white  shadow p-1 rounded">
            <div className="  bg-amber-100 flex items-center justify-center">
              <img src={yoghurt} alt="variety of products" className="" />
            </div>
            <div>
              <h1 className="text-[16px] py-0.5">Oats</h1>
              <p className="text-[16px] pb-0.5 font-bold">#3,500 - 5,500</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[12px] flex items-center gap-3 ">
                  1 Paint <FaChevronDown />
                </p>
                <button className="bg-amber-500 text-white text-[14px] px-2 rounded py-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 hidden md:hidden lg:block lg:w-45">
          <div className="bg-white  shadow p-1 rounded">
            <div className="  bg-amber-100 flex items-center justify-center">
              <img src={bread} alt="variety of products" className="" />
            </div>
            <div>
              <h1 className="text-[16px] py-0.5">Oats</h1>
              <p className="text-[16px] pb-0.5 font-bold">#3,500 - 5,500</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[12px] flex items-center gap-3 ">
                  1 Paint <FaChevronDown />
                </p>
                <button className="bg-amber-500 text-white text-[14px] px-2 rounded py-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
