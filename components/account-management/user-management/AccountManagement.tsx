"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { accountManagementTabs } from "@/constants/acount-management/AccountManagementtabs";
import Tabs from "../../common/Tabs";
import AllUserTable from "./AllUserTable";
import AllBusinessTable from "../business-management/AllBusinessTable";

interface Props {
  dateRange: string;
}

export default function AccountManagement({ dateRange }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentTab = searchParams.get("tab") || accountManagementTabs[0]?.id;

  const handleTabChange = (tabId: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.replace(`${window.location.pathname}?${params.toString()}`, {
        scroll: false,
      });
    });
  };

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={accountManagementTabs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div
        className={`mt-6 transition-opacity duration-200 ${isPending ? "opacity-50" : "opacity-100"}`}
      >
        {isPending ? (
          <h1>Loading......</h1>
        ) : (
          <>
            {currentTab === "all-user" && (
              <AllUserTable dateRange={dateRange} currentTab={currentTab} />
            )}

            {currentTab === "all-business" && (
              <AllBusinessTable dateRange={dateRange} currentTab={currentTab} />
            )}
          </>
        )}

      </div>
    </>
  );
}
