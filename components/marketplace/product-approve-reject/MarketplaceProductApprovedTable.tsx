import DataTable, { Column } from "@/components/common/DataTable";
import { ProductApprovedTableRowData } from "@/types";
import Image from "next/image";
import { formatDate } from "@/helpers";
import ProductAuditTableActions from "../product-audit-queue/ProductAuditTableActions";
import { ProductApprovedTable } from "@/constants/marketplace/ProductApprovedTable";
import StatusBadge from "@/constants/acount-management/StatusBadge";
const marketplace = "product-approve-reject";
const columns: Column<ProductApprovedTableRowData>[] = [
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
          src={row?.sellerInfo?.logo}
          alt={row?.sellerInfo?.companyName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[1rem] font-medium text-text-secondary">
            {row?.sellerInfo?.companyName}
          </span>

          <span className="mt-0.5 text-sm text-text-hint">
            {row?.sellerInfo?.ownerName}
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

export default function MarketplaceProductApprovedTable() {
  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={ProductApprovedTable}
        rowKey={(row) => row._id}
      />
    </div>
  );
}
