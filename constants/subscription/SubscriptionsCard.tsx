import React from "react";
import { FaCrown } from "react-icons/fa6";
import {  FiUsers } from "react-icons/fi";
import { OverviewCardItem } from "@/components/common/OverviewCards";
import { BsWallet } from "react-icons/bs";
export const SubscriptionsCard: OverviewCardItem[] = [
  {
    id: 1,
    title: "Active Paid Members",
    value: "3218",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <FaCrown  size="1.375rem" />,
  },
  {
    id: 2,
    title: "Total Active Trials",
    value: "124",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#eff5ff]",
    iconColor: "text-[#2a75d3]",
    icon: <FiUsers size="1.375rem" />,
  },
  {
    id: 3,
    title: "Trial Conversion Rate",
    value: "18.5%",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#B4B4B433]",
    iconColor: "text-brand-primary",
    icon: <BsWallet  size="1.375rem" />,
  },
];