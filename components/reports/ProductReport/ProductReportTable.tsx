import React, { useEffect, useState } from "react";

// import PaginationComponent from "@/components/common/PaginationComponent";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import ReportProductReportTable from "./ReportProductReportTable";
import PaginationComponent from "@/components/common/PaginationComponent";
import { keys } from "@/keys";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useQuery } from "@tanstack/react-query";
import { getProductReports } from "@/services/reports";
import { useTableScroll } from "@/hooks/useTableScroll";
import { useNavigationStore } from "@/store/modulesStore";

interface Props {
  dateRange: string
}

export default function ProductReportTable({ dateRange }: Props) {
  // const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const page = useNavigationStore((state) => state.page)
  const setPage = useNavigationStore((state) => state.setPage)

  const { data, isPending } = useQuery({
    queryKey: [keys.reportProduct, dateRange, page, debouncedSearch],
    queryFn: () => getProductReports(dateRange, debouncedSearch, page),
  });
  const tableRef = useTableScroll(page, isPending);
  const reportsData = data?.data?.docs

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleFilterStatusChange = (value: string) => {
    setPage(1);
  }

  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm" ref={tableRef}>
      <SearchFilterBar
        placeholder="Search by Product name..."
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <ReportProductReportTable reportsData={reportsData} isPending={isPending} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent
          currentPage={page}
          handlePageChange={handlePageChange}
          totalPages={data?.data?.totalPages || 1}
          totalItems={data?.data?.totalDocs || 0}
          totalItemsPerPage={data?.data?.limit || 10}
        />
      )}
    </div>
  );
}
