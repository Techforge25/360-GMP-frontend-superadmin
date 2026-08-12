"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import { TypeCommunityReport } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import ReportActionButtons from "../ReportActionButtons";

const reportType = "community";

interface Props {
  isPending: boolean;
  reportsData: TypeCommunityReport[];
}

const columns: Column<TypeCommunityReport>[] = [
  {
    key: "reportedJob",
    header: "community Name",
    render: (row) => (
      <div className="flex flex-col">
        <span className="text-[1rem] font-medium text-text-secondary truncate w-[14rem]">
          {row?.reportedCommunity?.name}
        </span>
      </div>
    ),
  },

  {
    key: "createdAt",
    header: "Date",
    render: (row) => (
      <span className="text-[1rem] text-text-light">
        {formatDate(row?.createdAt)}
      </span>
    ),
  },

  {
    key: "reportedBy",
    header: "Reported By",
    render: (row) => (
      <div className="flex items-center gap-3">
        <Image
          src={row?.reportedBy?.logo || "/images/user-icon.webp"}
          alt={row?.reportedBy?.fullName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary truncate w-[14rem]">
            {row?.reportedBy?.fullName}
          </span>

          <span className="text-sm text-text-gray-more truncate w-[14rem]">
            {row?.reportedBy?.email}
          </span>
        </div>
      </div>
    ),
  },

  // {
  //   key: "reason",
  //   header: "Reason",
  //   render: (row) => (
  //     <span className="inline-flex rounded-full border border-gray-400 bg-gray-100 px-4 py-1 text-sm text-gray-700">
  //       {row?.reason}
  //     </span>
  //   ),
  // },

  {
    key: "business",
    header: "Business",
    render: (row) => (
      <div className="flex items-center gap-3">
        <Image
          src={row?.reportedCommunity?.owner?.logo || "/images/user-icon.webp"}
          alt={row?.reportedCommunity?.owner?.companyName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary truncate w-[14rem]">
            {row?.reportedCommunity?.owner?.companyName}
          </span>

          <span className="text-sm text-text-gray-more truncate w-[14rem]">
            {row?.reportedCommunity?.owner?.email}
          </span>
        </div>
      </div>
    ),
  },

  {
    key: "action",
    header: "Action",
    render: (row) => (
      <>
        <ReportActionButtons ReportId={row._id} reportType={reportType} reportModal='Community' />
      </>
    ),
  },
];

export default function CommunityTable({ isPending, reportsData }: Props) {
    const borderRadius = "rounded-[0px]! border-none"
  return (
    <>
      <div>
        <DataTable
          columns={columns}
          data={reportsData}
          rowKey={(row) => row._id}
          isLoading={isPending}
          borderRadius={borderRadius}
        />
      </div>
    </>
  );
}
