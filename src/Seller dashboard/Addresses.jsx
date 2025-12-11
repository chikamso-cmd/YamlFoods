import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
import DeliveryAddress from "../modals/EditAddress";
import MobileFooter from "./MobileFooter";
// import { Link } from "react-router-dom";

export default function Addresses() {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => {
    setisOpen(true);
    console.log("clicked and working");
  };
  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <div>
      <div className="px-3 py-2">
        <div
          className="w-full border rounded-2xl border-gray-200  py-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="border-b md:border-b-0 border-b-gray-300">
            <h1 className="text-sm lg:text-2xl md:text-xl font-semibold px-2">
              Saved Address
            </h1>
            <p className="text-[10px] lg:text[15px]  text-gray-400 px-2 mb-3">
              Manage your delivery address
            </p>
          </div>
          <div className="w-full rounded  mt-5 ">
            <div className="flex justify-between items-center lg:border-b lg:border-b-gray-200 md:border-b md:border-b-gray-200 py-3 md:px-4">
              <div className="flex items-center gap-3 mx-3">
                <div className="bg-green-50 text-green-600 w-10 h-10 rounded">
                  <TfiLocationPin className="mx-auto mt-3" />
                </div>
                <div>
                  <h1 className="text-2xl">Delivery Address</h1>
                  <p className="text-[12px] text-gray-300">James Doe</p>
                </div>
              </div>
              <button
                className=" items-center gap-1 hidden lg:flex md:flex text-green-600 text-[12px] font-semibold cursor-pointer"
                onClick={handleOpen}
              >
                {" "}
                <CiEdit className="text-[12px] font-semibold" />
                Edit
              </button>
            </div>
            {/* user address here */}
            <div className="w-full px-3">
              <h1 className="text-xl">James Joe</h1>
              <p className=" text-[12px] py-1 text-gray-500">
                +234 800 000 0000
              </p>
              <p className=" text-[12px] py-1 text-gray-500">
                james.joe@example.com
              </p>
              <p className=" text-[12px] py-1 text-gray-500">
                No. 123 Sample Street, GRA Phase 2
              </p>
              <p className=" text-[12px] py-1 text-gray-500">
                Port Harcourt, Rivers State
              </p>

              <button
                className=" items-center gap-1 flex lg:hidden md:hidden text-green-600 text-[12px] w-full px-3 mt-3 border border-green-600 py-2 rounded justify-center font-semibold cursor-pointer"
                onClick={handleOpen}
              >
                {" "}
                <CiEdit className="text-[12px] font-semibold" />
                Edit
              </button>
            </div>
          </div>
          <DeliveryAddress isOpen={isOpen} onClose={handleClose} />
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}
