import SubscriptionComp from "@/components/subscription/SubscriptionComp";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <Suspense fallback={null}>
      <SubscriptionComp />
    </Suspense>
  );
}
