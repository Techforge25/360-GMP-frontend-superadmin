import Dashboard from "@/components/Dashboard/Dashboard";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <Suspense fallback={null}>
      <Dashboard />
    </Suspense>
  );
}
