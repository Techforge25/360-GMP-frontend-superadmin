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
import { getCommunityMembers } from "@/services/communities";
import { ParamValue } from "next/dist/server/request/params";
// import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  communityId: ParamValue
}

export default function CommunityMemberMainTable({ communityId }: Props) {
  const [search, setSearch] = useState('')
  const setPage = useNavigationStore((state) => state.setPage)
  const page = useNavigationStore((state) => state.page)
  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending } = useQuery({
    queryKey: [keys.members, debouncedSearch, page],
    queryFn: () => getCommunityMembers(communityId, debouncedSearch, page),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  }

  const communityMembers = data?.data?.docs

  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
      <SearchFilterBar
        placeholder="Search members by name..."
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />
      <CommunityMemberTable data={communityMembers} isLoading={isPending} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
