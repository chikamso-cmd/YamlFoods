import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FiAlertTriangle } from "react-icons/fi";
import { SlEye } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";

export default function ProductCard() {
  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <div
          className="flex flex-wrap gap-3 w-full  rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {/* total orders */}
          <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2 border border-gray-200">
            <div>
              <h1 className="text-[10px] text-gray-400 ">Total Products</h1>
              <p className="text-[12px] py-1 font-bold">102</p>
            </div>
            <div className="bg-blue-100 w-[25px] h-[25px] rounded text-center text-blue-600">
              {" "}
              <BsBoxSeam className="mx-auto mt-1.5 text-[12px]" />
            </div>
          </div>
          {/* pending orders */}
          <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2 border border-gray-200">
            <div>
              <h1 className="text-[10px] text-gray-400 ">Active Products </h1>
              <p className="text-[12px] py-1 font-bold">98</p>
            </div>
            <div className="bg-green-100 w-[25px] h-[25px] rounded text-center text-green-600">
              {" "}
              <SlEye className="text-green-600 mx-auto mt-1.5 text-[12px]" />
            </div>
          </div>
          {/* indelivery */}
          <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2 border border-gray-200">
            <div>
              <h1 className="text-[10px] text-gray-400 ">Total Variants</h1>
              <p className="text-[12px] py-1 font-bold">307</p>
            </div>
            <div className="bg-purple-100 w-[25px] h-[25px] rounded text-center text-purple-600">
              {" "}
              <TbTruckDelivery className="mx-auto mt-2 text-[10px]" />
            </div>
          </div>
          {/* low stock items */}
          <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2 border border-gray-200">
            <div>
              <h1 className="text-[10px] text-gray-400 ">Low Stock Items</h1>
              <p className="text-[12px] py-1 font-semibold">5</p>
            </div>
            <div className="bg-red-100 w-[25px] h-[25px] rounded text-center text-red-600">
              {" "}
              <FiAlertTriangle className="mx-auto mt-2 text-[10px]" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>
      </div>
    </div>
  );
}
