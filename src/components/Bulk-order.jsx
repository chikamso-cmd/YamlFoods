import React from "react";
import bulkorder from "../assets/Fruit_cart.png";

export default function Bulk_order() {
  return (
    <div className="w-full px-5 py-3 text-white">
      <div className="bulk grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 rounded-4xl px-6">
        <div className="pl-8 py-5 mt-1">
          <h1 className="py-5 text-3xl">
            Introducing Bulk Orders __ More Value, Less Cost
          </h1>
          <p className="text-[16px] font-light ">
            We've combined everyday into ready-made bundles o that you can shop
            smart and split costs easily.
          </p>
          <p className="text-[16px] font-light ">
            Order with your neighbours and enjoy up to 20% off groceries and
            cheaper delivery fees
          </p>
          <button className="bg-white text-green-600 text-[10px] cursor-pointer px-6 py-1 rounded my-4">
            Shop now
          </button>
        </div>
        <div className="mr-0">
          <img
            className=" lg:w-[70%] lg:ml-20 lg:mt-8 "
            src={bulkorder}
            alt="shoping  with different combo of groceries"
          />
        </div>
      </div>
    </div>
  );
}
