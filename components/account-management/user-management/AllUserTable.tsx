import React from "react";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountManagementTable from "./AccountManagementTable";
import AccountPagination from "@/components/common/AccountPagination";

export default function AllUserTable() {
    
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "subscriptionType",
            label: "Subscription Type",
            options: ["Free Trial", "Consumer", "Silver", "Gold", "Enterprise"],
            defaultValue: "All"
          }
        ]}
        onSearch={(value) => {
          console.log("User Search:", value);
        }}
        onFilterChange={(key, value) => {
          console.log("User Filter:", { key, value });
        }}
      />
      <AccountManagementTable/>
       <AccountPagination/>

    </div>
  );
}
