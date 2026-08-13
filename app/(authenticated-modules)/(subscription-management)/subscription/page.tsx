'use client'
import SubscriptionComp from "@/components/subscription/SubscriptionComp";
import initiatorHook from "@/hooks/initiatorHook";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function page() {
  initiatorHook('Subscription Management')
  return (
    <Suspense fallback={null}>
      <SubscriptionComp />
    </Suspense>
  );
}
