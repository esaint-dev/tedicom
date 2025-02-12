import React from 'react'
import BigHeading from './BigHeading'

const BigHeadingSection = ({text}) => {
  return (
    <section className="text-xl p-[20px] xl:text-[48px] xl:w-[600px] font-semibold text-center">
      {text}
    </section>
  )
}

export default BigHeadingSection
