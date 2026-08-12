"use client";

import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import RejectBusinessModal from "./RejectBusinessModalRef";
import { RejectProductModalRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveBusiness } from "@/services/account-management";
import { useRouter } from "next/navigation";
import { keys } from "@/keys";

interface ActionButtonsProps {
  id: string;
}

export default function ActionButtons({ id }: ActionButtonsProps) {
  const rejectModalRef = useRef<RejectProductModalRef>(null);
  const queryClient = useQueryClient()
  const router = useRouter()

  const handleOpenRejectModal = () => {
    rejectModalRef.current?.open();
  };

  const mutation = useMutation({
    mutationFn: approveBusiness,
    onSuccess: () => {
      router.push('/account-management?tab=all-business')
      queryClient.invalidateQueries({ queryKey: [keys.accountBusinessList] });
    },
  })

  const handleApprove = () => {
    mutation.mutate(id)
  };

  return (
    <>
      <div className="flex justify-end items-center gap-[1rem] font-sans">
        <button onClick={handleOpenRejectModal} className="action-Reject">
          <span>Reject</span>
          <IoCloseOutline className="w-[1.25rem] h-[1.25rem]" />
        </button>

        <button onClick={handleApprove} disabled={mutation.isPending} className="approved-btn disabled:opacity-50 disabled:cursor-not-allowed">
          <span>{mutation.isPending ? 'Approving...' : 'Approve'}</span>
          <FiCheck className="w-[1.125rem] h-[1.125rem]" />
        </button>
      </div>
      <RejectBusinessModal ref={rejectModalRef} id={id} />
    </>
  );
}
