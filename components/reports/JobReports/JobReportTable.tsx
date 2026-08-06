'use client';
import PaginationComponent from "@/components/common/PaginationComponent";
import ReportJobReportTable from "./ReportJobReportTable";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getJobReports } from "@/services/reports";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounceSearch";

interface Props {
  dateRange: string;
}

export default function JobReportTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending } = useQuery({
    queryKey: [keys.reportJob, page, debouncedSearch],
    queryFn: () => getJobReports(dateRange, debouncedSearch, page),
  });


  const reportsData = data?.data?.docs

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleFilterStatusChange = (value: string) => {
    setPage(1);
  }

  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Report..."
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <ReportJobReportTable isPending={isPending} reportsData={reportsData} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
