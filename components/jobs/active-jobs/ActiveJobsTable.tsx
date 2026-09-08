import DataTable, { Column } from "@/components/common/DataTable";
import { TypeLatestJob } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import ActiveJobsTableActions from "./ActiveJobsTableActions";
import applicantUsers from "@/assets/applicantUserIcon.svg"

interface Props {
  isPending: boolean;
  latestJobs: TypeLatestJob[];
}

const columns: Column<TypeLatestJob>[] = [
  {
    key: "jobTitle",
    header: "Jobs Title",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium font-inter text-text-dark truncate w-[16rem]">
            {row?.jobTitle}
          </span>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <span className="text-text-gray-more text-[0.875rem] font-normal font-inter">
              {row?.location?.city}
            </span>

            <span className="text-text-secondary text-[0.875rem]">•</span>

            <span className="text-text-gray-more text-[0.875rem] font-normal font-inter">
              {row?.location?.country}
            </span>
          </div>
        </div>
      </div>
    ),
  },

  {
    key: "businessProfile",
    header: "Company",
    
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.businessProfile?.logo || "/images/user-icon.webp"}
          alt={row?.businessProfile?.companyName}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-date-time truncate w-[16rem]">
            {row?.businessProfile?.companyName}
          </span>
        </div>
      </div>
    ),
  },
  {
    key: "createdAt",
    header: "Date/Time Posted",
    align: "center",
    render: (row) => (
      <p className="text-[1rem] text-date-time ">
        {formatDate(row?.createdAt)}
      </p>
    ),
  },
  {
    key: "totalJobApplicants",
    header: "Applicant",
    render: (row) => (
      <span className="text-[1rem] text-date-time flex items-center gap-2">
        <span className="bg-brand-btn-pills rounded-[3.125rem] px-4 py-[0.1rem]  text-white text-[0.75rem] font-medium font-inter">{row?.totalJobApplicants}</span>
        <Image src={applicantUsers} alt="" width={100} height={100}  className="w-[1.375rem] h-[0.688rem]"/>
      </span> 
    ),
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => (
      <ActiveJobsTableActions
        id={row?._id}
      />
    ),
  },
];
const borderRadius = "rounded-2xl! border-none";
export default function ActiveJobsTable({isPending, latestJobs }: Props) {
  return (
    <div>
      <DataTable
        columns={columns}
        data={latestJobs}
        rowKey={(row) => row?._id}
        isLoading={isPending}
        borderRadius={borderRadius}
      />
    </div>
  );
}
