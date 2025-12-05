import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
import DeliveryAddress from "../modals/EditAddress";
// import { Link } from "react-router-dom";

export default function Addresses() {

const [isOpen, setisOpen] = useState(false);

const handleOpen = () =>{
    setisOpen(true)
    console.log('clicked and working')
}
const handleClose = () =>{
    setisOpen(false)
}




  return (
    <div className="w-full border border-gray-200 px-6 py-6">
      <h1 className="text-2xl font-semibold px-2">Saved Address</h1>
      <p className="text-[15px] text-gray-400 px-2">
        Manage your delivery address
      </p>

      <div className="w-full rounded  mt-5 pr-4">
        <div className="flex justify-between items-center border-b border-b-gray-200 py-3">
          <div className="flex items-center gap-3 mx-3">
            <div className="bg-green-50 text-green-600 w-10 h-10 rounded">
              <TfiLocationPin className="mx-auto mt-3" />
            </div>
            <div>
              <h1 className="text-2xl">Delivery Address</h1>
              <p className="text-[12px] text-gray-300">James Doe</p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-green-600 text-[12px] font-semibold cursor-pointer" onClick={handleOpen}>
            {" "}
            <CiEdit className="text-[12px] font-semibold" />
            Edit
          </button>
        </div>

        {/* user address here */}
        <div className="w-full">
          <h1 className="text-xl">James Joe</h1>
          <p className=" text-[12px] py-1 text-gray-500">+234 800 000 0000</p>
          <p className=" text-[12px] py-1 text-gray-500">
            james.joe@example.com
          </p>
          <p className=" text-[12px] py-1 text-gray-500">
            No. 123 Sample Street, GRA Phase 2
          </p>
          <p className=" text-[12px] py-1 text-gray-500">
            Port Harcourt, Rivers State
          </p>
        </div>
      </div>
      <DeliveryAddress  isOpen={isOpen} onClose={handleClose}/>
    </div>
  );
}
