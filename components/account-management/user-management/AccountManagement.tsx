"use client";

import { useState } from "react";
import { accountManagementTabs } from "@/constants/acount-management/AccountManagementtabs";
import Tabs from "../../common/Tabs";
import AllUserTable from "./AllUserTable";
import AllBusinessTable from "../business-management/AllBusinessTable";

interface Props {
  dateRange: string;
}

export default function AccountManagement({ dateRange }: Props) {
  const [currentTab, setCurrentTab] = useState(
    accountManagementTabs[0]?.id || "all-user"
  );

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={accountManagementTabs}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      <div className="mt-6">
        {currentTab === "all-user" && (
          <AllUserTable
            dateRange={dateRange}
            currentTab={currentTab}
          />
        )}

        {currentTab === "all-business" && (
          <AllBusinessTable
            dateRange={dateRange}
            currentTab={currentTab}
          />
        )}
      </div>
    </>
  );
}