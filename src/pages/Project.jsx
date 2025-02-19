import React from 'react'
import Header from '../components/Header'
import ThinkPossibilities from '../components/ThinkPossibilities'
import Accordion from '../components/Accordion'
import OurHelp from '../components/OurHelp'
import Hero from '../components/hero/Hero'
import Footer from '../components/Footer'
import ProjectButtons from '../components/ProjectButtons'
import ProjectGallery from '../components/ProjectGallery'

const Project = () => {
  return (
    <>
      <Header />
      <Hero hc={'Creating next generation digital products'} smallHeading={'Success Stories'} />
      <ProjectButtons />
      <ProjectGallery />
      <OurHelp />
      < Accordion/>
      < ThinkPossibilities/>
      <Footer />
    </>
  )
}

export default Project
