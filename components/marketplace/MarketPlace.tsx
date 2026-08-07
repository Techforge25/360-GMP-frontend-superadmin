"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tabs from "../common/Tabs";
import OrderLogsTable from "./order-logs/OrderLogsTable";
import { MarketPlacetabs } from "@/constants/marketplace/MarketPlacetabs";
import ProductAuditTable from "./product-audit-queue/ProductAuditTable";
import ProductApprovedTable from "./product-approve-reject/ProductApprovedTable";

interface Props {
  dateRange: string;
}

export default function MarketPlace({ dateRange }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentTab = searchParams.get("tab") || MarketPlacetabs[0]?.id;

  const handleTabChange = (tabId: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);

      router.replace(`?${params.toString()}`, {
        scroll: false,
      });
    });
  };

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={MarketPlacetabs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div
        className={`mt-6 transition-opacity duration-200 ${isPending ? "opacity-50" : "opacity-100"}`}
      >
        {currentTab === "order-logs" && (
          <OrderLogsTable dateRange={dateRange} />
        )}
        {currentTab === "product-audit-queue" && (
          <ProductAuditTable dateRange={dateRange} />
        )}
        {currentTab === "product-approve-reject" && (
          <ProductApprovedTable dateRange={dateRange} />
        )}
      </div>
    </>
  );
}
