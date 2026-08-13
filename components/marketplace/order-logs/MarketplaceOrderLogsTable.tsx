"use client";
import { useState } from "react";
import DataTable, { Column } from "@/components/common/DataTable";
import {
  MarketPlaceOrderLogsTableRowData,
  TypeOrderLog,
} from "@/types";
import Image from "next/image";
import { formatDate, formatNumber } from "@/helpers";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import OrderLogActionButtons from "./OrderLogActionButtons";

interface Props {
  orderLogs: TypeOrderLog[];
  isPending: boolean;
}

const columns: Column<MarketPlaceOrderLogsTableRowData>[] = [
  {
    key: "createdAt",
    header: "order ID & Date",
    render: (row) => (
      <div className="flex flex-col">
        <span className="text-[1rem] font-medium text-text-light">
          {`#${row?._id.slice(-6).toUpperCase()}`}
        </span>
        <span className="text-[0.875rem] text-date-time font-inter font-normal">
          {formatDate(row?.createdAt)}
        </span>
      </div>
    ),
  },
  {
    key: "buyer",
    header: "Buyer Info",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.buyerInfo?.logo || "/images/user-icon.webp"}
          alt={row?.buyerInfo?.fullName}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.buyerInfo?.fullName}
          </span>

          <span className="mt-0.5 text-sm text-text-hint">
            {row?.buyerInfo?.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    key: "seller",
    header: "Seller Info",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.sellerInfo?.logo || "/images/user-icon.webp"}
          alt={row?.sellerInfo?.companyName}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.sellerInfo?.companyName}
          </span>

          <span className="mt-0.5 text-sm text-text-hint">
            {row?.sellerInfo?.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    key: "orderStatus",
    header: "Status",
    render: (row) => <StatusBadge status={row?.orderStatus} />,
  },
  {
    key: "totalAmount",
    header: "Amount",
    render: (row) => (
      <span className="text-[1rem] text-text-secondary">
        ${formatNumber(Number(row?.totalAmount?.toFixed(2)))}
      </span>
    ),
  },

  {
    key: "action",
    header: "Action",
    // align: "center",
    render: (row) => (
      <>
        <OrderLogActionButtons OrderId={row?._id} />
      </>
    ),
  },
];

export default function MarketplaceOrderLogsTable({
  isPending,
  orderLogs,
}: Props) {
 const borderRadius = "border-none"
  return (
    <>
      <div className="pt-0">
        <DataTable
          columns={columns}
          data={orderLogs}
          rowKey={(row) => row._id}
          isLoading={isPending}
          borderRadius={borderRadius}
        />
      </div>
    </>
  );
}
