import React from 'react'

const WordsofAppreciationDark = () => {
  return (
    <section className="flex flex-col justify-center text-white items-center bg-[#313131] px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px]">
            <div className="flex flex-col">
                <h2 className="font-bold sm:text-[26px] text-center">Words Of Appreciation</h2>
                <p className="font-medium sm:text-[16px] text-center">Voices Of Trust And Confidence</p>
            </div>

            <div className="flex flex-col justify-center items-center relative gap-[10px]">
                <img src="/quote.svg" className='absolute left-[10px] sm:left-[5rem] lg:left-[10rem] top-[-10px] size-[50px]' alt="" />

                <p className="text-[12px] sm:text-[18px] lg:text-[24px] xl-[32px] text-center px-[20px] sm:px-[100px] lg:px-[200px]">Your customer service is next to none. Your competence and experience in ensuring that you deliver timely services and products to your customers is commendable</p>

                <img src="/quote.svg" className='absolute rotate-180 right-[10px] sm:right-[6rem] lg:right-[13rem] bottom-[30px] sm:bottom-[50px] size-[50px]' alt="" />

                <div>
                <p className="text-[10px] sm:text-[16px] text-center">Amelia Nwoke</p>
                <p className="text-[10px]  sm:text-[16px] text-center">Lagos</p>
            </div>
            </div>

            {/* profiles */}
            <div className="m-auto flex sm:gap-[10px]">
                <img className="size-[30px] sm:size-[50px]" src="/profile1.svg" alt="profile dummy" />
            </div>

            <hr className="w-full " />
        </section>
  )
}

export default WordsofAppreciationDark
