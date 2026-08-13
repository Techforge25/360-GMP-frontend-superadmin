'use client';
import { useQuery } from "@tanstack/react-query";
// import PaginationComponent from "@/components/common/PaginationComponent";

import MarketplaceProductAuditTable from "./MarketplaceProductAuditTable";
import { keys } from "@/keys";
import { productAudits } from "@/services/marketplace";
import { useEffect, useRef, useState } from "react";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useTableScroll } from "@/hooks/useTableScroll";
import { useNavigationStore } from "@/store/modulesStore";

interface Props {
  dateRange: string;
}

export default function ProductAuditTable({ dateRange }: Props) {
  // const [page, setPage] = useState(1)

  const page = useNavigationStore((state) => state.page)
  const setPage = useNavigationStore((state) => state.setPage)

  const { data, isPending } = useQuery({
    queryKey: [keys.orderProductAuditQueue, dateRange, page],
    queryFn: () => productAudits(dateRange, page),
  });

  const tableRef = useTableScroll(page, isPending);
  const productData = data?.data?.docs

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
    <div className="rounded-2xl border border-border-light bg-white p-0 shadow-sm" ref={tableRef}>
      <MarketplaceProductAuditTable productData={productData} isPending={isPending} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
