import React, { useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import tomatoes from "../assets/tomatoes.png";
import bellpepper from "../assets/bellpepper.png";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../Layout/Footer";

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
        <span className="text-[10px] lg:text-xl md:text-sm">
          Delivery within 24 hours
        </span>
        <span className="text-[10px] lg:text-xl md:text-sm">
          Operates in Anambra and Awka for now
        </span>
        <div className=" gap-4 hidden  lg:flex md:flex">
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
        className="lg:px-8 md:px-8 px-3 w-full flex-wrap gap-8"
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
          <div className="hidden lg:flex bg-white shadow lg:p-4 mt-4 md:flex justify-between items-center rounded-lg">
            <div className="flex items-center gap-4">
              <div className="lg:bg-white md:bg-white bg-amber-100 w-30 h-30">
                <img
                  src={tomatoes}
                  alt="Tomatoes"
                  className="lg:w-20 lg:h-20 w-50 "
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-semibold text-[12px] lg:text-sm">
                  Tomatoes
                </div>
                <div className="text-sm text-gray-500">1 KG</div>
                <div className="font-semibold mt-1 text-[12px] lg:text-sm">
                  ₦3500
                </div>
              </div>
            </div>
            {/* buttons for increasing or reducing cart items */}
            <div className="buttons px-3">
              <button className="text-red-500 text-sm mr-4 cursor-pointer text-[10px] lg:text-sm">
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
          </div>

          {/* mobile device menu item */}
          <div className=" bg-white shadow-sm lg:hidden md:hidden  rounded mt-3 py-2">
            <div className="flex items-center gap-3 p-3">
              <div className="bg-amber-100 w-30 h-30">
                <img
                  src={tomatoes}
                  alt="Tomatoes"
                  className="lg:w-20 lg:h-20 w-50 "
                />
              </div>
              <div>
                <h1 className="text-[15px]">Tomatoes</h1>
                <p className="text-sm text-gray-500 text-[10px]">1 KG</p>
                <p className="text-[15px]">N3,500</p>
              </div>
            </div>
            <div>
              <div className="buttons px-3 w-full ">
                <div className="flex items-center justify-between gap-2 w-full bg-green-100 py-1">
                  <button
                    className=" px-2 cursor-pointer bg-green-200 text-black"
                    onClick={() => UpdateCount(setCount(count - 1))}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    className=" px-2 cursor-pointer bg-green-600 text-white border-0"
                    onClick={() => UpdateCount(setCount(count + 1))}
                  >
                    +
                  </button>
                </div>
                <button className="text-amber-500 text-sm mr-4 cursor-pointer text-[15px] border border-gray-300 rounded-md px-5 w-full mt-4 py-2 font-bold">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-white shadow-sm lg:hidden md:hidden  rounded mt-3 py-2">
            <div className="flex items-center gap-3 p-3">
              <div className="bg-amber-100 w-30 h-30">
                <img
                  src={tomatoes}
                  alt="Tomatoes"
                  className="lg:w-20 lg:h-20 w-50 "
                />
              </div>
              <div>
                <h1 className="text-[15px]">Tomatoes</h1>
                <p className="text-sm text-gray-500 text-[10px]">1 KG</p>
                <p className="text-[15px]">N3,500</p>
              </div>
            </div>
            <div>
              <div className="buttons px-3 w-full ">
                <div className="flex items-center justify-between gap-2 w-full bg-green-100 py-1">
                  <button
                    className=" px-2 cursor-pointer bg-green-200 text-black"
                    onClick={() => UpdateCount(setCount(count - 1))}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    className=" px-2 cursor-pointer bg-green-600 text-white border-0"
                    onClick={() => UpdateCount(setCount(count + 1))}
                  >
                    +
                  </button>
                </div>
                <button className="text-amber-500 text-sm mr-4 cursor-pointer text-[15px] border border-gray-300 rounded-md px-5 w-full mt-4 py-2 font-bold">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-between items-centerlg:hidden md:hidden">
            <button className="text-amber-500 text-sm mr-4 cursor-pointer text-[15px] border border-gray-300 rounded-md px-5 w-full mt-4 py-2 font-bold">
              Remove All
            </button>
            <button className="text-white bg-amber-500 text-sm mr-4 cursor-pointer text-[15px] border border-gray-300 rounded-md px-5 w-full mt-4 py-2 font-bold hover:bg-amber-700 duration-500 transition-ease-in-out">
              Add more item
            </button>
          </div>
          {/* Item 2 */}
          <div className="bg-white hidden shadow p-4 mt-4 lg:flex md:flex items-center rounded-lg">
            <img
              src={bellpepper}
              alt="Pepper"
              className="lg:w-20 lg:h-20 w-10"
            />
            <div className="ml-4 flex-1">
              <div className="font-semibold text-[12px] lg:text-sm">
                Bell Pepper
              </div>
              <div className="text-sm text-gray-500">4 Pieces</div>
              <div className="font-semibold mt-1 text-[12px] lg:text-sm">
                ₦3500
              </div>
            </div>
            <button className="text-[10px] lg:text-sm text-red-500 text-sm mr-4 cursor-pointer">
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

          {/* Order Summary */}
          <div className="w-full mt-5 bg-white shadow p-4 rounded-lg h-fit">
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

        {/* Recently Viewed */}
        <div className="mt-8 font-semibold text-lg">Recently Viewed</div>
        <RecentlyViewed />
      </div>

      {/* Footer */}
      {/* <div className="bg-green-900 text-white mt-12 p-10 grid grid-cols-4 gap-6">
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
      </div> */}
      <Footer />
    </div>
  );
}
