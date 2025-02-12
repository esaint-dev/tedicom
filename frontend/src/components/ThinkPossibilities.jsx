import React from 'react'
import TedikomLogo from './TedikomLogo'

const ThinkPossibilities = () => {
  return (
    <section className="flex flex-col gap-[10x] justify-center items-start py-[20px] px-[20px] lg:px-[40px] lg:py-[50px] xl:py-[72px]">
      <TedikomLogo />
      <p className='text-[#858D9E] text-[35px] sm:text-[55px] xl:text-[96px]'>THINK POSSIBILITIES</p>

      <div>
      <img src="/ratings.svg" alt="tedikom ratings" />
      <p className='text-[10px] sm:text-[12px] xl:text-[16px]'>Rated 4.8 out of 5 Based on 30 Google Reviews</p>
      </div>
    </section>
  )
}

export default ThinkPossibilities
