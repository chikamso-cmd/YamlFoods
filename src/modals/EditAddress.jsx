import React from "react";
import { MapPin } from "lucide-react";
import { LiaTimesSolid } from "react-icons/lia";

const DeliveryAddress = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // MODAL BACKDROP
    <div
      className="fixed top-0 left-0 bg-black/40 flex items-center justify-center z-40 w-full h-screen"
      // close when clicking backdrop
    >
      {/* MODAL BODY */}
      <div className="lg:w-[60%] w-90  max-w-4xl bg-white rounded-xl shadow-sm p-8 border border-gray-200 relative z-50 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-5">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-2">
            {/* close btn */}
            <LiaTimesSolid
              className="absolute top-4 right-4 font-bold cursor-pointer z-50"
              onClick={onClose}
            />
            <MapPin className="text-green-600" size={20} />
          </div>
          <h2 className="text-[12px]] font-semibold text-gray-800">
            Delivery Address
          </h2>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
          <div>
            <label className="text-[12px] text-gray-600">First Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 text-[12px] py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none" placeholder="James"
            />
          </div>

          <div>
            <label className="text-[12px] text-gray-600">Last Name</label>
            <input
              type="text"
              className="w-full mt-1 text-[12px] px-4 py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none" placeholder="Doe"
            />
          </div>

          <div className="mt-0">
            <label className="text-[12px] text-gray-600">Phone Number</label>
            <input
              type="text"
              className="w-full mt-1 px-4 text-[12px] py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none"
              placeholder="09054673829"
            />
          </div>

          <div>
            <label className="text-[12px] text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 text-[12px] py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none"
              placeholder="Example@gmail.com"
            />
          </div>

          <div>
            <label className="text-[12px] text-gray-600">City</label>
            <input
              type="text"
              className="w-full mt-1 px-4 text-[12px] py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none"
              placeholder="Akure"
            />
          </div>

          <div>
            <label className="text-[12px] text-gray-600">State</label>
            <div className="relative">
              <select className="w-full mt-1 px-4 text-[12px] py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] appearance-none focus:outline-none">
                <option>Ondo</option>
              </select>
              <span className="absolute right-4 top-[55%] -translate-y-1/2 text-gray-500 text-sm">
                ▼
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="text-[12px] text-gray-600">Delivery Address</label>
          <input
            type="text"
            className="w-full mt-1 px-4 text-[12px] py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none"
            placeholder="Street address, apartment"
          />
        </div>

        <div className="w-full">
          <button className="w-full text-[12px] bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-semibold">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
