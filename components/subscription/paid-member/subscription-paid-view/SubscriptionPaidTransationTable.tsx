import DataTable, { Column } from "@/components/common/DataTable";
import { SubscriptionTransactionTableRowData } from "@/types";

import SubscriptionTableActions from "@/components/subscription/SubscriptionTableActions";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import { formatDate } from "@/helpers";
import { SubsriptionTransactionTable } from "@/constants/subscription/SubsriptionTransactionTable";
import SubscriptionTransactionsActions from "./SubscriptionTransactionsActions";

 const subscriptionManagement = "SubscriptionManagementPaidTable";
  const columns: Column<SubscriptionTransactionTableRowData>[] = [
  {
    key: "_id",
    header: "invoice ID",
    render: (row) => (
      <div className="flex items-center space-x-3">
        <span className="text-[1rem] font-medium text-[#556179]">{row?._id}</span>
      </div>
    ),
  },

  {
    key: "date",
    header: "Date",
    render: (row) => <span className="text-[1rem] font-medium text-[#3b455a]">{formatDate(row?.date)}</span>,
  },
   {
    key: "status",
    header: "Status",
    render: (row) => <StatusBadge status={row?.status} />,
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    render: (row) => <SubscriptionTransactionsActions id={row?._id} subscriptionManagement={subscriptionManagement} />,
  },
];


export default function SubscriptionPaidTransationTable() {

  return (
    <div className="pt-8">
      <DataTable
        columns={columns}
        data={SubsriptionTransactionTable}
        rowKey={(row) => row?._id}
      />
    </div>
  );
}
