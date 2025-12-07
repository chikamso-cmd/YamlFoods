import React from "react";
import Slider from "react-slick";
import hero from '../assets/hero_img.png'
import fruit_basket from '../assets/fruit_basket.png'
import rectangle from '../assets/Rectangle 3.png'
import Rectangle from '../assets/rectangle3.png'
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
    <div className=" ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="">
          <div className=" slide1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 w-full  ">
            {/* Text Section */}
            <div className="max-w-lg text-white space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center pt-4 lg:text-left md:text-left">
                Buy Together, Save Big on Groceries!
              </h2>
              <p className="ext-sm md:text-base text-center lg:text-left md:text-left ">
                Join your neighbours and shop bulk combos at unbeatable prices —
                share costs, save more, and enjoy doorstep delivery.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bulkdeals bg-white text-[12px] text-green-600  px-7 py-1 rounded-md font-semibold hover:bg-gray-100 text-center cursor-pointer">
                  Explore Bulk Deals
                </button>
              </div>
            </div>

            {/* Image Section */}
            <img
              src={hero} // replace with your actual image
              alt="People with groceries"
              className="w-64 md:w-100 lg:w-100 z-1  mt-6 lg:mt-6"
            />
          </div>
          <img className="h-15 w-full " src={Rectangle} alt="" />
        </div>

        {/* Slide 2 */}
        <div>
          <div className=" slide2 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 w-full  ">
            {/* Text Section */}
            <div className="max-w-lg text-white space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center pt-4 lg:text-left md:text-left">
                Shop Smarter Together!
              </h2>
              <p className="text-sm md:text-base text-center lg:text-left md:text-left">
                Split bulk food items with neighbours and cut grocery expenses
                without compromising on quality.
              </p>
              <div className="flex gap-5 justify-center lg:justify-start md:justify-start">
                <button className=" saving bg-white text-[12px] text-[#4CAF4F]  px-7 py-1 rounded-md font-semibold hover:bg-gray-100 cursor-pointer">
                  Start Saving
                </button>
                <Link to="/Signin">
                  <button className="bg-transparent text-[12px] text-white px-7 py-1 rounded-md font-lighter border cursor-pointer">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <img
              src={fruit_basket} // replace with image 2
              alt="People with groceries"
              className="w-64 md:w-80 mt-3 md:mt-20 z-50 sm:w-50 lg:mr-20"
            />
          </div>
          <img className="h-15 w-full" src={rectangle} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default GrocerySlider;
