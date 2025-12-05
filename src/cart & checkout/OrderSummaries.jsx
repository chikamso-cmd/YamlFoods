import React from 'react'
import { Link } from "react-router-dom";


export default function OrderSummary() {
  return (
   <>
            {/* Order Summary */}
            <div className="w-80 bg-white shadow p-4 rounded-lg h-fit">
              <div className="font-semibold mb-4 text-[11px]">
                Order Summary
              </div>
              <div className="flex justify-between py-2 text-[10px]">
                <span>Subtotal</span>
                <span>₦7,000</span>
              </div>
              <div className="flex justify-between py-2 text-[10px]">
                <span>Discount</span>
                <span>₦-</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold text-[10px] py-2">
                <span>Total</span>
                <span>₦7,000</span>
              </div>
              <Link to="/PaymentPage">
                <button className="bg-gray-300 mb-3 text-gray-400 text-[10px] w-full py-2 rounded mt-3 cursor-pointer">
                  Proceed to Pay
                </button>
              </Link>
              <p className=" text-[10px] ">
                <span className="text-green-500 pr-1">✓</span> Secure Payment
                Processing
              </p>
              <p className=" text-[10px] ">
                <span className="text-green-500 pr-1">✓</span> Fresh produce
                guranteed
              </p>
              <p className=" text-[10px] ">
                <span className="text-green-500 pr-1">✓</span> 24hr delivery
                promise
              </p>
            </div>
            </>
  );
}
