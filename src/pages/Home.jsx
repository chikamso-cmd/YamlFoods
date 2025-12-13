import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Shopcategory from "../components/Shopcategory";
import GrocerySlider from "../components/Heroslider";
import SignIn from "./SignIn";

export default function Home() {
  return (
    <div className="bg-white">
      {/* <SignIn /> */}
      <GrocerySlider />
      <Shopcategory />
      {/* <Footer /> */}
    </div>
  );
}
