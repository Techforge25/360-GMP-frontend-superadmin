import DataTable, { Column } from "@/components/common/DataTable";
import { PaidMemberTableRowData } from "@/types";
import SubscriptionTableActions from "@/components/subscription/SubscriptionTableActions";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";
import { formatDate } from "@/helpers";
import EmailIcon from "@/assets/EmailIconPurple.svg";
import UserIcon from "@/assets/UserIconPurple.svg";
import companyIcon from "@/assets/companyIcon.svg";
type Props = {
  isPending: boolean;
  paidUsersData: PaidMemberTableRowData[];
};

const subscriptionManagement = "SubscriptionManagementPaidTable";
const columns: Column<PaidMemberTableRowData>[] = [
  {
    key: "name",
    header: "User Name",
    render: (row) => (
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-3">
          <div className="bg-bg-light-purple p-[0.6rem]  rounded-full">
            <Image
              src={EmailIcon}
              width={100}
              height={100}
              alt=""
              className="w-[0.938rem] text-brand-btn-pills"
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

            {row?.fullName ?
              <p className="font-inter font-normal text-[1rem] text-text-setting-light">
                {row?.fullName}
              </p>
              :
              <i className="font-inter font-normal text-[1rem] text-text-light-gray-100">
                No User Profile
              </i>
            }

          </div>
        </div>
        <div className="flex items-center ml-10">
          <div className="flex gap-3">
            <Image
              src={companyIcon}
              width={100}
              height={100}
              alt=""
              className="w-[0.75rem]  text-brand-btn-pills"
            />

            {row?.companyName ? (
              <p className="font-inter font-normal text-[1rem] text-text-setting-light">
                {row?.companyName}
              </p>
            ) : (
              <i className="font-inter font-normal text-[1rem] text-text-light-gray-100">
                No Business Profile
              </i>
            )}

          </div>
        </div>
      </div>
    ),
  },

  {
    key: "subscriptionType",
    header: "Subscription Tiers",
    render: (row) => <StatusBadge status={row?.subscriptionTier} />,
  },
  {
    key: "createdAt",
    header: "Join Date",
    render: (row) => (
      <span className="text-[1rem] text-date-time">
        {formatDate(row?.joinDate)}
      </span>
    ),
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
export default function SubscriptionPaidMemberTable({
  isPending,
  paidUsersData,
}: Props) {
  return (
    <div className="pt-0">
      <DataTable
        columns={columns}
        data={paidUsersData}
        rowKey={(row) => row?._id}
        isLoading={isPending}
        borderRadius={borderRadius}
      />
    </div>
  );
}
