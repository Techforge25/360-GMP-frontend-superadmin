import { TypeJobsStats } from "@/types";
import Image from "next/image";
import activeJobs from "@/assets/activeJobsCardIcon.svg";
import activeReport from "@/assets/activeReportsCardIcons.svg";
export default function useJobsStats(data: TypeJobsStats) {
  return [
    {
      id: 1,
      title: "Total Active Jobs",
      value: data?.totalActiveJobs,
      subtitle: "",
      subtitletwo: "",
      showDot: false,
      iconBg: "bg-[#f5eeff]",
      iconColor: "",
      icon: (
        <Image
          src={activeJobs}
          width={100}
          height={100}
          alt=""
          className="w-[1.375rem] h-[1.375rem]"
        />
      ),
    },
    {
      id: 2,
      title: "Active Reports",
      value: data?.totalReportedJobs,
      subtitle: "",
      subtitletwo: "",
      showDot: false,
      iconBg: "bg-[#FFF5EC]",
      iconColor: "",
      icon: (
        <Image
          src={activeReport}
          width={100}
          height={100}
          alt=""
          className="w-[1.375rem] h-[1.375rem]"
        />
      ),
    },
  ];
}
