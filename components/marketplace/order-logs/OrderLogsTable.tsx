import React from "react";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import PaginationComponent from "@/components/common/PaginationComponent";
import MarketplaceOrderLogsTable from "./MarketplaceOrderLogsTable";

export default function OrderLogsTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <MarketplaceOrderLogsTable />
      {/* <PaginationComponent /> */}
    </div>
  );
}
