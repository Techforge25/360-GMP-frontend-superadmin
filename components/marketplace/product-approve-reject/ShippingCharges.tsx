import ShippingChargesTable from "./ShippingChargesTable";




export default function ShippingCharges() {
  return (
    <div className="rounded-2xl border border-border-gray-dark bg-white p-0 shadow-sm mt-7">
       <h1 className="text-[1.25rem] text-text-gray-more font-inter font-medium p-5">Shipping Charges</h1>
      <ShippingChargesTable />
    </div>
  );
}
