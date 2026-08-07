"use client";
import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentTab = searchParams.get("tab") || Reporttabs[0]?.id;

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
          tabs={Reporttabs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div
        className={`mt-6 transition-opacity duration-200 ${isPending ? "opacity-50" : "opacity-100"}`}
      >
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
