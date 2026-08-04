import React from "react";

function BusinessInfo() {
  return (
    <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
      <h3 className="mb-4 text-[1rem] font-bold uppercase tracking-wide text-gray-800">
        Business Profile Details
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
        <div>
          <p className="mb-1 text-[1rem] text-gray-500">Company Name::</p>
          <p className="font-medium text-[1rem] text-gray-900">
            TechVision Solution
          </p>
        </div>
        <div>
          <p className="mb-1 text-[1rem] text-gray-500">Business Owner:</p>
          <p className="font-medium text-[1rem] text-gray-900">
            Justin Hammer
          </p>
        </div>
        <div>
          <p className="mb-1 text-[1rem] text-gray-500">Business Email::</p>
          <p className="font-medium text-gray-900">business@techvision.com</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
