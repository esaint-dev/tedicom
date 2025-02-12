import React from "react";
import Heading from "./Heading";
import HeadingBold from "./HeadingBold";
import Text24bold from "./Text24bold";

const DedicatedResources = ({ heading, details, ulhead }) => {
    return (
        <div className="w-[48%] sm:w-[330px] lg:w-[40%] p-[15px] sm:p-[20px] lg:p-[35px] lg:pb-[100px] sm:pr-[50px] flex flex-col gap-[10px] lg:gap-[15px] bg-[#313131] rounded-[16px] text-white">
            {/* text */}
            <div className="flex flex-col gap-[10px]">
                <p className="font-bold text-[12px] sm:text-[16px]">DEDICATED RESOURCES</p>
                <p className="font-medium text-[8px] sm:text-[12px] lg:text-[16px]">
                    Our hands on experience in designing taught us to take a
                    great care of critical design elements. Here are some key
                    elements to respect:
                </p>
            </div>

            {/* ul */}
            <p className="text-[#FF6A07] font-bold text-[8px] sm:text-[12px] lg:text-[16px]">RECOMMENDED FOR</p>
            <ul className="text-[6px] sm:text-[10px] lg:text-[14px] flex flex-col gap-[10px] lg:gap-[14px] list-disc">
                <span>
                    <li className="ml-[10px]">Highest control</li>
                    <hr className="h-[1px]" />
                </span>
                <span>
                    <li className="ml-[10px]">Highest control</li>
                    <hr className="h-[1px]" />
                </span>
                <span>
                    <li className="ml-[10px]">Highest control</li>
                    <hr className="h-[1px]" />
                </span>
                <span>
                    <li className="ml-[10px]">Highest control</li>
                    <hr className="h-[1px]" />
                </span>
            </ul>
        </div>
    );
};

export default DedicatedResources;
