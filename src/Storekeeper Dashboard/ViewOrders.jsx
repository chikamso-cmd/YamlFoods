import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { CiMail, CiCreditCard1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";


const ViewOrders = () => {
  return (
    <section className="bg-white">
      {/* Back to Orders Button */}
      <Link to="/storekeeper/my-orders">
        <button className="mb-4 mx-2 py-2 flex items-center gap-1 text-[10px] cursor-pointer">
          {" "}
          <RxCaretLeft className="text-[15px]" />
          Back to Orders
        </button>
      </Link>
      <div
        className="bg-white w-full flex items-center justify-center "
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
          {/* Header with order info */}
          <div className="bg-white p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-sm font-bold text-gray-800">
                  FG-2024-1005-7653
                </h1>
                <p className="text-gray-600 mt-1 text-[12px]">
                  2025-10-27 09:30 AM
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-amber-100 text-amber-600 text-[12px] font-semibold px-3 py-1 rounded-full">
                  Pending
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Order Items */}
            <div className="lg:w-1/2 p-6 border-r border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-1">
                <BsBoxSeam /> Order Items
              </h2>
              {/* Order Items List */}
              <div className="space-y-3">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-3"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        Fresh Tomatoes
                      </h3>
                      <p className="text-gray-600 text-sm">5 kg</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">₦20,500</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Total Amount */}
              <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-800">
                    Total Amount
                  </span>
                  <span className="text-xl font-bold text-green-500">
                    ₦20,500
                  </span>
                </div>
              </div>
            </div>
            {/* Right Column - Customer & Payment Info */}
            <div className="lg:w-1/2 p-6">
              {/* Delivery Information */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-1">
                  <VscLocation /> Delivery Information
                </h2>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-800 mb-1 flex items-center gap-1">
                    <VscLocation /> Delivery Address
                  </p>
                  <p className="text-gray-700">
                    15, Admiralty Way, Lekki Phase 1, Lagos
                  </p>
                  <p className="text-gray-700">Lagos</p>
                </div>
              </div>
              {/* Customer Details */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-1">
                  <FaRegUser /> Customer Details
                </h2>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="mb-2">
                    <p className="font-medium text-gray-800 mb-1">Name</p>
                    <p className="text-gray-700">Chioma Godwin</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-gray-700 flex items-center gap-1">
                      {" "}
                      <MdLocalPhone />
                      0803-456-7890
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 flex items-center gap-1">
                      <CiMail />
                      chioma@example.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Payment Details */}
              <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-1">
                  <CiCreditCard1 />
                  Payment Details
                </h2>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">
                      Payment Method
                    </span>
                    <span className="text-gray-700">Payment Status</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">
                      Bank Transfer
                    </span>
                    <span className="inline-flex items-center">
                      <span className="text-green-700 font-medium bg-green-50 px-3 rounded-full text-[12px] ">
                        Paid
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Action Button */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 w-full">
            <button className="w-full lg:w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-200 green ease-in-out transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2">
              <TbTruckDelivery /> Mark as in Progress
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewOrders;
