"use client";

import RemoveJobModal from "@/components/modal/RemoveJobModal";
import { RemoveJobModalRef } from "@/types";
import React, { useRef } from "react";
import { ImBin } from "react-icons/im";
import { MdMailOutline } from "react-icons/md";

interface RemoveType {
  email: string;
  reportCount: number;
  reportId?: string;
}

function RemoveJobButton({ email, reportCount, reportId }: RemoveType) {
  const modalRef = useRef<RemoveJobModalRef>(null);


  return (
    <div>
      <div className="flex gap-3">
        <a
          href={`mailto:${email}`}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[0.5rem] bg-brand-primary px-3 py-1.5 font-inter text-[1rem] font-normal text-white"
        >
          Contact Business
          <MdMailOutline size={16} className="shrink-0" />
        </a>

        <button
          type="button"
    
          onClick={() => modalRef.current?.open()}
          className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[0.5rem] border border-border-red-dark bg-brand-business-icon-light px-3 py-1.5 font-inter text-[1rem] font-normal text-border-red-dark  cursor-pointer`}
        >
          Remove Job
          <ImBin size={16} className="shrink-0" />
        </button>
      </div>

      <RemoveJobModal ref={modalRef} reportId={reportId} />
    </div>
  );
}

export default RemoveJobButton;
