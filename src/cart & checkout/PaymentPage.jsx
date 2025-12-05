import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import Footer from "../Layout/Footer";
import OrderSummary from "./OrderSummary";
import CheckoutNav from "../common/CheckoutNav";
import UploadReceiptModal from "../modals/UploadReceipt";
import { TiDocumentText } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

export default function Checkout() {
  const [isOpen, SetisOpen] = useState(false);

  const handleOpen = () => {
    SetisOpen(true);
    console.log("opened");
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
              {/* this will be hidden till receipt has been uploaded */}
              <div>
                <div className="w-full rounded border border-green-600 bg-green-50 px-2 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 w-[25px] h-[25px] rounded text-center">
                      <TiDocumentText className="text-green-600 mx-auto mt-1" />
                    </div>
                    <div>
                      <h1 className="text-[12px] font-bold">Receipt.png</h1>
                      <p className="text-[10px] text-gray-400">100 kb</p>
                    </div>
                  </div>
                  <IoIosClose className="text-gray-400 cursor-pointer" />
                </div>

                <div className="w-full mt-2 rounded border border-amber-400 bg-amber-50 px-2 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-amber-100 w-[25px] h-[25px] rounded text-center">
                      <FaRegClock className="text-amber-600 mx-auto mt-1" />
                    </div>
                    <div>
                      <h1 className="text-[12px] font-bold">
                        Payment Verification in Progress
                      </h1>
                      <p className="text-[10px] text-gray-400">
                        We're verifying your payment receipt. This usually takes
                        5-15 minutes. You'll receive a confirmation email once
                        verified.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="bg-amber-500 text-white px-4 mt-3 w-full rounded text-[12px] py-1 cursor-pointer hover:bg-amber-400 duration-500"
                  onClick={handleOpen}
                >
                  Payment Pending Confirmation
                </button>
              </div>

              {/* original button */}
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
