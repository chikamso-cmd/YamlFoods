import React from 'react';
import { X, Upload } from 'lucide-react';


const UploadReceiptModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-[600px] mx-4 p-8 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8 mt-1">
          <h2 className="text-2xl font-bold text-[#1f2937] mb-2 tracking-tight">
            Upload Payment Receipt
          </h2>
          <p className="text-[#6b7280] text-[15px] font-normal">
            Please upload your payment receipt to confirm your order.
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-2xl py-14 px-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
          <div className="mb-4 text-[#4b5563] group-hover:text-gray-700">
            <Upload className="w-8 h-8" strokeWidth={2} />
          </div>
          <p className="text-[#111827] font-medium mb-2 text-[16px]">
            Click to upload or drag and drop
          </p>
          <p className="text-[#6b7280] text-[14px]">
            PNG, JPG, PDF (max. 10MB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadReceiptModal;