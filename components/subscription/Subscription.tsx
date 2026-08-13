"use client";
import { useState } from "react";
import FreeTrialTable from "./free-trial/FreeTrialTable";
import Tabs from "../common/Tabs";
import { Subscriptiontabs } from "@/constants/subscription/Subscriptiontabs";
import PaidMemberTable from "./paid-member/PaidMemberTable";

type Props = {
  dateRange: string;
};

export default function Subscription({ dateRange }: Props) {
  const [currentTab, setCurrentTab] = useState(
    Subscriptiontabs[0]?.id || "free-trial",
  );

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={Subscriptiontabs}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      <div className={`mt-6 transition-opacity duration-200`}>
        {currentTab === "free-trial" && (
          <FreeTrialTable dateRange={dateRange} />
        )}

        {currentTab === "all-business" && (
          <PaidMemberTable dateRange={dateRange} />
        )}
      </div>
    </>
  );
}
