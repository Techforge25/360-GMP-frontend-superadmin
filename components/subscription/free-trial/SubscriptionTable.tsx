import DataTable, { Column } from "@/components/common/DataTable";
import { FreeTrialTableRowData } from "@/types";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import SubscriptionTableActions from "../SubscriptionTableActions";
import Image from "next/image";
import EmailIcon from "@/assets/EmailIconPurple.svg";
import UserIcon from "@/assets/UserIconPurple.svg";
type Props = {
  isPending: boolean;
  freeUsersData: FreeTrialTableRowData[];
};

export default function SubscriptionFreeTrialTable({
  isPending,
  freeUsersData,
}: Props) {
  const subscriptionManagement = "SubscriptionManagementUsersTable";
  const columns: Column<FreeTrialTableRowData>[] = [
    {
      key: "userProfile",
      header: "User",
      render: (row) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="bg-bg-light-purple p-[0.6rem] rounded-full">
              <Image
                src={EmailIcon}
                width={100}
                height={100}
                alt=""
                className="w-[0.938rem] h-[0.75rem] text-brand-btn-pills"
              />
            </div>
            <p className="font-inter font-normal text-[1rem] text-text-setting-light">
              {row?.email || "No Email Found"}
            </p>
          </div>
          <div className="flex items-center ml-10">
            <div className="flex gap-3">
            <Image
              src={UserIcon}
              width={100}
              height={100}
              alt=""
              className="w-[0.75rem]  text-brand-btn-pills"
            />

            <p className="font-inter font-normal text-[1rem] text-text-setting-light">
              {row?.userProfile?.fullName || "No User Profile"}
            </p>
            </div>
          </div>
        </div>
    
      ),
    },
    {
      key: "daysConsumed",
      header: "Days Consumed",
      render: (row) => {
        const total = 14;
        const current = row?.daysConsumed;
        const percentage = Math.min((current / total) * 100, 100);
        const isNearStart = current >= 12;
        const barColor = isNearStart ? "bg-[#ff3b30]" : "bg-[#2563eb]";

        return (
          <div className="flex items-center gap-[0.875rem]">
            <div className="w-[7rem] h-[0.75rem] bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="text-[0.875rem] font-medium text-kyc-text-subheading whitespace-nowrap">
              {current}/14
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
 const borderRadius = "rounded-[0px]! border-none"
  return (
    <div className="pt-2">
      <DataTable
        columns={columns}
        data={freeUsersData}
        rowKey={(row) => row?._id}
        isLoading={isPending}
        borderRadius={borderRadius}
      />
    </div>
  );
}
