"use client";

import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import RejectBusinessModal from "./RejectBusinessModalRef";
import { RejectProductModalRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveBusiness } from "@/services/account-management";
import { useRouter } from "next/navigation";
import { keys } from "@/keys";
import CheckIcon from "@/assets/Checkwhite.svg"
import CheckX from "@/assets/IconX.svg"

import Image from "next/image";
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
      router.push('/account-management')
      queryClient.invalidateQueries({ queryKey: [keys.accountBusinessList] });
    },
  })

  const handleApprove = () => {
    mutation.mutate(id)
  };

  return (
    <>
      <div className="flex mt-[1.5rem] justify-end items-center gap-[1rem] font-sans">
        <button onClick={handleOpenRejectModal} className="action-Reject">
          <span>Reject</span>
        <Image src={CheckX} alt="" width={100} height={100} className="w-[0.934rem] h-[0.689rem]"/>
        </button>

        <button onClick={handleApprove} disabled={mutation.isPending} className="approved-btn disabled:opacity-50 disabled:cursor-not-allowed">
          <span>{mutation.isPending ? 'Approving...' : 'Approve'}</span>
          <Image src={CheckIcon} alt="" width={100} height={100} className="w-[0.934rem] h-[0.689rem]"/>
        </button>
      </div>
      <RejectBusinessModal ref={rejectModalRef} id={id} />
    </>
  );
}
