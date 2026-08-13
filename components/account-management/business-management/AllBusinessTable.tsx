'use client'
import { useQuery } from "@tanstack/react-query";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountManagementBusinessTable from "./AccountManagementBusinessTable";
import PaginationComponent from "@/components/common/PaginationComponent";
import { keys } from "@/keys";
import { useEffect, useState } from "react";
import { getBusinessProfiles } from "@/services/account-management";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useNavigationStore } from "@/store/modulesStore";

interface Props {
  dateRange: string;
  currentTab: string;
}

export default function AllBusinessTable({ dateRange }: Props) {
  const [search, setSearch] = useState('');
  const [validityChange, setValidityChange] = useState('')
  const [status, setStatus] = useState('')
  const debounceSearch = useDebounce(search, 500)
  const setPage = useNavigationStore((state) => state.setPage)
  const page = useNavigationStore((state) => state.page)

  const { data, isPending } = useQuery({
    queryKey: [keys.accountBusinessList, page, validityChange, status, debounceSearch, dateRange],
    queryFn: () => getBusinessProfiles(dateRange, page, validityChange, status, debounceSearch),
  });

  const handleFilterSubsChange = (value: string) => {
    setValidityChange(
      value === "All Tiers"
        ? ""
        : value
    );
    setPage(1);
  };

  const handleFilterStatusChange = (value: string) => {
    setStatus(
      value === "All Status"
        ? ""
        : value.toLowerCase()
    );

    setPage(1);
  };

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const businessProfilesData = data?.data?.docs

  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
      <SearchFilterBar
        placeholder="Search Business..."
        filters={[
          {
            key: "type",
            label: "Sort By",
            options: ["All Tiers", "Silver", "Gold", "Enterprise"],
            defaultValue: "All Tiers"
          },
          {
            key: "status",
            options: ["All Status", "Pending", "Approved", "Rejected"],
            defaultValue: "All Status"
          }
        ]}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => {
          if (key === "type") {
            handleFilterSubsChange(value);
          }

          if (key === "status") {
            handleFilterStatusChange(value);
          }
        }}
      />
      <AccountManagementBusinessTable businessProfilesData={businessProfilesData} isPending={isPending} />
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
