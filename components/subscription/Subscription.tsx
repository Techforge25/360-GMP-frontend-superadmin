"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FreeTrialTable from "./free-trial/FreeTrialTable";
import Tabs from "../common/Tabs";
import { Subscriptiontabs } from "@/constants/subscription/Subscriptiontabs";
import PaidMemberTable from "./paid-member/PaidMemberTable";

type Props = {
  dateRange: string;
}

export default function Subscription({ dateRange }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentTab = searchParams.get("tab") || Subscriptiontabs[0]?.id;

  const handleTabChange = (tabId: string) => {
    startTransition(() => {
      router.push(`?tab=${tabId}`, { scroll: false });
    });
  };

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={Subscriptiontabs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div className={`mt-6 transition-opacity duration-200 ${isPending ? "opacity-50" : "opacity-100"}`}>
        {currentTab === "free-trial" && (
          <FreeTrialTable dateRange={dateRange}/>
        )}

        {currentTab === "all-business" && (
          <PaidMemberTable dateRange={dateRange} />
        )}
      </div>
    </>
  );
}