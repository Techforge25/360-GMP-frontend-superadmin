import moment from "moment";

function RejectedReason({ viewBusinessProfileData }: any) {
  return (
    <div className=" mt-8 border mb-7 border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center justify-between gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
        <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
          Business Profile Status
        </h3>

        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            viewBusinessProfileData?.status === "approved"
              ? "bg-green-100 text-green-700"
              : viewBusinessProfileData?.status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
          }`}
        >
          <span
            className={`mr-2 h-2 w-2 rounded-full ${
              viewBusinessProfileData?.status === "approved"
                ? "bg-green-500"
                : viewBusinessProfileData?.status === "rejected"
                  ? "bg-red-500"
                  : "bg-yellow-500"
            }`}
          />

          {viewBusinessProfileData?.status || "N/A"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border   p-4">
          <p className="text-[0.875rem] font-semibold font-inter text-text-secondary">
            {viewBusinessProfileData?.status === "rejected"
              ? "Rejected At"
              : "Approved At"}
          </p>

          <p className="text-[1rem] font-semibold font-open-sans text-text-light">
            {viewBusinessProfileData?.status === "rejected"
              ? viewBusinessProfileData?.rejection?.rejectedAt
                ? moment(viewBusinessProfileData.rejection.rejectedAt).format(
                    "MMM DD, YYYY",
                  )
                : "N/A"
              : viewBusinessProfileData?.approval?.approvedAt
                ? moment(viewBusinessProfileData.approval.approvedAt).format(
                    "MMM DD, YYYY",
                  )
                : "N/A"}
          </p>
        </div>
        {viewBusinessProfileData?.status === "rejected" && (
          <div className="rounded-lg border   p-4 sm:col-span-2">
            <p className="text-[0.875rem] font-semibold font-inter text-text-secondary">
              Rejection Reason
            </p>

            <p className="text-[1rem] font-semibold font-open-sans text-text-light">
              {viewBusinessProfileData?.rejection?.note || "No reason provided"}
            </p>
          </div>
        )}

        <div className="rounded-lg border   p-4 sm:col-span-2">
          <p className="text-[0.875rem] font-semibold font-inter text-text-secondary">
            {viewBusinessProfileData?.status === "rejected"
              ? "Rejected By"
              : "Approved By"}
          </p>
          <p className="text-[1rem] font-semibold font-open-sans text-text-light">
            {viewBusinessProfileData?.status === "rejected"
              ? viewBusinessProfileData?.rejection?.rejectedBy
              : viewBusinessProfileData?.approval?.approvedBy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RejectedReason;
