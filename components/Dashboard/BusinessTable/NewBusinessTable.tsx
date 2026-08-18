"use client"

import { useQuery } from "@tanstack/react-query";
// import PaginationComponent from "@/components/common/PaginationComponent";
import NewBusinessInnerTable from "./BusinessTable";
import NewBusinessesHeader from "./NewBusinessesHeader";
import { fetchLatestBusinesses } from "@/services/dashboard";
import { keys } from "@/keys";
import TableShimmer from "@/components/skeleton/TablesShimmer";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useNavigationStore } from "@/store/modulesStore";
export default function NewBusinessTable() {
  const setPage = useNavigationStore((state) => state.setPage)
  const page = useNavigationStore((state) => state.page)
  const { data, isPending } = useQuery({
    queryKey: [keys.latestBusinesses],
    queryFn: fetchLatestBusinesses
  })

  if (isPending) {
    return <TableShimmer columns={3} />
  }

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const newBusinesses = data?.data?.docs

  return (
    <div className="rounded-2xl border border-border-light bg-white  mt-14 shadow-sm">
      <NewBusinessesHeader />
      <NewBusinessInnerTable newBusinessData={newBusinesses} isPending={isPending} />
      {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )}
    </div>
  );
}
