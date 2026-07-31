"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { accountManagementTabs } from "@/constants/acount-management/AccountManagementtabs";
import Tabs from "../../common/Tabs";
import AllUserTable from "./AllUserTable";
import AllBusinessTable from "../business-management/AllBusinessTable";

export default function AccountManagement() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentTab = searchParams.get("tab") || accountManagementTabs[0]?.id;

  const handleTabChange = (tabId: string) => {
    startTransition(() => {
      router.push(`?tab=${tabId}`, { scroll: false });
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

      <div className={`mt-6 transition-opacity duration-200 ${isPending ? "opacity-50" : "opacity-100"}`}>
        {currentTab === "all-user" && (
         <AllUserTable/>
        )}

        {currentTab === "all-business" && (
            <AllBusinessTable/>
        )}
      </div>
    </>
  );
}