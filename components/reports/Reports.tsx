"use client";
import { useState } from "react";
import Tabs from "../common/Tabs";
import JobReportTable from "./JobReports/JobReportTable";
import { Reporttabs } from "@/constants/reports/Reporttabs";
import BusinessReportTable from "./BusinessReport/BusinessReportTable";
import ProductReportTable from "./ProductReport/ProductReportTable";
import CommunityReportTable from "./CommunityReport/CommunityReportTable";

interface Props {
  dateRange: string;
}

export default function Reports({ dateRange }: Props) {
  const [currentTab, setCurrentTab] = useState(
    Reporttabs[0]?.id || "jobs-reports",
  );

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={Reporttabs}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      <div className={`mt-6 transition-opacity duration-200 `}>
        {currentTab === "jobs-reports" && (
          <JobReportTable dateRange={dateRange} />
        )}

        {currentTab === "business-reports" && (
          <>
            <BusinessReportTable dateRange={dateRange} />
          </>
        )}
        {currentTab === "product-reports" && (
          <>
            <ProductReportTable dateRange={dateRange} />
          </>
        )}
        {currentTab === "coummunity-reports" && (
          <>
            <CommunityReportTable dateRange={dateRange} />
          </>
        )}
      </div>
    </>
  );
}
