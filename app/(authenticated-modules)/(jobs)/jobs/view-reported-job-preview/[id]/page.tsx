"use client"
import BackButtonMain from "@/components/common/BackButtonMain";
import JobPostReview from "@/components/jobs/active-jobs/view-active-job/JobPostReview";
import JobReports from "@/components/jobs/reported-jobs/view-reported-jobs/ReportedJobs";
import React, { useRef } from "react";
import { MdMailOutline } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { RemoveJobModalRef } from "@/types";
import RemoveJobModal from "@/components/modal/RemoveJobModal";
function page() {
  const contact = false;
  const modalRef = useRef<RemoveJobModalRef>(null);
  return (
    <div className="p-4 pt-2">
      <div className="flex justify-between pb-8">
        <BackButtonMain />
        <div className="flex gap-3">
          <button className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[0.5rem] bg-brand-primary px-3 py-1.5 text-white font-normal text-[1rem] font-inter">
            Contact Business
            <MdMailOutline size={16} className="shrink-0" />
          </button>
          <button
            type="button"
            onClick={() => modalRef.current?.open()}
            className="flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-[0.5rem] border border-border-red-dark bg-brand-business-icon-light px-3 py-1.5 font-inter text-[1rem] font-normal text-border-red-dark"
          >
            Remove Job
            <ImBin size={16} className="shrink-0" />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-5">
        <div className="w-1/2">
          <JobPostReview contact={contact} />
        </div>

        <div className="w-1/2">
          <JobReports />
        </div>
      </div>
       <RemoveJobModal
        ref={modalRef}
        adminId="6a75d009bde0dc37c281046c"
      />
    </div>
  );
}

export default page;
