import React from "react";
import OverviewCard from "./Dashboard-component/OverviewCard";
import RecentOrder from "./Dashboard-component/RecentOrder";
import LowStock from "./Dashboard-component/LowStock";

function DashboardOverview() {
  return (
    <div className="w-full">
      <OverviewCard />
      <RecentOrder />
      <LowStock />
    </div>
  );
}

export default DashboardOverview;
