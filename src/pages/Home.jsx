import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Shopcategory from "../components/Shopcategory";
import GrocerySlider from "../components/Heroslider";
import SignIn from "./SignIn";

export default function Home() {
  return (
    <div>
      {/* <SignIn /> */}
      <GrocerySlider />
      <Shopcategory />
      {/* <Footer /> */}
    </div>
  );
}
