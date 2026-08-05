import React, { useState } from "react";
// import PaginationComponent from "@/components/common/PaginationComponent";
import MarketplaceProductApprovedTable from "./MarketplaceProductApprovedTable";
import { keys } from "@/keys";
import { useQuery } from "@tanstack/react-query";
import { generalProducts } from "@/services/marketplace";
import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string
}

export default function ProductApprovedTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)
  const { data, isPending } = useQuery({
    queryKey: [keys.orderProductRejectionApproval, dateRange, page],
    queryFn: () => generalProducts(dateRange, page),
  });

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const productApproveReject = data?.data?.docs

  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <MarketplaceProductApprovedTable productApproveReject={productApproveReject} dateRange={dateRange} isPending={isPending} />
      {data?.docs?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
