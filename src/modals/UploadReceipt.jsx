import React from 'react';
import { X, Upload } from 'lucide-react';
import { FiUpload, FiFile } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";


const UploadReceiptModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="bg-white rounded-2xl shadow-lg lg:w-full max-w-[400px] lg:max-w-[600px] md:max-w-[600px] mx-4 p-8 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8 mt-1">
          <h2 className="text-sm lg:xl font-bold text-[#1f2937] mb-2 tracking-tight">
            Upload Payment Receipt
          </h2>
          <p className="text-[#6b7280] text-[10px] font-normal lg:text-[15px]">
            Please upload your payment receipt to confirm your order.
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-2xl py-14 px-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
          <div className="mb-4 text-[#4b5563] group-hover:text-gray-700">
            <Upload
              className="w-8 h-8 hidden lg:block md:block"
              strokeWidth={2}
            />
            <div className="flex items-center gap-4 lg:hidden md:hidden">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 cursor-pointer">
                <MdOutlineCameraAlt className="text-[20px]" />
              </div>
              <div className="bg-green-100 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-green-600">
                <FiUpload className="text-[20px]" />
              </div>
            </div>
          </div>
          <p className="hidden lg:block md:block text-[#111827] font-medium mb-2 text-[16px]">
            Click to upload or drag and drop
          </p>
          <p className="lg:hidden md:hidden text-[#111827] font-medium mb-2 text-[12px]">
            Tap to select or take a photo
          </p>
          <p className="text-[#6b7280] text-[11px] lg:text-[14px]">
            PNG, JPG, PDF (max. 10MB)
          </p>
          <button className='lg:hidden md:hidden flex items-center gap-3 bg-green-600 px-4 py-2 mt-3 rounded-xl text-white cursor-pointer hover:bg-green-700 transition-colors'>
            <FiFile/> Choose File</button>
        </div>
      </div>
    </div>
  );
};

export default UploadReceiptModal;