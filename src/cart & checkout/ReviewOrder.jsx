import { Link } from "react-router-dom";
import { FaCaretRight, FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoCubeOutline, IoLocationOutline } from "react-icons/io5";
import done from "../assets/done.png";
import RecentlyViewed from "../components/RecentlyViewed";
import OrderSummary from "./OrderSummaries";
import tomatoes from "../assets/tomatoes.png";
import CheckoutNav from "../common/CheckoutNav";
import Footer from "../Layout/Footer";


export default function ReviewOrder() {
  return (
    <div className="w-full min-h-screen">
      <CheckoutNav />
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
      <div
        className="w-full px-6 py-5"
        data-aos="zoom-in-right"
        data-aos-easing="ease-oup"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="px-8">
          {/* Checkout Items */}
          <div className="flex gap-7">
            <div className="shadow-lg p-4 rounded-lg bg-white flex-1">
              <Link
                to="/Cart"
                className="text-green-700 text-sm px-3 mb-4 block"
              >
                Continue Shopping
              </Link>
              <div className="flex justify-center w-full max-w-2xl mx-auto">
                <div className="flex items-center justify-center py-3 gap-4 text-center">
                  <div>
                    <div className="bg-green-700 rounded-full w-[30px] h-[30px] text-white text-center text-[10px] mx-auto">
                      <h1 className="pt-2.5 text-center mx-auto">
                        <FaCheck className="mx-auto" />
                      </h1>
                    </div>
                    <p className="text-[10px] py-2">Delivery Address</p>
                  </div>
                  <img className="w-[30%]" src={done} alt="rectangle" />
                  <div>
                    <div className="bg-amber-500 rounded-full w-[30px] h-[30px] text-white text-center text-[10px] mx-auto">
                      <h1 className="pt-2">2</h1>
                    </div>
                    <p className="text-[10px] py-2">Review Order</p>
                  </div>
                </div>
              </div>

              {/* user checkout verification */}
              <div className="px-2 py-3">
                <h1 className=" font-medium text-[14px] ">Review your order</h1>
                <p className="text-[10px] text-gray-400">
                  Please review your order details before completeing your
                  purchase.
                </p>
              </div>

              <div className="shadow bg-white rounded w-full my-3 px-2 py-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  {/* order items */}
                  <div className="flex gap-2 items-center">
                    <div className="bg-amber-100 w-[25px] h-[25px] rounded ">
                      <IoCubeOutline className="text-amber-500 mx-auto mt-1" />
                    </div>
                    <div>
                      <h1 className="font-medium text-[11px]">Order Items</h1>
                      <p className="text-[10px] text-gray-600">2 Items</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-green-600 text-[10px] font-semibold cursor-pointer">
                    {" "}
                    <CiEdit className="text-[12px] font-semibold" />
                    Edit
                  </button>
                </div>

                {/* order review content */}
                <div className="shadow rounded py-3 px-1 mt-2">
                  <div className="flex items-center justify-between">
                    {/* order items */}
                    <div className="flex gap-2 items-center">
                      <div className="bg-amber-100 w-[25px] h-[25px] rounded ">
                        <img src={tomatoes} alt="tomatoes" />
                      </div>
                      <div>
                        <h1 className="font-medium text-[11px]">Tomatoes</h1>
                        <p className="text-[10px] text-gray-600">1 KG</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h2 className="text-[9px]">
                        QTY: <span>2</span>
                      </h2>
                      <p className="font-bold text-[10px]">#3500</p>
                    </div>
                  </div>
                </div>
                <div className="shadow rounded py-3 px-1 mt-2">
                  <div className="flex items-center justify-between">
                    {/* order items */}
                    <div className="flex gap-2 items-center">
                      <div className="bg-amber-100 w-[25px] h-[25px] rounded ">
                        <img src={tomatoes} alt="tomatoes" />
                      </div>
                      <div>
                        <h1 className="font-medium text-[11px]">Tomatoes</h1>
                        <p className="text-[10px] text-gray-600">1 KG</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h2 className="text-[9px]">
                        QTY: <span>2</span>
                      </h2>
                      <p className="font-bold text-[10px]">#3500</p>
                    </div>
                  </div>
                </div>
                <div className="shadow rounded py-3 px-1 mt-2">
                  <div className="flex items-center justify-between">
                    {/* order items */}
                    <div className="flex gap-2 items-center">
                      <div className="bg-amber-100 w-[25px] h-[25px] rounded ">
                        <img src={tomatoes} alt="tomatoes" />
                      </div>
                      <div>
                        <h1 className="font-medium text-[11px]">Tomatoes</h1>
                        <p className="text-[10px] text-gray-600">1 KG</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h2 className="text-[9px]">
                        QTY: <span>2</span>
                      </h2>
                      <p className="font-bold text-[10px]">#3500</p>
                    </div>
                  </div>
                </div>
                {/* customer order review ends here */}

                {/* customer address information starts here  */}
                <div>
                  <div className="w-full shadow-gray-50 border border-gray-100 px-3 mt-9 py-2 rounded flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="bg-green-100 w-[25px] h-[25px] rounded ">
                        <IoLocationOutline className="text-green-500 mx-auto mt-1" />
                      </div>
                      <div>
                        <h1 className="font-medium text-[11px]">
                          Delivery Information
                        </h1>
                        <p className="text-[10px] text-gray-600">
                          Tomorrow, October 17, 2024,{" "}
                          <span className="text-gray-300">
                            (within 24 hours)
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-green-600 text-[10px] font-semibold cursor-pointer">
                      {" "}
                      <CiEdit className="text-[12px] font-semibold" />
                      Edit
                    </button>
                  </div>

                  <div className="shadow rounded py-3 px-1 mt-2">
                    <div className="flex items-center justify-between">
                      {/* address info */}
                      <div className="flex gap-2 items-center">
                        <div>
                          <h1 className="font-medium text-[11px]">James Doe</h1>
                          <p className="text-[10px] text-gray-600">
                            +234 800 000 0000
                          </p>
                          <p className="text-[10px] text-gray-600">
                            jamesdoe@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow rounded py-3 px-1 mt-2">
                    <div className="flex items-center justify-between">
                      {/* address info */}
                      <div className="flex gap-2 items-center">
                        <div>
                          <h1 className="font-medium text-[11px]">
                            Delivery Adress
                          </h1>
                          <p className="text-[10px] text-gray-600">
                            123, Sample Street, GRA Phase 2
                          </p>
                          <p className="text-[10px] text-gray-600">
                            Port Harcort, Rivers State
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full gap-4 my-3 items-center ">
                    <button className="cursor-pointer text-green-500 border border-green-500 px-3 py-1 text-[10px] rounded hover:bg-green-500 hover:text-white duration-500 ">
                      Back
                    </button>
                    <Link to="/ReviewOrder" className="w-full">
                      <button className="bg-green-600 text-white px-4 w-full rounded text-[12px] py-1 cursor-pointer hover:bg-green-700 duration-500">
                        Save and Review Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <OrderSummary />
          </div>
        </div>
      </div>
      <div className="px-10 my-6">
        <h1 className="font-medium text-[12px]">Recently Viewed</h1>
        <RecentlyViewed />
      </div>
      <Footer />
    </div>
  );
}
