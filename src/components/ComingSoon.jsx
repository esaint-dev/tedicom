import React from 'react'
import Text24bold from './Text24bold'
import Eye from './Eye'

const ComingSoon = () => {
  return (
  <section style={{backgroundImage: 'URL("/tearImage.svg")'}} className='relative h-[500px] flex justify-center items-center bg-center bg-cover'>
      {/* <img className='absolute top-0 left-0 object-cover' src="/tearImage.svg" alt="" /> */}
      <h1 className='z-10 text-white font-bold text-[55px] sm:text-[105px] lg:text-[105px] tracking-wider flex justify-center items-center gap-[3px] sm:gap-[6px]'>coming s<Eye /><Eye />n</h1>
    </section>
  )
}

export default ComingSoon
