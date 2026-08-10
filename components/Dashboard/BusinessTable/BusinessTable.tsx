import DataTable, { Column } from "@/components/common/DataTable";
import { ProductApprovedTableRowData } from "@/types";
import { ProductApprovedTable } from "@/constants/marketplace/ProductApprovedTable";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";

export default function NewBusinessInnerTable() {
  const router = useRouter();

  const columns: Column<ProductApprovedTableRowData>[] = [
    {
      key: "createdAt",
      header: "Company Name",
      render: (row) => (
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-light">
            Global Manufacturing Co.
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
            2 hours ago
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
        data={ProductApprovedTable}
        rowKey={(row) => row._id}
        borderRadius={borderRadius}
      />
    </div>
  );
}
