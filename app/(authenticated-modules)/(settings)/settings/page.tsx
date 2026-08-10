import RolesPermissionsList from "@/components/settings/RolesPermissionsList";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function RolesPermissionsPage() {
  return (
    <div className="p-4">
      <Suspense fallback={null}>
        <RolesPermissionsList />
      </Suspense>
    </div>
  );
}
