import React from 'react'
import StandatdButton from './Buttons/StandatdButton'
import Hero2Stats from './Hero2Stats'

const Hero2 = ({image, heading, description,button, stats}) => {
  return (
    <section className='flex justify-end bg-center bg-cover' style={{backgroundImage:`url(${image})`}}>
      <div className="w-[20%] bg-red bg-gradient-to-l to-95% from-white opacity-45"></div>

      <div className="w-[70%] sm:w-[60%] bg-white flex flex-col gap-[10px] lg:gap-[30px] p-[30px] lg:p-[60px]">
        <h1 className='font-bold text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[56px]'>{heading}
        </h1> 

        <p className='font-medium text-[14px] sm:text-[18px] lg:text-[26px]'>{description}
        </p>

        <div className="flex gap-[5px] sm:gap-[10px] lg:justify-between">
            {stats[0]}
            {stats[1]}
            {stats[2]}
            {stats[3]}
        </div>

        {button}
      </div>
    </section>
  )
}

export default Hero2
