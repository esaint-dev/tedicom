import React from 'react'

const OverviewSpan = ({image,heading, text}) => {
  return (
    <span className='w-full sm:w-[500px] flex justify-center items-center gap-[20px]'>
        <img className='size-[60px] sm:size-[80px] lg:size-[120px]' src={image} alt="tablet" />
        <div className='flex flex-col lg:gap-[10px]'>
        <h3 className='font-bold text-[12px] lg:text-[20px]'>{heading}
        </h3>
      <p className='text-[12px] lg:text-[16px]'>{text}
      </p>
        </div>
    </span>
  )
}

export default OverviewSpan
