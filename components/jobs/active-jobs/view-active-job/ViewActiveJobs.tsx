import React from "react";
import BackButtonMain from "@/components/common/BackButtonMain";
import JobPostReview from "./JobPostReview";

function ViewActiveJobs() {
  const contact = true;
  return (
    <div className="pb-3">
      <BackButtonMain />
      <JobPostReview contact={contact} />
    </div>
  );
}

export default ViewActiveJobs;
