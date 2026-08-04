import DataTable, { Column } from "@/components/common/DataTable";
import { FreeTrialTableRowData } from "@/types";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";
import SubscriptionTableActions from "../SubscriptionTableActions";

type Props = {
  isPending: boolean;
  freeUsersData: FreeTrialTableRowData[];
}

export default function SubscriptionFreeTrialTable({ isPending, freeUsersData }: Props) {
  const subscriptionManagement = "SubscriptionManagementUsersTable";
  const columns: Column<FreeTrialTableRowData>[] = [
<<<<<<< HEAD
  {
  key: "userProfile",
  header: "User",
  render: (row) => (
    <div className="flex items-center space-x-3">
      <Image
        src={row?.userProfile?.logo || "/images/image 95.png"}
        alt={row?.userProfile?.fullName}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-col">
        <span className="text-[1rem] font-medium text-date-time">
          {row?.userProfile?.fullName}
        </span>

        <span className="mt-0.5 text-sm text-text-hint">
          {row?.userProfile?.email}
        </span>
      </div>
    </div>
  ),
},
  {
  key: "daysRemaining",
  header: "Days Remaining",
  render: (row) => {
    const total = 15;
    const current = row?.daysRemaining;
    const percentage = Math.min((current / total) * 100, 100);
    const isNearStart = current >= 12;
    const barColor = isNearStart ? "bg-reject" : "bg-text-plan";

    return (
      <div className="flex items-center gap-[0.875rem]">
        <div className="w-[5.5rem] h-[0.5rem] bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
            style={{ width: `${percentage}%` }}
=======
    {
      key: "userProfile",
      header: "User",
      render: (row) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row?.userProfile?.logo || "/images/image 95.png"}
            alt={row?.userProfile?.fullName}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
>>>>>>> 8ff2f79729faa6bfed32094084b32bd220df8422
          />

          <div className="flex flex-col">
            <span className="text-[1rem] font-medium text-date-time">
              {row?.userProfile?.fullName}
            </span>

            <span className="mt-0.5 text-sm text-text-hint">
              {row?.userProfile?.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "daysRemaining",
      header: "Days Remaining",
      render: (row) => {
        const total = 15;
        const current = row?.daysRemaining;
        const percentage = Math.min((current / total) * 100, 100);
        const isNearStart = current >= 12;
        const barColor = isNearStart ? "bg-[#ff3b30]" : "bg-[#2563eb]";

        return (
          <div className="flex items-center gap-[0.875rem]">
            <div className="w-[5.5rem] h-[0.5rem] bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="text-[0.875rem] font-medium text-kyc-text-subheading whitespace-nowrap">
              {current}/{current > 15 ? current : total}
            </span>
          </div>
        );
      },
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
      render: (row) => (
        <SubscriptionTableActions
          id={row?._id}
          subscriptionManagement={subscriptionManagement}
        />
      ),
    },
  ];

  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={freeUsersData}
        rowKey={(row) => row?._id}
        isLoading={isPending}
      />
    </div>
  );
}
