import { Suspense } from "react";
import MarketPlaceMain from "@/components/marketplace/MarketPlaceMain";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <MarketPlaceMain />
    </Suspense>
  );
}