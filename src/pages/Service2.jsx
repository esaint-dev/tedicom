import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThinkPossibilities from "../components/ThinkPossibilities";
import Overview from "../components/Overview";
import DesignProcess from "../components/DesignProcess";
import WhyUs from "../components/WhyUs";
import EngagementModels from "../components/EngagementModels";
import WordsOfAppreciation from "../components/WordsOfAppreciation";
import NextTechPartner from "../components/NextTechPartner";
import Accordion from "../components/Accordion";
import Hero2 from "../components/Hero2";
import StandatdButton from "../components/Buttons/StandatdButton";
import Carousel from "../components/Carousel";
import Hero2Stats from "../components/Hero2Stats";

const Service2 = () => {
    return (
        <>
            <Header />
            <Hero2
                image={"/handBackground.svg"}
                heading={"AI Automation Services"}
                description={
                    "Empowering businesses with AI-driven automation solutions designed to streamline workflows, enhance efficiency, and drive innovation while addressing your unique operational challenges."
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
    );
};

export default Service2;
