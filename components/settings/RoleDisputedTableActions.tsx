"use client";
import { FaClockRotateLeft } from "react-icons/fa6";
import PrimaryButton from "../common/PrimaryButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "@/keys";
import { restoreAdmin } from "@/services/settings";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

export default function RoleDisputedTableActions({ id }: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: restoreAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keys.adminList] })
      toast.success("Admin restored successfully");
    },
  })

  const handleRestoreAdmin = () => {
    mutation.mutate(id);
  }

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button
          type='button'
          onClick={() => handleRestoreAdmin()}
          disabled={mutation.isPending}
          className={'btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'}
        >
          <span className="btn-primary-icon"><FaClockRotateLeft /></span>
          <span>Restore Admin</span>
        </button>
      </div>
    </>
  );
}
