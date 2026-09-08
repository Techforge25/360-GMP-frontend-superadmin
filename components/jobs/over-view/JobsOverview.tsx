"use client";
import React from "react";
import dynamic from "next/dynamic";
import LatestJobs from "./LatestJobs";
import SectorDistributionShimmer from "@/components/skeleton/SectorDistributionShimmer";

const SectorDistribution = dynamic(() => import("../SectorDistribution"), {
  ssr: false,
  loading: () => <SectorDistributionShimmer />,
});

interface Props { 
  onViewAllJobs: () => void;
}

function JobsOverview({ onViewAllJobs }: Props) {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
      <SectorDistribution />
      <LatestJobs onViewAllJobs={onViewAllJobs} />
    </div>
  );
}

export default JobsOverview;
