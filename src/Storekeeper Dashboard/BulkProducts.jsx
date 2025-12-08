import React from "react";
import { Upload } from "lucide-react";

export default function AddProductBulk() {
  return (
    <div className="w-full min-h-screen p-4 md:p-6 bg-[#F4FBF4]">
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        {/* Title */}
        <h1 className="text-[20px] font-semibold text-gray-800">
          Add New Product
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the details to add a new product with multiple size options
        </p>

        {/* Section Box */}
        <div className="mt-6 border border-gray-200 rounded-lg px-5 pt-5 pb-7">
          {/* Section Heading */}
          <p className="text-[15px] font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-3">
            Product Information
          </p>

          {/* ROW 1 -> Product Name + Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Product Name
              </label>
              <input
                type="text"
                placeholder="e.g Gold Mama Rice"
                className="mt-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm 
                           focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">
                Price (₦) *
              </label>
              <input
                type="text"
                placeholder="0.00"
                className="mt-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm 
                           focus:outline-none"
              />
            </div>
          </div>

          {/* Select Products */}
          <div className="mt-6">
            <label className="text-sm text-gray-700 font-medium">
              Select Products
            </label>
            <div className="relative mt-2">
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm appearance-none 
                           bg-white focus:outline-none"
              >
                <option>Select products</option>
              </select>

              {/* Dropdown arrow */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                ❯
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="text-sm text-gray-700 font-medium">
              Product Description
            </label>
            <textarea
              placeholder="Brief description of the product"
              className="mt-2 w-full h-[100px] border border-gray-200 rounded-lg px-3 py-2.5 text-sm 
                         resize-none focus:outline-none"
            />
          </div>

          {/* Upload Box */}
          <div className="mt-6">
            <label className="text-sm text-gray-700 font-medium">
              Upload Product Image
            </label>

            <div
              className="mt-3 w-full h-[160px] border-2 border-dashed rounded-xl 
                            flex flex-col items-center justify-center text-gray-500 text-center border-gray-200"
            >
              <Upload size={25} className="mb-2 text-gray-600" />
              <p className="text-sm">Click to upload or drag and drop</p>
              <p className="text-[11px] text-gray-400 mt-1">
                PNG, JPG, PDF (max. 10MB)
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
          <button className="px-6 py-2.5 text-sm border rounded-lg text-gray-700 w-full sm:w-auto">
            Cancel
          </button>

          <button
            className="px-6 py-2.5 text-sm bg-green-600 text-white rounded-lg 
                             w-full sm:w-auto"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
