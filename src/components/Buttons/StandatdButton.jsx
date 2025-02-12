import React from 'react'

const StandatdButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='bg-[#04369A] text-white w-[120px] lg:w-[270px]  xl:w-[330px] text-[10px] py-[4px] border-2 rounded-full px-[4px] lg:px-9 lg:text-[20px] '> 
        {text}
    </button>
  )
}

export default StandatdButton
