import React from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { SlEye } from "react-icons/sl";
import { TfiTrash } from "react-icons/tfi";
import { CiEdit, CiTrash } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProductCard from "./Dashboard-component/ProductCard";
import { FaPlus, FaCaretDown } from "react-icons/fa6";
import meat from "../assets/meat.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function ProductInventory() {
  return (
    <div className="min-h-screen bg-white md:p-4 p-2 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <ProductCard />
        {/* Header Section */}
        <div
          className="mb-8 border border-gray-200 rounded-xl shadow-sm"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          {/* Tabs */}
          <div className="flex justify-between mb-4 border-b border-gray-300 px-5 py-4">
            <div className="flex gap-4">
              <NavLink
                to="/storekeeper/product-management"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-gray-400 font-semibold border-b border-b-gray-400"
                      : ""
                  }`
                }
              >
                <button className="mb-3 text-[12px]"> Single Products</button>
              </NavLink>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-green-600 font-semibold border-b border-b-green-600"
                      : "text-gray-400"
                  }`
                }
              >
                <button className="mb-3 text-[12px]"> Bulk Products</button>
              </NavLink>
            </div>

            <NavLink to="/storekeeper/product-management/bulkadd">
              <button className="flex items-center gap-2 text-[12px] bg-green-600 rounded px-3 text-white mb-2 cursor-pointer hover:bg-green-700 py-2">
                {" "}
                <FaPlus /> Add New Product
              </button>
            </NavLink>
          </div>

          {/* Content Container */}
          <div className="bg-white hidden lg:block md:block">
            {/* Toolbar */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Product Inventory
                  </h2>
                </div>

                <div className="lg:flex md:flex flex-col sm:flex-row gap-3 hidden">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Filters Button */}
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bulk Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product List
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Mini-Mini
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Rice, Power Oil, Salt
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥6,000
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">100</div>
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

                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Medium
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">Yam, Potatoes</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥1,400
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">50</div>
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

                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Large
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Cocacola, Fanta, Nalt
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥3.00
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">0</div>
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

                  {/* Row 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Meats
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Meat, Fish, Pommo
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥5,000
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">45</div>
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

                  {/* Row 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Tomatoes
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Pepper, Tomatoes Onion
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥2,000
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">20</div>
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

                  {/* Row 6 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Viva Soap
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Dove bar, Dove cream
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥7,000
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">20</div>
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

                  {/* Row 7 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Power Oil
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Tomatoes, Rice, Beans, Pepper
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥3,500
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">20</div>
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

                  {/* Row 8 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Salts
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Yam, Rice, Bean, Salt, Maggi
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥2.50
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">20</div>
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

                  {/* Row 9 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Milo
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Yam, Rice, Bean, Salt, Maggi
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥1,500
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">20</div>
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

                  {/* Row 10 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-md"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Chicken
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Yam, Rice, Bean, Salt, Maggi
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ¥5,000
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">20</div>
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
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">10</span> of{" "}
                  <span className="font-medium">100</span> results
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add Product Button */}
          <div className="px-1 py-4 border-t border-gray-200 lg:hidden md:hidden sm:hidden ">
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
    </div>
  );
}

export default ProductInventory;
