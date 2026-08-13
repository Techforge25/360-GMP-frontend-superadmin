"use client";
import DataTable, { Column } from "@/components/common/DataTable";
import { TableRowData, TypeCreateAdmin } from "@/types";
import RoleDisputedTableActions from "./RoleDisputedTableActions";

const columns: Column<TableRowData>[] = [
  {
    key: "name",
    header: "Admin Name",
    render: (row) => {
      return (
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium">{row?.username}</span>

          <span className="mt-0.5 text-sm text-gray-600">{row?.email}</span>
        </div>
      );
    },
  },
  {
    key: "allowedModules",
    header: "Module Access",
    render: (row) => {
      return (
        <div className="flex flex-wrap gap-2">
          {row?.allowedModules?.map((module, index) => (
            <span key={index} className="roles-status">
              {module?.module}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => {
      return <RoleDisputedTableActions id={row?._id} />;
    },
  },
];

interface Props {
  adminData: TableRowData[];
  isFetching: boolean;
}

export default function RoleDisputedTable({ adminData, isFetching }: Props) {
  return (
    <DataTable
      columns={columns}
      data={adminData}
      rowKey={(row) => row._id}
      isLoading={isFetching}
    />
  );
}
