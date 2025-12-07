import React, { useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import tomatoes from "../assets/tomatoes.png";
import bellpepper from "../assets/bellpepper.png";
import RecentlyViewed from "../components/RecentlyViewed";

export default function CartPage() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  const UpdateCount = () => {
    console.log("incresased", count);
  };
  const UpdateCounts = () => {
    console.log("clicked", counts);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      {/* Top Bar */}
      <div className="w-full bg-[#f8f0d6] text-sm py-2 px-6 flex justify-between">
        <span>Delivery within 24 hours</span>
        <span>Operates in Anambra and Awka for now</span>
        <div className="flex gap-4">
          <span>24/7 Support</span>
          <span>Secure Payment</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-green-700 text-white p-4 px-8 text-lg font-semibold">
        <div className="flex items-center gap-3">
          <IoBasketOutline className=" text-white font-bold text-[1.5rem] " />
          <h1> My Basket</h1>
        </div>
        <span className="font-normal text-[12px] ml-9 mt-0">1 Item</span>
      </div>

      {/* Breadcrumb */}
      <div className="px-8 py-4 text-gray-800 text-sm flex items-center gap-1">
        <h1 className="text-[12px]">
          <Link to="/">Home</Link>
        </h1>
        <FaCaretRight className="text-[12px]" />
        <p className="font-bold text-[9px] ">My Basket</p>
      </div>

      {/* Main Content */}
      <div
        className="px-8 flex gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        {/* Cart Items */}
        <div className="flex-1">
          <a href="#" className="text-green-700 text-sm">
            Continue Shopping
          </a>

          {/* Item 1 */}
          <div className="bg-white shadow p-4 mt-4 flex items-center rounded-lg">
            <img src={tomatoes} alt="Tomatoes" className="w-20 h-20" />
            <div className="ml-4 flex-1">
              <div className="font-semibold">Tomatoes</div>
              <div className="text-sm text-gray-500">1 KG</div>
              <div className="font-semibold mt-1">₦3500</div>
            </div>
            <button className="text-red-500 text-sm mr-4 cursor-pointer">
              Remove
            </button>
            <div className="flex items-center gap-2">
              <button
                className="border px-2 cursor-pointer"
                onClick={() => UpdateCount(setCount(count - 1))}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className="border px-2 cursor-pointer"
                onClick={() => UpdateCount(setCount(count + 1))}
              >
                +
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white shadow p-4 mt-4 flex items-center rounded-lg">
            <img src={bellpepper} alt="Pepper" className="w-20 h-20" />
            <div className="ml-4 flex-1">
              <div className="font-semibold">Bell Pepper</div>
              <div className="text-sm text-gray-500">4 Pieces</div>
              <div className="font-semibold mt-1">₦3500</div>
            </div>
            <button className="text-red-500 text-sm mr-4 cursor-pointer">
              Remove
            </button>
            <div className="flex items-center gap-2">
              <button
                className="border px-2 cursor-pointer"
                onClick={() => UpdateCounts(setCounts(counts - 1))}
              >
                -
              </button>
              <span>{counts}</span>
              <button
                className="border px-2 cursor-pointer"
                onClick={() => UpdateCounts(setCounts(counts + 1))}
              >
                +
              </button>
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="mt-8 font-semibold text-lg">Recently Viewed</div>
          <RecentlyViewed />
        </div>

        {/* Order Summary */}
        <div className="w-80 bg-white shadow p-4 rounded-lg h-fit">
          <div className="font-semibold mb-4 text-lg">Order Summary</div>
          <div className="flex justify-between py-2 text-sm">
            <span>Subtotal</span>
            <span>₦7,000</span>
          </div>
          <div className="flex justify-between py-2 text-sm">
            <span>Discount</span>
            <span>₦0</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-semibold text-lg py-2">
            <span>Total</span>
            <span>₦7,000</span>
          </div>
          <Link to="/Checkout">
            <button className="bg-green-600 text-white w-full py-2 rounded mt-3 cursor-pointer">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-900 text-white mt-12 p-10 grid grid-cols-4 gap-6">
        <div>
          <div className="text-xl font-bold mb-2">LOGO</div>
          <p className="text-sm">
            Your trusted online grocery store for fresh, quality products
            delivered fast.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>How it works</li>
            <li>Delivery Info</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <ul className="text-sm space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X (Twitter)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact Info</div>
          <ul className="text-sm space-y-1">
            <li>Call: +234 700 123 4567</li>
            <li>support@freshmart.ng</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 text-gray-400">
        © 2025 FreshMart. All rights reserved.
      </div>
    </div>
  );
}
