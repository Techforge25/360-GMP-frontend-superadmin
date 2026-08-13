'use client'
import { Suspense } from "react";
import MarketPlaceMain from "@/components/marketplace/MarketPlaceMain";
import initiatorHook from "@/hooks/initiatorHook";

export const dynamic = "force-dynamic";

export default function Page() {
  initiatorHook('Marketplace Management')
  return (
    <Suspense fallback={null}>
      <MarketPlaceMain />
    </Suspense>
  );
}