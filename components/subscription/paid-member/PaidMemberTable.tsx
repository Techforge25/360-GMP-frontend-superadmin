import SearchFilterBar from "@/components/common/SearchFilterBar";
import SubscriptionPaidMemberTable from "./SubscriptionPaidMemberTable";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getSubscriptionUsersPaid } from "@/services/subscription";
import PaginationComponent from "@/components/common/PaginationComponent";

type Props = {
  dateRange: string;
}

export default function PaidMemberTable({ dateRange }: Props) {
  const [page, setPage] = useState(1);
  const [validityChange, setValidityChange] = useState('all')
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { isPending, data } = useQuery({
    queryKey: [keys.subscriptionList, dateRange, page, validityChange, debouncedSearch],
    queryFn: () => getSubscriptionUsersPaid(dateRange, page, validityChange, debouncedSearch),
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleFilterStatusChange = (value: string) => {
    setValidityChange(value === 'Active Trial' ? 'active' : value === 'Expired' ? 'expired' : 'all');
    setPage(1);
  }

  const paidUsersData = data?.data?.docs;
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
      <SearchFilterBar
        placeholder="Search Users..."
        filters={[
          {
            key: "sortBy",
            label: "Sort By",
            options: [
              "All Tiers",
              "Silver",
              "Consumer",
              "Gold",
              "Enterprise",
            ],
            defaultValue: "All",
          },
          {
            key: "status",
            label: "Status",
            options: [
              "All Status",
              "Active",
              "In Active",
              "Past Due",
            ],
            defaultValue: "All Status",
          },
        ]}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onFilterChange={(key, value) => handleFilterStatusChange(value)}
      />
      <SubscriptionPaidMemberTable isPending={isPending} paidUsersData={paidUsersData} />
      <PaginationComponent handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
    </div>
  );
}
