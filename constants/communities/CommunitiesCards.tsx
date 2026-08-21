import React from "react";
import { OverviewCardItem } from "@/components/common/OverviewCards";
import Image from "next/image";
import User from "@/assets/image 95.png";
import CommunityIcon from "@/assets/communities.svg";
import reportIcons from "@/assets/reportsIcon.svg";
import { TypeCommunityStats } from "@/types";

export default function getCommunityStatsCards(
  data?: TypeCommunityStats,
): OverviewCardItem[] {
  return [
    {
      id: 1,
      title: "Active Communities",
      value: data?.activeCommunitiesCount ?? 0,
      subtitle: "",
      subtitletwo: "",
      showDot: false,
      iconBg: "bg-[#F1E9FF]",
      iconColor: "text-[#240457]",
      icon: (
        <Image
          src={CommunityIcon}
          alt=""
          width={100}
          height={100}
          className="w-[1.146rem] h-[1.146rem]"
        />
      ),
    },
    {
      id: 2,
      title: "Reported Communities",
      value: data?.reportedCommunitiesCount ?? 0,
      subtitle: "",
      subtitletwo: "",
      showDot: false,
      iconBg: "bg-[#FFF5EC]",
      iconColor: "text-[#FF8D28]",
      icon: (
        <Image
          src={reportIcons}
          alt=""
          width={100}
          height={100}
          className="w-[0.917rem] h-[1.146rem]"
        />
      ),
    },
  ];
}


export const communityCards = [
  {
    title: "Community Owner",
    image: User,
    name: "Michael Torres",
    description: "Senior Sustainability Consultant",
    date: "Join on Sep 26, 2022",
  },
  {
    title: "Community info",
    description:
      "A global knowledge dedicated to sharing knowledge and best practice in automation, robotics, 3d printing and lean production methodologies.",
  },
];
