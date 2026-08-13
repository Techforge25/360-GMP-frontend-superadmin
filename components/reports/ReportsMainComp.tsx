"use client";

import useReportsStats from "@/hooks/useReportsStats";
import OverviewCards from "../common/OverviewCards";
import Reports from "./Reports";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getReportStat } from "@/services/reports";
import { useState } from "react";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import CustomDateDropdown from "../common/CustomDateDropdown";

export default function ReportsMainComp() {
  const [dateRange, setDateRange] = useState("all");
  const { data, isPending } = useQuery({
    queryKey: [keys.reportsStats, dateRange],
    queryFn: () => getReportStat(dateRange),
  });

  const reportsData = data?.data;
  const reports = useReportsStats(
    reportsData?.jobReports,
    reportsData?.businessReports,
    reportsData?.productReports,
    reportsData?.communityReports,
  );

  return (
    <>
      <OverviewCards
        heading="Report Management"
        description="Review, investigate, and resolve user-submitted reports across Businesses, Products, Jobs, and Community Groups."
        cards={reports}
        className="sm:grid-cols-4! lg:grid-cols-4!"
        isPending={isPending}
        dropdown={
          <CustomDateDropdown
            value={dateRange}
            onChange={setDateRange}
            options={dropdownOptions}
          />
        }
      />
      <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
        <Reports dateRange={dateRange} />
      </div>
    </>
  );
}
