"use client";
import { FaClockRotateLeft } from "react-icons/fa6";
import PrimaryButton from "../common/PrimaryButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "@/keys";
import { restoreAdmin } from "@/services/settings";
import { toast } from "react-toastify";
import RestoreAdminModal from "../modal/RestoreAdminModal";
import { RestoreAdminModalRef } from "@/types";
import { useRef } from "react";

interface Props {
  id: string;
}

export default function RoleDisputedTableActions({ id }: Props) {
  const RestoreAdminModalReff = useRef<RestoreAdminModalRef>(null);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => RestoreAdminModalReff.current?.open()}
          className={
            "btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          }
        >
          <span className="btn-primary-icon">
            <FaClockRotateLeft />
          </span>
          <span>Restore Admin</span>
        </button>

        <RestoreAdminModal ref={RestoreAdminModalReff} adminId={id} />
      </div>
    </>
  );
}
