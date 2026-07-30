import React from "react";
import OverviewCards from "@/components/common/OverviewCards";
import { dashboardCards } from "@/constants/acount-management/AccountManagement";
import AccountManagement from "@/components/account-management/user-management/AccountManagement";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Account Management"
        description="Monitor platform participants, verify accounts"
        cards={dashboardCards}
        dropdown={
          <select className="border border-border bg-white px-3 py-2 rounded-xl text-sm font-medium text-gray-700 outline-none">
            <option>All Time</option>
            <option>Last 7 Days</option>
            <option>Last 1 Month</option>
            <option>Last 6 Month</option>
            <option>Last Year</option>
          </select>
        }
      />
      <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
        <AccountManagement/>
      </div>
    </div>
  );
}