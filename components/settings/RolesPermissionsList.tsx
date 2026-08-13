"use client";

import { useEffect, useState } from "react";
import RoleAccessTable from "./RoleAccessTable";
import RoleDisputedTable from "./RoleDisputedTable";
import { roleTabs } from "@/constants/roles/tabs";
import PrimaryButton from "../common/PrimaryButton";
import Tabs from "../common/Tabs";
import { keys } from "@/keys";
import { getCreatedAdmins } from "@/services/settings";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "../common/PaginationComponent";
import InviteIcon from "@/assets/Icon.svg";
import Image from "next/image";
import { useTableScroll } from "@/hooks/useTableScroll";

export default function RolesPermissionsList() {
  const [currentTab, setCurrentTab] = useState(
    roleTabs[0]?.id || "role-control",
  );

  const [page, setPage] = useState(1);

  const { data, isFetching, isPending } = useQuery({
    queryKey: [keys.adminList, currentTab, page],
    queryFn: () => getCreatedAdmins(currentTab, page),
  });

  const tableRef = useTableScroll(page, isPending);

  const adminData = data?.data?.docs;

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    setPage(1);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (!data?.data) return;

    const totalPages = Math.ceil(
      data.data.totalDocs / data.data.limit,
    );

    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [data, page]);

  return (
    <main
      className="min-h-screen min-w-0 bg-surface p-6 md:p-1 font-secondary flex flex-col gap-6"
      ref={tableRef}
    >
      {/* Header */}
      <div className="flex flex-col xl:flex-row items-left xl:items-center justify-between gap-4">
        <div className="max-w-full sm:max-w-[90%] md:max-w-full">
          <h1 className="text-lg sm:text-xl md:text-[1.375rem] font-semibold text-brand-primary tracking-wide leading-tight">
            Roles & Permissions Management
          </h1>

          <p className="mt-1 text-sm sm:text-base text-text-secondary leading-relaxed">
            Define administrative access levels and module permissions across
            the enterprise.
          </p>
        </div>

        <PrimaryButton
          text="Invite Admin"
          icon={
            <Image
              src={InviteIcon}
              alt="Invite Admin"
              width={15}
              height={15}
              className="w-[1rem] h-[1rem]"
            />
          }
          route="/settings/invite-admin"
        />
      </div>

      {/* Tabs */}
      <div className="mt-2">
        <Tabs
          tabs={roleTabs}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>

      {/* Content */}
      <div className="mt-6 min-h-[500px] min-w-0 w-full">
        {currentTab === "role-control" && (
          <div className="w-full min-w-0 overflow-x-auto">
            <RoleAccessTable
              adminData={adminData}
              isFetching={isFetching}
            />

            {data?.data?.totalPages > 1 && (
              <PaginationComponent
                currentPage={page}
                handlePageChange={handlePageChange}
                totalPages={data?.data?.totalPages || 1}
                totalItems={data?.data?.totalDocs || 0}
                totalItemsPerPage={data?.data?.limit || 10}
              />
            )}
          </div>
        )}

        {currentTab === "deleted-admins" && (
          <div className="w-full min-w-0 overflow-x-auto">
            <RoleDisputedTable
              adminData={adminData}
              isFetching={isFetching}
            />

            {data?.data?.totalPages > 1 && (
              <PaginationComponent
                currentPage={page}
                handlePageChange={handlePageChange}
                totalPages={data?.data?.totalPages || 1}
                totalItems={data?.data?.totalDocs || 0}
                totalItemsPerPage={data?.data?.limit || 10}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
}