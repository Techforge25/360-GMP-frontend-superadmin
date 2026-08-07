"use client";
import { useState } from "react";
import OverviewCards from "@/components/common/OverviewCards";
import MarketPlace from "@/components/marketplace/MarketPlace";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { fetchMarketplaceStats } from "@/services/marketplace";
import useMarketplaceStats from "@/hooks/useMarketplaceStats";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import { TypeDropdownOption } from "@/types";
import CustomDateDropdown from "../common/CustomDateDropdown";

export default function MarketPlaceMain() {
  const [dateRange, setDateRange] = useState("all");

  const { data, isPending } = useQuery({
    queryKey: [keys.orderStats, dateRange],
    queryFn: () => fetchMarketplaceStats(dateRange),
  });

  const marketPlaceData = data?.data;

  const marketPlace = useMarketplaceStats(marketPlaceData);

 
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Marketplace Operation Center"
        description="Manage order logs product audit queue and disputed orders"
        cards={marketPlace}
        className="sm:grid-cols-3! lg:grid-cols-3!"
        isPending={isPending}
        dropdown={
          <CustomDateDropdown
            value={dateRange}
            onChange={setDateRange}
            options={dropdownOptions}
          />
        }
      />
      <div className="grid grid-cols-1 gap-[1.5rem] mt-6">
        <MarketPlace dateRange={dateRange} />
      </div>
    </div>
  );
}
