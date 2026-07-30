"use client";
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

  if (accountManagement) {
    console.log("Going Business");
    router.push(`/account-management/view-account-information-business/${id}`);
  } else {
    console.log("Going User");
    router.push(`/account-management/view-account-information-user/${id}`);
  }
};

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleViewAccount}
          className="flex items-center gap-2 rounded-lg border border-[#0B8806] bg-[#E6F6E9] px-5 py-1.5 text-[#0B8806] transition-colors hover:bg-[#D8F2DD]"
        >
          Preview <IoShieldCheckmarkOutline className="w-5 h-5" />
        </button>
      </div>

    </>
  );
}
