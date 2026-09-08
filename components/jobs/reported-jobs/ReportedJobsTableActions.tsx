"use client";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function ReportedJobsTableActions({ id }: Props) {
  const router = useRouter();

 const handleViewAccount = () => {
  router.push(`/jobs/view-reported-job-preview/${id}`);
};

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <PreviewButton  onClick={handleViewAccount}/>
      </div>

    </>
  );
}
