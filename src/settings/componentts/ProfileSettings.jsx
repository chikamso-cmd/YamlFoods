import React, { useState } from "react";
import { ChevronLeft, Camera, Lock } from "lucide-react";
import {Link} from 'react-router-dom'

// Reusable Input Field Component
const InputField = ({
  label,
  value,
  type = "text",
  readOnly = false,
  onChange,
}) => (
  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-1">{label}</label>
    <input
      type={type}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
      className={`
        w-full p-3 border rounded-lg focus:outline-none 
        text-base font-normal transition duration-150
        ${
          readOnly
            ? "bg-white border-gray-300"
            : "border-gray-300 focus:ring-green-500 focus:border-green-500"
        }
      `}
    />
  </div>
);

// Main Profile Settings Component
const ProfileSettingsScreen = () => {
  // Adding state for editable fields for a realistic responsive component
  const [profile, setProfile] = useState({
    fullName: "Sarah Johnson",
    email: "sarahjohnson@greenvalley.com",
    phone: "+234 567 786 9809",
  });

  const handleChange = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", profile);
    alert("Changes saved successfully!");
  };

  const handleCancel = () => {
    console.log("Cancelling changes");
    // In a real app, you might reload the original data
  };

  return (
    // **Responsiveness applied here:** The max-width increases slightly for larger screens (md:max-w-xl)
    // and the background is set across the whole screen.
    <div className="min-h-screen bg-gray-50 font-sans md:flex md:justify-center md:py-8" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
      <div className="w-full max-w-md mx-auto md:max-w-xl md:rounded-xl md:shadow-2xl md:bg-white md:overflow-hidden">
        {/* 1. Header (Mobile fixed, Desktop integrated) */}
        <header className="flex items-center justify-center p-4 bg-white border-b border-gray-200 shadow-sm relative md:shadow-none">
          <Link to="/storekeeper/settings">
            <ChevronLeft className="w-6 h-6 text-black absolute left-4 cursor-pointer" />
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Profile Settings</h1>
        </header>

        <main className="pb-10">
          {" "}
          {/* Extra padding for fixed footer */}
          {/* 2. Profile Picture Section */}
          <section className="flex flex-col items-center py-6 bg-white md:pt-10">
            <div className="relative mb-2">
              {/* Placeholder for the profile image */}
              <div
                className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-gray-200"
                
              ></div>

              {/* Camera Icon Overlay */}
              <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
                <div className="p-1 rounded-full bg-green-500 shadow-md flex items-center justify-center cursor-pointer hover:bg-green-600 transition">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <p className="text-base font-medium text-gray-800">
              Profile Picture
            </p>
            <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-0.5 transition duration-150">
              Change photo
            </button>
          </section>
          {/* 3. Basic Information Section */}
          <section className="p-4 mt-2 bg-white md:p-8 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Basic Information
            </h2>

            {/* Fields are now editable using component state */}
            <InputField
              label="Full Name"
              value={profile.fullName}
              onChange={handleChange("fullName")}
            />
            <InputField
              label="Email Address"
              value={profile.email}
              onChange={handleChange("email")}
            />
            <InputField
              label="Phone Number"
              value={profile.phone}
              onChange={handleChange("phone")}
            />
          </section>
          {/* 4. Password Section */}
          <section className="p-4 mt-2 bg-white flex items-center justify-between border-t border-gray-100 md:p-8">
            <div className="flex items-center">
              <Lock className="w-5 h-5 text-gray-700 mr-3" />
              <div>
                <p className="text-base font-medium text-gray-800">Password</p>
                <p className="text-sm tracking-widest text-gray-500 mt-0.5">
                  **********
                </p>
              </div>
            </div>
            <button className="text-sm font-medium text-green-600 hover:text-green-700 transition duration-150">
              Change Password
            </button>
          </section>
        </main>

        {/* 5. Footer Buttons  */}
        <footer
          className=" w-full p-4 bg-white shadow-xl 
                        md:relative md:w-auto md:p-8 md:border-none md:shadow-none"
        >
          <div className="flex flex-col space-y-3 md:flex-row-reverse md:space-y-0 md:space-x-3 md:space-x-reverse">
            <button
              onClick={handleSaveChanges}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition duration-150"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="w-full py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition duration-150"
            >
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProfileSettingsScreen;
