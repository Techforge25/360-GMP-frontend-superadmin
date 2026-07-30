import DataTable, { Column } from "@/components/common/DataTable";
import { AccountTableRowData } from "@/types";

import AccountManagementTableActions from "./AccountManagementTableActions";
import { accountTableData } from "@/constants/acount-management/AccountManagementTable";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import Image from "next/image";

const columns: Column<AccountTableRowData>[] = [
  {
    key: "name",
    header: "User Name",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <Image src={row.img} alt={row.name} width={40} height={40} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <span className="text-[1rem] font-medium text-[#556179]">{row.name}</span>
        <span className="mt-0.5 text-sm text-text-hint">{row.email}</span>
      </div>
      </div>
    ),
  },

  {
    key: "subscriptionType",
    header: "Subscription Type",
    render: (row) => <StatusBadge status={row.subscriptionType} />,
  },
  {
    key: "createdAt",
    header: "Join Date",
    render: (row) => <span className="text-[1rem] text-[#545961]">{row.createdAt}</span>,
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => <AccountManagementTableActions id={row.id} />,
  },
];

export default function AccountManagementTable() {
  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={accountTableData}
        rowKey={(row) => row.id}
      />
    </div>
  );
}
