import React from 'react'
import Header from '../components/Header'
import BigHeadingSection from '../components/BigHeadingSection'
import BigHeading from '../components/BigHeading'
import OurHelp from '../components/OurHelp'
import ThinkPossibilities from '../components/ThinkPossibilities'
import Footer from '../components/Footer'
import ContactDetails from '../components/ContactDetails'
import Accordion from '../components/Accordion'

const ContactUs = () => {
  return (
    <>
      <Header />
      <BigHeadingSection text={<BigHeading text={"Contact Us"} />} />

        <ContactDetails />

      <OurHelp />
      <Accordion />
      <ThinkPossibilities />
      <Footer />
    </>
  )
}

export default ContactUs
