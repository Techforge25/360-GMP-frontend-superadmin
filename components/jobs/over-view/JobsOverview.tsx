"use client"
import React from 'react'
import SectorDistribution from '../SectorDistribution'
import LatestJobs from './LatestJobs'

interface Props {
  onViewAllJobs: () => void;
}

function JobsOverview({ onViewAllJobs }: Props) {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <SectorDistribution/>
      <LatestJobs onViewAllJobs={onViewAllJobs} />
    </div>
  )
}

export default JobsOverview
