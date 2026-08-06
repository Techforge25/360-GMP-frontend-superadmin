import DataTable, { Column } from "@/components/common/DataTable";
import { ProductApprovedTableRowData, TypeProductApproveReject } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import ProductAuditTableActions from "../product-audit-queue/ProductAuditTableActions";
import StatusBadge from "@/constants/acount-management/StatusBadge";
const marketplace = "product-approve-reject";

interface Props {
  productApproveReject: TypeProductApproveReject[],
  dateRange: string;
  isPending: boolean;
}

const columns: Column<TypeProductApproveReject>[] = [
  {
    key: "createdAt",
    header: "Product",
    render: (row) => (
      <div className="flex flex-col">
        <span className="text-[1rem] font-medium text-text-light">
          {row?.title}
        </span>
        <span className="text-[1rem] text-date-time">
          {formatDate(row?.createdAt)}
        </span>
      </div>
    ),
  },
  {
    key: "seller",
    header: "Seller",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row?.seller?.logo}
          alt={row?.seller?.companyName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.seller?.companyName}
          </span>

          <span className="mt-0.5 text-sm text-text-hint">
            {row?.seller?.ownerName}
          </span>
        </div>
      </div>
    ),
  },
  {
    key: "category",
    header: "Category",
    render: (row) => (
      <div className="flex flex-col">
        <span className="mt-0.5 text-sm text-gray-600">{row.category}</span>
      </div>
    ),
  },

  {
    key: "status",
    header: "Status",
    render: (row) => (
      <div>
        <StatusBadge status={row.status} />
      </div>
    ),
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => (
      <ProductAuditTableActions id={row._id} marketplace={marketplace} />
    ),
  },
];

export default function MarketplaceProductApprovedTable({ productApproveReject, isPending }: Props) {
  console.log(productApproveReject, 'product approve reject')
  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={productApproveReject}
        rowKey={(row) => row._id}
        isLoading={isPending}
      />
    </div>
  );
}
