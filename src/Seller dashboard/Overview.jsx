import React from "react";
import DashboardNav from "../Seller dashboard/DashbordNav";
import UserProfile from "../Seller dashboard/UserProfile";
import DashboardSidebar from "./DashboardSidebar";
import { BsBoxSeam } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { PiCaretLeftBold } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Navigation */}
      <header className="bg-white shadow flex justify-between items-center w-full">
        {/* <DashboardNav /> */}
      </header>
      <div>
        {/* <UserProfile /> */}
      </div>

      <div className="flex gap-5">
        {/* Sidebar */}
        {/* <aside className="w-64 bg-white shadow p-3">
          <DashboardSidebar />
        </aside> */}

        {/* Main Panel */}
        <main className="flex-1 p-4 border-l border-gray-200">
          <h1 className="text-xl font-bold mb-2">Welcome back, John! 👋</h1>
          <p className="text-gray-600 mb-6 text-[12px]">
            Here's what's happening with your account today
          </p>

          {/* Summary Boxes */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-gray-200 border rounded p-6 flex items-center gap-3">
              <div className="bg-amber-100 text-amber-500 w-[30px] h-[30px] flex items-center justify-center rounded ">
                <BsBoxSeam />
              </div>
              <div>
                <p className="text-xl font-bold">12</p>
                <p className="text-[12px] text-gray-500">Total Orders</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded shadowrounded p-6 flex items-center gap-3">
              <div className="bg-green-100 text-green-500 w-[30px] h-[30px] flex items-center justify-center rounded ">
                <BsCreditCard2Back />
              </div>
              <div>
                <p className="text-[15px] font-bold">₦134,000</p>
                <p className="text-[12px] text-gray-500">Total Spent</p>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white border border-gray-200 rounded p-6 mb-8">
            <div className="flex justify-between items-center border-b border-gray-200 mb-4">
              <h2 className="text-sm font-semibold mb-4">Recent Orders</h2>
              <button className="text-green-600 flex gap-1 text-[12px] items-center cursor-pointer hover:underline duration-500">
                View All <PiCaretLeftBold className="rotate-180" />
              </button>
            </div>
            {/* recent order card */}
            <div className="border border-gray-200 rounded px-3 py-2 w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 justify-between w-full">
                    <div className="flex items-center gap-3">
                      <h1 className="text-[12px] font-semibold">
                        FG-2024-1-16-84742
                      </h1>
                      <button
                        disabled
                        className="font-semibold text-green-600 bg-green-100 rounded-full px-2 py-1 text-[10px]"
                      >
                        Delivered
                      </button>
                    </div>
                    <p className=" text-[12px] font-semibold">#20,500</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[10px]">Oct 16, 2024: 5 items</p>
                    <button className="text-green-600 font-semibold flex gap-1 text-[10px] items-center cursor-pointer hover:underline duration-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded px-3 py-2 w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 justify-between w-full">
                    <div className="flex items-center gap-3">
                      <h1 className="text-[12px] font-semibold">
                        FG-2024-1-16-84742
                      </h1>
                      <button
                        disabled
                        className="font-semibold text-green-600 bg-green-100 rounded-full px-2 py-1 text-[10px]"
                      >
                        Delivered
                      </button>
                    </div>
                    <p className=" text-[12px] font-semibold">#20,500</p>
                  </div>
                  <div className="flex items-center justify-between mt-2 ">
                    <p className="text-[10px]">Oct 16, 2024: 5 items</p>
                    <button className="text-green-600 font-semibold flex gap-1 text-[10px] items-center cursor-pointer hover:underline duration-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded px-3 py-2 w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 justify-between w-full">
                    <div className="flex items-center gap-3">
                      <h1 className="text-[12px] font-semibold">
                        FG-2024-1-16-84742
                      </h1>
                      <button
                        disabled
                        className="font-semibold text-green-600 bg-green-100 rounded-full px-2 py-1 text-[10px]"
                      >
                        Delivered
                      </button>
                    </div>
                    <p className=" text-[12px] font-semibold">#20,500</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[10px]">Oct 16, 2024: 5 items</p>
                    <button className="text-green-600 font-semibold flex gap-1 text-[10px] items-center cursor-pointer hover:underline duration-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
        </main>
      </div>
      <div className=" text-center mt-4 mb-5 bg-linear-to-r from-amber-400 to-amber-600 rounded shadow py-10">
        <h3 className="text-lg font-bold mb-2 text-white">🎉 Special Offer!</h3>
        <p className="text-sm text-white">
          Free delivery on orders above ₦10,000 + Buy 2 Get 1 Free on selected
          vegetables
        </p>
        <button className="mt-4 bg-white text-green-600 px-4 cursor-pointer text-[12px] py-1 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
