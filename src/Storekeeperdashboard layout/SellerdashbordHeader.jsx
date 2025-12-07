import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHeaderConfig } from "./configHheaders";

export default function SellerdashbordHeader() {
  const location = useLocation();
  const [headerConfig, setHeaderConfig] = useState(getHeaderConfig("/"));

  useEffect(() => {
    const config = getHeaderConfig(location.pathname);
    setHeaderConfig(config);
  }, [location.pathname]);

  return (
    <div className="w-full px-4 py-3 bg-white flex items-center justify-between">
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
  );
}
