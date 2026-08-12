"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { notesSchema } from "@/validations/notesValidations";
import { rejectBusiness } from "@/services/account-management";
import { keys } from "@/keys";

export interface RejectBusinessModalRef {
  open: () => void;
  close: () => void;
}

interface RejectBusinessModalProps {
  id: string;
}

type RejectBusinessFormValues = {
  note: string;
};

const RejectBusinessModal = forwardRef<
  RejectBusinessModalRef,
  RejectBusinessModalProps
>(({ id }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RejectBusinessFormValues>({
    resolver: yupResolver(notesSchema),
    mode: "onChange",
    defaultValues: {
      note: "",
    },
  });

  const mutation = useMutation({
    mutationFn: rejectBusiness,
    onSuccess: () => {
      reset();
      setIsOpen(false);

      queryClient.invalidateQueries({
        queryKey: [keys.accountBusinessList],
      });

      router.push("/account-management?tab=all-business");
    },
  });

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => {
      reset();
      setIsOpen(false);
    },
  }));

  const handleConfirm = (data: RejectBusinessFormValues) => {
    mutation.mutate({
      id,
      note: data.note,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[36rem] rounded-[1rem] bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-[1.75rem] py-[1.25rem]">
          <div className="flex items-center gap-[0.75rem]">
            <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-[#ffebee] text-reject">
              <MdErrorOutline className="h-[1.25rem] w-[1.25rem]" />
            </div>

            <h2 className="text-[1.125rem] font-bold text-gray-900">
              Reject Business Profile
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              reset();
              setIsOpen(false);
            }}
            className="cursor-pointer rounded-[0.375rem] p-[0.25rem] text-gray-400 hover:text-gray-600"
          >
            <IoCloseOutline className="h-[1.5rem] w-[1.5rem]" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleConfirm)}>
          <div className="flex flex-col gap-[1.5rem] p-[1.75rem]">
            <p className="text-[0.875rem] leading-[1.375rem] text-kyc-text-heading">
              Please select a reason for rejecting this profile. This
              information will be shared with the business to help them resolve
              the issue.
            </p>

            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-[0.875rem] font-semibold text-kyc-text-subheading">
                Additional Notes <span className="text-reject">*</span>
              </label>

              <textarea
                {...register("note")}
                rows={4}
                maxLength={1000}
                placeholder="Provide specific details regarding the rejection to assist the merchant."
                className="w-full resize-none rounded-[0.5rem] border border-gray-200 bg-white p-[1rem] text-[0.9375rem] text-gray-700 placeholder:text-gray-400 focus:border-[#2c0a59] focus:outline-none"
              />

              {errors.note && (
                <span className="text-sm text-red-500">
                  {errors.note.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-[1rem] border-t border-gray-100 bg-gray-50/50 px-[1.75rem] py-[1.25rem]">
            <button
              type="button"
              onClick={() => {
                reset();
                setIsOpen(false);
              }}
              className="cursor-pointer rounded-[0.5rem] border border-gray-200 bg-white px-[1.75rem] py-[0.625rem] text-[0.9375rem] font-semibold text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!isValid || mutation.isPending}
              className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] bg-reject px-[1.75rem] py-[0.625rem] text-[0.9375rem] font-semibold text-white hover:bg-[#e0342b] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>
                {mutation.isPending
                  ? "Rejecting..."
                  : "Confirm Rejection"}
              </span>

              <FiCheck className="h-[1.125rem] w-[1.125rem]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

RejectBusinessModal.displayName = "RejectBusinessModal";

export default RejectBusinessModal;