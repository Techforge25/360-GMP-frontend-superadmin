"use client";

import { warningReasons } from "@/constants/communities/WarnReason";
import { TypeCommunityId, WarningFormData } from "@/types";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import { FiAlertCircle, FiChevronDown, FiX } from "react-icons/fi";
import WarningIcon from "@/assets/SendWarningIcon.svg"
export interface WarnCommunityModalRef {
  open: () => void;
  close: () => void;
}

const WarnCommunityModal = forwardRef<WarnCommunityModalRef, TypeCommunityId>(
  ({ communityId }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
      register,
      watch,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<WarningFormData>({
      defaultValues: {
        reason: "",
        description: "",
      },
    });

    const selectedReason = watch("reason");
    const customMessage = watch("description");

    useImperativeHandle(ref, () => ({
      open: () => {
        reset();
        setIsOpen(true);
      },
      close: () => {
        setIsOpen(false);
        reset();
      },
    }));

    const handleClose = () => {
      setIsOpen(false);
      reset();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-4 overflow-y-auto">
        <div className="relative w-full max-w-[45.375rem] rounded-[0.75rem] bg-white px-4 sm:px-5 py-4 shadow-2xl font-inter box-border">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-5 top-5 text-text-light transition-colors duration-200 cursor-pointer hover:text-gray-800"
          >
            <FiX className="h-5 w-5" />
          </button>

          <form>
            <div className="flex items-center gap-3 pb-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF8A2B]">
                <FiAlertCircle className="h-5 w-5 text-white" strokeWidth={2} />
              </div>

              <div className="pr-8">
                <h2 className="text-[1.375rem] font-medium text-text-light font-inter leading-tight">
                  Warn Community Owner
                </h2>

                <p className="mt-0.5 text-[1rem] font-normal font-inter text-text-secondary">
                  Send a warning notification to the community owner
                </p>
              </div>
            </div>

            <hr className="border-border-gray-200" />
            <div className="mt-4">
              <label
                htmlFor="warningReason"
                className="mb-2 block text-[0.875rem] font-semibold font-open-sans text-text-light"
              >
                Warning Reason
              </label>

              <div className="relative">
                <select
                  id="reason"
                  {...register("reason", {
                    required: "Please select a warning reason",
                  })}
                  className={`h-[2.25rem] w-full appearance-none rounded-[0.5rem] border bg-white px-3 pr-10 text-[0.875rem] font-normal font-inter text-text-primary outline-none transition-colors cursor-pointer ${
                    errors.reason
                      ? "border-red-500"
                      : "border-border-gray-200 "
                  }`}
                >
                  <option value="">Select a reason</option>

                  {warningReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>

                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-700" />
              </div>

              {errors.reason && (
                <p className="mt-1 text-[0.6875rem] text-red-500">
                  {errors.reason.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                 className="mb-2 block text-[0.875rem] font-semibold font-open-sans text-text-light"
              >
                Custom Message (Optional)
              </label>

              <textarea
                id="description"
                {...register("description")}
                placeholder="Add Additional Context Or Instructions For The Owner..."
                className="h-[5.875rem] w-full resize-none rounded-[0.5rem] border border-border-gray-200 bg-white px-3 py-2.5 text-[0.75rem] font-normal text-text-secondary placeholder:text-text-secondary font-inter outline-none "
              />
            </div>

            <div className="mt-4 rounded-[0.375rem] border border-brand-rating-star bg-[#FFFBED] p-3">
              <p className="text-[1rem] font-semibold open-sans text-text-secondary">
                Preview
              </p>

              <div className="mt-3 flex items-start gap-2">
                <FiAlertCircle
                  className="mt-[0.125rem] h-[1.146rem] w-[1.146rem] shrink-0 text-border-orange-dark"
                  strokeWidth={2}
                />

                <div className="min-w-0">
                  <p className="text-[0.875rem] font-medium font-inter text-border-orange-dark">
                    Warning
                  </p>

                  <p className="mt-2 text-[0.875rem] font-normal font-inter leading-relaxed text-brand-rating-star">
                    Your Community <span className="font-semibold">(The Techvision Hub)</span> Has Received A
                    Moderation Warning.
                  </p>

                  <p className="mt-1 text-[0.875rem]  font-normal leading-relaxed text-brand-rating-star">
                    Reason: {selectedReason || "Spam Content"}
                  </p>

                  <p className="mt-2 text-[0.75rem] font-normal font-inter leading-relaxed text-text-gray-more">
                    {customMessage ||
                      "Please Review And Address This Issue To Avoid Further Action."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 rounded-[0.5rem] border border-border-gray-200 bg-white py-2 text-[1rem] font-normal font-inter text-text-light transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-[0.5rem] border border-[#FF8A2B] bg-[#FFF5EC] py-2 text-[1rem] font-normal font-inter text-brand-rating-star transition-colors duration-200 hover:bg-[#FFF0E1] cursor-pointer"
              >
                <span>Send Warning</span>

                <Image src={WarningIcon} alt="" width={100} height={100} className="w-[1.089rem] h-[0.917rem]"/>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  },
);

WarnCommunityModal.displayName = "WarnCommunityModal";

export default WarnCommunityModal;
