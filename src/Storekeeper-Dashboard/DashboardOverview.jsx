import React from "react";
import OverviewCard from "./Dashboard-component/OverviewCard";
import RecentOrder from "./Dashboard-component/RecentOrder";
import LowStock from "./Dashboard-component/LowStock";

function DashboardOverview() {
  return (
    <div className="w-full mt-20 lg:mt-0 md:mt-0 px-4 py-3 bg-gray-100 min-h-screen mb-16 lg:mb-0 md:mb-0">
      <OverviewCard />
      <RecentOrder />
      <LowStock />
    </div>
  );
}

export default DashboardOverview;
