"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteRoleModal from "@/components/modal/DeleteRoleModal";

interface Props {
  id: string;
}

export default function RoleTableActions({ id }: Props) {
  const router = useRouter();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
          onClick={() => setIsDeleteModalOpen(true)}
          className="text-accent-danger transition hover:text-red-700"
        >
          <FiTrash2 />
        </button>
      </div>

      {isDeleteModalOpen && (
        <DeleteRoleModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        //   onConfirm={() => {
        //     console.log("delete", id);
        //     setIsDeleteModalOpen(false);
        //   }}
        />
      )}
    </>
  );
}
