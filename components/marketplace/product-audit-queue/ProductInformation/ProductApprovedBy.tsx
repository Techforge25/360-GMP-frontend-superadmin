"use client";

import moment from "moment";

interface TypeProductApprovalRejection {
  status: string;
  approval:
    | {
        approvedBy: {
          email: string;
        };
        approvedAt: string;
      }
    | undefined;
  rejection:
    | {
        rejectedBy: {
          email: string;
        };
        rejectedAt: string;
        note: string;
      }
    | undefined;
}

function ProductApprovedBy({
  status,
  approval,
  rejection,
}: TypeProductApprovalRejection) {
  return (
    <div className="space-y-3 text-sm pt-6">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">
          {status === "approved" ? "Approved by:" : "Rejected By:"}
        </span>
        <span className="text-gray-500">
          {status === "approved"
            ? approval?.approvedBy?.email
            : rejection?.rejectedBy?.email}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">
          {status === "approved" ? "Approved Date:" : "Rejected Date:"}
        </span>
        <span className="text-gray-500">
          {status === "approved"
            ? moment(approval?.approvedAt).format("YYYY/MM/DD")
            : moment(rejection?.rejectedAt).format("YYYY/MM/DD")}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">Status:</span>
        <span className="flex items-center gap-1 text-gray-500 ">
          {status === "approved" ? "Approved" : "Rejected"}
        </span>
      </div>
      {rejection?.note && (
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-gray-800">Reason:</span>
          <span className="flex items-center gap-1 text-gray-500 ">
            {rejection?.note}
          </span>
        </div>
      )}
    </div>
  );
}

export default ProductApprovedBy;
