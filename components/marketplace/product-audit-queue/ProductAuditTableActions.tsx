"use client";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  marketplace: string;
}

export default function ProductAuditTableActions({ id, marketplace }: Props) {
  const router = useRouter();

 const handleViewAccount = () => {
  console.log("marketplace:", marketplace);
  console.log("id:", id);

  if (marketplace === "MarketplaceProductAuditTable") {
    router.push(`/marketplace/view-product-information/${id}`);
  } else {
    router.push(`/account-management/view-account-information-user/${id}`);
  }
};

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <PreviewButton  onClick={handleViewAccount}/>
      </div>

    </>
  );
}
