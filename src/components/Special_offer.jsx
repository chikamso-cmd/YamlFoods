import React from "react";
import angryman from "../assets/angry_man.png";

export default function Special_offer() {
  return (
    <div
      className="w-full py-3 text-white"
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="2000"
    >
      <div className=" special">
        <div
          className=" grid rounded grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-1 bg-[url('/src/assets/angry_man.png')]   bg-position-[100%_0px]
  bg-[length:55%_100%,contain]
  bg-no-repeat md:bg-none"
        >
          <div className="pl-8 lg:py-5 md:py-8 mt-4 mg:mt-9">
            <h1 className="lg:py-5 text-xl md:text-2xl lg:text-3xl">
              🎉 Special Offer!
            </h1>
            <p className="text-[13px] md:text-[18px] lg:text-[18px] font-sm ">
              Free delivery on order above $10,000.
            </p>
            <p className="text-[13px] md:text-[18px] lg:text-[18px] ">
              Buy 2 get 1 free on selected vegitables
            </p>
            <button className="bg-white text-green-600 text-[10px] cursor-pointer px-6 py-2 rounded my-4">
              Shop now
            </button>
          </div>
          <div className="mr-0">
            <img
              className=" lg:w-[50%] w-0 md:w-50 md:mt-25 md:ml-20 lg:ml-50 lg:mt-8 "
              src={angryman}
              alt="shoping  with different combo of groceries"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
