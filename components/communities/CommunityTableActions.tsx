"use client";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function CommunityTableActions({ id }: Props) {
  const router = useRouter();

 const handleViewAccount = () => {
  console.log("id:", id);
  router.push(`/communities/view-community/${id}`);
};

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <PreviewButton  onClick={handleViewAccount}/>
      </div>

    </>
  );
}
