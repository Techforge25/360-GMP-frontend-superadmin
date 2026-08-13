import DataTable, { Column } from "@/components/common/DataTable";
import { AccountTableRowData, TypeAccountManagement } from "@/types";

import AccountManagementTableActions from "./AccountManagementTableActions";
import { accountTableData } from "@/constants/acount-management/AccountManagementTable";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";
import { formatDate } from "@/helpers";
const accountManagement = "accountManagementUsersTable";

interface Props {
  isPending: boolean;
  accountManagementData: TypeAccountManagement[]
}

const columns: Column<AccountTableRowData>[] = [
  {
    key: "fullName",
    header: "User Name",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.logo || "/images/image 95.png"}
          alt={row?.fullName}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-date-time">
            {row?.fullName}
          </span>
          <span className="mt-0.5 text-sm text-text-hint">
            {row?.email}
          </span>
        </div>
      </div>
    ),
  },

  {
    key: "subscription",
    header: "Subscription Type",
    render: (row) => (
      <StatusBadge status={row?.subscription?.subscriptionType || "No Subscription"} />
    ),
  },
  {
    key: "createdAt",
    header: "Join Date",
    render: (row) => (
      <span className="text-[1rem] text-date-time">
        {formatDate(row?.createdAt)}
      </span>
    ),
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => (
      <AccountManagementTableActions
        id={row?._id}
        accountManagement={accountManagement}
      />
    ),
  },
];
const borderRadius = "rounded-[0px]! border-none"
export default function AccountManagementTable({ isPending, accountManagementData }: Props) {
  return (
    <div >
      <DataTable
        columns={columns}
        data={accountManagementData}
        rowKey={(row) => row?._id}
        isLoading={isPending}
        borderRadius={borderRadius}
      />
    </div>
  );
}
