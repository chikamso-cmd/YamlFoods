import React from "react";
import { FaRegUser } from "react-icons/fa";

export default function UserProfile() {
  return (
    <div className="w-full bg-linear-to-r from-green-500 to-green-900 text-white p-6 px-8 text-lg font-semibold text-center">
      <div className="bg-green-200 w-[30px] h-[30px] mx-auto rounded-full text-center py-2 text-[10px]">
        <FaRegUser className="text-green-600 text-center mx-auto" />
      </div>
      <h1 className="text-[30px]">James Joe</h1>
      <p className="text-[14px]">jamesdoe@example.com</p>
      <span className="text-gray-400 text-[12px]">
        Menber since January 2024
      </span>
    </div>
  );
}
