'use client';
import { useQuery } from "@tanstack/react-query";
// import PaginationComponent from "@/components/common/PaginationComponent";

import MarketplaceProductAuditTable from "./MarketplaceProductAuditTable";
import { keys } from "@/keys";
import { productAudits } from "@/services/marketplace";
import { useState } from "react";
import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string;
}

export default function ProductAuditTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)

  const { data, isPending } = useQuery({
    queryKey: [keys.orderProductAuditQueue, dateRange],
    queryFn: () => productAudits(dateRange),
  });

  const productData = data?.data?.docs

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <MarketplaceProductAuditTable productData={productData} isPending={isPending} />
      {data?.docs?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
