"use client";
import { useRouter } from "next/navigation";
import { BsEye } from "react-icons/bs";

interface Props {
  id: string;
  subscriptionManagement: string;
}

export default function SubscriptionTransactionsActions({
  id,
  subscriptionManagement,
}: Props) {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button className="flex items-center gap-2  cursor-pointer">
          <BsEye className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
