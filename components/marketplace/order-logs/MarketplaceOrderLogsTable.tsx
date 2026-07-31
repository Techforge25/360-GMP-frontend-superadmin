"use client";

import { useRef } from "react";
import DataTable, { Column } from "@/components/common/DataTable";
import { MarketPlaceOrderLogsTableRowData, OrderModalRef } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import { MarketPlaceOrderLogsTable } from "@/constants/marketplace/MarketPlaceOrderLogsTable";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import { FaEye } from "react-icons/fa6";
import OrderModal from "./OrderModal";

const columns = (
  modalRef: React.RefObject<OrderModalRef | null>,
): Column<MarketPlaceOrderLogsTableRowData>[] => [
  {
    key: "buyer",
    header: "Buyer",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.buyerInfo?.logo}
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
    header: "Seller",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.sellerInfo?.logo}
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
    key: "totalAmount",
    header: "Total Amount",
    render: (row) => (
      <span className="text-[1rem] text-text-secondary">
        ${row?.totalAmount?.toFixed(2)}
      </span>
    ),
  },
  {
    key: "createdAt",
    header: "Order Date",
    render: (row) => (
      <span className="text-[1rem] text-date-time">
        {formatDate(row?.createdAt)}
      </span>
    ),
  },
  {
    key: "orderStatus",
    header: "Status",
    render: (row) => <StatusBadge status={row?.orderStatus} />,
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: () => (
      <span
        onClick={() => modalRef.current?.open()}
        className="flex cursor-pointer items-center justify-center text-text-secondary text-[1rem]"
      >
        <FaEye />
      </span>
    ),
  },
];

export default function MarketplaceOrderLogsTable() {
  const modalRef = useRef<OrderModalRef>(null);

  return (
    <>
      <div className="pt-4">
        <DataTable
          columns={columns(modalRef)}
          data={MarketPlaceOrderLogsTable}
          rowKey={(row) => row._id}
        />
      </div>

      <OrderModal ref={modalRef} />
    </>
  );
}
