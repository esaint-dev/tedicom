import React from 'react'

// swiper slider imports
import { Swiper, SwiperSlide } from "swiper/react"; // ✅ Import Swiper components
import { Navigation } from "swiper/modules"; // ✅ Import Navigation module
import "swiper/css"; // ✅ Import Swiper core styles
import "swiper/css/navigation"; // ✅ Import navigation styles
import Header from '../components/Header';
import Hero from '../components/hero/Hero';
import StandatdButton from '../components/Buttons/StandatdButton';
import BorderBotton from '../components/Buttons/BorderBotton';
import Partners from '../components/Partners';
import Insights from '../components/Insights';
import OurHelp from '../components/OurHelp';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import CuttingEdgeTechnologies from '../components/CuttingEdgeTechnologies';
import { Navigate, useNavigate } from 'react-router-dom';
import PartnerWithExcellence from '../components/PartnerWithExcellence';
import Trustees from '../components/Trustees';
import WordsofAppreciationDark from '../components/WordsofAppreciationDark';
import Carousel2 from '../components/carousel2';



const Home = () => {

    const navigate = useNavigate();
    const handleContactRedirect = () => {
        navigate('/contactus');
        console.log('working')
      };

  return (
    <>
         <Header />
            <Hero h2a="Your" span="Technology" h2b="Solutions Provider" desc="Building Impactful Solutions that empower businesses to grow and succeed" button={<StandatdButton onClick={handleContactRedirect} text="Let’s Talk" />} />

            <section className="flex flex-col lg:flex-row w-full">
                <div className="bg-[#EDEFF2] flex flex-col gap-4  lg:w-[60%] px-[40px] py-[20px] lg:py-[60px] justify-center items-end">
                    <div className="self-start">
                        <h3 className="text-orange-500 text-2xl lg:text-[48px] font-medium">
                            EXPERTISE
                        </h3>

                        <p className="lg:max-w-[600px] lg:text-[28px]">
                            We create and deliver top-quality tech solutions.
                            Our on-demand teams are ready to design, build,
                            launch, and scale your business efficiently.
                        </p>
                    </div>
                </div>

                <div className="px-[40px] py-[20px] flex flex-col gap-3 lg:gap-[51px] justify-center items-center lg:w-[40%]">
                    <div className="flex flex-col gap-2 lg:gap-[20px]">
                        <h3 className="text-2xl lg:text-[48px] font-medium">
                            Software Development
                        </h3>
                        <p className="lg:text-[24px] font-medium">
                            We create robust, scalable, and innovative software
                            solutions tailored to meet your business needs.
                        </p>
                    </div>
                    <ul className=" self-start list-disc pl-5 lg:text-[24px]">
                        <li>Custom Software Development</li>
                        <li>Enterprise Resource Planning (ERP)</li>
                        <li>Legacy System Modernization</li>
                        <li>Responsive Web Design (RDW)</li>
                        <li>API Development and Integration</li>
                    </ul>
                    <div className="self-start">
                        <BorderBotton text="Know More" color={'#04369A'} />
                    </div>
                </div>
            </section>

            <Carousel />
            <CuttingEdgeTechnologies />
            <Partners />
            <Carousel2 />
            <PartnerWithExcellence />
            <Trustees />
            <WordsofAppreciationDark />
            <Insights />
            <OurHelp />

            <Footer /> 
    </>
  )
}

export default Home
