import React from "react";
import { Link } from "react-router-dom";

export default function MyOrders() {
  return (
    <div className="px-6 py-6 w-full">
      {/* Page Header */}
      <h1 className="text-[20px] font-semibold">My Orders</h1>
      <p className="text-gray-500 text-[14px] mt-1">
        Track and manage your orders
      </p>

      {/* Orders List */}
      <div className="mt-6 space-y-4">
        {/* ORDER 1 */}
        <div className="w-full bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[15px] font-semibold">
                Order FG-2024-1010-3421
              </h2>
              <p className="text-gray-500 text-[13px] mt-1">
                Oct 16, 2024 • 5 items
              </p>

              <p className="text-gray-700 text-[13px] mt-1">5 items</p>
              <p className="text-[16px] font-bold mt-2">₦20,500</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="text-[12px] bg-green-50 text-green-600 px-3 py-[3px] rounded-full font-medium">
                Delivered
              </span>

              <div className="flex items-center gap-3 mt-3">
                <Link to="/seller/view-orders">
                  <button className="border cursor-pointer border-green-500 text-green-600 px-4 py-2 rounded-lg text-[13px]">
                    View Details
                  </button>
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px]">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ORDER 2 */}
        <div className="w-full bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[15px] font-semibold">
                Order FG-2024-1016-8472
              </h2>
              <p className="text-gray-500 text-[13px] mt-1">
                Oct 16, 2024 • 8 items
              </p>

              <p className="text-gray-700 text-[13px] mt-1">8 items</p>
              <p className="text-[16px] font-bold mt-2">₦35,200</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="text-[12px] bg-green-50 text-green-600 px-3 py-[3px] rounded-full font-medium">
                Delivered
              </span>

              <div className="flex items-center gap-3 mt-3">
                <Link to="/seller/view-orders">
                  <button className="border cursor-pointer border-green-500 text-green-600 px-4 py-2 rounded-lg text-[13px]">
                    View Details
                  </button>
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px]">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ORDER 3 */}
        <div className="w-full bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[15px] font-semibold">
                Order FG-2024-1010-3421
              </h2>
              <p className="text-gray-500 text-[13px] mt-1">
                Oct 16, 2024 • 5 items
              </p>

              <p className="text-gray-700 text-[13px] mt-1">5 items</p>
              <p className="text-[16px] font-bold mt-2">₦20,500</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="text-[12px] bg-green-50 text-green-600 px-3 py-[3px] rounded-full font-medium">
                Delivered
              </span>

              <div className="flex items-center gap-3 mt-3">
                <Link to="/seller/view-orders">
                  <button className="border cursor-pointer border-green-500 text-green-600 px-4 py-2 rounded-lg text-[13px]">
                    View Details
                  </button>
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px]">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ORDER 4 */}
        <div className="w-full bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[15px] font-semibold">
                Order FG-2024-1010-3421
              </h2>
              <p className="text-gray-500 text-[13px] mt-1">
                Oct 16, 2024 • 5 items
              </p>

              <p className="text-gray-700 text-[13px] mt-1">5 items</p>
              <p className="text-[16px] font-bold mt-2">₦20,500</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="text-[12px] bg-green-50 text-green-600 px-3 py-[3px] rounded-full font-medium">
                Delivered
              </span>

              <div className="flex items-center gap-3 mt-3">
                <Link to="/seller/view-orders">
                  <button className="border cursor-pointer border-green-500 text-green-600 px-4 py-2 rounded-lg text-[13px]">
                    View Details
                  </button>
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px]">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
