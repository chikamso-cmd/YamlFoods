// import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import SellerdashbordHeader from "./SellerdashbordHeader";
import SellerdashboardSidebar from "./SellerdashboardSidebar";
import MobileFooter from "./MobileFooter";


export default function LayoutForStoreKeeper() {
  



  return (
    <section className="w-full bg-green-50 flex  ">
      <aside className=" lg:block md:block hidden  shadow-cyan-50 rounded">
        <SellerdashboardSidebar />
      </aside>

      <div className="w-full">
        <header className="w-full bg-white">
          <SellerdashbordHeader />
          
        </header>
        <main className="flex-1 w-full lg:px-5 lg:py-6 ">
          <Outlet />
        </main>
        <div>
          <MobileFooter />
        </div>
      </div>
    </section>
  );
}
