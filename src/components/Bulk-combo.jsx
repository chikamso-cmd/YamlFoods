import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import bulkcard from "../assets/bulk_card.png";

export default function Bulk_combo() {
  return (
    <div
      className="px-5 py-6"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="flex items-center justify-between px-5">
        <h1 className="text-[12px] font-medium">Bulk Orders</h1>
        <p className="text-green-600 flex items-center font-medium cursor-pointer gap-2 text-[10px]">
          See All
          <FaChevronRight />
        </p>
      </div>
      <div className="flex items-center gap-4  ">
        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="bg-white w-[150px] h-[182px] shadow-xl p-1 rounded">
            <img src={bulkcard} alt="variety of products" />
            <div>
              <h1 className="text-[12px] py-0.5">Naija Essential Pack</h1>
              <p className="text-[8px] pb-0.5">
                Rice + beans + maggi + palm oil - everything you need for the
                month
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[10px] font-bold">$25,000</p>
                <button className="bg-amber-500 text-white text-[10px] px-2 rounded py-0.5">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
