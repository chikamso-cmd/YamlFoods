import React from "react";
import { Link } from "react-router-dom";

const PaymentSection = () => {
  return (
    <>
      {/* Order Summary */}
      <div className="w-full lg:w-80 bg-white shadow p-4 rounded-lg h-fit">
        <div className="font-semibold mb-4 text-[11px] border-b border-gray-200 py-2">
          Order Summary
        </div>
        <div className="flex justify-between py-2 text-[10px]">
          <span>Subtotal(3 Items)</span>
          <span>₦7,000</span>
        </div>
        <div className="flex justify-between py-2 text-[10px]">
          <span>Delivery</span>
          <span>₦,1500</span>
        </div>
        <div className="flex justify-between font-semibold text-[10px] py-2">
          <span>Discount</span>
          <span>₦0</span>
        </div>
        <hr className="my-3 border-gray-200" />
        <div className="flex justify-between font-semibold text-[10px] py-2">
          <span>Total</span>
          <span>₦7,000</span>
        </div>

        <p className=" text-[10px] ">
          <span className="text-green-500 pr-1">✓</span> Secure Payment
          Processing
        </p>
        <p className=" text-[10px] ">
          <span className="text-green-500 pr-1">✓</span> Fresh produce guranteed
        </p>
        <p className=" text-[10px] ">
          <span className="text-green-500 pr-1">✓</span> 24hr delivery promise
        </p>
      </div>
    </>
  );
};

export default PaymentSection;
