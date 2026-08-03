"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import DeleteRoleModal, {
  DeleteRoleModalRef,
} from "@/components/modal/DeleteRoleModal";
import { EditPasswordRef } from "@/types";
import EditPasswordModal from "../modal/EditPasswordModal";
import { FaClockRotateLeft } from "react-icons/fa6";
import PrimaryButton from "../common/PrimaryButton";

interface Props {
  id: string;
}

export default function RoleDisputedTableActions({ id }: Props) {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <PrimaryButton icon={<FaClockRotateLeft />} text="Restored Admin" />
      </div>
    </>
  );
}
