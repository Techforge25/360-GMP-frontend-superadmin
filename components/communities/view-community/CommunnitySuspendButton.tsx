"use client";
import Image from "next/image";
import { useRef } from "react";
import suspendIcon from "@/assets/suspendIcon.svg";
import warnIcon from "@/assets/warncommunityIcon.svg";
import SuspendedModal from "@/components/modal/SuspendedModal";
import { CommunityRef } from "@/types";
import WarnCommunityModal from "@/components/modal/WarnCommunityModal";
import { FiCheckCircle } from "react-icons/fi";
import EnableModal from "@/components/modal/EnableModal";
import { ParamValue } from "next/dist/server/request/params";

interface Props {
  communityId: ParamValue;
  warnings: number;
  status: string;
  name: string;
}

export default function CommunnitySuspendButton({
  communityId,
  warnings,
  status,
  name
}: Props) {
  const suspendedModalRef = useRef<CommunityRef>(null);
  const warnCommunityModalRef = useRef<CommunityRef>(null);
  const enableModalRef = useRef<CommunityRef>(null)
  return (
    <>
      <div className="flex gap-3 justify-end">
        {status === 'suspended' && (
          <button className="border border-border-green text-border-green gap-2 rounded-[0.5rem] flex items-center py-2 px-5 bg-green-50 text-[1rem] font-inter font-normal cursor-pointer"
            onClick={() => enableModalRef.current?.open()}
          >
            <span>Enable</span>

            <FiCheckCircle className="w-[1.146rem] h-[1.146rem]" />
          </button>
        )}

        {warnings >= 3 &&  status === 'active' && (
          <button
            className="border border-border-red-dark text-border-red-dark gap-2 rounded-[0.5rem] flex items-center py-2 px-5 bg-brand-business-icon-light text-[1rem ] font-inter font-normal cursor-pointer"
            onClick={() => suspendedModalRef.current?.open()}
          >
            <span>Suspend</span>
            <Image
              src={suspendIcon}
              width={100}
              height={100}
              alt=""
              className="w-[1.146rem] h-[1.146rem]"
            />
          </button>
        )}

        {warnings !== 3 && (
          <button
            className="border border-brand-primary text-white gap-2 rounded-[0.5rem] flex items-center py-2 px-5 bg-brand-primary text-[1rem] font-inter font-normal cursor-pointer"
            onClick={() => warnCommunityModalRef.current?.open()}
          >
            <span>Warn Community Owner</span>
            <Image
              src={warnIcon}
              width={100}
              height={100}
              alt=""
              className="w-[1.089rem] h-[0.917rem]"
            />
          </button>
        )}

      </div>
      {status !== 'suspended' && (
        <SuspendedModal communityId={communityId} ref={suspendedModalRef} name={name} />
      )}
      <WarnCommunityModal
        communityId={communityId}
        ref={warnCommunityModalRef}
        name={name}
      />
      <EnableModal communityId={communityId} ref={enableModalRef} name={name} />
    </>
  );
}
