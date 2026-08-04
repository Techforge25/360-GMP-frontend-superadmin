"use client";
import { useRef } from "react";
import DataTable, { Column } from "@/components/common/DataTable";
import { MarketplaceReportTableRowData, ReportModalRef } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import { FaEye } from "react-icons/fa6";
import { marketplaceReportTableData } from "@/constants/reports/reportTable";
import ReportModal from "../ReportModal";

const columns = (
  modalRef: React.RefObject<ReportModalRef | null>,
): Column<MarketplaceReportTableRowData>[] => [
  {
    key: "business",
    header: "Business Name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <Image
          src={row?.reportedJob?.owner?.logo}
          alt={row?.reportedJob?.owner?.companyName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.reportedJob?.owner?.companyName}
          </span>

          <span className="text-sm text-text-hint">
            {row?.reportedJob?.owner?.email}
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
    align: "center",
    render: () => (
      <button
        onClick={() => modalRef.current?.open()}
        className="mx-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100"
      >
        <FaEye size={18} />
      </button>
    ),
  },
];

export default function ReportBusinessReportTable() {
  const modalRef = useRef<ReportModalRef>(null);

  return (
    <>
      <div className="pt-4">
        <DataTable
          columns={columns(modalRef)}
          data={marketplaceReportTableData}
          rowKey={(row) => row._id}
        />
      </div>

     <ReportModal ref={modalRef} reportType="business" />
    </>
  );
}
