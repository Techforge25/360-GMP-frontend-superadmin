"use client";

import { RemoveJobModalRef } from "@/types";
import { deleteReport } from "@/services/job-management";
import { keys } from "@/keys";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FiTrash2, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


interface RemoveJobModalProps {
  reportId?: string;
}

const RemoveJobModal = forwardRef<RemoveJobModalRef, RemoveJobModalProps>(
  ({ reportId }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate: removeJob, isPending } = useMutation({
      mutationKey: [keys.deleteReportedJob],

      mutationFn: (id: string) => deleteReport(id),

      onSuccess: (response) => {
        toast.success(response?.message || "Job removed successfully");

        setIsOpen(false);

        queryClient.invalidateQueries({
          queryKey: [keys.reportedJobs],
        });
        router.push("/jobs");
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to remove job",
        );
      },
    });

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const handleClose = () => {
      if (isPending) return;

      setIsOpen(false);
    };

    const handleConfirm = () => {
      if (!reportId || isPending) return;

      removeJob(reportId);
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-[400px] rounded-[10px] bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-business-icon-light">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border-red-dark">
                  <FiTrash2 size={16} strokeWidth={2} className="text-white" />
                </div>
              </div>

              <h2 className="font-inter text-[1.125rem] font-medium font-inter text-text-light">
                Remove Job
              </h2>
            </div>

            <button
              type="button"
              onClick={handleClose}
              disabled={isPending}
              className="flex h-6 w-6 cursor-pointer items-center justify-center text-text-light transition hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiX size={18} strokeWidth={1.8} />
            </button>
          </div>

          <div className="mt-5 flex min-h-[44px] items-center rounded-[0.5rem] border border-border-red-dark bg-brand-business-icon-light px-3">
            <p className="font-inter text-[0.875rem] font-semibold font-inter text-text-light">
              Are You Want To Remove This Job Permanently.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleClose}
              disabled={isPending}
              className="h-[36px] cursor-pointer rounded-[0.5rem] border border-[#E4E7EC] bg-white font-inter text-[1rem] font-normal text-text-light transition hover:bg-[#F9FAFB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleConfirm}
              disabled={isPending}
              className="flex h-[36px] cursor-pointer items-center justify-center gap-2 rounded-[7px] border border-border-red-dark bg-brand-business-icon-light font-inter text-[1rem] font-normal text-border-red-dark transition  disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-border-red-dark border-t-transparent" />
                  Removing...
                </>
              ) : (
                <>
                  Remove Job
                  <FiTrash2 size={15} strokeWidth={2} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  },
);

RemoveJobModal.displayName = "RemoveJobModal";

export default RemoveJobModal;
