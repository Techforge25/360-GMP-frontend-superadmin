import SearchFilterBar from "@/components/common/SearchFilterBar";
import SubscriptionFreeTrialTable from "./SubscriptionTable";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getSubscriptionFreeUsers } from "@/services/subscription";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useTableScroll } from "@/hooks/useTableScroll";

type Props = {
  dateRange: string;
};

export default function FreeTrialTable({ dateRange }: Props) {
  const [page, setPage] = useState(1);
  const [validityChange, setValidityChange] = useState("all");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const { isPending, data } = useQuery({
    queryKey: [
      keys.subscriptionList,
      dateRange,
      page,
      validityChange,
      debouncedSearch,
    ],
    queryFn: () =>
      getSubscriptionFreeUsers(
        dateRange,
        page,
        validityChange,
        debouncedSearch,
      ),
  });
  const tableRef = useTableScroll(page, isPending);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleFilterStatusChange = (value: string) => {
    setValidityChange(
      value === "Active Trial"
        ? "active"
        : value === "Expired"
          ? "expired"
          : value === "Canceled"
            ? "canceled"
            : "all",
    );
    setPage(1);
  };

  const freeUsersData = data?.data?.docs;

  return (
    <div
      className="rounded-[0.75rem] border border-bg-gray-200 bg-white p-0 shadow-sm"
      ref={tableRef}
    >
      <SearchFilterBar
        placeholder="Search by Users name..."
        filters={[
          {
            key: "sortBy",
            label: "Sort By",
            options: ["All Users", "Active Trial", "Expired", "Canceled"],
            defaultValue: "All Users",
          },
        ]}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <SubscriptionFreeTrialTable
        isPending={isPending}
        freeUsersData={freeUsersData}
      />

      {data?.data?.totalPages > 1 && (
        <PaginationComponent
          currentPage={page}
          handlePageChange={handlePageChange}
          totalPages={data?.data?.totalPages}
          totalItems={data?.data?.totalDocs}
          totalItemsPerPage={data?.data?.totalItemsPerPage}
        />
      )}
    </div>
  );
}
