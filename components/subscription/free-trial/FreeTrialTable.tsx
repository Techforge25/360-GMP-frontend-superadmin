import SearchFilterBar from "@/components/common/SearchFilterBar";
import SubscriptionFreeTrialTable from "./SubscriptionTable";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getSubscriptionFreeUsers } from "@/services/subscription";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounceSearch";

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

  const handlePageChange = (page: number) => {
    console.log("Current page:", page);
    setPage(page);
  };

  const handleFilterStatusChange = (value: string) => {
    setValidityChange(
      value === "Active Trial"
        ? "active"
        : value === "Expired"
          ? "expired"
          : "all",
    );
    setPage(1);
  };

  const freeUsersData = data?.data?.docs;

  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "sortBy",
            label: "Sort By",
            options: ["All User", "Active Trial", "Expired"],
            defaultValue: "All",
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
      <PaginationComponent
        currentPage={page}
        handlePageChange={handlePageChange}
        totalPages={data?.data?.totalPages || 1}
        totalItems={data?.data?.totalDocs || 0}
        totalItemsPerPage={data?.data?.limit || 10}
      />
    </div>
  );
}
