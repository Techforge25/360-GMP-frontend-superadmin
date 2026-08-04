import { TypeSubscriptionStats } from "@/types";
import { BsWallet } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

export default function useSubscriptionStats(data: TypeSubscriptionStats) {
     return ([
          {
               title: "Active Paid Members",
               value: data?.totalPaidMembers,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#f5eeff]",
               iconColor: "text-[#9d4edd]",
               icon: <FaCrown size="1.375rem" />,
          },
          {
               title: "Total Active Trials",
               value: data?.totalTrialMembers,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#eff5ff]",
               iconColor: "text-[#2a75d3]",
               icon: <FiUsers size="1.375rem" />,
          },
          {
               title: "Trial Conversion Rate",
               value: data?.trialConversionPercentage,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#B4B4B433]",
               iconColor: "text-brand-primary",
               icon: <BsWallet size="1.375rem" />,
          }
     ])
}                    