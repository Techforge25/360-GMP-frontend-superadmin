import DataTable, { Column } from "@/components/common/DataTable";
import { AccountBusinessTableRowData, TypeBusinessProfile } from "@/types";
import AccountManagementTableActions from "../user-management/AccountManagementTableActions";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";
import { formatDate } from "@/helpers";

interface Props {
  businessProfilesData: TypeBusinessProfile[]
  isPending: boolean;
}

const accountManagement = "accountManagementBusinessTable";

const columns: Column<AccountBusinessTableRowData>[] = [
  {
    key: "companyName",
    header: "Company Name",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row.logo || "/images/image 95.png"}
          alt={row.companyName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row.companyName}
          </span>
          <span className="mt-0.5 text-sm text-text-hint">
            {row.email}
          </span>
        </div>
      </div>
    ),
  },

  {
    key: "subscription",
    header: "Subscription Type",
    render: (row) => (
      <StatusBadge status={row.subscription?.subscriptionType ?? "-"} />
    ),
  },

  {
    key: "status",
    header: "Status",
    render: (row) => (
      <StatusBadge status={row?.status ?? "-"} />
    ),
  },
  {
    key: "createdAt",
    header: "Join Date",
    render: (row) => (
      <span className="text-[1rem] text-date-time">
        {formatDate(row.createdAt)}
      </span>
    ),
  },


  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => (
      <AccountManagementTableActions
        id={row._id}
        accountManagement={accountManagement}
      />
    ),
  },
];

export default function AccountManagementBusinessTable({ isPending, businessProfilesData }: Props) {
  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={businessProfilesData}
        rowKey={(row) => row._id}
        isLoading={isPending}
      />
    </div>
  );
}