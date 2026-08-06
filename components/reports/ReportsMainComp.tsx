'use client'

import useReportsStats from "@/hooks/useReportsStats"
import OverviewCards from "../common/OverviewCards"
import Reports from "./Reports"
import { useQuery } from "@tanstack/react-query"
import { ReportsCard } from "@/constants/reports/ReportsCard"
import { keys } from "@/keys"
import { getReportStat } from "@/services/reports"
import { useState } from "react"

export default function ReportsMainComp() {
     // const [dateRange, setDateRange] = useState('all')
     // const { data, isPending } = useQuery({
     //      queryKey: [keys.reportsStats, dateRange],
     //      queryFn: () => getReportStat(dateRange)
     // })

     // const reportsData = data?.data?.docs
     // const reports = useReportsStats(reportsData)
     return (
          <>
               <OverviewCards
                    heading="Report Management"
                    description="Review, investigate, and resolve user-submitted reports across Businesses, Products, Jobs, and Community Groups."
                    cards={ReportsCard}
                    className="sm:grid-cols-4! lg:grid-cols-4!"
                    dropdown={
                         <select className="border border-border bg-white px-3 py-2 rounded-xl text-sm font-medium text-gray-700 outline-none">
                              <option>All Time</option>
                              <option>Last 7 Days</option>
                              <option>Last 1 Month</option>
                              <option>Last 6 Month</option>
                              <option>Last Year</option>
                         </select>
                    }
               />
               <div className="grid grid-cols-1  gap-[1.5rem] mt-6">
                    <Reports />
               </div>
          </>
     )
}