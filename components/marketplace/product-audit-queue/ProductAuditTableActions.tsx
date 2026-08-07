"use client";

import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  marketplace: string;
}

export default function ProductAuditTableActions({
  id,
  marketplace,
}: Props) {
  const router = useRouter();

  const handleViewAccount = () => {
    router.push(
      `/marketplace/view-product-information/${id}`
    );
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <PreviewButton onClick={handleViewAccount} />

  
    </div>
  );
}