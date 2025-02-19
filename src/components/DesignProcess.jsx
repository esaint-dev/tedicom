import React from 'react'
import DesignPhase from './DesignPhase'
import DesignPhaseEnd from './DesignPhaseEnd'

const DesignProcess = () => {
  return (
    <section className="flex flex-col gap-[30px] justify-center items-center py-[20px] px-[20px] pb-[50px] sm:px-[70px] sm:py-[50px] xl:py-[22px] xl:pb-[150px] bg-[#313131] text-white">
      {/* container for first two sets to text */}
      <div className='flex flex-col gap-[10px]'>
      <p className='text-[#FF6A07] font-bold text-[12px] sm:text-[18px]'>PROCESS</p>
      <div className='   w-full flex justify-between items-start'>
        <p className="font-bold text-[12px] sm:text-[18px] xl:text-[24px] w-[48%]">The way to design a successful user experience</p>

        <p className=" text-[12px] sm:text-[18px] w-[48%]">Hiring UX UI experts from Tedikom brings a wealth of experience and expertise to your project. With a proven track record of delivering exceptional results, our skilled professionals ensures top-notch websites that engage and impress users</p>
      </div>
      </div>

      {/* design phase */}
      <div className='flex justify-center '>
        {/* independent phase */}
        <DesignPhase image={'/design-phase-25.svg'} head={'Requirement Analysis'} text={'Brainstorming sessions and meetings to ensure that both parties are on the same page & decide the features of the final product.'} />
        <DesignPhase image={'/design-phase-50.svg'} head={'Statement Of Work'} text={'Brainstorming sessions and meetings to ensure that both parties are on the same page & decide the features of the final product.'} />
        <DesignPhase image={'/design-phase-75.svg'} head={'Execution'} text={'Brainstorming sessions and meetings to ensure that both parties are on the same page & decide the features of the final product.'} />
        <DesignPhaseEnd head={'Launch & Support'} text={'Brainstorming sessions and meetings to ensure that both parties are on the same page & decide the features of the final product.'} />
        
      </div>
    </section>
  )
}

export default DesignProcess
