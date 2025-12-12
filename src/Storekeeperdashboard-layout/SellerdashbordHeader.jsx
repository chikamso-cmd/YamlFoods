import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHeaderConfig } from "./configHheaders";
import logo from '../assets/LOGO.png'
import storemanager from '../assets/storemanager.jpg'

export default function SellerdashbordHeader() {
  const location = useLocation();
  const [headerConfig, setHeaderConfig] = useState(getHeaderConfig("/"));

  useEffect(() => {
    const config = getHeaderConfig(location.pathname);
    setHeaderConfig(config);
  }, [location.pathname]);

  return (
    <div className="w-full px-4 py-3 bg-white ">
      <div className="items-center justify-between w-full lg:flex md:flex hidden ">
        <div>
          <h1 className="font-bold text-[12px] px-2"> {headerConfig.title}</h1>
          <p className="text-gray-400 text-[10px] px-2">
            {headerConfig.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="py-1.5 w-[25px] h-[25px] rounded-full bg-gray-300 text-center text-[8px]">
            SM
          </span>
          <p className="text-[11px]">Store Manager</p>
        </div>
      </div>
      <div className="lg:hidden md:hidden">
        <img src={logo} alt="company logo" className="w-20" />
      </div>
      <div className="flex items-center gap-3 mt-4 lg:hidden md:hidden">
        <img
          src={storemanager}
          alt="storemanager"
          className="w-10 rounded-full h-10"
        />
        <div className="">
          <h1 className="text-[15px] font-bold">Store Manager</h1>
          <p className="text-[10px]">
            Welcome back! Here's what's happening today.
          </p>
        </div>
      </div>
    </div>
  );
}
