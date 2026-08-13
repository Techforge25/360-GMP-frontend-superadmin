import { dashboardCard } from "@/constants/dashboard/dashboardOverview";
import OverviewCards from "../common/OverviewCards";
import NewBusinessTable from "./BusinessTable/NewBusinessTable";
import Graphs from "./Graphs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fafafc] p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Dashboard Overview"
        className="sm:grid-cols-3 lg:grid-cols-3"
        description="Welcome back"
        cards={dashboardCard}
      />
      <Graphs />
      <NewBusinessTable />
    </div>
  );
}
