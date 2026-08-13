'use client'
import AccountManagementComp from "@/components/account-management/AccountManagementComp";
import initiatorHook from "@/hooks/initiatorHook";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function page() {
  initiatorHook('Account Management')
  return (
    <div className="min-h-screen bg-background p-6 md:p-4 font-sans">
      <Suspense fallback={null}>
        <AccountManagementComp />
      </Suspense>
    </div>
  );
}
