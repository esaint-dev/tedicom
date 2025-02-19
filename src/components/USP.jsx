import React from 'react'

const USP = ({number, text, image}) => {
  return (
    <div className='flex flex-col gap-[3px] sm:gap-[6px] text-start p-2 sm:p-6 bg-[#292929] w-full'>

      <h2 className="text-[#ff6a07] flex sm:gap-[3px] items-baseline text-[25px] sm:text-[30px] lg:text-[40px] font-bold">{number} 14+
                {image ? <img className="size-[10px] sm:size-[15px] lg:size-[20px]" src={image} alt="icon" /> : ""}
                
                </h2>

      <div className='bg-[#FF6A07] h-[1px] opacity-50'></div>
      <p className='font-bold sm:text-[18px]'>Years Of Experience</p>
    </div>
  )
}

export default USP
