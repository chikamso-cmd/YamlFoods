import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { PiPackageLight } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function ViewOrder() {
  return (
    <div className="px-8 py-6 w-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link to="/seller/my-orders" className="flex items-center gap-2">
          <IoChevronBackOutline className="text-xl cursor-pointer" />
          <h1 className="text-[20px] font-semibold">View Order</h1>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        {/* LEFT SECTION – ORDER ITEMS */}
        <div className="lg:col-span-2 bg-white p-5 rounded-lg border border-gray-200">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <PiPackageLight className="text-xl" />
            <h2 className="text-[16px] font-semibold">Order Items</h2>
          </div>

          {/* ITEM 1 */}
          <div className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center mb-3">
            <div>
              <p className="font-medium text-[15px]">Fresh Tomatoes</p>
              <p className="text-gray-500 text-[13px]">5 kg</p>
            </div>
            <p className="font-semibold">₦20,500</p>
          </div>

          {/* ITEM 2 */}
          <div className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center mb-3">
            <div>
              <p className="font-medium text-[15px]">Fresh Tomatoes</p>
              <p className="text-gray-500 text-[13px]">5 kg</p>
            </div>
            <p className="font-semibold">₦20,500</p>
          </div>

          {/* ITEM 3 */}
          <div className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center mb-3">
            <div>
              <p className="font-medium text-[15px]">Fresh Tomatoes</p>
              <p className="text-gray-500 text-[13px]">5 kg</p>
            </div>
            <p className="font-semibold">₦20,500</p>
          </div>

          {/* ITEM 4 */}
          <div className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center mb-3">
            <div>
              <p className="font-medium text-[15px]">Fresh Tomatoes</p>
              <p className="text-gray-500 text-[13px]">5 kg</p>
            </div>
            <p className="font-semibold">₦20,500</p>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between pt-4 border-t font-semibold text-[16px]">
            <p>Total Amount</p>
            <p className="text-green-600">₦20,500</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6 lg:col-span-2">
          {/* Delivery Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <LuMapPin className="text-xl" />
              <h2 className="text-[16px] font-semibold">
                Delivery Information
              </h2>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-gray-500 text-[13px]">Delivery Address</p>
              <p className="font-semibold text-[15px]">
                15, Admiralty Way, Lekki Phase 1, Lagos
              </p>
              <p className="text-gray-500 text-[13px] mt-1">Lagos</p>
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <LuUser className="text-xl" />
              <h2 className="text-[16px] font-semibold">Customer Details</h2>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-gray-500 text-[13px]">Name</p>
              <p className="font-semibold text-[15px]">Chioma Godwin</p>

              <p className="text-gray-700 text-[14px] mt-2">0803-456-7890</p>
              <p className="text-gray-600 text-[13px]">chioma@example.com</p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <LuCreditCard className="text-xl" />
              <h2 className="text-[16px] font-semibold">Payment Details</h2>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-[13px]">Payment Method</p>
                  <p className="font-semibold text-[15px]">Bank Transfer</p>
                </div>

                <div className="text-right">
                  <p className="text-gray-500 text-[13px]">Payment Status</p>
                  <span className="bg-green-50 text-green-600 px-3 py-[3px] rounded-full text-[12px] font-medium">
                    Paid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
