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
      <Hero h2a={'Top quality'} span={'Solutions'} desc={'Our on-demand teams are ready to design, build, launch and scale your business efficiently'} />
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
