import React from 'react'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Navbar from '../Components/Navbar'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT." text="Lets have a chat"  />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact