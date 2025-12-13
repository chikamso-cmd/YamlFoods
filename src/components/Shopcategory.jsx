import React from "react";
import leaf from "../assets/twemoji_leafy-green.png";
import bread from "../assets/noto_bread.png";
import oildrum from "../assets/fluent-emoji-flat_oil-drum.png";
import cutmeat from "../assets/fluent-emoji-flat_cut-of-meat.png";
import rice from "../assets/twemoji_cooked-rice.png";
import softdrink from "../assets/streamline-ultimate-color_soft-drinks-bottle-1.png";
import Category_card from "./Category-card";
import Productcards from "./cards";
import Snacks_and_drinks from "./Snacks-and-drinks";
import Bulk_order from "./Bulk-order";
import Bulk_combo from "./Bulk-combo";
import Riceandgrains from "./Riceandgrains";
import Special_offer from "./Special_offer";
import Howitworks from "./Howitworks";

export default function Shopcategory() {
  return (
    <div>
      <div
        className="w-full lg:px-6 md:px-6 py-10 "
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h1 className="text-xl text-center font-medium">Shop by Category</h1>
        <div className=" flex justify-between w-full  py-10 gap-3 overflow-x-scroll px-5 scrollbar-hide md:flex-wrap lg:flex-nowrap sm:flex-wrap ">
          <div className="flex-none flex-row-reverse bg-[#FFF3CC] p-2 w-[200px] md:w-[200px] lg:w-[200px] rounded-2xl text-center">
            <div className="flex md:block md:items-center lg:block lg:items-center  items-center justify-center gap-3 mt-4 lg:mt-0 md:mt-0">
              <img
                className="lg:w-10 w-8 md:w-10 block  md:mx-auto md:mt-2"
                src={rice}
                alt="vegitable picture"
              />
              <div>
                <h4 className="text-[14px] m2 lg:mt-2 font-semibold">
                  Grains & Rice
                </h4>
                <p className="text-[12px]">Beans, soya beans e.t.c</p>
              </div>
            </div>
          </div>
          <div className="flex-none flex-row-reverse bg-[#EDF7EE] p-2 w-[200px] md:w-[200px] lg:w-[200px] rounded-2xl text-center">
            <div className="flex md:block md:items-center lg:block lg:items-center  items-center justify-center gap-3 mt-4 lg:mt-0 md:mt-0">
              <img
                className="lg:w-10 w-8 md:w-10 block mt-2  md:mx-auto md:mt-2"
                src={leaf}
                alt="vegitable picture"
              />
              <div>
                <h4 className="text-[14px] m2 lg:mt-2 font-semibold">
                  Vegitables & Fruits
                </h4>
                <p className="text-[12px]">Spinach, Carrots e.t.c</p>
              </div>
            </div>
          </div>
          <div className="flex-none flex-row-reverse bg-[#FEDCDC] p-2 w-[200px] md:w-[200px] lg:w-[200px] rounded-2xl text-center">
            <div className="flex md:block md:items-center lg:block lg:items-center  items-center justify-center gap-3 mt-4 lg:mt-0 md:mt-0">
              <img
                className="lg:w-10 w-8 md:w-10 block mt-2  md:mx-auto md:mt-2"
                src={cutmeat}
                alt="vegitable picture"
              />
              <div>
                <h4 className="text-[14px] m2 lg:mt-2 font-semibold">
                  Meat & Fish
                </h4>
                <p className="text-[12px]">Pork, Beef, savalai e.t.c</p>
              </div>
            </div>
          </div>
          <div className="flex-none flex-row-reverse bg-[#FFC266] p-2 w-[200px] md:w-[200px] lg:w-[200px] rounded-2xl text-center">
            <div className="flex md:block md:items-center lg:block lg:items-center  items-center justify-center gap-3 mt-4 lg:mt-0 md:mt-0">
              <img
                className="lg:w-10 w-8 md:w-10 block mt-2  md:mx-auto md:mt-2"
                src={oildrum}
                alt="vegitable picture"
              />
              <div>
                <h4 className="text-[14px] m2 lg:mt-2 font-semibold">
                  Oil & Spices
                </h4>
                <p className="text-[12px]">Kings, Benny, Thyme e.t.c</p>
              </div>
            </div>
          </div>
          <div className="flex-none flex-row-reverse bg-[#C8EBFF] p-2 w-[200px] md:w-[200px] lg:w-[200px] rounded-2xl text-center">
            <div className="flex md:block md:items-center lg:block lg:items-center  items-center justify-center gap-3 mt-4 lg:mt-0 md:mt-0">
              <img
                className="lg:w-10 w-8 md:w-10 block mt-2  md:mx-auto md:mt-2"
                src={bread}
                alt="vegitable picture"
              />
              <div>
                <h4 className="text-[14px] m2 lg:mt-2 font-semibold">
                  Bread & Dairy
                </h4>
                <p className="text-[12px]">Cream, milk, Butter, e.t.c</p>
              </div>
            </div>
          </div>
          <div className="flex-none flex-row-reverse bg-[#E0E2FE] p-2 w-[200px] md:w-[200px] lg:w-[200px] rounded-2xl text-center">
            <div className="flex md:block md:items-center lg:block lg:items-center  items-center justify-center gap-3 mt-4 lg:mt-0 md:mt-0">
              <img
                className="lg:w-10 w-8 md:w-10 block mt-2  md:mx-auto md:mt-2"
                src={softdrink}
                alt="vegitable picture"
              />
              <div>
                <h4 className="text-[14px] m2 lg:mt-2 font-semibold">
                  Snacks & Drinks
                </h4>
                <p className="text-[12px]">Popcorn, Cupcakes, e.t.c</p>
              </div>
            </div>
          </div>
        </div>
        <Category_card />
        <Productcards />
        <Snacks_and_drinks />
        <Bulk_order />
        <Bulk_combo />
        <Riceandgrains />
        <Special_offer />
        <Howitworks />
      </div>
    </div>
  );
}
