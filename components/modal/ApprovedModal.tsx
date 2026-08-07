"use client";
import { keys } from "@/keys";
import { restoreAdmin } from "@/services/settings";
import { ApprovedModalModalRef, RestoreAdminModalRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import PrimaryButton from "../common/PrimaryButton";

interface TypeAdminId {
  adminId: ParamValue;
  handleApprove: () => void;
  isPending: boolean;
}

const ApprovedModal = forwardRef<ApprovedModalModalRef, TypeAdminId>(
  ({ adminId, handleApprove, isPending }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 overflow-y-auto">
        <div className="relative w-full max-w-[624px] rounded-[1.25rem] bg-white p-6 sm:p-8 shadow-2xl font-sans box-border">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
          >
            <FiX className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full bg-dark-blue-200 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary shadow-sm">
              <FiAlertCircle className="h-6 w-6 text-white" strokeWidth="2" />
            </div>
          </div>

          <div className="mt-6 text-center px-2 w-full overflow-hidden">
            <div className="w-full max-w-[500px] mx-auto overflow-hidden">
              <h2 className="text-[1.35rem] font-bold text-gray-900 leading-snug break-words">
                Are You Sure You Want To Approve This Product?
              </h2>
              <p className="mt-3 text-[0.9rem] font-normal leading-relaxed text-text-setting-light break-words whitespace-normal">
                Approving this product will make it available on the
                marketplace. Once approved, the product will be published and
                the business will be able to proceed with selling it to
                customers.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-gray-200 bg-white py-2 text-[1rem] font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer w-full"
            >
              Cancel
            </button>
            <PrimaryButton
              text={isPending ? "Approving..." : "Approve"}
              className="w-full"
              onClick={() => {
                handleApprove();
              }}
              disabledKey={isPending}
            />
          </div>
        </div>
      </div>
    );
  },
);

ApprovedModal.displayName = "ApprovedModal";

export default ApprovedModal;
