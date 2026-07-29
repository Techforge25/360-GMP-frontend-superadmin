"use client";
import { useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import Link from "next/link";
import Tabs from "../common/Tabs";
import { FiUsers } from "react-icons/fi";
import RoleAccessTable from "./RoleAccessTable";


export default function RolesPermissionsList() {
  const [activeTab, setActiveTab] = useState("role-control");

  const tabs = [
    {
      id: "role-control",
      label: "Role & Access Control",
      icon: <FiUsers />,
    },
  ];

  return (
    <main className="min-h-screen bg-surface p-6 md:p-1 font-secondary flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-[1.375rem] font-semibold text-brand-primary tracking-wide">
            Roles & Permissions Management
          </h1>

          <p className="text-[1rem] text-text-secondary mt-1">
            Define administrative access levels and module permissions across
            the enterprise.
          </p>
        </div>

        <Link href="/settings/invite-admin" className="btn-primary">
          <IoPersonAddOutline className="btn-primary-icon" />
          <span>Invite Admin</span>
        </Link>
      </div>

      <div className="mt-2">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="mt-4 flex-1">
        <RoleAccessTable />
      </div>
    </main>
  );
}
