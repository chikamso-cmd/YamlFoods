import React from "react";
import angryman from "../assets/angry_man.png";

export default function Special_offer() {
  return (
    <div className="w-full px-5 py-3 text-white">
      <div className="special grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 rounded-4xl px-6">
        <div className="pl-8 py-5 mt-9">
          <h1 className="py-5 text-3xl">🎉 Special Offer!</h1>
          <p className="text-[20px] font-sm ">
            Free delivery on order above $10,000.
          </p>
          <p className="text-[20px] ">
            Buy 2 get 1 free on selected vegitables
          </p>
          <button className="bg-white text-green-600 text-[10px] cursor-pointer px-6 py-1 rounded my-4">
            Shop now
          </button>
        </div>
        <div className="mr-0">
          <img
            className=" lg:w-[50%] lg:ml-50 lg:mt-8 "
            src={angryman}
            alt="shoping  with different combo of groceries"
          />
        </div>
      </div>
    </div>
  );
}
