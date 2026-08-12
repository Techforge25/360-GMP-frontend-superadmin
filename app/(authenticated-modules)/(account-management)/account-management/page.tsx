import AccountManagementComp from "@/components/account-management/AccountManagementComp";

export default async function page() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <AccountManagementComp />
    </div>
  );
}