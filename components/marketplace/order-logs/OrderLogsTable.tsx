import MarketplaceOrderLogsTable from "./MarketplaceOrderLogsTable";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { fetchOrderLogs } from "@/services/marketplace";
import { useEffect, useRef, useState } from "react";
import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string
}

export default function OrderLogsTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)
  const { data, isPending } = useQuery({
    queryKey: [keys.orderLogs, dateRange, page],
    queryFn: () => fetchOrderLogs(dateRange, page),
  });
const tableRef = useRef<HTMLDivElement>(null);
  const orderLogs = data?.data?.docs

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

  return (
    <div className="rounded-2xl border border-border-light bg-white p-0 shadow-sm" ref={tableRef}>
      <MarketplaceOrderLogsTable orderLogs={orderLogs} isPending={isPending} />
      {data?.data?.totalPages > 1 && (
      <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
