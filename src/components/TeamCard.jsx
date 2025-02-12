import React from 'react'

const TeamCard = ({bgColor,color,bgImage, image, heading, text}) => {
  return (
            <div style={{backgroundColor: bgColor || "", backgroundImage: `url(${bgImage})` || ""}} className='px-[5px] lg:px-[7s5px] py-[15px]  flex flex-col bg-blue-200 w-[50px] h-[70px] sm:h-[140px] sm:w-[110px] rounded-[9px] bg-center bg-cover bg-no-repeat items-center justify-center'>
                <p className={`font-bold text-center text-[16px] sm:text-[24px] lg:text-[28px] text-[${color}]`}>{heading}</p>
                <p className={`font-semibold text-center text-[6px] sm:text-[18px] lg:text-[18px] text-[${color}]`}>{text}</p>
                <img className='w-full' src={image} alt="" />
            </div>
  )
}

export default TeamCard
