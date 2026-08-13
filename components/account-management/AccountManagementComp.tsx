"use client";
import { getAccountStat } from "@/services/account-management";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { useState } from "react";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import OverviewCards from "../common/OverviewCards";
import AccountManagement from "./user-management/AccountManagement";
import useAccountStats from "@/hooks/useAccontStats";
import CustomDateDropdown from "../common/CustomDateDropdown";
import { useNavigationStore } from "@/store/modulesStore";

export default function AccountManagementComp() {
  const [dateRange, setDateRange] = useState("all");
  const setPage = useNavigationStore((state) => state.setPage)
  const { data, isPending } = useQuery({
    queryKey: [keys.accountStats, dateRange],
    queryFn: () => getAccountStat(dateRange),
  });

  const accountCards = data?.data;
  const accountStatistics = useAccountStats(accountCards);
  return (
    <>
      <OverviewCards
        heading="Account Management"
        description="Monitor platform participants, verify accounts"
        cards={accountStatistics}
        isPending={isPending}
        dropdown={
          <CustomDateDropdown
            value={dateRange}
            onChange={() => {
              setDateRange
              setPage(1)
            }}
            options={dropdownOptions}
          />
        }
      />
      <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
        <AccountManagement dateRange={dateRange} />
      </div>
    </>
  );
}
