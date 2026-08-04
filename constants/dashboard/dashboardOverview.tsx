import { OverviewCardItem } from "@/components/common/OverviewCards";
import { BiDollarCircle } from "react-icons/bi";
import { FiBriefcase, FiShield, FiUsers } from "react-icons/fi";

export const dashboardCard: OverviewCardItem[] = [
  {
    id: 1,
    title: "Total Revenue",
    value: 124500,
    subtitle: "10% Commission + Subscription",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#f4f2fa]",
    iconColor: "text-[#2e1c5b]",
    icon: <BiDollarCircle size="1.5rem" />,
  },
  {
    id: 2,
    title: "Active Escrow",
    value: 45200,
    subtitle: "Funds Held Securely",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#fff5ee]",
    iconColor: "text-[#ff8246]",
    icon: <FiShield size="1.375rem" />,
  },
  {
    id: 3,
    title: "Total User Profiles",
    value: 8450,
    subtitle: "All Time Users",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#eff5ff]",
    iconColor: "text-[#2a75d3]",
    icon: <FiUsers size="1.375rem" />,
  },
  {
    id: 4,
    title: "Total Business Profiles",
    value: 13,
    subtitle: "All Time Business",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <FiBriefcase size="1.375rem" />,
  },
];
