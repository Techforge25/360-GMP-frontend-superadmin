import AccountManagementComp from "@/components/account-management/AccountManagementComp";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function page() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <Suspense fallback={null}>
        <AccountManagementComp />
      </Suspense>
    </div>
  );
}
