'use client'
import { getAccountStat } from "@/services/account-management";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { useState } from "react";
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable";
import { TypeDropdownOption } from "@/types";
import OverviewCards from "../common/OverviewCards";
import AccountManagement from "./user-management/AccountManagement";
import useAccountStats from "@/hooks/useAccontStats";

export default function AccountManagementComp() {
     const [dateRange, setDateRange] = useState('all')
     const { data, isPending } = useQuery({
          queryKey: [keys.accountStats, dateRange],
          queryFn: () => getAccountStat(dateRange),
     });


     const changeDateRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setDateRange(e.target.value);
     }

     const accountCards = data?.data
     const accountStatistics = useAccountStats(accountCards)

     return (
          <>
               <OverviewCards
                    heading="Account Management"
                    description="Monitor platform participants, verify accounts"
                    cards={accountStatistics}
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
               <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
                    <AccountManagement dateRange={dateRange} />
               </div>
          </>
     )
}