import React from 'react'
import Heading from './Heading'
import Text24 from './Text24'
import Text24bold from './Text24bold'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import FormButton from './Buttons/FormButton'

const ContactDetails = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-[2.5rem]  xl:flex-row justify-between items-start py-[20px] lg:px-[40px] lg:py-[50px] p-[20px]'>
        {/* text sectiion */}
      <div className='flex flex-col gap-[20px] xl:gap-[57px] w-full sm:w-1/2'>
        {/* lets talk */}
        <div>
        <Heading text={'Let’s Talk'} />
        <Text24 text={"Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help"} />
        </div>

        <div className='flex flex-col gap-[5px] xl:gap-[14px]'>
            <span className='flex gap-[10px] xl:gap-[20px] items-center'>
                <img className='xl:h-[30px] w-[15px] xl:w-[30px]' src="/phone icon.svg" alt="phone icon" />
                <Text24bold text={'Phone'} />
            </span>
            <div className="flex flex-col ml-[25px] xl:ml-[50px]">
                <a className='text-[12px] lg:text-[24px]' href="tel:(+234) 818 321 8611">(+234) 818 321 8611</a>
                <a className='text-[12px] lg:text-[24px]' href="tel:(+234) 818 321 8611">(+234) 803 566 4618</a>
            </div>
        </div>

        <div className='flex flex-col ga-[5px] xl:gap-[14px]'>
            <span className='flex gap-[10px] xl:gap-[20px] items-center'>
                <img className='w-[15px] xl:w-[30px] xl:h-[30px]' src="/email icon.svg" alt="phone icon" />
                <Text24bold text={'Email'} />
            </span>
            <div className="flex flex-col ml-[25px] xl:ml-[50px]">
            
                <a className='text-[12px] lg:text-[24px]' href="mailto:info@tedikomwireless.com">info@tedikomwireless.com</a>
            </div>
        </div>

        <div className='flex flex-col gap-[5px] xl:gap-[14px]'>
            <span className='flex gap-[10px] xl:gap-[20px] items-center'>
                <img className='w-[15px] xl:w-[30px] xl:h-[30px]' src="/location icon.svg" alt="phone icon" />
                <Text24bold text={'Head Office'} />
            </span>
            <div className="flex flex-col ml-[25px] xl:ml-[50px]">
            
                <a className='text-[12px] lg:text-[24px]' >Tedikom Wireless Limited 114 Abak Road, Uyo, Nigeria.</a>
            </div>
        </div>

        <div className='flex flex-col gap-[5px] xl:gap-[14px] xl:pl-[45px] '>
            <span className='flex xl:gap-[20px] items-center'>
                <Text24bold text={'Lagos Branch'} />
            </span>
            <div className="flex flex-col ">
                <a className='text-[12px] ml-[25px] lg:text-[24px]' >Tedikom Wireless Limited By Workbay Executives Int'l
                    3-9 Olu Koleosho Street, Ikeja.</a>
            </div>
        </div>
        <div className='flex flex-col xl:gap-[14px] xl:pl-[45px]'>
            <span className='flex xl:gap-[20px] items-center'>
                <Text24bold text={'Uyo Branch'} />
            </span>
            <div className="flex flex-col ">
            
                <a className='text-[12px] ml-[25px] lg:text-[24px]'>Tedikom ICT Academy 439 Oron Road, Uyo. By Quenthall Pharmacy.</a>
            </div>
        </div>
      </div>


      {/* contact form section */}
      <form className='w-full sm:w-[45%] flex flex-col gap-[15px] sm:gap-[25px] lg:gap-[28px]' action="">
        
      <FormInput label={'Name'} />
      <FormInput label={'Email'} />
      <FormInput label={'What service are you interested in'} />
      <FormInput label={'Budget'} />
      <FormTextArea label={'Message'} />
      <FormButton />
      </form>
    </section>
  )
}

export default ContactDetails
