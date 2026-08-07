'use client'
import { useQuery } from "@tanstack/react-query";
import SearchFilterBar from "../../common/SearchFilterBar";
import AccountManagementBusinessTable from "./AccountManagementBusinessTable";
import PaginationComponent from "@/components/common/PaginationComponent";
import { keys } from "@/keys";
import { useState } from "react";
import { getBusinessProfiles } from "@/services/account-management";
import { useDebounce } from "@/hooks/useDebounceSearch";

interface Props {
  dateRange: string;
  currentTab: string;
}

export default function AllBusinessTable({ dateRange }: Props) {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('');
  const [validityChange, setValidityChange] = useState('')
  const [status, setStatus] = useState('')
  const debounceSearch = useDebounce(search, 500)

  const { data, isPending } = useQuery({
    queryKey: [keys.accountBusinessList, page, validityChange, status, debounceSearch],
    queryFn: () => getBusinessProfiles(dateRange, page, validityChange, status, debounceSearch),
  });

  const handleFilterSubsChange = (value: string) => {
    setValidityChange(
      value === "All Subscriptions"
        ? ""
        : value === "Enterprise"
          ? "Premium"
          : value
    );

    setPage(1);
  };

  const handleFilterStatusChange = (value: string) => {
    setStatus(
      value === "All Statuses"
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
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Business..."
        filters={[
          {
            key: "type",
            label: "Subscription Type",
            options: ["All Subscriptions", "Silver", "Gold", "Enterprise"],
            defaultValue: "All Subscriptions"
          },
          {
            key: "status",
            label: "Status",
            options: ["All Statuses", "Pending", "Approved", "Rejected"],
            defaultValue: "All Statuses"
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
