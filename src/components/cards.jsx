import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import carrot from "../assets/carrot.png";
import tomatoes from "../assets/tomatoes.png";
import bellpepper from "../assets/bellpepper.png";
import redpepper from "../assets/redpepper.png";
import onion from "../assets/onions.png";
import Cabbage from "../assets/cabbage.png";
import { Link } from "react-router-dom";
import Selectoptions from "../modals/Selectoptions";


export default function ProductCards() {
  
const [isOpen, setisOpen] = useState(false)

const openModal = () => {
  setisOpen(true)
  console.log('clicked');
  
}
const closeModal = () => {
  setisOpen(false)
  console.log('was clicked');
  
}



  return (
    <div
      className="w-full my-5"
      data-aos="fade-in"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="px-5  ">
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Vegitables & Fruits</h1>
          <p className="text-green-600 flex items-center gap-2 text-[10px]">
            See All
            <FaChevronRight />
          </p>
        </div>
      </div>
      {/* card content */}
      <div className="card-container grid grid-cols-2  gap-4 mt-5 lg:grid-cols-6 md:grid-cols-3  ">
        <div className=" car ">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <Link to="/Productdetails">
              <img
                src={tomatoes}
                alt="fresh tomatoes"
                className="w-[60px] mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Tomatoes</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              {/* <Selectoptions isOpen={isOpen} onClose={closeModal} /> */}
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <Link to="/Productdetails">
              <img
                src={redpepper}
                alt="fresh tomatoes"
                className="w-[60px] mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Long-pepper</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              {/* <Selectoptions isOpen={isOpen} onClose={closeModal} /> */}
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <Link to="/Productdetails">
              <img
                src={carrot}
                alt="fresh tomatoes"
                className="w-[60px] mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Carrot</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              {/* <Selectoptions isOpen={isOpen} onClose={closeModal} /> */}
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <Link to="/Productdetails">
              <img
                src={onion}
                alt="fresh tomatoes"
                className="w-[45px] mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Onions</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              {/* <Selectoptions isOpen={isOpen} onClose={closeModal} /> */}
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white hidden lg:block md:block">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <Link to="/Productdetails">
              <img
                src={bellpepper}
                alt="fresh tomatoes"
                className="w-[60px] mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Bell Pepper</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              {/* <Selectoptions isOpen={isOpen} onClose={closeModal} /> */}
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" card bg-white hidden lg:block md:block">
          <div className="bg-amber-100 h-[90px] py-5 ">
            <Link to="/Productdetails">
              <img
                src={Cabbage}
                alt="fresh tomatoes"
                className="w-[60px] mx-auto  "
              />
            </Link>
          </div>
          <div className="px-1">
            <h1 className="text-[10px] pt-1">Cabbage</h1>
            <p className="text-[10px] font-bold">#3,500</p>
            <div
              className="flex items-center justify-between py-2"
              onClick={openModal}
            >
              <p className="flex items-center gap-2 text-[10px]">
                1 Paint
                <FaChevronDown className="text-[9px] cursor-pointer" />
              </p>
              {/* <Selectoptions isOpen={isOpen} onClose={closeModal} /> */}
              <button className="text-[10px] bg-amber-500 py-0.5 px-2 text-white rounded-xs cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <Selectoptions isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
