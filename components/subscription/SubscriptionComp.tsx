'use client'
import { SubscriptionsCard } from "@/constants/subscription/SubscriptionsCard";
import OverviewCards from "../common/OverviewCards";
import Subscription from "./Subscription";
import { keys } from "@/keys";
import { getSubscriptionStats } from "@/services/subscription";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { TypeDropdownOption } from "@/types";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";

export default function SubscriptionComp() {
     const [dateRange, setDateRange] = useState('all');
     const { isPending, isSuccess, isError, data, error } = useQuery({
          queryKey: [keys.subscriptionList],
          queryFn: () => getSubscriptionStats(dateRange),
     });

     const changeDateRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setDateRange(e.target.value);
     }

     return (
          <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
               <OverviewCards
                    heading="Subscription & Access"
                    description="Manage user subscriptions, track trial conversions,and oversee platform access controls."
                    cards={SubscriptionsCard}
                    className="sm:grid-cols-3! lg:grid-cols-3!"
                    dropdown={
                         <select className="border border-border bg-white px-3 py-2 rounded-xl text-sm font-medium text-gray-700 outline-none">
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
               <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
                    <Subscription />
               </div>
          </div>
     )
}