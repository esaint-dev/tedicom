import React, { useState } from 'react'

const FormInput = ({label}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

  return (
    <label className='flex flex-col gap-[5px] sm:gap-[1px] text-[#04369A] font-medium'>
        {label}
        <input type="text" value={inputValue} onChange={handleInputChange} className=" bg-gray-200 outline-none pl-[10px] h-[46px]" />
    </label>
  )
}

export default FormInput
