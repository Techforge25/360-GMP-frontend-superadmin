"use client";

import { IoPersonAddOutline } from "react-icons/io5";
import RoleAccessTable from "./RoleAccessTable";
import RoleDisputedTable from "./RoleDisputedTable";
import { roleTabs } from "@/constants/roles/tabs";
import PrimaryButton from "../common/PrimaryButton";
import Tabs from "../common/Tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { keys } from "@/keys";
import { getCreatedAdmins } from "@/services/settings";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "../common/PaginationComponent";

export default function RolesPermissionsList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentTab = searchParams.get("tab") || roleTabs[0]?.id;

  const { data, isFetching } = useQuery({
    queryKey: [keys.adminList, currentTab],
    queryFn: () => getCreatedAdmins(currentTab),
  });

  const adminData = data?.data?.docs;

  const handleTabChange = (tabId: string) => {
    startTransition(() => {
      router.replace(`?tab=${tabId}`, {
        scroll: false,
      });
    });
  };

  return (
    <main className="min-h-screen bg-surface p-6 md:p-1 font-secondary flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-[1.375rem] font-semibold text-brand-primary tracking-wide">
            Roles & Permissions Management
          </h1>

          <p className="mt-1 text-[1rem] text-text-secondary">
            Define administrative access levels and module permissions across
            the enterprise.
          </p>
        </div>

        <PrimaryButton
          text="Invite Admin"
          icon={<IoPersonAddOutline />}
          route="/settings/invite-admin"
        />
      </div>

      <div className="mt-2">
        <Tabs
          tabs={roleTabs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div
        className={`
          mt-6 min-h-[500px]
          transition-opacity duration-200
          ${isPending ? "opacity-50" : "opacity-100"}
        `}
      >
        {currentTab === "role-control" && (
          <>
            <RoleAccessTable adminData={adminData} isFetching={isFetching} />
            <PaginationComponent />
          </>
        )}

        {currentTab === "deleted-admins" && (
          <>
            <RoleDisputedTable adminData={adminData} isFetching={isFetching} />
            <PaginationComponent />
          </>
        )}
      </div>
    </main>
  );
}
