"use client"

// import PaginationComponent from "@/components/common/PaginationComponent";
import NewBusinessInnerTable from "./BusinessTable";
import NewBusinessesHeader from "./NewBusinessesHeader";
export default function NewBusinessTable() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 mt-14 shadow-sm">
      <NewBusinessesHeader />
      <NewBusinessInnerTable/>
      {/* <PaginationComponent /> */}
    </div>
  );
}
