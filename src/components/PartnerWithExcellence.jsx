import React from "react";
import Text24bold from "./Text24bold";
import Text24 from "./Text24";
import USP from "./USP";

const PartnerWithExcellence = () => {
    return (
        <section className="flex flex-col text-white text-center bg-[#313131] justify-center items-center p-[20px] sm:px-[60px] lg:px-[120px] lg:py-[50px] gap-[16px]">
            <div className="flex flex-col items-center gap-[6px]">
                <h1 className="text-xl sm:text-[30px] px-[20px] xl:text-[48px] xl:w-[900px] font-semibold">
                    Partner with Excellence
                </h1>
                <Text24
                    text={
                        "With our extensive experience and proven expertise, we’re here to help you drive exceptional value for your business success with our high performing team."
                    }
                />
            </div>

            <div className="grid grid-cols-3 gap-[15px] sm:gap-[25px] lg:w-full">
                <USP />
                <USP />
                <USP />
                <USP />
                <USP />
                <USP />
            </div>
        </section>
    );
};

export default PartnerWithExcellence;
