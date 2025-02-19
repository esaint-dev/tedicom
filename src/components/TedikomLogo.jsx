import React from 'react'
import { Link } from 'react-router-dom'

const TedikomLogo = ({onClick}) => {
  return (
    <img className=' h-[35px] sm:w-[100px]    cursor-pointer' onClick={onClick} src="/image.svg" alt="Tedikom logo" />
  )
}

export default TedikomLogo
