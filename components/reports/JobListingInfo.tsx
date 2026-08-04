import React from "react";

function JobListingInfo() {
  return (
    <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
      <h3 className="mb-4 text-[1rem] font-bold uppercase tracking-wide text-gray-800">
        Job Listing Details
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
        <div>
          <p className="mb-1 text-[1rem] text-gray-500">Job Title:</p>
          <p className="font-medium text-[1rem] text-gray-900">
            Senior Remote React Engineer ($150k)
          </p>
        </div>
        <div>
          <p className="mb-1 text-[1rem] text-gray-500">Company Name:</p>
          <p className="font-medium text-[1rem] text-gray-900">
            Apex Global Dynamics
          </p>
        </div>
        <div>
          <p className="mb-1 text-[1rem] text-gray-500">Job Type:</p>
          <p className="font-medium text-gray-900">Full-Time / Remote</p>
        </div>
      </div>
    </div>
  );
}

export default JobListingInfo;
