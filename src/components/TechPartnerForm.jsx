import React, { useState } from 'react'
import FormInput from './FormInput'

const TechPartnerForm = () => {
    const [formData, setFormData] = useState({
        requirement: '',
        fullName: '',
        contactNumber: '',
        companyName: '',
        email: '',
        country: ''
    });
    
        const handleInputChange = (event) => {
            const { name, value } = event.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };

  return (
    <form className='absolute p-[15px] w-[48%] xl:w-[45%] text-[5px] sm:text-[10px] lg:text-[12px] bg-white grid grid-cols-2 items-end gap-[5px] sm:gap-[12px] bottom-[130px] sm:bottom-[200px] lg:bottom-[150px] right-[10px] sm:right-[20px] lg:right-[20px] xl:right-[50px] shadow-2xl '>
      <label className='flex flex-col gap-[3px] xl:gap-[15px] font-medium col-span-2'>
      Write Your Requiremnt
        <input type="text" required name='requirement' value={formData.requirement} onChange={handleInputChange} className=" bg-[#F7F7F7] outline-none p-2 pl-[10px] xl:h-[46px]" />
    </label>

      <label className='flex flex-col gap-[3px]  xl:gap-[15px]  col-span-1'>
      Full Name
        <input type="text" required name='fullName' value={formData.fullName} onChange={handleInputChange} className=" bg-[#F7F7F7] outline-none p-2 pl-[10px] xl:h-[46px]" />
    </label>

      <label className='flex flex-col gap-[3px]  xl:gap-[15px] font-medium col-span-1'>
      Contact Number
        <input type="text" name='contactNumber' value={formData.contactNumber} onChange={handleInputChange} className=" bg-[#F7F7F7] outline-none p-2 pl-[10px] xl:h-[46px]" />
    </label>

      <label className='flex required flex-col gap-[3px]  xl:gap-[15px] font-medium col-span-1'>
      Company Name (Optional)
        <input type="text" name='companyName' value={formData.companyName} onChange={handleInputChange} className=" bg-[#F7F7F7] outline-none p-2 pl-[10px] xl:h-[46px]" />
    </label>

      <label className='flex flex-col gap-[3px]  xl:gap-[15px] font-medium col-span-1'>
      Your Email
        <input type="text" required name='email' value={formData.email} onChange={handleInputChange} className=" bg-[#F7F7F7] outline-none p-2 pl-[10px] xl:h-[46px]" />
    </label>

    <label className='flex flex-col gap-[3px] xl:gap-[15px] font-medium col-span-2'>
      Country
        <input type="text" required name='country' value={formData.country} onChange={handleInputChange} className=" bg-[#F7F7F7] outline-none p-2 pl-[10px] xl:h-[46px]" />
    </label>
  
    <button className='bg-[#04369A]  text-white py-[5px] sm:py-[8px] border-2 rounded-full lg:px-9 lg:text-[18px]'>
    Get Free Estimation
    </button>

    </form>
  )
}

export default TechPartnerForm
