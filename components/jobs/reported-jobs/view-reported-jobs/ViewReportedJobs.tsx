"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import BackButtonMain from "@/components/common/BackButtonMain";
import PaginationComponent from "@/components/common/PaginationComponent";

import JobPostReview from "@/components/jobs/active-jobs/view-active-job/JobPostReview";
import RemoveJobButton from "@/components/jobs/reported-jobs/view-reported-jobs/RemoveJobButton";
import JobReports from "@/components/jobs/reported-jobs/view-reported-jobs/ReportedJobs";

import JobPostReviewShimmer from "@/components/skeleton/JobPostReviewShimmer";
import JobReportsShimmer from "@/components/skeleton/JobReportsShimmer";

import { keys } from "@/keys";
import { viewReportedProfile } from "@/services/job-management";
import { useNavigationStore } from "@/store/modulesStore";

function ViewReportedJobs() {
  const { id } = useParams();

  const setPage = useNavigationStore((state) => state.setPage);
  const page = useNavigationStore((state) => state.page);

  const [isPageChanging, setIsPageChanging] = useState(false);

  const reportsPerPage = 3;

  const { data, isPending } = useQuery({
    queryKey: [keys.viewReportedJobs, id],
    queryFn: () => viewReportedProfile(id),
    staleTime: 0,
  });

  const reportedjobData = data?.data;
  const jobReports = reportedjobData?.jobReports ?? [];

  const totalPages = Math.ceil(jobReports.length / reportsPerPage);

  const startIndex = (page - 1) * reportsPerPage;

  const paginatedJobReports = jobReports.slice(
    startIndex,
    startIndex + reportsPerPage,
  );

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;

    setIsPageChanging(true);
    setPage(newPage);

    setTimeout(() => {
      setIsPageChanging(false);
    }, 400);
  };

  return (
    <div className="p-4 pt-2">
      <div className="flex justify-between pb-8">
        <BackButtonMain />

        <RemoveJobButton
          email={reportedjobData?.businessProfile?.email}
          reportCount={reportedjobData?.reportCount ?? 0}
          reportId={reportedjobData?._id}
        />
      </div>

      <div className="flex w-full flex-col gap-5 lg:flex-row">
        <div className="w-full lg:w-1/2">
          {isPending ? (
            <JobPostReviewShimmer />
          ) : (
            <JobPostReview
              contact={false}
              totalJobApplicants={reportedjobData?.totalJobApplicants}
              companyName={reportedjobData?.businessProfile?.companyName}
              businessType={reportedjobData?.businessProfile?.businessType}
              logo={reportedjobData?.businessProfile?.logo}
              country={reportedjobData?.location?.country}
              city={reportedjobData?.location?.city}
              employmentType={reportedjobData?.employmentType}
              salaryMin={reportedjobData?.salaryMin}
              salaryMax={reportedjobData?.salaryMax}
              createdAt={reportedjobData?.createdAt}
              jobTitle={reportedjobData?.jobTitle}
              description={reportedjobData?.description}
              email={reportedjobData?.businessProfile?.email}
            />
          )}
        </div>

        <div className="w-full lg:w-1/2">
          {isPending || isPageChanging ? (
            <JobReportsShimmer />
          ) : (
            <>
              <JobReports
                jobReports={paginatedJobReports}
                reportCount={reportedjobData?.reportCount ?? 0}
              />

              {totalPages > 1 && (
                <div className="pb-2">
                  <PaginationComponent
                    currentPage={page}
                    handlePageChange={handlePageChange}
                    totalPages={totalPages}
                    totalItems={jobReports.length}
                    totalItemsPerPage={reportsPerPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewReportedJobs;
