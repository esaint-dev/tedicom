import React from 'react'
import Text28 from './Text28'
import BigHeading from './BigHeading'
import Heading from './Heading'

const PaPDetails = () => {
  return (
    <section className="flex bg-sky-50 flex-col justify-center items-start px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] xl:pb-[190px]">
        <div className="flex flex-col gap-[25px] xl:gap-[70px]">
      <Text28 text={'Tedikom Wireless Private Limited is a Software Development Company. This Privacy Policy describes how the Company and it’s services will collect, use and disclose personal information of customers through our websites and online services that link to this profile. '} />

      <div className="flex flex-col gap-[10px] xl:gap-[38px]">
      <Heading text={'Type of data that we collect'} />

      <Text28 text={'The Company may ask you to fill out forms on it’s website which includes information that enables us to know you better. Such entities includes details as:'} />
      </div>


      <ul className='list-disc lg:text-[28px] flex flex-col xl:gap-[16px] font-medium pl-[40px]'>
        <li>Full name</li>
        <li>Contact Name</li>
        <li>Email Address</li>
        <li>Address</li>
      </ul>

      <div className="flex flex-col gap xl:gap-[114px]">

      <div className="flex flex-col gap-[10px] xl:gap-[38px]">
      <Heading text={'Type of data that we collect'} />

      <Text28 text={'The Company may ask you to fill out forms on it’s website which includes information that enables us to know you better. Such entities includes details as:'} />
      </div>
      </div>

      <div className="flex flex-col gap-[10px] xl:gap-[38px]">
      <Heading text={'Type of data that we collect'} />

      <Text28 text={'The Company may ask you to fill out forms on it’s website which includes information that enables us to know you better. Such entities includes details as:'} />
      </div>

      <div className="flex flex-col gap-[10px] xl:gap-[38px]">
      <Heading text={'Type of data that we collect'} />

      <Text28 text={'The Company may ask you to fill out forms on it’s website which includes information that enables us to know you better. Such entities includes details as:'} />
      </div>

      </div>

      
    </section>
  )
}

export default PaPDetails
