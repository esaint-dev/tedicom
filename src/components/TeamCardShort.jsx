import React from 'react'

const TeamCardShort = ({bgColor,color,bgImage, image, heading, text}) => {
  return (
    <div style={{backgroundColor: bgColor || "", backgroundImage: `url(${bgImage})` || ""}} className='px-[5px] py-[15px]  flex flex-col bg-blue-200 h-[40px] sm:h-[90px] w-[50px] sm:w-[110px] rounded-[9px] bg-center bg-contain items-center justify-center'>
                <p className={`font-bold text-center text-[8px] sm:text-[18px] lg:text-[20px] text-[${color}]`}>{heading}</p>
                <p className={`font-semibold text-center text-[6px] sm:text-[10px] lg:text-[18px] text-[${color}]`}>{text}</p>
                <img className='w-full' src={image} alt="" />
            </div>
  )
}

export default TeamCardShort
