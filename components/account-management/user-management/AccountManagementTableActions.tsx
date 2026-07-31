"use client";
import PreviewButton from "@/components/common/PreviewButton";
import { useRouter } from "next/navigation";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

interface Props {
  id: string;
  accountManagement: string;
}

export default function AccountManagementTableActions({ id, accountManagement }: Props) {
  const router = useRouter();

 const handleViewAccount = () => {
  console.log("accountManagement:", accountManagement);
  console.log("id:", id);

  if (accountManagement === "accountManagementBusinessTable") {
    router.push(`/account-management/view-account-information-business/${id}`);
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
