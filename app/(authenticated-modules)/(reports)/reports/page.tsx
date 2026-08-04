import React from "react";
import OverviewCards from "@/components/common/OverviewCards";
import { ReportsCard } from "@/constants/reports/ReportsCard";
import Reports from "@/components/reports/Reports";


export default function page() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Report Management"
        description="Review, investigate, and resolve user-submitted reports across Businesses, Products, Jobs, and Community Groups."
        cards={ReportsCard}
        className="sm:grid-cols-4! lg:grid-cols-4!"
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
        <Reports/>
      </div>
    </div>
  );
}