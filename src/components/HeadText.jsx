import React from 'react'

const HeadText = ({text, color}) => {
  return (
    <h3 style={{color: color}} className="text-xl  px-[20px] xl:text-[48px] xl:w-[700px] font-semibold text-center">{text}</h3>

    
  )
}

export default HeadText
