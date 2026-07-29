"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteRoleModal, {
  DeleteRoleModalRef,
} from "@/components/modal/DeleteRoleModal";

interface Props {
  id: string;
}


export default function RoleTableActions({ id }: Props) {
  const router = useRouter();

  const deleteModalRef = useRef<DeleteRoleModalRef>(null);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button
           onClick={() => router.push(`/settings/view-admin/${id}`)}
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          <FiEdit />
        </button>

        <button
          onClick={() => deleteModalRef.current?.open()}
          className="text-accent-danger transition hover:text-red-700"
        >
          <FiTrash2 />
        </button>
      </div>

 
        <DeleteRoleModal
        ref={deleteModalRef}
        onConfirm={() => {
          console.log("Delete:", id);
        }}
      />
 
    </>
  );
}
