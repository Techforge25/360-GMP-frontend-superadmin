import DataTable, { Column } from "@/components/common/DataTable";
import { PaidMemberTableRowData } from "@/types";
import SubscriptionTableActions from "@/components/subscription/SubscriptionTableActions";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";
import { SubsriptionPaidTable } from "@/constants/subscription/SubsriptionPaidTable";
import { formatDate } from "@/helpers";

type Props = {
  isPending: boolean;
  paidUsersData: PaidMemberTableRowData[];
}

const subscriptionManagement = "SubscriptionManagementPaidTable";
const columns: Column<PaidMemberTableRowData>[] = [
  {
    key: "name",
    header: "User Name",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image src={row?.logo ? row.logo : '/images/user-icon.webp'} alt={row?.fullName} width={40} height={40} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">{row?.fullName}</span>
          <span className="mt-0.5 text-sm text-text-hint">{row?.companyName}</span>
        </div>
      </div>
    ),
  },

  {
    key: "subscriptionType",
    header: "Subscription Type",
    render: (row) => <StatusBadge status={row?.subscriptionTier} />,
  },
  {
    key: "createdAt",
    header: "Join Date",
    render: (row) => <span className="text-[1rem] text-date-time">{formatDate(row?.joinDate)}</span>,
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusBadge status={row?.status} />,
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => <SubscriptionTableActions id={row?._id} subscriptionManagement={subscriptionManagement} />,
  },
];


export default function SubscriptionPaidMemberTable({ isPending, paidUsersData }: Props) {

  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={paidUsersData}
        rowKey={(row) => row?._id}
        isLoading={isPending}
      />
    </div>
  );
}
