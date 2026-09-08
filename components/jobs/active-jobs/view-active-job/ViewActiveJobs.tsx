"use client";
import React from "react";
import BackButtonMain from "@/components/common/BackButtonMain";
import JobPostReview from "./JobPostReview";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { viewActiveProfile } from "@/services/job-management";
import JobPostReviewShimmer from "@/components/skeleton/JobPostReviewShimmer";

function ViewActiveJobs() {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: [keys.viewActiveJobs, id],
    queryFn: () => viewActiveProfile(id),
    staleTime: 0,
  });

  const activejobData = data?.data;
  return (
    <div className="pb-3">
      <BackButtonMain />
      {isPending ? (
        <JobPostReviewShimmer />
      ) : (
        <JobPostReview
          contact={true}
          totalJobApplicants={activejobData?.totalJobApplicants}
          companyName={activejobData?.businessProfile?.companyName}
          businessType={activejobData?.businessProfile?.businessType}
          logo={activejobData?.businessProfile?.logo}
          country={activejobData?.location?.country}
          city={activejobData?.location?.city}
          employmentType={activejobData?.employmentType}
          salaryMin={activejobData?.salaryMin}
          salaryMax={activejobData?.salaryMax}
          createdAt={activejobData?.createdAt}
          jobTitle={activejobData?.jobTitle}
          description={activejobData?.description}
          email={activejobData?.businessProfile?.email}
        />
      )}
    </div>
  );
}

export default ViewActiveJobs;
