import React from "react";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import PaginationComponent from "@/components/common/PaginationComponent";
import SubscriptionPaidMemberTable from "./SubscriptionPaidMemberTable";

export default function PaidMemberTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "sortBy",
            label: "Sort By",
            options: [
              "All Tiers",
              "Silver",
              "Consumer",
              "Gold",
              "Enterprise",
            ],
            defaultValue: "All",
          },
          {
            key: "status",
            label: "Status",
            options: [
              "All Status",
              "Active",
              "In Active",
              "Past Due",
            ],
            defaultValue: "All Status",
          },
        ]}
        onSearch={(value) => console.log(value)}
        onFilterChange={(key, value) => console.log(key, value)}
      />
      <SubscriptionPaidMemberTable />
      <PaginationComponent />
    </div>
  );
}
