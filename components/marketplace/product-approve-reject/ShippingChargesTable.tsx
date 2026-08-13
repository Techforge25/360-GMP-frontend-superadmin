import DataTable, { Column } from "@/components/common/DataTable";
import { shippingChargesData } from "@/constants/marketplace/shippingCharges";
import { TypeShippingCharge } from "@/types";

const columns: Column<TypeShippingCharge>[] = [
  {
    key: "region",
    header: "",
    render: (row) => (
      <span className="font-semibold font-inter text-text-light">
        {row.region}
      </span>
    ),
  },
  {
    key: "Asia",
    header: "Asia",
    render: (row) => (
      <span className="text-date-time text-[1rem] font-normal">
        {row.Asia}
      </span>
    ),
  },
  {
    key: "Africa",
    header: "Africa",
    render: (row) => (
      <span className="text-date-time text-[1rem] font-normal">
        {row.Africa}
      </span>
    ),
  },
  {
    key: "America",
    header: "America",
    render: (row) => (
      <span className="text-date-time text-[1rem] font-normal">
        {row.America}
      </span>
    ),
  },
  {
    key: "Antarctica",
    header: "Antarctica",
    render: (row) => (
      <span className="text-date-time text-[1rem] font-normal">
        {row.Antarctica}
      </span>
    ),
  },
  {
    key: "Europe",
    header: "Europe",
    render: (row) => (
      <span className="text-date-time text-[1rem] font-normal">
        {row.Europe}
      </span>
    ),
  },
  {
    key: "Australia",
    header: "Australia",
    render: (row) => (
      <span className="text-date-time text-[1rem] font-normal">
        {row.Australia}
      </span>
    ),
  },
];

export default function ShippingChargesTable() {
  const borderRadius = "border-none";

  return (
    <div className="pt-0">
      <DataTable
        columns={columns}
        data={shippingChargesData}
        rowKey={(row) => row._id}
        borderRadius={borderRadius} 
      />
    </div>
  );
}
