"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import { RejectProductModalRef, TypeNotes } from "@/types";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "@/keys";
import { productRejection } from "@/services/marketplace";
import { yupResolver } from "@hookform/resolvers/yup";
import { notesSchema } from "@/validations/notesValidations";
import { useRouter } from "next/navigation";

interface RejectProductModalProps {
  id: string;
}

const RejectProductModal = forwardRef<
  RejectProductModalRef,
  RejectProductModalProps
>(({ id }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TypeNotes>({
    resolver: yupResolver(notesSchema),
    defaultValues: {
      note: "",
    },
  });

  const mutation = useMutation({
    mutationFn: productRejection,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [keys.orderProductAuditQueue],
      });
      setIsOpen(false);
      router.push("/marketplace");
    },
  });

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const handleConfirm = (data: TypeNotes) => {
    mutation.mutate({
      productId: id,
      note: data.note,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-[1rem] font-sans">
      <div className="relative w-full max-w-[42rem] bg-white rounded-[1rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-[1.75rem] py-[1.25rem] border-b border-gray-100">
          <div className="flex items-center gap-[0.75rem]  ">
            <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem]   rounded-full bg-reject text-reject">
              <IoMdClose className="w-[1rem] h-[1rem] bg-white rounded-full" />
            </div>

            <h2 className="text-[1.125rem] font-bold text-gray-900">
              Reject Payout Request
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 p-[0.25rem] rounded-[0.375rem] cursor-pointer"
          >
            <IoCloseOutline className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleConfirm)}>
          <div className="p-[1.75rem] flex flex-col gap-[1.5rem]">
            <p className="text-[0.875rem] text-kyc-text-heading leading-[1.375rem]">
              Please provide a reason for rejecting this product. This
              information will be shared with the business to help resolve the
              issue.
            </p>

            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-[0.875rem] font-semibold text-kyc-text-subheading font-open-sans">
                Reason for Rejection{" "}
                <span className="text-red-500 font-normal">*</span>
              </label>

              <textarea
                {...register("note")}
                rows={4}
                placeholder="Provide specific details regarding the rejection to assist the business."
                className="text-area capitalize text-[0.875rem] font-inter font-normal"
              />

              {errors.note && (
                <p className="text-sm text-red-500">{errors.note.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-[1rem] px-[1.75rem] py-[1.25rem] border-t border-gray-100 bg-gray-50/50">
            <button
              onClick={() => setIsOpen(false)}
              className="reject-btn w-full"
            >
              Cancel
            </button>

            <button
              disabled={!isValid || mutation.isPending}
              className="confirm-reject w-full"
            >
              <span>
                {mutation.isPending ? "Rejecting..." : "Confirm Rejection"}
              </span>
              <span className="text-reject rounded-full bg-white px-1 py-1">
                <FiCheck className="w-[0.7rem] h-[0.7rem]" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

RejectProductModal.displayName = "RejectProductModal";

export default RejectProductModal;
