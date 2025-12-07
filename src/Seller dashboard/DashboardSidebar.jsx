import React from "react";
import { CiGrid32 } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <div className="w-full border border-gray-100 shadow-cyan-50 rounded h-full px-2 py-3 text-center">
      <nav className="py-9 text-[13px] font-semibold text-center">
        <ul className="justify-center px-9">
          <NavLink
            to="/seller/overview"
            className={({ isActive }) =>
              ` rounded  text-center cursor-pointer py-3 px-5 flex items-center gap-4 ${
                isActive ? " bg-green-100 text-green-500" : ""
              }`
            }
          >
            <li className="flex items-center gap-4  ">
              <CiGrid32 />
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to="/seller/my-orders"
            className={({ isActive }) =>
              `rounded  text-center cursor-pointer py-3 px-5 flex items-center gap-4 ${
                isActive ? " bg-green-100 text-green-500" : ""
              }`
            }
          >
            <li className="flex items-center gap-4">
              <BsBoxSeam />
              My Orders
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
              <TfiLocationPin />
              Addreses
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
      <div className="border-t  border-gray-300 mt-50">
        <Link to="/Signin">
          <li className="flex items-center gap-4 text-[13px] rounded py-3 px-5 text-center cursor-pointer">
            <LuLogOut />
            Logout
          </li>
        </Link>
      </div>
    </div>
  );
}
