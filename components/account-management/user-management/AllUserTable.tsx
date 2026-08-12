'use client'
import PaginationComponent from "@/components/common/PaginationComponent";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountManagementTable from "./AccountManagementTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getUserProfiles } from "@/services/account-management";
import { useDebounce } from "@/hooks/useDebounceSearch";
// import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string;
  currentTab: string;
}

export default function AllUserTable({ dateRange, currentTab }: Props) {
  console.log(currentTab, 'current tab')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [validityChange, setValidityChange] = useState("");
  const debouncedSearch = useDebounce(search, 500)

  const { data, isPending } = useQuery({
    queryKey: [keys.accountUsersList, dateRange, page, debouncedSearch, validityChange],
    queryFn: () => getUserProfiles(dateRange, debouncedSearch, page, validityChange),
  });

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleFilterStatusChange = (value: string) => {
    console.log(value, 'all vasasdasd')
    setValidityChange(value === "All Tiers" ? "" : value === 'Enterprise' ? 'Premium' : value);
    setPage(1);
  }

  const accountManagementData = data?.data?.docs

  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "type",
            options: currentTab === 'all-user' ? ["All Tiers", "Sneak Peek Free – 14 Days", "Consumer / Individual", "Silver", "Gold", "Enterprise"] : ["All Tiers", "Silver", "Gold", "Enterprise"],
            defaultValue: "All Tiers"
          }
        ]}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <AccountManagementTable isPending={isPending} accountManagementData={accountManagementData} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
