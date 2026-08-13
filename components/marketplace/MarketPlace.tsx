"use client";

import { useState} from "react";
import Tabs from "../common/Tabs";
import OrderLogsTable from "./order-logs/OrderLogsTable";
import { MarketPlacetabs } from "@/constants/marketplace/MarketPlacetabs";
import ProductAuditTable from "./product-audit-queue/ProductAuditTable";
import ProductApprovedTable from "./product-approve-reject/ProductApprovedTable";

interface Props {
  dateRange: string;
}

export default function MarketPlace({ dateRange }: Props) {
 const [currentTab, setCurrentTab] = useState(
    MarketPlacetabs[0]?.id || "order-logs",
  );

  return (
    <>
      <div className="mt-2">
        <Tabs
          tabs={MarketPlacetabs}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      <div
        className={`mt-6 transition-opacity duration-200 `}
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
