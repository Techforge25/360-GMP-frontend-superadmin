import DataTable, { Column } from "@/components/common/DataTable";
import { ProductAuditTableRowData } from "@/types";
import ProductAuditTableActions from "./ProductAuditTableActions";
import Image from "next/image";
import { formatDate } from "@/helpers";
import { productAuditTableData } from "@/constants/marketplace/ProductAuditTable";
const marketplace = "product-audit-queue";
const columns: Column<ProductAuditTableRowData>[] = [
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
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => (
      <ProductAuditTableActions
        id={row._id}
        marketplace={marketplace}
      />
    ),
  },
];

export default function MarketplaceProductAuditTable() {
  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={productAuditTableData}
        rowKey={(row) => row._id}
      />
    </div>
  );
}
