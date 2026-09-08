  import Image from "next/image";
  import overviewIcon from "@/assets/overviewIcon.svg"
  import activeJobs from "@/assets/activeJobsIcon.svg"
  import reportedJobs from "@/assets/reportJobsIcon.svg"
  export const JobsManagementtabs = [
    {
      id: "over-view",
      label: "Over View",
      icon: <Image src={overviewIcon} width={100} height={100} alt="" className="w-[1rem] h-[1rem]" />,
      active: true,
    },
    {
      id: "active-job",
      label: "Active Job",
      icon: <Image src={activeJobs} width={100} height={100} alt="" className="w-[1rem] h-[1rem]" />,
    },
    {
      id: "reported-job",
      label: "Reported Job",
      icon: <Image src={reportedJobs} width={100} height={100} alt="" className="w-[1rem] h-[1rem]" />,
    },
  ];