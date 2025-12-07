import React from "react";

export default function Ordercategory() {
  return (
    <div className="w-full bg-white rounded shadow shadow-gray-200 px-1 py-2 mt-3">
      <div className="border-b border-b-gray-200 flex justify-end items-center">
        <div className="flex items-center gap-3 mb-3 mx-4">
          <input
            type="search"
            placeholder="search"
            className="rounded border px-3 py-1 border-gray-300 w-80"
          />
          <button className="bg-white text-[10px] flex items-center gap-3 rounded-full border border-gray-200 px-8 py-2 cursor-pointer">
            Filters
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded mt-4">
        <div className="flex items-center justify-between " >
          <div></div>
        </div>
      </div>
    </div>
  );
}
