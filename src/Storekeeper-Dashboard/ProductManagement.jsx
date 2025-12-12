// import React, { use } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Search, Filter, CheckCircle, XCircle } from "lucide-react";
import { FaPlus, FaCaretDown } from "react-icons/fa6";
import { SlEye } from "react-icons/sl";
import { TfiTrash } from "react-icons/tfi";
import { CiEdit, CiTrash } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import ProductCard from "./Dashboard-component/ProductCard";
import meat from "../assets/meat.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const InventoryDashboard = () => {
  // const fame = use()

  return (
    <div className="bg-white min-h-screen p-6">
      <ProductCard />

      {/* Products Table */}
      <div
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="600"
      >
        <div className="w-full flex justify-end">
          {/* add product button */}
          <NavLink to="/storekeeper/product-management/add-product">
            <button className="flex items-center gap-2 text-[12px] bg-green-600 rounded px-5 text-white mb-2 cursor-pointer hover:bg-green-700 py-2">
              {" "}
              <FaPlus /> Add New Product
            </button>
          </NavLink>
        </div>
        {/* Tabs */}

        <div className="px-6 mt-4 flex justify-between gap-5 border-b border-gray-200">
          <div className=" flex items-center gap-3">
            <NavLink
              to="/storekeeper/product-management"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-green-600 font-semibold border-b border-b-green-600"
                    : "text-gray-400"
                }`
              }
            >
              <button className="mb-3 text-[12px]"> Single Products</button>
            </NavLink>
            <NavLink
              to="/storekeeper/product-management/bulk-product"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-green-600 font-semibold border-b border-b-green-600"
                    : ""
                }`
              }
            >
              <button className="mb-3 text-[12px]"> Bulk Products</button>
            </NavLink>
          </div>
          {/* add product button */}
          <NavLink to="/storekeeper/product-management/add-product">
            <button className="lg:flex  md:flex items-center gap-2 text-[12px] bg-green-600 rounded px-5 text-white mb-2 cursor-pointer hover:bg-green-700 py-2 hidden ">
              {" "}
              <FaPlus /> Add New Product
            </button>
          </NavLink>
        </div>
        {/* Table Header */}
        <div className=" justify-between w-full hidden  ">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <h3 className="text-sm font-semibold text-gray-800">
              Products Inventory{" "}
            </h3>
            <p className="text-[8px] bg-blue-100 text-blue-600 px-2 rounded-full py-0.5">
              102
            </p>
          </div>
          <div className="flex items-center justify-end px-10 gap-3 ">
            <input
              type="search"
              placeholder="Search"
              className="border border-gray-200 px-4 py-1 w-full rounded "
            />
            <button className="text-[12px] rounded-full px-3 py-1border bordfer-gray-200">
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto hidden lg:flex md:flex sm:flex">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Variants
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-[10px] font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Rice Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Rice</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">Grains</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">1 Paint</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ¥9,000
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">100</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="gray-400 hover:text-blue-900 cursor-pointer">
                      <SlEye />
                    </button>
                    <button className=" hover:text-green-900 cursor-pointer">
                      <CiEdit />
                    </button>
                    <button className=" hover:text-red-900 cursor-pointer">
                      <TfiTrash />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Potatoes Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Potatoes
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">Tubers</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">1 Tuber</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ¥1,400
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">50</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="gray-400 hover:text-blue-900 cursor-pointer">
                      <SlEye />
                    </button>
                    <button className=" hover:text-green-900 cursor-pointer">
                      <CiEdit />
                    </button>
                    <button className=" hover:text-red-900 cursor-pointer">
                      <TfiTrash />
                    </button>
                  </div>
                </td>
              </tr>

              {/* CocaCola Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    CocaCola
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">Drinks</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">75 cl</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">¥300</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">0</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <XCircle className="w-3 h-3 mr-1" />
                    Out of stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="gray-400 hover:text-blue-900 cursor-pointer">
                      <SlEye />
                    </button>
                    <button className=" hover:text-green-900 cursor-pointer">
                      <CiEdit />
                    </button>
                    <button className=" hover:text-red-900 cursor-pointer">
                      <TfiTrash />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Meats Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Meats</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">Protein</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">1 KG</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ¥5,000
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">5</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-600">
                    Restock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="gray-400 hover:text-blue-900 cursor-pointer">
                      <SlEye />
                    </button>
                    <button className=" hover:text-green-900 cursor-pointer">
                      <CiEdit />
                    </button>
                    <button className=" hover:text-red-900 cursor-pointer">
                      <TfiTrash />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Tomatoes Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Tomatoes
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">Vegetables</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">1 Paint</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ¥2,000
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">20</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="gray-400 hover:text-blue-900 cursor-pointer">
                      <SlEye />
                    </button>
                    <button className=" hover:text-green-900 cursor-pointer">
                      <CiEdit />
                    </button>
                    <button className=" hover:text-red-900 cursor-pointer">
                      <TfiTrash />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Tomatoes Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Tomatoes
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">Vegetables</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">1 Paint</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ¥2,000
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">0</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <XCircle className="w-3 h-3 mr-1" />
                    Out of stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="gray-400 hover:text-blue-900 cursor-pointer">
                      <SlEye />
                    </button>
                    <button className=" hover:text-green-900 cursor-pointer">
                      <CiEdit />
                    </button>
                    <button className=" hover:text-red-900 cursor-pointer">
                      <TfiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Add Product Button */}
        <div className="px-3 py-4 border-t border-gray-200 lg:hidden md:hidden sm:hidden ">
          <div className="border border-gray-200 rounded-sm py-2 px-2 mb-1">
            <div className="flex items-center gap-2 px-2 py-2 w-full">
              <div className="flex gap-2 w-full">
                <div className="w-20 h-20">
                  <img src={meat} alt="red meat" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center  ">
                    <div>
                      <p className="text-[12px] font-medium">Meats</p>
                    </div>
                    <span className="text-[12px] text-green-600">
                      100 in stock
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] font-medium ">N5,000</p>
                  <p className="flex gap-2 item-center text-[12px]">
                    {" "}
                    1 KG <FaCaretDown />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button className="flex items-center justify-center bg-green-600 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md text-[10px] w-40">
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button className="flex items-center justify-center bg-red-200 hover:bg-blue-700 text-red-600 font-semibold py-1 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md">
                <CiTrash className="mr-2" />
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-sm py-2 px-2 mb-1">
            <div className="flex items-center gap-2 px-2 py-2 w-full">
              <div className="flex gap-2 w-full">
                <div className="w-20 h-20">
                  <img src={meat} alt="red meat" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center  ">
                    <div>
                      <p className="text-[12px] font-medium">Meats</p>
                    </div>
                    <span className="text-[12px] text-green-600">
                      100 in stock
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] font-medium ">N5,000</p>
                  <p className="flex gap-2 item-center text-[12px]">
                    {" "}
                    1 KG <FaCaretDown />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button className="flex items-center justify-center bg-green-600 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md text-[10px] w-40">
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button className="flex items-center justify-center bg-red-200 hover:bg-blue-700 text-red-600 font-semibold py-1 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md">
                <CiTrash className="mr-2" />
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-sm py-2 px-2 mb-1">
            <div className="flex items-center gap-2 px-2 py-2 w-full">
              <div className="flex gap-2 w-full">
                <div className="w-20 h-20">
                  <img src={meat} alt="red meat" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center  ">
                    <div>
                      <p className="text-[12px] font-medium">Meats</p>
                    </div>
                    <span className="text-[12px] text-green-600">
                      100 in stock
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] font-medium ">N5,000</p>
                  <p className="flex gap-2 item-center text-[12px]">
                    {" "}
                    1 KG <FaCaretDown />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button className="flex items-center justify-center bg-green-600 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md text-[10px] w-40">
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button className="flex items-center justify-center bg-red-200 hover:bg-blue-700 text-red-600 font-semibold py-1 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-md">
                <CiTrash className="mr-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile button for padgination */}
      <div className="mt-4">
        <div className="flex justify-between items-center px-2">
          <IoIosArrowRoundBack />
          <div className="flex gap-1">
            <button className="border px-3 rounded border-gray-200 text-[12px] py-1 bg-blue-100">
              1
            </button>
            <button className="border px-3 rounded border-gray-200 text-[12px] py-1">
              ...
            </button>
            <button className="border px-3 rounded border-gray-200 text-[12px] py-1">
              5
            </button>
          </div>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
