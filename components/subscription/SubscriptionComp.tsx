"use client";
import OverviewCards from "../common/OverviewCards";
import Subscription from "./Subscription";
import { keys } from "@/keys";
import { getSubscriptionStats } from "@/services/subscription";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import useSubscriptionStats from "@/hooks/useSubscriptionStats";
import CustomDateDropdown from "../common/CustomDateDropdown";

export default function SubscriptionComp() {
  const [dateRange, setDateRange] = useState("all");

  const { isPending, data } = useQuery({
    queryKey: [keys.subscriptionStats, dateRange],
    queryFn: () => getSubscriptionStats(dateRange),
  });

  const subscriptionStats = useSubscriptionStats(data?.data);

  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Subscription & Access"
        description="Manage user subscriptions, track trial conversions,and oversee platform access controls."
        cards={subscriptionStats}
        className="sm:grid-cols-3! lg:grid-cols-3!"
        isPending={isPending}
        dropdown={
          <CustomDateDropdown
            value={dateRange}
            onChange={setDateRange}
            options={dropdownOptions}
          />
        }
      />
      <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
        <Subscription dateRange={dateRange} />
      </div>
    </div>
  );
}
