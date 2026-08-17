'use client'
import OverviewCards from "../common/OverviewCards";
import NewBusinessTable from "./BusinessTable/NewBusinessTable";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { dashboardStats } from "@/services/dashboard";
import useDashboardStats from "@/hooks/useDashboardStatHook";
import dynamic from "next/dynamic";

const Graphs = dynamic(() => import('./Graphs'), {
  loading: () => <p>Loading...</p>,
})

export default function Dashboard() {
  const { data, isPending } = useQuery({
    queryKey: [keys.dashboardStats],
    queryFn: dashboardStats
  })

  const dashboardStatistics = useDashboardStats(data?.data)

  return (
    <div className="min-h-screen bg-[#fafafc] p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Dashboard Overview"
        className="sm:grid-cols-3 lg:grid-cols-3"
        description="Welcome back Super Admin"
        cards={dashboardStatistics}
        isPending={isPending}
      />
      <Graphs />
      <NewBusinessTable />
    </div>
  );
}
