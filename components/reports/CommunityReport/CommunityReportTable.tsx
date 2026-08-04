import React from "react";

import PaginationComponent from "@/components/common/PaginationComponent";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import CommunityTable from "./CommunityTable";

export default function CommunityReportTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Report..."
        onSearch={(value) => {
          console.log("User Search:", value);
        }}
      />
      <CommunityTable />
      <PaginationComponent />
    </div>
  );
}
