import React from 'react'
import { NavLink } from "react-router-dom";
import { BsCreditCard2Back, BsBoxSeam } from "react-icons/bs";
import { PiCaretLeftBold } from "react-icons/pi";
import { TbHome2 } from "react-icons/tb";
import { IoLocationOutline, IoSettingsOutline } from "react-icons/io5";

export default function MobileFooter() {
  return (
    <div className='w-full lg:hidden md:hidden'>
      <div className="flex justify-between items-center text-[12px] bg-white shadow-sm  w-full px-3 py-3 lg:hidden md:hidden">
        <div className="cursor-pointer">
          <NavLink
            to="/seller/overview"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 text-center font-semibold" : ""}`
            }
          >
            <TbHome2 size={20} className="mx-auto" />
            <p>Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/seller/my-orders"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 font-semibold" : ""}`
            }
          >
            <BsBoxSeam size={20} className="mx-auto" />
            <p>My Orders</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/seller/view-address"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 font-semibold " : ""}`
            }
          >
            <IoLocationOutline size={20} className="mx-auto" />
            <p>Addresses</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/seller/account-settings"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 font-semibold" : ""}`
            }
          >
            <IoSettingsOutline size={20} className="mx-auto" />
            <p>Settings</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
