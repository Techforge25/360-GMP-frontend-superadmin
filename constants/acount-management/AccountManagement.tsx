import React from "react";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { OverviewCardItem } from "@/components/common/OverviewCards";

export const dashboardCards: OverviewCardItem[] = [
  {
    id: 1,
    title: "Total Users",
    value: 450,
    subtitle: "3,200 Users",
    subtitletwo: "8,500 Business",
    showDot: true,
    iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <FiUsers size="1.375rem" />,
  },
  {
    id: 2,
    title: "Business Verification Queue",
    value: 18,
    subtitle: "Pending Approval",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#eff5ff]",
    iconColor: "text-[#2a75d3]",
    icon: <FiBriefcase size="1.375rem" />,
  },
];