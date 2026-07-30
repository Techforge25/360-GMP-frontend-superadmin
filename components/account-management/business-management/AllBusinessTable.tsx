import React from "react";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountPagination from "@/components/common/AccountPagination";
import AccountManagementBusinessTable from "./AccountManagementBusinessTable";

export default function AllBusinessTable() {
    
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Business..."
        filters={[
          {
            key: "subscriptionType",
            label: "Subscription Type",
            options: ["All", "Silver", "Gold", "Enterprise"],
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
       <AccountPagination/>

    </div>
  );
}
