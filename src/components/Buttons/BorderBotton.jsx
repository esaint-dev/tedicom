import React from 'react'

const BorderBotton = ({text, color, image, onClick}) => {

  return (
    <button onClick={onClick} style={{color:color}} className='text-[12px] sm:text-[16px] border-1 rounded-full py-1 px-3 flex items-center gap-1 cursor-pointer '>
        {text}
        {image}
    </button>
  )
}

export default BorderBotton
