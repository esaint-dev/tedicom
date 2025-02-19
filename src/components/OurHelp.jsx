import React from "react";
import BorderText from "./BorderText";

const OurHelp = () => {
    return (
        <section className="flex flex-col bg-white justify-center items-center p-[20px] lg:px-[40px] lg:py-[50px] gap-[6px] xl:gap-[50px]">
            <div className="flex flex-col">
            <p className="text-orange-500 text-xl h-fit text-center">Need our Services ?</p>
                <h3 className="text-lg text-center lg:text-[48px] font-medium">
            I would like to....
                </h3>
                </div>

                {/* services we offer */}
                <div className="flex flex-wrap justify-center items-center gap-[20px] xl:gap-[45px] w-[350px] lg:w-[750px]">
                <BorderText text={'...Bring my project idea to life'} />
                <BorderText text={'...Partner with a skilled professional'} />
                <BorderText text={'Learn a skill'} />
                </div>
        </section>
    );
};

export default OurHelp;
