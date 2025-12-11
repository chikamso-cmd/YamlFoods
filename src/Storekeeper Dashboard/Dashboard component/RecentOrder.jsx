import React from "react";
import { PiCaretRight } from "react-icons/pi";

export default function RecentOrder() {
  return (
    <div className="bg-white shadow-gray-50 rounded w-full px-3 py-2 mt-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <div className="border-b border-b-gray-300 flex items-center justify-between mb-3">
        <h1 className="py-2 text-[12px] font-semibold text-gray-500">
          Recent Order
        </h1>
        <button className="text-[12px] bg-green-100 lg:bg-transparent md:bg-transparent text-green-600 flex items-center gap-2 rounded-full px-3 py-1 cursor-pointer">
          View All
          <PiCaretRight />
        </button>
      </div>
      {/* pending oedwes */}
      <div className="border border-gray-100 rounded  px-4 -py-2 mb-2">
        <div className="mt-1">
          <div className="flex justify-between text-[12px] py-1 font-semibold">
            <h1 className="text-[10px]">FG-2024-1005-7653</h1>
            <p className="text-[10px]">#20,500</p>
          </div> 
          <div className="flex justify-between text-[12px] font-semibold mb-2">
            <p className="text-[10px]">
              Emeka Okonkwo : <span>5 items</span>
            </p>
            <p className="text-amber-500 bg-amber-100 py-1 px-3 rounded-full text-[8px]">Pending</p>
          </div>
        </div>
      </div>
      {/* in delivery */}
      <div className="border border-gray-100 rounded  px-4 -py-2 mb-2">
        <div className="mt-1">
          <div className="flex justify-between text-[12px] py-1 font-semibold">
            <h1 className="text-[10px]">FG-2024-1005-7653</h1>
            <p className="text-[10px]">#20,500</p>
          </div> 
          <div className="flex justify-between text-[12px] font-semibold mb-2">
            <p className="text-[10px]">
              Emeka Okonkwo : <span>5 items</span>
            </p>
            <p className="text-purple-500 bg-purple-100 py-1 px-3 rounded-full text-[8px]">In Delivery</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-100 rounded  px-4 -py-2 mb-2">
        <div className="mt-1">
          <div className="flex justify-between text-[12px] py-1 font-semibold">
            <h1 className="text-[10px]">FG-2024-1005-7653</h1>
            <p className="text-[10px]">#20,500</p>
          </div> 
          <div className="flex justify-between text-[12px] font-semibold mb-2">
            <p className="text-[10px]">
              Emeka Okonkwo : <span>5 items</span>
            </p>
            <p className="text-green-600 bg-green-100 py-1 px-3 rounded-full text-[8px]">Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
