import React from 'react'
import { NavLink } from "react-router-dom";
import { CiGrid32 } from "react-icons/ci";
import { FiSettings, FiShoppingBag } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

export default function MobileFooter() {
  return (
    <div className="w-full lg:hidden md:hidden">
      <div className="flex justify-between items-center text-[12px] bg-white shadow-sm  w-full px-5 py-3 lg:hidden md:hidden">
        <div className="cursor-pointer">
          <NavLink
            to="/storekeeper/store-overview"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 text-center font-semibold" : ""}`
            }
          >
            <button className="flex flex-col text-[10px]">
              {" "}
              <CiGrid32 size={15} className="mx-auto" />
              Dashboard
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/storekeeper/my-orders"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 font-semibold" : ""}`
            }
          >
            <button className="flex flex-col text-[10px] font-semibold">
              <BsBoxSeam size={15} className="mx-auto" /> Orders
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/storekeeper/product-management"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 font-semibold " : ""}`
            }
          >
            <button className="text-[10px] font-semibold">
              {" "}
              <FiShoppingBag size={15} className="mx-auto" />
              Products
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/seller/account-settings"
            className={({ isActive }) =>
              `${isActive ? "text-green-600 font-semibold" : ""}`
            }
          >
            <button className="text-[10px] font-semibold">
              <FiSettings size={15} className="mx-auto" />
              Settings
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
