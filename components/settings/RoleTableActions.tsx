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
  name: string;
}


export default function RoleTableActions({ id, name }: Props) {
  const router = useRouter();
  console.log("RoleTableActions Props:", { id, name });
  const deleteModalRef = useRef<DeleteRoleModalRef>(null);
  const editPasswordModalRef = useRef<EditPasswordRef>(null);

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
         <button
          onClick={() => editPasswordModalRef.current?.open()}
          className="text-brand-primary underline transition-colors cursor-pointer hover:text-text-primary"
        >
         Change Password
        </button>
      </div>
      <EditPasswordModal ref={editPasswordModalRef} adminId={id} adminName={name} />
      <DeleteRoleModal
        ref={deleteModalRef}
        adminId={id}
      />

    </>
  );
}
