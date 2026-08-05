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
  const [tierType, setTierType] = useState('all');
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { isPending, data } = useQuery({
    queryKey: [keys.subscriptionList, dateRange, page, validityChange, debouncedSearch, tierType],
    queryFn: () => getSubscriptionUsersPaid(dateRange, page, validityChange, debouncedSearch, tierType),
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleFilterStatusChange = (value: string) => {
    if (value === 'Consumer / Individual' || value === 'Silver' || value === 'Gold' || value === 'Enterprise') {
      setTierType(value);
    } else {
      setValidityChange(value === 'Active' ? 'active' : value === 'In Active' ? 'expired' : 'all');
    }
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
              "Consumer / Individual",
              "Silver",
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
      <SubscriptionPaidMemberTable
        isPending={isPending}
        paidUsersData={paidUsersData}
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
