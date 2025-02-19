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
import Capabilities from '../components/Capabilities'

const Services = () => {
  return (
    <>
      <Header />
      <Hero2
                image={"/macBackground.svg"}
                heading={"Web Development Services"}
                description={
                    "We build user-friendly websites that are tailored to your business goals. From sleek designs to seamless functionality, we ensure your online presence stands out and performs at its best"
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
      {/* <Capabilities /> */}
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

export default Services
