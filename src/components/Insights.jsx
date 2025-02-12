import React from 'react'
import BlogButton from './Buttons/BlogButton'
import SmallBlog from './SmallBlog'

const Insights = () => {
  return (
    <section className='flex flex-col bg-[#E8E8E8] justify-center items-center p-[20px] lg:px-[40px] lg:py-[50px] gap-[6px]'>
      <div className='text-center flex flex-col'>
      <p className='text-[#04369A] text-[15px] xl:text-[20px]'>INSIGHTS</p>
      <h3 className='text-[20px] xl:text-[40px]'>Read our recent stories</h3>
      </div>
      <div className="flex justify-between items-center">
        {/* dominant blog */}
        <div className='flex flex-col bg-white rounded w-[40%] sm:w-[57%] xl:w-[50%]'>
            <img src="/blog1.svg" alt="blog post picture" />
            {/* text */}
            <div className='flex flex-col gap-[5px] sm:gap-[10px] xl:gap-[14px] p-[6px] sm:p-[15px]'>
                <p className='text-[#AAAAAA] text-[8px] sm:text-[12px] lg:text-[18px]'>BRANDING / DESIGN / 24.OCT.2022</p>
                <p className='font-semibold text-[8px] sm:text-[12px] lg:text-[18px]'>Four Ways a Clean Workplace Makes Employees Happy and Healthy</p>
                <p className='font-medium text-[6px] sm:text-[10px] lg:text-[16px]'>The Power BI Embedded is still popular subject. Self-service reporting formats are being sought after by organizations</p>
                <BlogButton />
            </div>
        </div>

        {/* sub blogs */}
        <div className="flex flex-col w-[57%] sm:w-[40%] xl:w-[43%] rounded self-center justify-end gap-[5px] sm:gap-[10px]">
          {/* blog 1 */}
          <SmallBlog imgsrc={"/blog2.svg"} title={'Partiality on or continuing in particular principle'} date={'February 23,2025'} length={'6 MIN READ'} />

          <SmallBlog imgsrc={"/blog2.svg"} title={'Partiality on or continuing in particular principle'} date={'February 23,2025'} length={'6 MIN READ'} />

          <SmallBlog imgsrc={"/blog2.svg"} title={'Partiality on or continuing in particular principle'} date={'February 23,2025'} length={'6 MIN READ'} />
        </div>


        </div>
    </section>
  )
}

export default Insights
