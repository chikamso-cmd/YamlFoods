import React from "react";
import { Plus, Upload } from "lucide-react";
import { NavLink } from "react-router-dom";
import { PiCaretLeftLight } from "react-icons/pi";

export default function AddProduct() {
  return (
    <div
      className="w-full bg-[#ffffff] min-h-screen p-4 md:p-6"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <NavLink to="/storekeeper/product-management">
        <button className="text-[12px] pb-6 cursor-pointer flex items-center gap-3 px-3">
          {" "}
          <PiCaretLeftLight />
          Back to product
        </button>
      </NavLink>
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-sm p-4 md:p-6">
        {/* Title */}
        <h2 className="text-[18px] font-semibold text-gray-700">
          Add New Product
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the details to add a new product with multiple size options
        </p>

        {/* Basic Info Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              placeholder="e.g Gold Mama Rice"
              className="mt-2 w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm focus:ring-0 focus:outline-green-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <div className="mt-2 relative">
              <input
                type="text"
                placeholder="e.g Grains & Rice"
                className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ⌵
              </span>
            </div>
          </div>

          {/* Product Description */}
          <div className="md:col-span-1">
            <label className="text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              className="mt-2 w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm h-[90px]"
              placeholder="Brief description of the product"
            ></textarea>
          </div>

          {/* Upload Product Image */}
          <div className="md:col-span-1">
            <label className="text-sm font-medium text-gray-700">
              Upload Product Image
            </label>
            <div className="mt-2 w-full h-[130px] sm:h-[150px] border-2 border-dashed border-gray-200 bg-white rounded-lg flex flex-col justify-center items-center text-center text-gray-500">
              <Upload size={22} className="mb-1" />
              <p className="text-sm">Click to upload or drag and drop</p>
              <p className="text-[11px] text-gray-400">
                PNG, JPG, PDF (max. 10MB)
              </p>
            </div>
          </div>
        </div>

        {/* Product Variants */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <h3 className="text-[16px] font-semibold text-gray-700">
              Product Variants
            </h3>

            <NavLink to="/storekeeper/product-management/add-variants">
              <button className="flex items-center justify-center gap-1 bg-green-500 text-white px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
                <Plus size={16} /> Add Variant
              </button>
            </NavLink>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Add different sizes/quantities with their prices and stock
          </p>

          {/* Variant Boxes */}
          <div className="grid  w-full md:grid-cols-1 gap-6 mt-5 ">
            <VariantCard />
            {/* <VariantCard /> */}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-10">
          <button className="px-5 py-2 border rounded-lg text-gray-600 text-sm w-full sm:w-auto">
            Cancel
          </button>

          <button className="px-5 py-2 bg-green-500 text-white rounded-lg text-sm w-full sm:w-auto">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

function VariantCard() {
  return (
    <div className="bg-[#F8F9FC] p-5 rounded-xl ">
      {/* Size Unit */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Size/Unit *</label>
        <input
          placeholder="e.g 1 Litre, 5 kg"
          className="mt-2 w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Price (₦) *</label>
        <input
          placeholder="0.00"
          className="mt-2 w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* Stock */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">
          Stock Quantity *
        </label>
        <input
          placeholder="0"
          className="mt-2 w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* Upload */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Upload Product Image
        </label>
        <div className="mt-2 w-full h-[110px] sm:h-[130px] border-2 border-gray-200 bg-white border-dashed rounded-lg flex flex-col justify-center items-center text-center text-gray-500">
          <Upload size={20} className="mb-1" />
          <p className="text-sm">Click to upload or drag and drop</p>
          <p className="text-[11px] text-gray-400">PNG, JPG, PDF (max. 10MB)</p>
        </div>
      </div>
    </div>
  );
}
