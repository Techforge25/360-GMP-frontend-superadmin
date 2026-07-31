import React from "react";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountManagementBusinessTable from "./AccountManagementBusinessTable";
import PaginationComponent from "@/components/common/PaginationComponent";

export default function AllBusinessTable() {
    
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Business..."
        filters={[
          {
            key: "type",
            label: "Subscription Type",
            options: ["All", "Silver", "Bronze", "Gold", "Premium"],
            defaultValue: "All"
          },
           {
            key: "status",
            label: "Status",
            options: ["All", "Pending", "Approved", "Rejected"],
            defaultValue: "All"
          }
        ]}
        onSearch={(value) => {
          console.log("Business Search:", value);
        }}
        onFilterChange={(key, value) => {
          console.log("Business Filter:", { key, value });
        }}
      />
      <AccountManagementBusinessTable/>
       <PaginationComponent/>

    </div>
  );
}
