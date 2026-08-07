import { useState } from "react";

// import PaginationComponent from "@/components/common/PaginationComponent";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import CommunityTable from "./CommunityTable";
import PaginationComponent from "@/components/common/PaginationComponent";
import { keys } from "@/keys";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { getCommunityReports } from "@/services/reports";

interface Props {
  dateRange: string;
}

export default function CommunityReportTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending } = useQuery({
    queryKey: [keys.reportCommunity, dateRange, page, debouncedSearch],
    queryFn: () => getCommunityReports(dateRange, debouncedSearch, page),
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
      <CommunityTable isPending={isPending} reportsData={reportsData} />
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
