import React from "react";
import { ArrowLeft, Store, MapPin, Phone, Mail, Clock } from "lucide-react";
import {Link} from 'react-router-dom'

const StoreInformation = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-4 flex justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Link to="/storekeeper/settings">
            <ArrowLeft className="w-5 h-5 cursor-pointer" />
          </Link>
          <h1 className="text-base font-semibold">Store Information</h1>
        </div>

        {/* Store Card */}
        <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm mb-4">
          <div className="bg-green-600 p-3 rounded-xl">
            <Store className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-sm">My Store</p>
            <p className="text-xs text-gray-500">Green Valley Grocers</p>
          </div>
        </div>

        {/* Store Details */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h2 className="text-sm font-semibold mb-3">Store Details</h2>

          <label className="text-xs text-gray-500">Store Name</label>
          <input
            type="text"
            value="Green Valley Grocers"
            readOnly
            className="w-full border rounded-lg px-3 py-2 text-sm mt-1 mb-3"
          />

          <label className="text-xs text-gray-500">Store Address</label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-700">
              123 Market Street, Green Valley, CA 94043
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h2 className="text-sm font-semibold mb-3">Contact Information</h2>

          <label className="text-xs text-gray-500">Phone Number</label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1 mb-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <p className="text-sm">+234 567 786 9809</p>
          </div>

          <label className="text-xs text-gray-500">Email Address</label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1">
            <Mail className="w-4 h-4 text-gray-400" />
            <p className="text-sm">sarahjohnson@greenvalley.com</p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-gray-600" />
            <h2 className="text-sm font-semibold">Operating Hours</h2>
          </div>

          {[
            ["Monday", "08:00 - 20:00"],
            ["Tuesday", "08:00 - 20:00"],
            ["Wednesday", "08:00 - 20:00"],
            ["Thursday", "08:00 - 20:00"],
            ["Friday", "08:00 - 22:00"],
            ["Saturday", "09:00 - 22:00"],
            ["Sunday", "10:00 - 18:00"],
          ].map(([day, time]) => (
            <div
              key={day}
              className="flex justify-between items-center text-sm mb-2"
            >
              <p className="text-gray-600">{day}</p>
              <div className="flex items-center gap-3">
                <p className="text-gray-700">{time}</p>
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded-md">
                  Close
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-sm mb-3">
          Save Changes
        </button>

        <button className="w-full bg-gray-200 text-gray-600 py-3 rounded-lg font-semibold text-sm">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default StoreInformation;
