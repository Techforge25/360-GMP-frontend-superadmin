import SearchFilterBar from "@/components/common/SearchFilterBar";
import SubscriptionPaidMemberTable from "./SubscriptionPaidMemberTable";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getSubscriptionUsersPaid } from "@/services/subscription";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useTableScroll } from "@/hooks/useTableScroll";
import { useNavigationStore } from "@/store/modulesStore";

type Props = {
  dateRange: string;
};

export default function PaidMemberTable({ dateRange }: Props) {
  // const [page, setPage] = useState(1);
  const [validityChange, setValidityChange] = useState("all");
  const [tierType, setTierType] = useState("all");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const page = useNavigationStore((state) => state.page)
  const setPage = useNavigationStore((state) => state.setPage)

  const { isPending, data } = useQuery({
    queryKey: [
      keys.subscriptionListPaid,
      dateRange,
      page,
      validityChange,
      debouncedSearch,
      tierType,
    ],
    queryFn: () =>
      getSubscriptionUsersPaid(
        dateRange,
        page,
        validityChange,
        debouncedSearch,
        tierType,
      ),
  });
  const tableRef = useTableScroll(page, isPending);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleFilterStatusChange = (value: string) => {
    if (
      value === "All Tiers" ||
      value === "Consumer / Individual" ||
      value === "Silver" ||
      value === "Gold" ||
      value === "Enterprise"
    ) {
      setTierType(value === "All Tiers" ? "" : value);
    } else {
      setValidityChange(
        value === "Active"
          ? "active"
          : value === "Cancelled"
            ? "canceled"
            : value === "Expired"
              ? "expired"
              : "all",
      );
    }

    setPage(1);
  };

  const paidUsersData = data?.data?.docs;
  return (
    <div
      className="rounded-[0.75rem] border border-bg-gray-200 bg-white p-0 shadow-sm"
      ref={tableRef}
    >
      <SearchFilterBar
        placeholder="Search by User or Business name..."
        filters={[
          {
            key: "sortBy",
            label: "Sort By",
            options: [
              "All Tiers",
              "Consumer / Individual",
              "Silver",
              "Gold",
              "Enterprise",
            ],
            defaultValue: "All Tiers",
          },
          {
            key: "status",
            options: ["All Status", "Active", "Cancelled", "Expired"],
            defaultValue: "All Status",
          },
        ]}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <SubscriptionPaidMemberTable
        isPending={isPending}
        paidUsersData={paidUsersData}
      />

      {(data?.data?.totalPages ?? 0) > 1 && (
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
