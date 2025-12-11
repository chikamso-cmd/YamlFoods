import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import bus from "../assets/bus.png";
import arrow from "../assets/arrow.png";
import card from "../assets/card.png";
import basket from "../assets/basket.png";

export default function Howitworks() {
  return (
    <div
      className=" py-5"
      data-aos="zoom-in-down"
      data-aos-delay="700"
      data-aos-duration="2000"
    >
      <h1 className="text-center font-medium text-xl">How it Works</h1>
      <div className="lg:flex  md:flex items-center justify-between py-4 mt-5 ">
        <div className=" text-center bg-green-100 lg:bg-transparent md:bg-transparent px-3 py-4 rounded-xl mb-4">
          <div className="rounded-full mx-auto w-10 h-10 pt-2 ">
            <img src={basket} alt="icon" className="mx-auto" />
          </div>
          <h1 className="font-bold text-[12px] py-3 mt-2">
            Browse & Add to Cart
          </h1>
          <p className="text-[10px]">
            Choose from thousands of fersh groceries and local products
          </p>
        </div>
        {/* <FaLongArrowAltRight className=" text-4xl text-gray-300" /> */}
        <img
          src={arrow}
          alt="arrow"
          className="w-[10%] hidden lg:block md:block"
        />
        <div className="text-center bg-blue-100 lg:bg-transparent md:bg-transparent px-3 py-4 rounded-xl mb-4">
          <div className="rounded-full mx-auto w-10 h-10 pt-2 ">
            <img src={card} alt="icon" className="mx-auto" />
          </div>
          <h1 className="font-bold text-[12px] py-3 mt-2">
            Pay Securly Online
          </h1>
          <p className="text-[10px]">
            Multiple payment options: Cards,Bank Transfar, USSD
          </p>
        </div>
        {/* <FaLongArrowAltRight className=" text-4xl text-gray-300" /> */}
        <img
          src={arrow}
          alt="arrow"
          className="w-[10%] lg:block md:block hidden"
        />
        <div className="text-center bg-amber-100 lg:bg-transparent md:bg-transparent px-3 py-4 rounded-xl">
          <div className="rounded-full mx-auto w-10 h-10 pt-2 ">
            <img src={bus} alt="icon" className="mx-auto" />
          </div>
          <h1 className="font-bold text-[12px] py-3 mt-2">
            Get Groceries Delivered
          </h1>
          <p className="text-[10px]">
            Fast delivery to your doorstep within 30-60 minutes
          </p>
        </div>
      </div>
    </div>
  );
}
