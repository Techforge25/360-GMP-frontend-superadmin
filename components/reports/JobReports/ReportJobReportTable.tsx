"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import { MarketplaceReportTableRowData, ReportsData } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import ReportActionButtons from "../ReportActionButtons";

export interface Props {
  reportsData: ReportsData[];
  isPending: boolean;
}

const reportType = "job";

export default function ReportJobReportTable({ reportsData, isPending }: Props) {
  const columns: Column<MarketplaceReportTableRowData>[] = [
    {
      key: "reportedJob",
      header: "Job Title",
      render: (row) => (
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary truncate w-[14rem]">
            {row?.reportedJob?.jobTitle}
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
        <div className="flex items-center gap-3 ">
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

            <span className="text-sm text-text-gray-more truncate w-[13rem]">
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
            src={row?.reportedJob?.owner?.logo || "/images/user-icon.webp"}
            alt={row?.reportedJob?.owner?.companyName}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />

          <div className="flex flex-col">
            <span className="text-[1rem] font-medium text-text-secondary truncate md:w-[12rem] w-[13rem]">
              {row?.reportedJob?.owner?.companyName}
            </span>

            <span className="text-sm text-text-gray-more truncate  md:w-[12rem] w-[13rem]">
              {row?.reportedJob?.owner?.email}
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
          <ReportActionButtons ReportId={row._id} reportType={reportType} reportModal='Job' />
        </>
      ),
    },
  ];
    const borderRadius = "rounded-[0px]! border-none"
  return (
    <>
      <div className="">
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
