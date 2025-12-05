import { useState } from "react";
import { BsX, BsDash, BsPlus, BsCheckCircle } from "react-icons/bs";
import tomatoes from "../assets/tomatoes.png"; 
import {Link} from 'react-router-dom'

// Reusable Item Component
function TomatoItem({ weight, price }) {
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-start justify-between w-full bg-white shadow-sm rounded-lg px-1 py-1 mb-2">
      {/* Left Image */}
      <img
        src={tomatoes}
        alt="tomatoes"
        className="w-12 h-12 rounded object-cover"
      />

      {/* Center Info */}
      <div className="flex flex-col flex-1 ml-3">
        <div className="flex justify-between">
          <div className="block">
            <span className="text-[10px] font-semibold">{weight}</span><br />
            <span className="text-[10px] font-bold text-gray-700">
              ₦{price}
            </span>
          </div>

          <div>
            {/* Add / Check Button */}
            <div className="ml-3">
              {added ? (
                <button
                  onClick={() => setAdded(false)}
                  className="bg-amber-500 text-white px-2 py-1.5 rounded text-[12px] flex items-center"
                >
                  <BsCheckCircle className="text-[14px]" />
                </button>
              ) : (
                <button
                  onClick={() => setAdded(true)}
                  className="bg-amber-200 px-3 py-1.5 rounded text-[11px] font-semibold"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Counter Box */}
        <div className="flex items-center bg-green-100 rounded mt-1  justify-between w-full">
          <button
            className="text-[10px] bg-green-300 px-1 py-[3px] font-bold"
            onClick={() => setCount((c) => Math.max(1, c - 1))}
          >
            <BsDash />
          </button>

          <span className="text-[11px] font-medium">{count}</span>

          <button
            className="text-[10px] bg-green-500 text-white px-1 py-[3px] font-bold"
            onClick={() => setCount((c) => c + 1)}
          >
            <BsPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TomatoModal({isOpen, onClose}) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
      {/* Modal Box */}
      <div className="bg-white w-[400px] rounded-xl shadow-xl pb-3">
        {/* Header */}
        <div className="relative px-5 pt-5">
          <BsX
            className="absolute right-4 top-4 text-xl cursor-pointer"
            onClick={onClose}
          />

          <h1 className="text-center text-green-600 font-bold text-[16px]">
            Fresh Tomatoes
          </h1>

          <p className="text-center text-[12px] text-gray-700 font-medium mt-1">
            Select an option
          </p>

          <p className="text-center text-[10px] text-gray-400 mt-1">
            Please select your preferred quantity from the options provided
          </p>
        </div>

        {/* Items List */}
        <div className="px-5 mt-2">
          <TomatoItem weight="1kg" price="3500" />
          <TomatoItem weight="2kg" price="6500" />
          <TomatoItem weight="3kg" price="9500" />
          <TomatoItem weight="4kg" price="12500" />
        </div>

        {/* Footer Button */}
        <div className="px-5 mt-2">
          <Link to="/Cart">
            <button className="w-full bg-amber-500 text-white py-2 mt-2 rounded-lg font-semibold text-[10px]">
              ADD TO BASKET
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
