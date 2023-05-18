import React from 'react'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import PricingCard from '../Components/PricingCard'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project