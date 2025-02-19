import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThinkPossibilities from '../components/ThinkPossibilities'
import Overview from '../components/Overview'
import DesignProcess from '../components/DesignProcess'
import WhyUs from '../components/WhyUs'
import EngagementModels from '../components/EngagementModels'
import WordsOfAppreciation from '../components/WordsOfAppreciation'
import NextTechPartner from '../components/NextTechPartner'
import Accordion from '../components/Accordion'
import Hero2 from '../components/Hero2'
import StandatdButton from '../components/Buttons/StandatdButton'
import Carousel from '../components/carousel/carousel'
import Hero2Stats from '../components/Hero2Stats'

const Service1 = () => {
  return (
    <>
     <Header />
     <Hero2
                image={"/handBackground.svg"}
                heading={"Expert Custom Software Development Services"}
                description={
                    "Delivering custom software solutions designed to enhance business operations, improve efficiency, and drive innovation, all while addressing your unique challenges."
                }
                stats={[
                    <Hero2Stats
                        number={"03"}
                        image={"/orange location.svg"}
                        text={"Development Centers"}
                    />,
                    <Hero2Stats number={"10+"} text={"Years of  Experience"} />,
                    <Hero2Stats number={"95%"} text={"Client Retention"} />,
                    <Hero2Stats
                        number={"4.8"}
                        image={"/orange star.svg"}
                        text={"Google Rating"}
                    />,
                ]}
                button={<StandatdButton text={"Discuss Your Idea"} />}
            />
      <Overview />
      <Carousel />
      <DesignProcess />
      <WhyUs />
      <EngagementModels />
      <WordsOfAppreciation />
      <Accordion />
      <ThinkPossibilities />
      <NextTechPartner />
      
      <Footer /> 
    </>
  )
}

export default Service1
