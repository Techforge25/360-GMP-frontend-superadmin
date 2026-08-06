"use client";

import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import RejectProductModal from "./RejectProductModalRef";
import { RejectProductModalRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "@/keys";
import { productApproval } from "@/services/marketplace";
import { useRouter } from "next/navigation";

interface ActionButtonsProps {
  id: string;
}

export default function RejectButtons({ id }: ActionButtonsProps) {
  const rejectModalRef = useRef<RejectProductModalRef>(null);
  const queryClient = useQueryClient()
  const router = useRouter()

  const handleOpenRejectModal = () => {
    rejectModalRef.current?.open();
  };

  const mutation = useMutation({
    mutationFn: productApproval,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keys.orderProductAuditQueue] });
      router.push('/marketplace')
    },
  });

  const handleApprove = () => {
    mutation.mutate(id)
  };

  return (
    <>
      <div className="flex justify-end items-center gap-[1rem] font-inter pt-5">
        <button
          onClick={handleOpenRejectModal}
          className="action-Reject"
        >
          <span>Reject</span>
          <IoCloseOutline className="w-[1.25rem] h-[1.25rem]" />
        </button>

        <button
          onClick={handleApprove}
          disabled={mutation.isPending}
          className="approved-btn disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{mutation.isPending ? 'Approving...' : 'Approve'}</span>
          <FiCheck className="w-[1.125rem] h-[1.125rem]" />
        </button>
      </div>

      <RejectProductModal ref={rejectModalRef} id={id} />
    </>
  );
}
