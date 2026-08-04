import React from "react";

// import PaginationComponent from "@/components/common/PaginationComponent";

import ReportJobReportTable from "./ReportJobReportTable";
import SearchFilterBar from "@/components/common/SearchFilterBar";

export default function JobReportTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Report..."
        onSearch={(value) => {
          console.log("User Search:", value);
        }}
      />
      <ReportJobReportTable />
      {/* <PaginationComponent /> */}
    </div>
  );
}
