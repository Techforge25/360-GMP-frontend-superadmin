import { ReportStats } from "@/types";
import Image from "next/image";
import { BsBox } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { IoBagRemoveSharp } from "react-icons/io5";
import { PiSuitcaseSimple } from "react-icons/pi";
import jobIcon from "@/assets/jobCardIcons.svg"
import businessIcon from "@/assets/BusinessIcon.svg"
import productIcon from "@/assets/productIcon.svg"
import comunnityIcon from "@/assets/TotalComunnituesIcon.svg"
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
               icon: 
               <Image src={jobIcon} alt="" width={100} height={100} className="w-[1.146rem] h-[1.089rem]" />
               
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
               icon: <Image src={businessIcon} alt="" width={100} height={100} className="w-[1.146rem] h-[1.089rem]" />,
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
               icon: <Image src={productIcon} alt="" width={100} height={100} className="w-[1.146rem] h-[1.089rem]" />,
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
               icon: <Image src={comunnityIcon} alt="" width={100} height={100} className="w-[1.146rem] h-[1.089rem]" />,
          },
     ]
}