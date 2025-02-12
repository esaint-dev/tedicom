import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThinkPossibilities from '../components/ThinkPossibilities';
import Accordion from '../components/Accordion';
import OurHelp from '../components/OurHelp';
import Hero from '../components/hero/Hero';
import OurTeam from '../components/OurTeam';
import OurTeamReversed from '../components/OurTeamReversed';


const About = () => {
  return (
    <>
      <Header />
      <Hero h2a={'Top quality'} span={'Solutions'} desc={'Our on-demand teams are ready to design, build, launch and scale your business efficiently'} />
      <OurTeam />
      <section className="flex flex-col justify-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px] sm:gap-[35px] border-t border-b">
        
        <h1 className='font-bold text-center text-[20px] sm:text-[30px] lg:text-[38px] xl:text-[48px]'>Tedikom provides spectrum of high quality IT services by collaborating with businesses across the globe as their tech partner</h1>
    </section>
    <OurTeamReversed />
      <OurHelp />
      <Accordion />
      <ThinkPossibilities />
      <Footer />
    </>
  )
}

export default About
