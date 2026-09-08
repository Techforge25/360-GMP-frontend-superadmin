"use client";
import { useState } from "react";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import OverviewCards from "../common/OverviewCards";
import CustomDateDropdown from "../common/CustomDateDropdown";
import JobsTabsPage from "./JobsTabsPage";
import JobsStats from "@/constants/jobs/JobsStats";

export default function JobsManagement() {
  const [dateRange, setDateRange] = useState("all");
  return (
    <>
      <OverviewCards
        heading="Jobs Overview"
        description="Real time status of recurrent and risk monitoring systems."
        cards={JobsStats}
        // isPending={isPending}
        dropdown={
          <CustomDateDropdown
            value={dateRange}
            onChange={setDateRange}
            options={dropdownOptions}
          />
        }
      />
      <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
        <JobsTabsPage dateRange={dateRange} />
      </div>
    </>
  );
}
