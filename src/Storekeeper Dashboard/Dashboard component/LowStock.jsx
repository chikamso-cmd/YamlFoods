import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

export default function LowStock() {
  return (
    <div className="bg-white shadow-gray-50 rounded w-full px-3 py-2 mt-4">
      <div className="border-b border-b-gray-300 flex items-center justify-between mb-3">
        <h1 className="py-2 text-[12px] font-semibold text-gray-500">
          Low Stock Alert
        </h1>
        <button
          disabled
          className="text-[8px] bg-red-600 flex items-center gap-2 rounded-full cursor-not-allowed text-white px-3 py-0.5"
        >
          5 Items
        </button>
      </div>
      {/* pending oedwes */}
      <div className="rounded ">
        <div className="mt-1 flex items-center justify-between bg-red-100 rounded px-2">
          <div className="text-[12px] py-1 flex items-center gap-2">
            <div className=" text-center text-red-600">
              {" "}
              <FiAlertTriangle className="mx-auto " />
            </div>
            <div>
              <h1 className="font-semibold">Fresh Pepper</h1>
              <p className="text-gray-500 text-[10px]">
                Only 7 units of 1 paint remaining
              </p>
            </div>
          </div>
          <p className="bg-red-600 text-white py-1 px-3 rounded text-[10px] cursor-pointer">
            Restock
          </p>
        </div>
      </div>
      <div className="rounded py-1">
        <div className="mt-1 flex items-center justify-between bg-red-100 rounded px-2">
          <div className="text-[12px] py-1 flex items-center gap-2">
            <div className=" text-center text-red-600">
              {" "}
              <FiAlertTriangle className="mx-auto " />
            </div>
            <div>
              <h1 className="font-semibold">Fresh Pepper</h1>
              <p className="text-gray-500 text-[10px]">
                Only 7 units of 1 paint remaining
              </p>
            </div>
          </div>
          <p className="bg-red-600 text-white py-1 px-3 rounded text-[10px] cursor-pointer">
            Restock
          </p>
        </div>
      </div>
      <div className="rounded">
        <div className="mt-1 flex items-center justify-between bg-red-100 rounded px-2">
          <div className="text-[12px] py-1 flex items-center gap-2">
            <div className=" text-center text-red-600">
              {" "}
              <FiAlertTriangle className="mx-auto " />
            </div>
            <div>
              <h1 className="font-semibold">Fresh Pepper</h1>
              <p className="text-gray-500 text-[10px]">
                Only 7 units of 1 paint remaining
              </p>
            </div>
          </div>
          <p className="bg-red-600 text-white py-1 px-3 rounded text-[10px] cursor-pointer">
            Restock
          </p>
        </div>
      </div>
    </div>
  );
}
