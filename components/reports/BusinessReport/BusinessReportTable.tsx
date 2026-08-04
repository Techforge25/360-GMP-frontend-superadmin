import React from "react";

import PaginationComponent from "@/components/common/PaginationComponent";

import SearchFilterBar from "@/components/common/SearchFilterBar";
import ReportBusinessReportTable from "./ReportBusinessReportTable";

export default function BusinessReportTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Report..."
        onSearch={(value) => {
          console.log("Business Search:", value);
        }}
      />
      <ReportBusinessReportTable />
      <PaginationComponent />
    </div>
  );
}
