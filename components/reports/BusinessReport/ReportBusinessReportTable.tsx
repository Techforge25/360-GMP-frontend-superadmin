"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import { MarketplaceReportTableRowData, TypeViewBusinessReport } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import ReportActionButtons from "../ReportActionButtons";

interface Props {
  reportsData: TypeViewBusinessReport[];
  isPending: boolean;
}

const reportType = "business";
const columns: Column<any>[] = [
  {
    key: "business",
    header: "Business Name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <Image
          src={row?.reportedBusiness?.logo}
          alt={row?.reportedBusiness?.companyName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.reportedBusiness?.companyName}
          </span>

          <span className="text-sm text-text-hint">
            {row?.reportedBusiness?.email}
          </span>
        </div>
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
          src={row?.reportedBy?.logo}
          alt={row?.reportedBy?.fullName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.reportedBy?.fullName}
          </span>

          <span className="text-sm text-text-hint">
            {row?.reportedBy?.email}
          </span>
        </div>
      </div>
    ),
  },

  {
    key: "reason",
    header: "Reason",
    render: (row) => (
      <span className="inline-flex rounded-full border border-gray-400 bg-gray-100 px-4 py-1 text-sm text-gray-700">
        {row?.reason}
      </span>
    ),
  },

  {
    key: "action",
    header: "Action",
    render: (row) => (
      <>
        <ReportActionButtons ReportId={row._id} reportType={reportType} reportModal='Business'/>
      </>
    ),
  },
];

export default function ReportBusinessReportTable({ reportsData, isPending }: Props) {
  return (
    <>
      <div className="pt-4">
        <DataTable
          columns={columns}
          data={reportsData}
          rowKey={(row) => row._id}
          isLoading={isPending}
        />
      </div>
    </>
  );
}
