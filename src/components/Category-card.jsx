import React from "react";
import rawfish from "../assets/rawfish.png";
import grocerybag from "../assets/fruit_bag.png";

export default function Category_card() {
  return (
    <div
      className=" gap-4 lg:w-ful  px-2 grid grid-cols-1  md:grid-cols-2 sm:grid-cols-2 items-center "
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div
        className="bg-[#FFCF33] relative py-9 rounded-3xl h-[200px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden   bg-[url('/src/assets/rawfish.png')]
  bg-no-repeat
  bg-[position:90%_95%]
  bg-[length:contain]"
      >
        <div>
          <p className="px-3 font-semibold text-white text-[16px] mt-3 pb-3.5">
            Get that fresh protein and prepare that soup today! Your every day
            shop.
          </p>
          <button className="cursor-pointer px-8 bg-white rounded mx-5 text-[10px] py-3 text-green-600">
            Shop Now
          </button>
        </div>
        <img className="lg:block hidden" src={rawfish} alt="fresh fish" />
      </div>
      <div>
        <div
          className="bg-[#71C173] rounded-3xl h-[200px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[url('/src/assets/fruit_bag.png')]
  bg-no-repeat
  bg-[position:100%_100%]
  bg-[length:contain] "
        >
          <div>
            <p className="py-9 px-5 font-semibold text-[18px] pb-3.5 mt-3">
              Every day fresh and clean vegetables with our Products
            </p>
            <button className=" cursor-pointer px-8 bg-white rounded mx-5 text-[10px] py-3 text-green-600">
              Shop Now
            </button>
          </div>
          <img src={grocerybag} alt="fresh fish" className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
