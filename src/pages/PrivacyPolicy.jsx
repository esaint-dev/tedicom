import React from 'react'
import Navbar from '../components/Navbar'
import BigHeadingSection from '../components/BigHeadingSection'
import BigHeading from '../components/BigHeading'
import PaPDetails from '../components/PaPDetails'
import OurHelp from '../components/OurHelp'
import Footer from '../components/Footer'
import ThinkPossibilities from '../components/ThinkPossibilities'
import Accordion from '../components/Accordion'

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <BigHeadingSection text={<BigHeading text={"Privacy Policy"} />} />
      <PaPDetails />
      <OurHelp />
      <Accordion />
      <ThinkPossibilities />
      <Footer />
    </>
  )
}

export default PrivacyPolicy
