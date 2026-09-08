'use client'
import PaginationComponent from "@/components/common/PaginationComponent";
import { useNavigationStore } from "@/store/modulesStore";
import { latestJobs } from "@/constants/jobs/latestJobsData";
import ReportedJobsTable from "./ReportedJobsTable";
import { latestReportedJobsData } from "@/constants/jobs/latestReportedJobsData";
// import PaginationComponent from "@/components/common/PaginationComponent";

interface Props {
  dateRange: string;
  currentTab: string;
}

export default function ReportedJobs({ dateRange, currentTab }: Props) {
  // const [page, setPage] = useState(1)
  const setPage = useNavigationStore((state) => state.setPage)
  const page = useNavigationStore((state) => state.page)

  const handlePageChange = (page: number) => {
    setPage(page)
  }


  return (
    <div className="rounded-2xl border border-border-light bg-white  shadow-sm">
  
      <ReportedJobsTable  latestReportedJobsData={latestReportedJobsData} />
      {/* {data?.data?.totalPages > 1 && (
        <PaginationComponent currentPage={page} handlePageChange={handlePageChange} totalPages={data?.data?.totalPages} totalItems={data?.data?.totalDocs} totalItemsPerPage={data?.data?.totalItemsPerPage} />
      )} */}
    </div>
  );
}
