import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import Footer from "../Layout/Footer";
import OrderSummary from "./OrderSummary";
import CheckoutNav from "../common/CheckoutNav";
import UploadReceiptModal from "../modals/UploadReceipt";


export default function Checkout() {

  const [isOpen, SetisOpen] = useState(false);

  const handleOpen = () => {
    SetisOpen(true);
    console.log('opened');
    
  };

  const handleClose = () => {
    SetisOpen(false);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Top Bar */}
      <CheckoutNav />

      {/* Header */}

      {/* Breadcrumb */}
      <div className="px-8 py-4 text-gray-800 text-sm flex items-center gap-1">
        <h1 className="text-[12px]">
          <Link to="/">Home</Link>
        </h1>
        <FaCaretRight className="text-[12px]" />
        <Link to="/Cart">
          <p className=" text-gray-400 text-[9px] ">My Basket</p>
        </Link>
        <FaCaretRight className="text-[12px]" />
        <p className="font-bold text-[9px] ">Checkout</p>
      </div>

      {/* main content */}
      <div className="w-full px-6 py-5">
        <div className="px-8">
          {/* Checkout Items */}
          <div className="flex gap-7">
            <div className="shadow-lg p-4 rounded-lg bg-white flex-1">
              <h1 className="text-gray-700 font-semibold text-sm px-3 block">
                Payment
              </h1>
              <p className="px-3 text-[10px]">
                All transactions are secure and encrypted.
              </p>

              <div className="px-2 py-6">
                <h1 className="text-[10px] py-0.5">
                  Use the Instant Transfer option to pay the total amount due
                  to:
                </h1>
                <p className="text-[10px] py-0.5">
                  Account Name: <span className="font-bold">Glory Nwafor</span>
                </p>
                <p className="text-[10px] py-0.5">
                  Account Number: <span className="font-bold">3005672826</span>
                </p>
                <p className="text-[10px] py-0.5">
                  Bank Name: <span className="font-bold">OPAY</span>
                </p>

                <div className="mt-3">
                  <h1 className="text-[12px]"> Amount to Pay:</h1>
                  <p className="font-bold">N7,000</p>
                  <p className="text-[10px] pt-3">
                    Please, note that you are to upload the payment receipt so
                    that we can confirm your order
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-4 my-3 items-center ">
                <button className="cursor-pointer text-green-500 border border-green-500 px-3 py-1 text-[10px] rounded hover:bg-green-500 hover:text-white duration-500 ">
                  Back
                </button>
                <button
                  className="bg-green-600 text-white px-4 w-full rounded text-[12px] py-1 cursor-pointer hover:bg-green-700 duration-500"
                  onClick={handleOpen}
                >
                  Upload Payment Receipt
                </button>
              </div>
            </div>
            <OrderSummary />
          </div>
        </div>
      </div>
      <UploadReceiptModal isOpen={isOpen} onClose={handleClose} />
      <Footer />
    </div>
  );
}
