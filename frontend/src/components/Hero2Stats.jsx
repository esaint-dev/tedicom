import React from "react";

const Hero2Stats = ({ number,image, text }) => {
    return (
        <div className="flex flex-col w-[50px] sm:w-[70px] lg:w-[140px]">
            {/* <span className="flex items-center">   */}
                <p className="text-[#FF6A07] flex sm:gap-[3px] items-baseline text-[18px] sm:text-[24px] lg:text-[40px] font-bold">{number}
                {image ? <img className="size-[10px] sm:size-[15px] lg:size-[20px]" src={image} alt="icon" /> : ""}
                
                </p>
            {/* </span> */}
            <p className="text-[8px] sm:text-[12px] lg:text-[20px]">{text}</p>
        </div>
    );
};

export default Hero2Stats;
