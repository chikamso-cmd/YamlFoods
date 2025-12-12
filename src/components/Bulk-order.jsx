import React from "react";
import bulkorder from "../assets/fruit_cart.png";

export default function Bulk_order() {
  return (
    <div
      className="w-full lg:px-4 py-3 text-white"
      data-aos="zoom-in-up"
      data-aos-delay="400"
      data-aos-duration="2000"
    >
      <div className="bulk grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 rounded-4xl px-6">
        <div className="pl-2 lg:pl-8 py-5 mt-1">
          <h1 className="py-5 text-left text-xl lg:3xl md:2xl">
            Introducing Bulk Orders __ More Value, Less Cost
          </h1>
          <p className="text-[15px] font-light ">
            We've combined everyday into ready-made bundles so that you can shop
            smart and split costs easily.
          </p>
          <p className="text-[15px] font-light ">
            Order with your neighbours and enjoy up to 20% off groceries and
            cheaper delivery fees
          </p>
          <button className="bg-white text-green-600 text-[10px] cursor-pointer px-6 py-1 rounded my-4">
            Shop now
          </button>
        </div>
        <div className="mr-0">
          <img
            className=" mt-0 w-50 mx-auto lg:w-[70%] lg:ml-20 lg:mt-13 md:mt-19 md:w-70 "
            src={bulkorder}
            alt="shoping cart with different combo of groceries"
          />
        </div>
      </div>
    </div>
  );
}
