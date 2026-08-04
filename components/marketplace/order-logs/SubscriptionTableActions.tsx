"use client";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  subscriptionManagement: string;
}

export default function SubscriptionTableActions({ id, subscriptionManagement }: Props) {
  const router = useRouter();

 const handleViewAccount = () => {
  console.log("subscriptionManagement:", subscriptionManagement);
  console.log("id:", id);

  if (subscriptionManagement === "SubscriptionManagementUsersTable") {
    router.push(`/subscription/view-subscription-free-trial-information/${id}`);
  } else {
    router.push(`/subscription/view-subscription-paid-information/${id}`);
  }
};

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <PreviewButton onClick={handleViewAccount}/>
      </div>

    </>
  );
}
