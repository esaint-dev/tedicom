import React from 'react'
import BlogButton from './Buttons/BlogButton'

const SmallBlog = ({imgsrc, date, length, title}) => {
  return (
    <div className='w-[100%] rounded-2xl flex'>
            <img className='w-[40%]' src= {imgsrc} alt="blog image" />
            {/* text */}
            <div className='flex flex-col gap-[3px] sm:gap-[7px] xl:gap-[12px] p-[5px] sm:p-[12px] bg-white'>
              <div className="flex text-[#AAAAAA] text-[8px] sm:text-[12px] lg:text-[18px] gap-[2px] sm:gap-[5px] w-max lg:w-full">
              <p className=''>
              {date}
              </p>
              <hr className='w-[1px] h-[100%] bg-gray-400' />
              <p className=''>{length}</p>
              </div>
                <p className='font-semibold text-[8px] sm:text-[12px] lg:text-[16px] text-[#04369A]'>{title}</p>
                <BlogButton />
            </div>
          </div>
  )
}

export default SmallBlog
