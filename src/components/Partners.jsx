import React from 'react'
import Carousel from './carousel/carousel'

const Partners = () => {
  return (
    <section className='flex flex-col justify-center items-center p-[20px] lg:px-[40px] lg:py-[50px] '>
      <div className='flex'>
        {/* text */}
        <div className='flex flex-col xl:flex-row p-[10px] gap-[15px] xl:justify-between '>
            <div className="flex flex-col gap-[5px] xl:w-[50%]">
                <h4 className='text-[#FF6A07] text=[20px] xl:text-[30px] font-semibold'>Industries</h4>
                <p className='text-[#04369A] font-bold xl:text-[48px]'>We have worked with clients across various industries</p>
            </div>

            <div className='text-[#04369A] xl:w-[45%]'>
            <p className='text-[12px] sm:text-[18px] xl:text-[28px]'>Our business experience spanning over a period of <span className='font-bold'>14 years</span> experience has prepared us for  very difficult and complex jobs. This makes us the preferred choice for projects with highly demanding requirements and tasking timelines  </p>
            </div>
        </div>
      </div>
      {/* <Carousel /> */}
    </section>
  )
}

export default Partners


