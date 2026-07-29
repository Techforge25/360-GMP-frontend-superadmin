import React from "react";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { OverviewCardItem } from "@/components/common/OverviewCards";

export const dashboardCards: OverviewCardItem[] = [
 {
    id: 1,
    title: "Total Users",
    value: "12,450",
    subtitle: "3,200 Users",
    subtitletwo:"8,500 Business",
    iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <FiUsers size="1.375rem" />,
  },
  {
    id: 2,
    title: "Total User Profiles",
    value: "8,450",
    subtitle: "All Time Users",
    subtitletwo:"",
    iconBg: "bg-[#eff5ff]",
    iconColor: "text-[#2a75d3]",
    icon: <FaFileCircleCheck   size="1.375rem" />,
  },
  
];