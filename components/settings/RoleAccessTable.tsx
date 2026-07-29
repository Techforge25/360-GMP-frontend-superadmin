"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import DataTable, { Column } from "@/components/common/DataTable";
import { useState } from "react";
import { TableRowData } from "@/types";
import { useRouter } from "next/navigation";
import DeleteRoleModal from "@/components/modal/DeleteRoleModal";

const data: TableRowData[] = [
  {
    id: "1",
    name: "Muhammad Umair",
    email: "umairstack.dev@gmail.com",
    moduleAccess: "5 Modules",
    status: true,
  },
  {
    id: "2",
    name: "Ali Khan",
    email: "ali@gmail.com",
    moduleAccess: "3 Modules",
    status: true,
  },
];

export default function RoleAccessTable() {
  const router = useRouter();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedRoleId(id);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (id: string) => {
    router.push(`/settings/view-admin/${id}`);
  };
  const columns: Column<TableRowData>[] = [
    {
      key: "name",
      header: "Role Name",
      render: (row) => (
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium">{row.name}</span>
          <span className="mt-0.5 text-sm text-text-hint">{row.email}</span>
        </div>
      ),
    },
    {
      key: "moduleAccess",
      header: "Module Access",
      render: (row) => (
        <span className="inline-block rounded-md  bg-brand-btn-pills-background px-3 py-1 text-xs font-medium text-brand-btn-pills">
          {row.moduleAccess}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      align: "center",
      render: (row) => (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleEdit(row.id)}
            className="text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            <FaEye />
          </button>
          <button
            onClick={() => handleEdit(row.id)}
            className="text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            <FiEdit />
          </button>
          <button
            onClick={() => handleDeleteClick(row.id)}
            className="text-accent-danger transition hover:text-red-700"
          >
            <FiTrash2 />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} rowKey={(row) => row.id} />;
      {isDeleteModalOpen && (
        <DeleteRoleModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  );
}
