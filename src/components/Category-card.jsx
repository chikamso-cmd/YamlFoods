import React from "react";
import rawfish from "../assets/rawfish.png";
import grocerybag from "../assets/fruit_bag.png";

export default function Category_card() {
  return (
    <div className=" gap-4 lg:w-ful  px-4 grid grid-cols-1  md:grid-cols-2 sm:grid-cols-2 items-center ">
      <div className="bg-[#FFCF33] py-9 rounded-3xl h-[200px] grid grid-cols-2 overflow-hidden ">
        <div>
          <p className="px-5 font-bold text-[16px] pb-3.5">
            Get that fresh protein and prepare that soup today! Your every day
            shop.
          </p>
          <button className="cursor-pointer px-8 bg-white rounded mx-5 text-[10px] py-1.5 text-green-600">
            Shop Now
          </button>
        </div>
        <img className="w-full" src={rawfish} alt="fresh fish" />
      </div>
      <div>
        <div className="bg-[#71C173] rounded-3xl h-[200px] grid grid-cols-2 overflow-hidden ">
          <div>
            <p className="py-9 px-5 font-bold text-[18px] pb-3.5">
              Every day fresh and clean vegetables with our Products
            </p>
            <button className=" cursor-pointer px-8 bg-white rounded mx-5 text-[10px] py-1.5 text-green-600">
              Shop Now
            </button>
          </div>
          <img src={grocerybag} alt="fresh fish" />
        </div>
      </div>
    </div>
  );
}
