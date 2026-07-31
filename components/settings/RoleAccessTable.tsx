'use client'
import DataTable, { Column } from "@/components/common/DataTable";
import { TableRowData } from "@/types";
import RoleTableActions from "./RoleTableActions";
import { useQuery } from "@tanstack/react-query";
import { getCreatedAdmins } from "@/services/settings";
import { keys } from "@/keys";

const columns: Column<TableRowData>[] = [
  {
    key: "name",
    header: "Role Name",
    render: (row) => {
      return (
        <div className="flex flex-col">
          <span className="text-[1rem] font-medium">{row?.name}</span>

          <span className="mt-0.5 text-sm text-text-hint">
            {row?.email}
          </span>
        </div>
      );
    },
  },

  {
    key: "allowedModules",
    header: "Module Access",
    render: (row) => {
      return (
        <span className="roles-status">
          {row?.allowedModules}
        </span>
      );
    },
  },

  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => {
      console.log("Action Column:", row);
      return <RoleTableActions id={row?._id} />;
    },
  },
];

export default function RoleAccessTable() {
  const { data, isFetching } = useQuery({
    queryKey: [keys.adminList],
    queryFn: getCreatedAdmins,
  });

  const adminData = data?.data?.docs

  return (
    <DataTable
      columns={columns}
      data={adminData}
      rowKey={(row) => row._id}
      isLoading={isFetching}
    />
  );
}
