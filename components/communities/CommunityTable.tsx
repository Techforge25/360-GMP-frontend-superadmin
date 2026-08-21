'use client';
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useTableScroll } from "@/hooks/useTableScroll";
import { useNavigationStore } from "@/store/modulesStore";
import CommunitiesTable from "./CommunitiesTable";

export default function CommunityTable() {

  const page = useNavigationStore((state) => state.page)
  const setPage = useNavigationStore((state) => state.setPage)

  const { data, isPending } = useQuery({
    queryKey: [keys.orderProductAuditQueue, page],
  });

  const tableRef = useTableScroll(page, isPending);

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
    <div className="rounded-2xl border border-border-light bg-white p-0 shadow-sm" ref={tableRef}>
      <CommunitiesTable 
      // productData={productData} 
      // isPending={isPending} 
      />
      {/* {data?.data?.totalPages > 1 && ( */}
        <PaginationComponent 
        currentPage={page} 
        handlePageChange={handlePageChange} 
        // totalPages={data?.data?.totalPages} 
        // totalItems={data?.data?.totalDocs} 
        // totalItemsPerPage={data?.data?.totalItemsPerPage} 
        />
      {/* )} */}
    </div>
  );
}
