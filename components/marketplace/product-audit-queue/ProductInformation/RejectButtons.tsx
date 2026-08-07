"use client";

import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import RejectProductModal from "./RejectProductModalRef";
import { ApprovedModalModalRef, RejectProductModalRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "@/keys";
import { productApproval } from "@/services/marketplace";
import { useRouter } from "next/navigation";
import ApprovedModal from "@/components/modal/ApprovedModal";

interface ActionButtonsProps {
  id: string;
}

export default function RejectButtons({ id }: ActionButtonsProps) {
  const rejectModalRef = useRef<RejectProductModalRef>(null);
  const ApprovedModalModalRef = useRef<ApprovedModalModalRef>(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleOpenRejectModal = () => {
    rejectModalRef.current?.open();
  };

  const mutation = useMutation({
    mutationFn: productApproval,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [keys.orderProductAuditQueue],
      });
      ApprovedModalModalRef.current?.close();
      router.push("/marketplace?tab=product-audit-queue");
    },
  });

  const handleApprove = () => {
    mutation.mutate(id);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-[1rem] font-inter pt-5">
        <button onClick={handleOpenRejectModal} className="action-Reject">
          <span>Reject</span>
          <IoCloseOutline className="w-[1.25rem] h-[1.25rem]" />
        </button>

        <button
          onClick={() => ApprovedModalModalRef.current?.open()}
          className="approved-btn"
        >
          <span>Approve</span>
          <FiCheck className="w-[1.125rem] h-[1.125rem]" />
        </button>
      </div>

      <RejectProductModal ref={rejectModalRef} id={id} />
      <ApprovedModal
        ref={ApprovedModalModalRef}
        adminId={id}
        handleApprove={handleApprove}
        isPending={mutation.isPending}
      />
    </>
  );
}
