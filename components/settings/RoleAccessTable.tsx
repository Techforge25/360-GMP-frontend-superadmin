import DataTable, { Column } from "@/components/common/DataTable";
import { roleTableData } from "@/constants/roles/roleTable";
import { TableRowData } from "@/types";
import RoleTableActions from "./RoleTableActions";

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
      <span className="roles-status">
        {row.moduleAccess}
      </span>
    ),
  },

  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => <RoleTableActions id={row.id} />,
  },
];

export default function RoleAccessTable() {
  return (
    <DataTable
      columns={columns}
      data={roleTableData}
      rowKey={(row) => row.id}
    />
  );
}
