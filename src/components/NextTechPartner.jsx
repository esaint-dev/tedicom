import React from "react";
import Heading from "./Heading";
import HeadingBold from "./HeadingBold";
import TechPartnerForm from "./TechPartnerForm";

const NextTechPartner = () => {
    return (
        <section className="flex flex-col justify-center  gap-[15px] relative">
            <div className="w-[180px] sm:w-[220px] lg:w-[350px] xl:w-[520px] flex flex-col px-[20px] py-[20px] lg:px-[40px] lg:py-[50px]">
                <HeadingBold text={"Say hello to your next tech partner"} />
                <hr className="w-1/2 self-end text-[#FF6A07]" />
            </div>

            <div className="flex px-[20px] py-[20px] lg:px-[40px] lg:py-[50px]">
                <img
                    className="size-[50px] lg:size-[120px] sm:size-[90px]"
                    src="/bluegleam.svg"
                    alt="bluegleam logo"
                />
                <img
                    className="size-[50px] sm:size-[90px] lg:size-[120px]"
                    src="/beauty esthetique.svg"
                    alt="beauty esthetique logo"
                />
                <img
                    className="w-[50px] sm:size-[90px] lg:size-[120px]"
                    src="/quest media.svg"
                    alt="quest madia logo"
                />
            </div>

            <div className="bg-[#F0F4F7] relative flex gap-[10px] px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] sm:pb-[90px]">
                <div className="flex flex-col gap-[10px] sm:gap-[20px] w-[46%] lg:w-[44%] xl:w-[40%]">
                    <div className="flex flex-col gap-[5px]">
                        <h2 className="font-bold text-[12px] sm:text-[18px] lg:text-[28px]">
                            What will be the next steps?
                        </h2>
                        <p className="text-[8px] sm:text-[12px] lg:text-[18px]">
                            You are one step closer to build your dream product.
                        </p>
                    </div>

                    <ol className="text-[8px] sm:text-[12px] lg:text-[18px] flex flex-col gap-[9px] sm:gap-[15px] list-disc">
                        <span className="flex flex-col gap-[5px]">
                            <li className="ml-[10px]">One Of our experts will get in touch with you.</li>
                            <hr className="h-[5px] border-none]" />
                        </span>
                        <span className="flex flex-col gap-[5px]">
                            <li className="ml-[10px]">Schedule a meeting to discuss your requirement in more detail.</li>
                            <hr className="h-[1px]" />
                        </span>
                        <span className="flex flex-col gap-[5px]">
                            <li className="ml-[10px]">Proposal with time and cost estimate.</li>
                            <hr className="h-[1px]" />
                        </span>
                    </ol>
                </div>

                {/* form */}
                <TechPartnerForm />
            </div>
        </section>
    );
};

export default NextTechPartner;
