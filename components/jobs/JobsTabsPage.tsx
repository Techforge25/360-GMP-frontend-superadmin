"use client";

import { useState } from "react";

import Tabs from "../common/Tabs";
import { JobsManagementtabs } from "@/constants/jobs/JobsManagementtabs";
import JobsOverview from "./over-view/JobsOverview";
import ActiveJobs from "./active-jobs/ActiveJobs";
import ReportedJobs from "./reported-jobs/ReportedJobs";

interface Props {
  dateRange: string;
}

export default function JobsTabsPage({ dateRange }: Props) {
  const [currentTab, setCurrentTab] = useState(
    JobsManagementtabs[0]?.id || "over-view",
  );

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={JobsManagementtabs}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      <div className="mt-6">
        {currentTab === "over-view" && (
          <>
            <JobsOverview onViewAllJobs={() => setCurrentTab("active-job")} />
          </>
        )}

        {currentTab === "active-job" && (
          <>
            <ActiveJobs dateRange={dateRange} />
          </>
        )}
        {currentTab === "reported-job" && (
          <>
            <ReportedJobs dateRange={dateRange}  />
          </>
        )}
      </div>
    </>
  );
}
