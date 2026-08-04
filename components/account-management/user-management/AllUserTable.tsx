import React from "react";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountManagementTable from "./AccountManagementTable";
// import PaginationComponent from "@/components/common/PaginationComponent";

export default function AllUserTable() {
    
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "type",
            options: ["Sneak Peek Free - 14 Days", "Consumer / Individual", "Silver", "Bronze", "Gold", "Premium"],
            defaultValue: "Sneak Peek Free - 14 Days"
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
       {/* <PaginationComponent/> */}

    </div>
  );
}
