import React from 'react'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Navbar from '../Components/Navbar'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
        <Navbar />
        <Hero2 heading="ABOUT." text="Im a Front-End Developer " />
        <AboutContent />
        <Footer  />
        </div>
  )
}

export default About;