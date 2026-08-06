'use client'

import useReportsStats from "@/hooks/useReportsStats"
import OverviewCards from "../common/OverviewCards"
import Reports from "./Reports"
import { useQuery } from "@tanstack/react-query"
import { ReportsCard } from "@/constants/reports/ReportsCard"
import { keys } from "@/keys"
import { getReportStat } from "@/services/reports"
import { useState } from "react"
import { dropdownOptions } from "@/constants/subscription/SubsriptionTable"
import { TypeDropdownOption } from "@/types"

export default function ReportsMainComp() {
     const [dateRange, setDateRange] = useState('all')
     const { data, isPending } = useQuery({
          queryKey: [keys.reportsStats, dateRange],
          queryFn: () => getReportStat(dateRange)
     })

     const reportsData = data?.data
     const reports = useReportsStats(reportsData?.jobReports, reportsData?.businessReports, reportsData?.productReports, reportsData?.communityReports)

     const changeDateRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setDateRange(e.target.value);
     }

     return (
          <>
               <OverviewCards
                    heading="Report Management"
                    description="Review, investigate, and resolve user-submitted reports across Businesses, Products, Jobs, and Community Groups."
                    cards={reports}
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
               <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
                    <Reports dateRange={dateRange} />
               </div>
          </>
     )
}