import React, { useState } from 'react'

const FormTextArea = ({label}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

  return (
    <label className='flex flex-col gap-[5px] sm:gap-[px] text-[#04369A] font-medium '>
        {label}
        <input type="text" value={inputValue} onChange={handleInputChange} className=" bg-gray-200 outline-none px-[10px] pb-[105px] pt-[10px] text-wrap flex items-start" />
    </label>
  )
}

export default FormTextArea
