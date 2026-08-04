import React from "react";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import SubscriptionFreeTrialTable from "./SubscriptionTable";
import PaginationComponent from "@/components/common/PaginationComponent";

export default function FreeTrialTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "sortBy",
            label: "Sort By",
            options: [
              "All User",
              "Active Trial",
              "Expired",
            ],
            defaultValue: "All",
          },
        ]}
        onSearch={(value) => console.log(value)}
        onFilterChange={(key, value) => console.log(key, value)}
      />
      <SubscriptionFreeTrialTable />
      {/* <PaginationComponent /> */}
    </div>
  );
}
