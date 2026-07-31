import React from "react";
import SubscriptionPaidTransationTable from "./SubscriptionPaidTransationTable";
import PaginationComponent from "@/components/common/PaginationComponent";

export default function PaidMemberTransationTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm mt-5">
      <h2 className="text-[1.375rem] font-semibold text-[#1e293b]">
          Transaction History
        </h2>
      <SubscriptionPaidTransationTable />
      <PaginationComponent />
    </div>
  );
}
