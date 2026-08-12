import { formatNumber } from "@/helpers";
import { TypeMarketplaceStat } from "@/types";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";

export default function useMarketplaceStats(data: TypeMarketplaceStat) {
     
     return ([
          {
               title: "Total Marketplace Sales",
               value: '$' + formatNumber(Number(data?.totalSales?.toFixed(2))),
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#f5eeff]",
               iconColor: "text-[#9d4edd]",
               icon: <FaDollarSign size="1.375rem" />,
          },
          {
               title: "Products Waiting Approval",
               value: formatNumber(data?.totalPendingProducts),
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#eff5ff]",
               iconColor: "text-[#2a75d3]",
               icon: <MdOutlinePendingActions size="1.375rem" />,
          },
          // {
          //      title: "Total Disputed Orders",
          //      value: data?.totalDisputedOrders,
          //      subtitle: "",
          //      subtitletwo: "",
          //      showDot: false,
          //      iconBg: "bg-[#FFDFDF]",
          //      iconColor: "text-[#FF383C]",
          //      icon: <IoAlertCircleOutline size="1.375rem" />,
          // },
          // {
          //      title: "Funds Held Securely ( Active Escrow )",
          //      value: '$' + formatNumber(Number(data?.totalFundsHeldInEscrow?.toFixed(2))),
          //      subtitle: "",
          //      subtitletwo: "",
          //      showDot: false,
          //      iconBg: "bg-[#FFF5EC]",
          //      iconColor: "text-[#FF8D28]",
          //      icon: <AiOutlineSafetyCertificate size="1.375rem" />,
          // },
     ])
}                    