import DataTable, { Column } from "@/components/common/DataTable";
import { TypeNewBusinesses } from "@/types";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";
import moment from "moment";

interface Props {
  isPending: boolean;
  newBusinessData: TypeNewBusinesses[]
}

export default function NewBusinessInnerTable({ newBusinessData, isPending }: Props) {
  const router = useRouter();

  const columns: Column<TypeNewBusinesses>[] = [
    {
      key: "createdAt",
      header: "Company Name",
      render: (row) => (
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-light">
            {row?.companyName}
          </span>
        </div>
      ),
    },
    {
      key: "seller",
      header: "submitted",
      render: (row) => (
        <div className="flex items-center space-x-3">
          <span className="text-[1rem] font-medium text-text-secondary">
            {moment(row?.createdAt).startOf('day').fromNow()}
          </span>
        </div>
      ),
    },

    {
      key: "action",
      header: "Action",
      align: "center",
      render: (row) => (
        <div className="flex items-center justify-center space-x-2">
          <PreviewButton
            onClick={() =>
              router.push(
                `/account-management/view-account-information-business/${row._id}`,
              )
            }
          />
        </div>
      ),
    },
  ];
  const borderRadius = "rounded-[0px]! border-none"
  return (
    <div className="pt-4">
      <DataTable
        columns={columns}
        data={newBusinessData}
        rowKey={(row) => row._id}
        borderRadius={borderRadius}
        isLoading={isPending}
      />
    </div>
  );
}
