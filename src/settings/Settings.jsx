import React from "react";
import {
  User,
  Store,
  ShoppingBag,
  ClipboardList,
  Bell,
  Shield,
  HelpCircle,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="w-full  px-2 py-2 mb-15 mt-20 lg:mb-3 md:mb-3 lg:mt-0 md:mt-0">
      <div className="bg-white border-b border-b-gray-300 ">
        <h1 className="text-[24px] font-semibold mb-5">Settings</h1>
      </div>
      <div className="mt-3 px-2 bg-[#f6f9f7] mb-5">
        <h1 className="text-[16px] font-medium mb-4 mt-8 text-[#666666] ">
          Account
        </h1>
        {/* profile  */}
        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4 border-b-gray-200 border-b ">
          <span className="w-[45px] h-10 bg-[rgba(148,209,150,0.40)] text-[#4caf4f] text-[16px] rounded ">
            <User className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Profile Settings</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                Name, email, phone, password
              </p>
            </div>
            <Link to="/storekeeper/settings/profile-settings">
              <ChevronRight />
            </Link>
          </div>
        </div>
        {/* store management */}
        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4">
          <span className="w-[45px] h-10 bg-purple-100 text-purple-600 text-[16px] rounded ">
            <Store className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Store Information</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                Logo, name, address, hours
              </p>
            </div>
            <Link to="/storekeeper/settings/store-information">
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
      {/* business settings */}
      <div className="mt-3 px-2 bg-[#f6f9f7] mb-5">
        <h1 className="text-[16px] font-medium mb-4 mt-8 text-[#666666] ">
          Business Settings
        </h1>
        {/* product preference  */}
        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4 border-b-gray-200 border-b ">
          <span className="w-[45px] h-10 bg-[rgba(148,209,150,0.40)] text-green-700 text-[16px] rounded ">
            <ShoppingBag className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Product Preference</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                Categories, stock alerts
              </p>
            </div>
            <Link to="/storekeeper/settings/product-preference">
              <ChevronRight />
            </Link>
          </div>
        </div>
        {/* order management */}
        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4 border-b-gray-200 border-b ">
          <span className="w-[45px] h-10 bg-[#FEF2EE] text-[#E85326] text-[16px] rounded ">
            <ClipboardList className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Order Management</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                Delivery, cancellation policy
              </p>
            </div>
            <Link to="/storekeeper/settings/order-management">
              <ChevronRight />
            </Link>
          </div>
        </div>
        {/* Notifications */}
        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4  ">
          <span className="w-[45px] h-10 bg-[#FFF4E4] text-[#CC7A00] text-[16px] rounded ">
            <Bell className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Notifications</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                Email/SMS, order alerts
              </p>
            </div>
            <Link to="/storekeeper/settings/notification-settings">
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
      {/* Security settings */}
      <div className="mt-3 px-2 bg-[#f6f9f7] mb-5">
        <h1 className="text-[16px] font-medium mb-4 mt-8 text-[#666666] ">
          Security
        </h1>
        {/* security  */}
        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4 border-b-gray-200 border-b ">
          <span className="w-[45px] h-10 bg-red-50 text-red-700 text-[16px] rounded ">
            <Shield className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Security & Privacy</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                2FA, login history
              </p>
            </div>
            <Link to="/storekeeper/settings/security-settings">
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
      {/* help and support */}
      <div className="mt-3 px-2 bg-[#f6f9f7] mb-5">
        <h1 className="text-[16px] font-medium mb-4 mt-8 text-[#666666] ">
          Help & Support{" "}
        </h1>

        <div className="w-full bg-white px-5 py-3 rounded-sm flex items-center gap-4 border-b-gray-200 border-b ">
          <span className="w-[45px] h-10 bg-blue-50 text-blue-700 text-[16px] rounded ">
            <HelpCircle className="mx-auto mt-2" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-[16px] font-medium ">Help & Support</h1>
              <p className="text-[13px] text-[#484848] font-medium ">
                FAQs, contact support
              </p>
            </div>
            <Link to="/storekeeper/settings/customer-support">
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-5 px-4 w-full text-center rounded-2xl text-red-700 shadow-md cursor-pointer">
        <Link to="/signin">
          <LogOut className="mx-auto cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
