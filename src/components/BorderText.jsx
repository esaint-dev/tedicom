import React from 'react'

const BorderText = ({text}) => {
  return (
    <div className='text-sm xl:w-[22rem] text-black border-2 border-[#04369A] rounded-[28px] py-3 px-3 flex items-center justify-center gap- lg:gap-[200px] cursor-pointer w-[47%]'>
      <p className='text-[8px] sm:text-[12px] lg:text-[20px] text-center'>{text}</p>
    </div>
  )
}

export default BorderText
