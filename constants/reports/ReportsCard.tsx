import React from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { OverviewCardItem } from "@/components/common/OverviewCards";
import { IoBagRemoveSharp } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
export const ReportsCard: OverviewCardItem[] = [
  {
    id: 1,
    title: "Total jobs",
    value: "105",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <PiSuitcaseSimple    size="1.375rem" />,
  },
  {
    id: 2,
    title: "Total business",
    value: "70",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
  iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <IoBagRemoveSharp   size="1.375rem" />,
  },
  {
    id: 3,
    title: "Total product",
    value: "55",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
   iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <BsBox    size="1.375rem" />,
  },
  {
    id: 4,
    title: "Total community",
    value: "32",
    subtitle: "",
    subtitletwo: "",
    showDot: false,
     iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <FaUsers size="1.375rem" />,
  },  
];