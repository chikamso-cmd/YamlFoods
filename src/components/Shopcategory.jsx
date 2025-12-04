import React from "react";
import leaf from "../assets/twemoji_leafy-green.png";
import bread from "../assets/noto_bread.png";
import oildrum from "../assets/fluent-emoji-flat_oil-drum.png";
import cutmeant from "../assets/fluent-emoji-flat_cut-of-meat.png";
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
      <div className="w-full px-6 py-10 ">
        <h1 className="text-xl text-center font-medium">Shop by Category</h1>
        <div className=" flex justify-between w-full px-6 py-10 gap-3 ">
          <div className="bg-[#EDF7EE] p-2 w-[200px] rounded-2xl text-center">
            <img
              className="w-10 block mx-auto py-1"
              src={leaf}
              alt="vegitable picture"
            />
            <h4 className="text-[10px] py-2 font-bold">Vegitables & Fruits</h4>
          </div>

          <div className="bg-[#FFF3CC] p-2 w-[200px] rounded-2xl text-center">
            <img
              className="w-10 justify-center block mx-auto py-1"
              src={rice}
              alt="vegitable picture"
            />
            <h4 className="text-[10px] py-2 font-bold">Grains & Rice</h4>
          </div>

          <div className="bg-[#FEDCDC] p-2 w-[200px] rounded-2xl text-center">
            <img
              className="w-10 block mx-auto py-1"
              src={cutmeant}
              alt="vegitable picture"
            />
            <h4 className="text-[10px] py-2 font-bold">Meat & Fish</h4>
          </div>

          <div className="bg-[#FFC266] p-2 w-[200px] rounded-2xl text-center">
            <img
              className="w-10 block mx-auto py-1"
              src={oildrum}
              alt="vegitable picture"
            />
            <h4 className="text-[10px] py-2 font-bold">Oil & Spices</h4>
          </div>

          <div className="bg-[#C8EBFF] p-2 w-[200px] rounded-2xl text-center">
            <img
              className="w-10 block mx-auto py-1"
              src={bread}
              alt="vegitable picture"
            />
            <h4 className="text-[10px] py-2 font-bold">Bread & Dairy</h4>
          </div>

          <div className="bg-[#E0E2FE] p-2 w-[200px] rounded-2xl text-center">
            <img
              className="w-10 block mx-auto py-1"
              src={softdrink}
              alt="vegitable picture"
            />
            <h4 className="text-[10px] py-2 font-bold">Snacks & Drinks</h4>
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
