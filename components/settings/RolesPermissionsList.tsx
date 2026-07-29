import { IoPersonAddOutline } from "react-icons/io5";
import Tabs from "../common/Tabs";
import RoleAccessTable from "./RoleAccessTable";
import { roleTabs } from "@/constants/roles/tabs";
import PrimaryButton from "../common/PrimaryButton";

export default function RolesPermissionsList() {
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
        <Tabs tabs={roleTabs} />
      </div>

      <div className="mt-4 flex-1">
        <RoleAccessTable />
      </div>
    </main>
  );
}
