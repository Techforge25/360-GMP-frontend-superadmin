'use client'
import PaginationComponent from "@/components/common/PaginationComponent";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getUserProfiles } from "@/services/account-management";
import { useDebounce } from "@/hooks/useDebounceSearch";
import { useNavigationStore } from "@/store/modulesStore";
import ActiveJobsTable from "./ActiveJobsTable";
import { latestJobs } from "@/constants/jobs/latestJobsData";
// import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string;
  currentTab: string;
}

export default function ActiveJobs({ dateRange, currentTab }: Props) {
  // const [page, setPage] = useState(1)
  const setPage = useNavigationStore((state) => state.setPage)
  const page = useNavigationStore((state) => state.page)

  const handlePageChange = (page: number) => {
    setPage(page)
  }


  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
  
      <ActiveJobsTable  latestJobs={latestJobs} />
      {/* {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )} */}
    </div>
  );
}
