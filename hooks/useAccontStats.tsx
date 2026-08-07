import { TypeAccountStats } from "@/types";
import { FiBriefcase, FiUsers } from "react-icons/fi";

export default function useAccountStats(data: TypeAccountStats) {
     return [{
          id: 1,
          title: "Total Users",
          value: data?.totalParentUsers,
          subtitle: `${data?.totalUserProfiles} Users`,
          subtitletwo: `${data?.totalBusinessProfiles} Business`,
          showDot: true,
          iconBg: "bg-[#f5eeff]",
          iconColor: "text-[#9d4edd]",
          icon: <FiUsers size="1.375rem" />,
     },
     {
          id: 2,
          title: "Business Verification Queue",
          value: data?.pendingBusinessProfiles,
          subtitle: "Pending Approval",
          subtitletwo: "",
          showDot: false,
          iconBg: "bg-[#eff5ff]",
          iconColor: "text-[#2a75d3]",
          icon: <FiBriefcase size="1.375rem" />,
     },
     ]
}