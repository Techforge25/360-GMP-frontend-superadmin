"use client";

import OverviewCards from "@/components/common/OverviewCards";
import Communities from "./Communities";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getCommunitiesStats } from "@/services/account-management";
import getCommunityStatsCards from "@/constants/communities/CommunitiesCards";

export default function CommunitiesMain() {
  const { data, isPending } = useQuery({
    queryKey: [keys.communitiesStats],
    queryFn: getCommunitiesStats,
  });

  const communitiesCards = data?.data;
  const communitiesStatistics = getCommunityStatsCards(communitiesCards);

  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <OverviewCards
        heading="Communities & Networking"
        description="Real-time overview of communities & networking activity and moderation status."
        cards={communitiesStatistics}
        className="sm:grid-cols-2! lg:grid-cols-2!"
      />

      <div className="grid grid-cols-1 gap-[1.5rem] mt-6">
        <Communities />
      </div>
    </div>
  );
}