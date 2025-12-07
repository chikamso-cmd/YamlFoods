import React from "react";

const ViewOrders = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[800px] shadow-lg rounded-lg overflow-hidden">
        {/* Header with order info */}
        <div className="bg-gray-100 p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                FG-2024-1005-7653
              </h1>
              <p className="text-gray-600 mt-1">2025-10-27 09:30 AM</p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Order Confirmed
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Order Items */}
          <div className="lg:w-1/2 p-6 border-r border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Items
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
                <span className="text-lg font-semibold text-gray-800">
                  Total Amount
                </span>
                <span className="text-xl font-bold text-gray-900">₦20,500</span>
              </div>
            </div>
          </div>

          {/* Right Column - Customer & Payment Info */}
          <div className="lg:w-1/2 p-6">
            {/* Delivery Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Delivery Information
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800 mb-1">
                  Delivery Address
                </p>
                <p className="text-gray-700">
                  15, Admiralty Way, Lekki Phase 1, Lagos
                </p>
                <p className="text-gray-700">Lagos</p>
              </div>
            </div>

            {/* Customer Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Customer Details
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-2">
                  <p className="font-medium text-gray-800 mb-1">Name</p>
                  <p className="text-gray-700">Chioma Godwin</p>
                </div>
                <div className="mb-2">
                  <p className="font-medium text-gray-800 mb-1 flex items-center">
                    <span className="mr-2">📱</span> Phone
                  </p>
                  <p className="text-gray-700">0803-456-7890</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Email</p>
                  <p className="text-gray-700">chioma@example.com</p>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Details
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">
                    Payment Method
                  </span>
                  <span className="text-gray-700">Bank Transfer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    Payment Status
                  </span>
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-700 font-medium">Paid</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md">
            Mark as in Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
