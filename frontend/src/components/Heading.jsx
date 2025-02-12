import React from 'react'

const Heading = ({text}) => {
  return (
    <h2 className='text-[20px] text-start lg:text-[30px] xl:text-[48px]'>
      {text}
    </h2>
  )
}

export default Heading
