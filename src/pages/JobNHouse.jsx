import React from 'react'
import Hero from '../components/JobNHouse/Hero'
import PaginatedCards from '../components/JobNHouse/PaginatedCards'
import TransparentHeader from '../components/Shared/TransparentHeader'

function JobNHouse() {
  return (
    <div className="relative">
        <TransparentHeader />
        <Hero />
        <PaginatedCards />
    </div>
  )
}

export default JobNHouse