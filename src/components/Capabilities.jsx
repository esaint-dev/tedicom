import React from 'react'
import HeadingBold from './HeadingBold'
import Text24 from './Text24'
import OverviewSpan from './OverviewSpan'

const Capabilities = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-[10x] items-start lg:justify-between lg:items-center py-[20px] px-[20px] lg:px-[40px] lg:py-[50px] xl:py-[72px]">
      <div className="lg:w-[40%] flex justify-start lg:text-center font-semibold">
        <h2 className='text-[#04369A] text-[35px] lg:text-[48px]'>CAPABILITIES</h2>
      </div>

      <div className="lg:w-[60%] flex flex-col gap-[15px] lg:gap-[45px] bg-[#F8F8F8]">
      <HeadingBold text={'Our human centered design approach enhances user engagement for your business'} />
      <Text24 text={'We believe that great software should be intuitive, powerful, and personalized to your specific needs. Our approach goes beyond just solving technical problems – we focus on creating robust solutions that enhance your business processes and provide a seamless user experience. We take pride in delivering software that’s easy to use, scalable, and reliable.'} />
      <OverviewSpan image={'/tablet.svg'} heading={'Custom Software Solutions'} text={'Transform your business processes with bespoke software tailored to your specific requirements. Our end-to-end services focus on efficiency, scalability, and seamless integration.'} />
      </div>
    </section>
  )
}

export default Capabilities
