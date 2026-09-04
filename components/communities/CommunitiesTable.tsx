import DataTable, { Column } from "@/components/common/DataTable";
import { TypeCommunities } from "@/types";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";
import { formatDate, formatNumber } from "@/helpers";
import CommunityTableActions from "./CommunityTableActions";
import Users from "@/assets/userGray.svg"
interface Props {
  comunnitesData: TypeCommunities[];
  isPending: boolean;
}

const columns: Column<TypeCommunities>[] = [
  {
    key: "name",
    header: "Communities identity",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10">
        <Image
          src={row?.profileImage || "/images/user-icon.webp"}
          alt={row?.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
</div>
        <div className="flex flex-col">
          <span className="text-[0.875rem] font-medium text-text-review-Page truncate w-[16rem]">
            {row?.name}
          </span>
          <span className="mt-0.5 text-[0.75rem] text-text-secondary font-normal font-inter truncate w-[16rem] capitalize">
            {row?.creator}{" "}
            <span className="mx-1 w-[0.25rem] h-[0.25rem]">•</span>
            <span
              className={`font-normal font-inter text-[0.875rem] ${
                row?.type?.toLowerCase() === "public"
                  ? "text-[#185ADB]"
                  : "text-[#9834FA]"
              }`}
            >
              {row?.type}
            </span>
          </span>
        </div>
      </div>
    ),
  },

  {
    key: "category",
    header: "Category",
    render: (row) => <span className="text-text-setting-light text-[1rem] font-inter font-normal">{row?.category}</span>,
  },

  {
    key: "members",
    header: "Members",
    render: (row) => <span className="text-text-setting-light text-[1rem] font-inter font-normal flex items-center gap-2">
      <Image src={Users} width={100} height={100} alt="" className="w-[1.25rem] h-[0.625rem]"/>  {formatNumber(Number(row?.membersCount))} </span> ,
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusBadge status={row?.status ?? "-"} />,
  },

  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => (
      <>
        <CommunityTableActions id={row._id} />
      </>
    ),
  },
];
const borderRadius = "rounded-[0px]! border-none";
export default function CommunitiesTable({ isPending, comunnitesData }: Props) {
  return (
    <div>
      <DataTable
        columns={columns}
        data={comunnitesData}
        rowKey={(row) => row._id}
        isLoading={isPending}
        borderRadius={borderRadius}
      />
    </div>
  );
}
