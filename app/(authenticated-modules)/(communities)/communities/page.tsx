'use client'
import { Suspense } from "react";
import initiatorHook from "@/hooks/initiatorHook";
import CommunitiesMain from "@/components/communities/CommunitiesMain";

export const dynamic = "force-dynamic";

export default function Page() {
  initiatorHook('Marketplace Management')
  return (
    <Suspense fallback={null}>
      <CommunitiesMain />
    </Suspense>
  );
}