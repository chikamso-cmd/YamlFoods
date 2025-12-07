import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { FiAlertTriangle } from "react-icons/fi";

export default function OverviewCard() {
  return (
    <div className="flex flex-wrap gap-3 w-full" data-aos="fade-up">
      {/* total orders */}
      <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2">
        <div>
          <h1 className="text-[10px] text-gray-400 ">Total Orders Today</h1>
          <p className="text-[12px] py-1 font-bold">47</p>
          <p className="text-[8px] text-green-500 ">+12% from yesterday</p>
        </div>
        <div className="bg-blue-100 w-[25px] h-[25px] rounded text-center text-blue-600">
          {" "}
          <BsBoxSeam className="mx-auto mt-1.5 text-[12px]" />
        </div>
      </div>
      {/* pending orders */}
      <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2">
        <div>
          <h1 className="text-[10px] text-gray-400 ">Pending Orders</h1>
          <p className="text-[12px] py-1 font-bold">12</p>
          <p className="text-[8px] text-green-500 ">-3% from yesterday</p>
        </div>
        <div className="bg-amber-100 w-[25px] h-[25px] rounded text-center text-amber-600">
          {" "}
          <FaRegClock className="text-amber-600 mx-auto mt-1.5 text-[12px]" />
        </div>
      </div>
      {/* indelivery */}
      <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2">
        <div>
          <h1 className="text-[10px] text-gray-400 ">In Delivery</h1>
          <p className="text-[12px] py-1 font-bold">8</p>
          <p className="text-[8px] text-green-500 ">+5% from yesterday</p>
        </div>
        <div className="bg-purple-100 w-[25px] h-[25px] rounded text-center text-purple-600">
          {" "}
          <TbTruckDelivery className="mx-auto mt-2 text-[10px]" />
        </div>
      </div>
      {/* total sales */}
      <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2">
        <div>
          <h1 className="text-[10px] text-gray-400 ">Total Sales</h1>
          <p className="text-[12px] py-1 font-bold">#386,000</p>
          <p className="text-[8px] text-green-500 ">+15% from yesterday</p>
        </div>
        <div className="bg-green-100 w-[25px] h-[25px] rounded text-center text-green-600 ">
          {" "}
          <CiCreditCard1 className="mx-auto mt-2 text-[10px] " />
        </div>
      </div>
      {/* low stock items */}
      <div className="bg-white flex-1 rounded shadow-amber-50 flex items-center justify-between gap-8 px-2 py-2">
        <div>
          <h1 className="text-[10px] text-gray-400 ">Low Stock Items</h1>
          <p className="text-[12px] py-1 font-semibold">47</p>
          <p className="text-[10px] text-green-500 ">Alert from yesterday</p>
        </div>
        <div className="bg-red-100 w-[25px] h-[25px] rounded text-center text-red-600">
          {" "}
          <FiAlertTriangle className="mx-auto mt-2 text-[10px]" />
        </div>
      </div>
    </div>
  );
}
