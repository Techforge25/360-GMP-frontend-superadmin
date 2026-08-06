import { ReportStats } from "@/types";
import { BsBox } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { IoBagRemoveSharp } from "react-icons/io5";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function useReportsStats(jobReports: number, businessReports: number, productReports: number, communityReports: number) {
     return [
          {
               id: 1,
               title: "Total jobs",
               value: jobReports,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#f5eeff]",
               iconColor: "text-[#9d4edd]",
               icon: <PiSuitcaseSimple size="1.375rem" />,
          },
          {
               id: 2,
               title: "Total business",
               value: businessReports,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#f5eeff]",
               iconColor: "text-[#9d4edd]",
               icon: <IoBagRemoveSharp size="1.375rem" />,
          },
          {
               id: 3,
               title: "Total product",
               value: productReports,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#f5eeff]",
               iconColor: "text-[#9d4edd]",
               icon: <BsBox size="1.375rem" />,
          },
          {
               id: 4,
               title: "Total community",
               value: communityReports,
               subtitle: "",
               subtitletwo: "",
               showDot: false,
               iconBg: "bg-[#f5eeff]",
               iconColor: "text-[#9d4edd]",
               icon: <FaUsers size="1.375rem" />,
          },
     ]
}