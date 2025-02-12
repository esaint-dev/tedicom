import React from "react";

const WordsOfAppreciation = () => {
    return (
        <section className="flex flex-col justify-center items-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px]">
            <div className="flex flex-col">
                <h2 className="font-bold sm:text-[26px] text-center">Words Of Appreciation</h2>
                <p className="font-medium sm:text-[16px] text-center">Voices Of Trust And Confidence</p>
            </div>

            <div className="flex flex-col gap-[10px]">
                <p className="text-[12px] sm:text-[18px] text-center sm:px-[100px]">The web application exceeded my expectations. It was a lengthy project, but the team at Tedikom stayed on top of development, fixing any issues no matter what time of day. It was an effective partnership.</p>

                <div>
                <p className="text-[10px] sm:text-[16px] text-center">Amelia Nwoke</p>
                <p className="text-[10px]  sm:text-[16px] text-center">Lagos</p>
            </div>
            </div>

            {/* profiles */}
            <div className="m-auto flex sm:gap-[10px]">
                <img className="size-[30px] sm:size-[50px]" src="/profile1.svg" alt="profile dummy" />
                <img className="size-[30px] sm:size-[50px]" src="/profile2.svg" alt="profile dummy" />
                <img className="size-[30px] sm:size-[50px]" src="/profile3.svg" alt="profile dummy" />
            </div>

            <hr className="w-full " />
        </section>
    );
};

export default WordsOfAppreciation;
