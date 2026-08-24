'use client'
import PaginationComponent from "@/components/common/PaginationComponent";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getUserProfiles } from "@/services/account-management";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useNavigationStore } from "@/store/modulesStore";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import CommunityMemberTable from "./CommunityMemberTable";
// import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  currentTab: string;
}

export default function CommunityMemberMainTable({currentTab}: Props) {
  // const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  // const [validityChange, setValidityChange] = useState("");
  // const debouncedSearch = useDebounce(search, 500)
  const setPage = useNavigationStore((state) => state.setPage)
  // const page = useNavigationStore((state) => state.page)
  // const { data, isFetching } = useQuery({
  //   queryKey: [keys.accountUsersList, dateRange, page, debouncedSearch, validityChange],
  //   queryFn: () => getUserProfiles(dateRange, debouncedSearch, page, validityChange),
  // });

  // const handlePageChange = (page: number) => {
  //   setPage(page)
  // }

  // const handleFilterStatusChange = (value: string) => {
  //   setValidityChange(value === "All Tiers" ? "" : value);
  //   setPage(1);
  // }

  // const CommunityMemberData = data?.data?.docs

  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
      <SearchFilterBar
        placeholder="Search members by name..."
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        // onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <CommunityMemberTable />
      {/* {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )} */}
    </div>
  );
}
