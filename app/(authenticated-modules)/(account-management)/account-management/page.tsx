import React from "react";
import OverviewCards from "@/components/common/OverviewCards";
import { dashboardCards } from "@/constants/acount-management/AccountManagement";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fafafc] p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Account Management"
        description="Monitor platform participants, verify accounts"
        cards={dashboardCards}
        dropdown={
          <select className="border border-[#f0f0f5] bg-white px-3 py-2 rounded-xl text-sm font-medium text-[#647087] outline-none">
            <option>All Time</option>
            <option>This Month</option>
            <option>This Week</option>
          </select>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5rem] mt-6"></div>
    </div>
  );
}