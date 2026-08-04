"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import DeleteRoleModal, {
  DeleteRoleModalRef,
} from "@/components/modal/DeleteRoleModal";
import { EditPasswordRef } from "@/types";
import EditPasswordModal from "../modal/EditPasswordModal";

interface Props {
  id: string;
  email: string;
}


export default function RoleTableActions({ id, email }: Props) {
  const router = useRouter();
  console.log("RoleTableActions Props:", { id, email });
  const deleteModalRef = useRef<DeleteRoleModalRef>(null);
  const editPasswordModalRef = useRef<EditPasswordRef>(null);

  return (
    <>
      <div className="flex items-center justify-center gap-4">

        <button
          onClick={() => router.push(`/settings/view-admin/${id}`)}
          className="text-text-secondary transition-colors hover:text-text-primary cursor-pointer"
        >
          <FiEdit />
        </button>

        <button
          onClick={() => deleteModalRef.current?.open()}
          className="text-accent-danger transition hover:text-red-700 cursor-pointer"
        >
          <FiTrash2 />
        </button>
        <button
          onClick={() => editPasswordModalRef.current?.open()}
          className="text-brand-primary underline whitespace-nowrap transition-colors cursor-pointer hover:text-text-primary"
        >
          Change Password
        </button>
      </div>
      <EditPasswordModal ref={editPasswordModalRef} adminId={id} adminEmail={email} />
      <DeleteRoleModal
        ref={deleteModalRef}
        adminId={id}
      />

    </>
  );
}
