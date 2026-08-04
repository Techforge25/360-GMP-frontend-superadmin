import { FaDollarSign } from "react-icons/fa6";
import { OverviewCardItem } from "@/components/common/OverviewCards";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
export const MarketPlaceCard: OverviewCardItem[] = [
  {
    title: "Total Marketplace Sales",
    value: 1,
    subtitle: "",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#f5eeff]",
    iconColor: "text-[#9d4edd]",
    icon: <FaDollarSign size="1.375rem" />,
  },
  {
    title: "Pending Audits",
    value: 14,
    subtitle: "Products waiting approval",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#eff5ff]",
    iconColor: "text-[#2a75d3]",
    icon: <MdOutlinePendingActions size="1.375rem" />,
  },
  {
    title: "Total Disputed Orders",
    value: 45,
    subtitle: "",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#FFDFDF]",
    iconColor: "text-[#FF383C]",
    icon: <IoAlertCircleOutline size="1.375rem" />,
  },
  {
    title: "Active Escrow",
    value: 45,
    subtitle: "Funds held securely",
    subtitletwo: "",
    showDot: false,
    iconBg: "bg-[#FFF5EC]",
    iconColor: "text-[#FF8D28]",
    icon: <AiOutlineSafetyCertificate size="1.375rem" />,
  },
];