import React from 'react'

const Text24bold = ({text, color}) => {
  return (
    <p style={{color:color}} className='text-[12px] sm:text-[16px] lg:text-[28px] font-medium'>
      {text}
    </p>
  )
}

export default Text24bold
