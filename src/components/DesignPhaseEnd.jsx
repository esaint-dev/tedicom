import React from 'react'

const DesignPhaseEnd = ({head, text}) => {
  return (
    <div className='flex flex-col gap-[15px]'>
          <img className='w-[30px] sm:w-[55px] xl:w-[80px]' src="/design-phase-end.svg" alt="design phase" />

          {/* text */}
          <div className='w-[80px] sm:w-[120px] xl:w-[200px] flex flex-col gap-[5px] xl:gap-[15px]'>
            <p className="font-bold text-[12px] xl:text-[20px] h-[40px] xl:h-[50px]">{head}</p>
            <p className='text-[8px]  xl:text-[16px]'>{text}</p>
          </div>

          {/* Ul */}
          <div>
          <p className='font-bold text-[#FF6A07] text-[12px] xl:text-[20px]'>What You Get</p>
          <ul className='text-[8px] xl:text-[16px] list-disc pl-[10px]'>
            <li>Documentation</li>
            <li>NDA and IP agreement</li>
            <li>Time and cost estimation</li>
          </ul>
          </div>
          
        </div>
  )
}

export default DesignPhaseEnd
