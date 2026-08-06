'use client'
import OverviewCards from "@/components/common/OverviewCards";
import { ReportsCard } from "@/constants/reports/ReportsCard";
import Reports from "@/components/reports/Reports";
import useReportsStats from "@/hooks/useReportsStats";
import ReportsMainComp from "@/components/reports/ReportsMainComp";

export default function page() {
  const reports = useReportsStats()
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <ReportsMainComp />
    </div>
  );
}