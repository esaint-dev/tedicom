import React from "react";
import TeamCard from "./TeamCard";
import TeamInfo from "./TeamInfo";
import TeamCardShort from "./TeamCardShort";

const OurTeamReversed = () => {
    return (
        <section className="flex flex-col justify-center items-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px] sm:gap-[35px] lg:gap-[55px]">

            <div className="flex justify-between flex-row-reverse w-full ">
                <div className=" w-[45%] flex flex-row-reverse justify-between sm:justify-start sm:gap-[10px]">
                    {/* row 1 */}
                    <div className="flex flex-col self-end gap-[3px] pb-[1rem]">
                        <TeamCard image={'/nimasa.svg'} />
                        <TeamCardShort image={'/skillUp.svg'} />
                        <TeamCard image={'/dominion.svg'} />
                    </div>

                    {/* row 2 */}
                    <div className="flex flex-col self-end gap-[3px]">
                        <TeamCard image={'/goldenInitiative.svg'} />
                        <TeamCard image={'/bluegleam.svg'} />
                        <TeamCard image={'/ibomIgnite.svg'} />
                    </div>

                    {/* row 4 */}
                    <div className="flex flex-col self-end gap-[3px]">
                        <TeamCard image={'/royaltyGroup.svg'} />
                    </div>
                </div>

                {/* text */}
                <div className="w-[48%] flex flex-col gap-[20px] self-end">
                    <TeamInfo />
                    <TeamInfo />
                    <TeamInfo />
                    <TeamInfo />
                </div>
            </div>
        </section>
    );
};

export default OurTeamReversed;
