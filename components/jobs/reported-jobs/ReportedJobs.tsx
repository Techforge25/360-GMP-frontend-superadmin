"use client";
import PaginationComponent from "@/components/common/PaginationComponent";
import { useNavigationStore } from "@/store/modulesStore";
import { latestJobs } from "@/constants/jobs/latestJobsData";
import ReportedJobsTable from "./ReportedJobsTable";
import { latestReportedJobsData } from "@/constants/jobs/latestReportedJobsData";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getReportedJobs } from "@/services/job-management";
// import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string;
  currentTab: string;
}

export default function ReportedJobs({ dateRange, currentTab }: Props) {
  const setPage = useNavigationStore((state) => state.setPage);
  const page = useNavigationStore((state) => state.page);

  const limit = 10;

  const { data: response, isPending } = useQuery({
    queryKey: [keys.reportedJobs, dateRange, page, limit],
    queryFn: () => getReportedJobs(dateRange, limit, page),
  });

  const jobs = response?.data?.docs ?? [];

  const totalPages = response?.data?.totalPages ?? 0;
  const totalDocs = response?.data?.totalDocs ?? 0;
  const totalItemsPerPage = response?.data?.limit ?? limit;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
      <ReportedJobsTable isPending={isPending} latestReportedJobsData={jobs} />
      {totalPages > 1 && (
        <PaginationComponent
          currentPage={page}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          totalItems={totalDocs}
          totalItemsPerPage={totalItemsPerPage}
        />
      )}
    </div>
  );
}
