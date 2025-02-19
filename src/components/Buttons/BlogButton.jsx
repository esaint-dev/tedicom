import React from 'react'

const BlogButton = () => {
  return (
    <button className='flex text-[8px] justify-between items-center w-[60px] sm:w-[90px] lg:w-[110px] xl:w-[120px] sm:text-[12px] lg:text-[16px]'>
      <img className='w-[15px] sm:w-[20px] lg:w-[22px]' src="/blog button.svg" alt="button image" />
      VIEW MORE
    </button>
  )
}

export default BlogButton
