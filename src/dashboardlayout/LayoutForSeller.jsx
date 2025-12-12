import React from "react";
import DashbordNav from "../Seller-dashboard/DashbordNav";
import UserProfile from "../Seller-dashboard/UserProfile";
import DashboardSidebar from "../Seller-dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

export default function LayoutForSellers() {
  return (
    <div className="w-full">
      <DashbordNav />
      <UserProfile />

      <div className="flex lg:gap-4 ">
        <div className="lg:w-64 md:w-64">
          <DashboardSidebar />
        </div>

        <div className="lg:flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
