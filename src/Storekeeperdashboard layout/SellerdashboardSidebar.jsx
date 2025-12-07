import React from 'react'
import { CiGrid32 } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { FiSettings, FiShoppingBag } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

function SellerdashboardSidebar() {
  return (
    <div className="w-50 bg-white h-full shadow-cyan-50 rounded">
      <div className=''>
        <div className="border-b py-5 border-b-gray-300">
            <h1 className='text-2xl font-bold text-center'>LOGO</h1>
        </div>
        <div className="w-full border border-gray-100 shadow-cyan-50 rounded h-full px-2 py-3 text-center">
          <nav className="py-9 text-[13px] font-semibold text-center">
            <ul className="justify-center px-3">
              <NavLink
                to="/storekeeper/store-overview"
                className={({ isActive }) =>
                  ` rounded  text-center cursor-pointer py-3 px-5 flex items-center gap-4 ${
                    isActive ? " bg-green-50 text-green-500" : ""
                  }`
                }
              >
                <li className="flex items-center gap-4  ">
                  <CiGrid32 />
                  Dashboard
                </li>
              </NavLink>

              <NavLink
                to="/storekeeper/my-orders"
                className={({ isActive }) =>
                  `rounded  text-center cursor-pointer py-3 px-5 flex items-center gap-4 ${
                    isActive ? " bg-green-100 text-green-500" : ""
                  }`
                }
              >
                <li className="flex items-center gap-4">
                  <BsBoxSeam />
                 Orders
                </li>
              </NavLink>

              <NavLink
                to="/seller/view-address"
                className={({ isActive }) =>
                  `rounded  text-center cursor-pointer py-3 px-5 flex items-center gap-4 ${
                    isActive ? " bg-green-100 text-green-500" : ""
                  }`
                }
              >
                <li className="flex items-center gap-4 ">
                  <FiShoppingBag />
                  Products
                </li>
              </NavLink>

              <NavLink
                to="/seller/account-settings"
                className={({ isActive }) =>
                  `rounded  text-center cursor-pointer py-3 px-5 flex items-center gap-4 ${
                    isActive ? "bg-green-100 text-green-500" : ""
                  }`
                }
              >
                <li className="flex items-center gap-4 cursor-pointer">
                  <FiSettings />
                  Settings
                </li>
              </NavLink>
            </ul>
          </nav>
          <div className="border-t  border-gray-300 mt-[18em]">
            <Link to="/Signin">
              <li className="flex items-center gap-4 text-[13px] rounded py-3 px-5 text-center cursor-pointer">
                <LuLogOut />
                Logout
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerdashboardSidebar