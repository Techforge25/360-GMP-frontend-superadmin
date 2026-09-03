"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import { formatDate } from "@/helpers";
import { CommunityMemberData } from "@/types";
import Image from "next/image";

export type Props = {
  data: CommunityMemberData[];
  isLoading: boolean;
}

const columns: Column<CommunityMemberData>[] = [
  {
    key: "member",
    header: "Member",
    render: (row) => {
      return (
        <div className="flex items-center space-x-3">
          <Image
            src={row?.member?.logo || "/images/user-icon.webp"}
            alt={row?.member?.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="mt-0.5 text-sm text-gray-600">
            {row?.member?.name}
          </span>
        </div>
      );
    },
  },
  {
    key: "joinedAt",
    header: "Join Date",
    render: (row) => {
      return (
        <div className="flex flex-wrap gap-2">
          <span className="text-[0.875rem] font-normal font-inter text-text-gray-more">
            {formatDate(row?.joinedAt)}
          </span>
        </div>
      );
    },
  },
  {
    key: "role",
    header: "Role",
    render: (row) => <StatusBadge status={row?.role} />,
  },
];
const borderRadius = "rounded-[0px]! border-none"
export default function CommunityMemberTable({ data, isLoading }: Props) {
  return (
    <DataTable columns={columns} data={data} rowKey={(row) => row._id} borderRadius={borderRadius} isLoading={isLoading} />
  );
}
