import React, { useEffect, useRef, useState } from "react";
// import PaginationComponent from "@/components/common/PaginationComponent";
import MarketplaceProductApprovedTable from "./MarketplaceProductApprovedTable";
import { keys } from "@/keys";
import { useQuery } from "@tanstack/react-query";
import { generalProducts } from "@/services/marketplace";
import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string;
}

export default function ProductApprovedTable({ dateRange }: Props) {
  const [page, setPage] = useState(1);
  const { data, isPending } = useQuery({
    queryKey: [keys.orderProductRejectionApproval, dateRange, page],
    queryFn: () => generalProducts(dateRange, page),
  });
  const tableRef = useRef<HTMLDivElement>(null);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (!isPending) {
      tableRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [page, isPending]);

  const productApproveReject = data?.data?.docs;

  return (
    <div
      className="rounded-2xl border border-border-light bg-white p-0 shadow-sm"
      ref={tableRef}
    >
      <MarketplaceProductApprovedTable
        productApproveReject={productApproveReject}
        dateRange={dateRange}
        isPending={isPending}
      />
     {data?.data?.totalPages > 1 && (
        <PaginationComponent
          currentPage={page}
          handlePageChange={handlePageChange}
          totalPages={data?.data?.totalPages}
          totalItems={data?.data?.totalDocs}
          totalItemsPerPage={data?.data?.totalItemsPerPage}
        />
      )}
    </div>
  );
}
