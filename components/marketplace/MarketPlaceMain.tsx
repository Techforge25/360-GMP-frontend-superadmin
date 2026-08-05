'use client';
import { useState } from "react";
import OverviewCards from "@/components/common/OverviewCards";
import MarketPlace from "@/components/marketplace/MarketPlace";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { fetchMarketplaceStats } from "@/services/marketplace";
import useMarketplaceStats from "@/hooks/useMarketplaceStats";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import { TypeDropdownOption } from "@/types";

export default function MarketPlaceMain() {
  const [dateRange, setDateRange] = useState('all')

  const { data, isPending } = useQuery({
    queryKey: [keys.orderStats, dateRange],
    queryFn: () => fetchMarketplaceStats(dateRange),
  });

  const marketPlaceData = data?.data

  const marketPlace = useMarketplaceStats(marketPlaceData)

  const changeDateRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateRange(e.target.value);
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Marketplace Operation Center"
        description="Manage order logs product audit queue and disputed orders"
        cards={marketPlace}
        className="sm:grid-cols-4! lg:grid-cols-4!"
        isPending={isPending}
        dropdown={
          <select
            value={dateRange}
            onChange={changeDateRange}
            className="border border-border bg-white px-3 py-2 rounded-xl text-sm font-medium text-gray-700 outline-none">
            {dropdownOptions?.map((option: TypeDropdownOption, index: number) => {
              return (
                <option value={option.value} key={index}>
                  {option.label}
                </option>
              )
            })}
          </select>
        }
      />
      <div className="grid grid-cols-1 gap-[1.5rem] mt-6">
        <MarketPlace dateRange={dateRange} />
      </div>
    </div>
  );
}