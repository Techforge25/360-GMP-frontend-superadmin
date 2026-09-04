"use client";

import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/common/PaginationComponent";
import { keys } from "@/keys";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useNavigationStore } from "@/store/modulesStore";
import CommunitiesTable from "./CommunitiesTable";
import SearchFilterBar from "../common/SearchFilterBar";
import { BUSINESS_TYPE_OPTIONS } from "@/constants/communities/Categories";
import { getAllCommunities } from "@/services/communities";

export default function   Communities() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const debounceSearch = useDebounce(search, 500);

  const setPage = useNavigationStore((state) => state.setPage);
  const page = useNavigationStore((state) => state.page);

  const { data, isPending } = useQuery({
    queryKey: [
      keys.communitiesList,
      page,
      category,
      status,
      debounceSearch,
    ],
    queryFn: () =>
      getAllCommunities(status, category, page, debounceSearch),
  });

  const handleFilterCategoryChange = (value: string) => {
    setCategory(value === "All Categories" ? "" : value);
    setPage(1);
  };

  const handleFilterStatusChange = (value: string) => {
    setStatus(value === "All Status" ? "" : value.toLowerCase());
    setPage(1);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const communitiesData = data?.data?.docs;

  return (
    <div className="rounded-2xl border border-border-light bg-white shadow-sm">
      <SearchFilterBar
        placeholder="Search by Community Name…."
        filters={[
          {
            key: "status",
            options: ["All Status", "Active", "Suspended"],
            defaultValue: "All Status",
          },
          {
            key: "category",
            options: ["All Categories", ...BUSINESS_TYPE_OPTIONS],
            defaultValue: "All Categories",
          },
        ]}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => {
          if (key === "category") {
            handleFilterCategoryChange(value);
          }

          if (key === "status") {
            handleFilterStatusChange(value);
          }
        }}
      />

      <CommunitiesTable
        comunnitesData={communitiesData}
        isPending={isPending}
      />

      {data?.data?.totalPages > 1 && (
        <PaginationComponent
          currentPage={page}
          handlePageChange={handlePageChange}
          totalPages={data?.data?.totalPages || 1}
          totalItems={data?.data?.totalDocs || 0}
          totalItemsPerPage={data?.data?.limit}
        />
      )}
    </div>
  );
}
