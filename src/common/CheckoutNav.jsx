import React from 'react'
import { FaRegUser } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function CheckoutNav() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#f8f0d6] text-sm py-2 px-6 flex justify-between">
        <span className='text-[10px] lg:text-xl md:text-sm'>Delivery within 24 hours</span>
        <span className='text-[10px] lg:text-xl md:text-sm'>Operates in Anambra and Awka for now</span>
        <div className=" gap-4 hidden lg:flex md:flex">
          <span>24/7 Support</span>
          <span>Secure Payment</span>
        </div>
      </div>
      {/* logo */}
      <div className=" text-black p-4 px-8 text-lg font-semibold">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-bold"> LOGO</h1>
         
            <button className="text-green-500 flex items-center gap-1.5 cursor-pointer text-[10px]">
              <FaRegUser className="text-[10px] " />
              James
            </button>
          
        </div>
      </div>
    </div>
  );
}
