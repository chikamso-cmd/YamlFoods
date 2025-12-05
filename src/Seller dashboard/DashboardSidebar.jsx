import React from "react";
import { CiGrid32 } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <div className="w-full border border-gray-100 shadow-cyan-50 rounded h-screen px-2 py-3 text-center">
      <nav className="py-9 text-[13px] font-semibold text-center">
        <ul className="justify-center px-9">
          <Link to="/seller/overview">
            <li className="flex items-center gap-4  rounded py-3 bg-green-50 text-green-500 px-5 text-center cursor-pointer">
              <CiGrid32 />
              Dashboard
            </li>
          </Link>

          <Link to="/seller/my-orders">
            <li className="flex items-center gap-4  rounded py-3 px-5 text-center cursor-pointer">
              <BsBoxSeam />
              My Orders
            </li>
          </Link>

          <Link to="/seller/view-address">
            <li className="flex items-center gap-4  rounded py-3  px-5 text-center cursor-pointer">
              <TfiLocationPin />
              Addreses
            </li>
          </Link>

          <li className="flex items-center gap-4  rounded py-3 px-5 text-center cursor-pointer">
            <FiSettings />
            Settings
          </li>
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
