import React, { useEffect, useState } from "react";

// import PaginationComponent from "@/components/common/PaginationComponent";

import SearchFilterBar from "@/components/common/SearchFilterBar";
import ReportBusinessReportTable from "./ReportBusinessReportTable";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useQuery } from "@tanstack/react-query";
import { getBusinessReports } from "@/services/reports";
import { keys } from "@/keys";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useTableScroll } from "@/hooks/useTableScroll";

interface Props {
  dateRange: string
}

export default function BusinessReportTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending } = useQuery({
    queryKey: [keys.reportBusiness, page, debouncedSearch, dateRange],
    queryFn: () => getBusinessReports(dateRange, debouncedSearch, page),
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
    <div className="rounded-2xl border border-border-light bg-white shadow-sm" ref={tableRef}>
      <SearchFilterBar
        placeholder="Search by Business name..."
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <ReportBusinessReportTable reportsData={reportsData} isPending={isPending} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
