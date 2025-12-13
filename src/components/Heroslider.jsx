import React from "react";
import Slider from "react-slick";
import hero from "../assets/hero_img.png";
import fruit_basket from "../assets/fruit_basket.png";
import rectangle from "../assets/Rectangle4.png";
import Rectangle from "../assets/rectangle3.png";
import { Link } from "react-router-dom";

const GrocerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div
      className=" mt-20 lg:mt-0 md:mt-0"
      data-aos="fade-in"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slider ">
          <div
            className=" slide1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 w-full  h-72
  bg-[url('/src/assets/bulk.png')]   bg-position-[100%_50px]
  bg-[length:55%_100%,contain]
  bg-no-repeat md:bg-none "
          >
            {/* Text Section */}
            <div className="max-w-lg text-white space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-left pt-4 lg:text-left md:text-left mt-3">
                Buy Together, Save Big on Groceries!
              </h2>
              <p className="text-sm md:text-base text-left lg:text-left md:text-left ">
                Join your neighbours and shop bulk combos at unbeatable prices —
                share costs, save more, and enjoy doorstep delivery.
              </p>
              <div className="flex justify-start lg:justify-start">
                <button className="bulkdeals bg-white text-[16px] text-green-600  px-7 py-1 rounded-md font-medium hover:bg-gray-100 text-center cursor-pointer">
                  Explore Bulk Deals
                </button>
              </div>
            </div>

            {/* Image Section */}
            <img
              src={hero} // replace with your actual image
              alt="People with groceries"
              className="w-0 md:w-100 lg:w-100 z-1  mt-6 lg:mt-6 hidden"
            />
          </div>
          <img
            className="h-15  hidden lg:block md:block w sm:w-full"
            src={Rectangle}
            alt=""
          />
        </div>

        {/* Slide 2 */}
        <div className="slider2">
          <div
            className=" slide2 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 w-full h-72
  bg-[url('/src/assets/fruit_basket.png')]   bg-position-[100%_30px]
  bg-[length:80%_100%,contain]
  bg-no-repeat md:bg-none "
          >
            {/* Text Section */}
            <div className="max-w-lg text-white space-y-4">
              <h2 className="text-[32px] font-bold text-left pt-4 lg:text-left md:text-left mt-3 md:text-2xl lg:text-3xl">
                Shop Smarter Together!
              </h2>
              <p className="text-sm md:text-base text-left lg:text-left md:text-left">
                Split bulk food items with neighbours and cut grocery expenses
                without compromising on quality.
              </p>
              <div className="flex gap-5 justify-start lg:justify-start md:justify-start">
                <button className=" saving bg-white text-[16px] text-[#4CAF4F]  px-7 py-1 rounded-md  hover:bg-gray-100 cursor-pointer font-medium">
                  Shop Now
                </button>
                <Link to="/Signin">
                  <button className="bg-transparent text-[16px] text-white px-7 py-1 rounded-md font-medium border cursor-pointer hover:bg-white duration-500 hover:text-green-600">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <img
              src={fruit_basket} // replace with image 2
              alt="People with groceries"
              className="w-0 md:w-80 mt-3 md:mt-20 z-50 sm:w-50 lg:mr-20"
            />
          </div>
          <img
            className="h-15 w-0 hidden lg:w-full md:w-full lg:block md:block"
            src={rectangle}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default GrocerySlider;
