import MarketplaceOrderLogsTable from "./MarketplaceOrderLogsTable";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { fetchOrderLogs } from "@/services/marketplace";
import { useState } from "react";
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

  const orderLogs = data?.data?.docs

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <MarketplaceOrderLogsTable orderLogs={orderLogs} isPending={isPending} />
      <PaginationComponent handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
    </div>
  );
}
