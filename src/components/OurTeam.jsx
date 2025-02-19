import React from 'react'
import TeamCard from './TeamCard'
import TeamInfo from './TeamInfo'
import TeamCardShort from './TeamCardShort'

const OurTeam = () => {
  return (
    <section className='flex flex-col justify-center items-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px] sm:gap-[35px] lg:gap-[55px]'>
      <h1 className='font-bold text-center text-[#04369A] xl:w-[50rem] text-[20px] sm:text-[30px] lg:text-[38px] xl:text-[48px]'>A team of top developers with strong company culture</h1>

      <div className='flex justify-between w-full'>
        <div className=' w-[45%] flex justify-between sm:justify-start sm:gap-[10px]'>
            {/* row 1 */}
         <div className='flex flex-col self-end gap-[3px] pb-[1rem] lg:pb-[1rem]'>
         <TeamCard bgColor={'#04369A'} color={'white'} heading={'14+'} text={'Team Maembers'}  />
         <TeamCardShort /> 
         <TeamCard bgColor={'#FFC93D'} color={'#04369A'} heading={'14+'} text={'Team Maembers'}  />
         </div>

         {/* row 2 */}
         <div  className='flex flex-col self-end gap-[3px]'>
         <TeamCard bgImage={'/casual-meeting.svg'} />
         <TeamCard bgColor={'#FF6A07'} color={'#04369A'} heading={'14+'} text={'Team Maembers'}  />
         <TeamCard bgImage={'/corporate-meeting.svg'} /> 
         </div>

        {/* row 4 */}
         <div  className='flex flex-col self-end gap-[3px]'> 
         <TeamCard bgColor={'#FFBE59'} color={'#04369A'} heading={'95%'} text={'Client Retention'}  />
         </div>
        </div>
        

        {/* text */}
        <div className='w-[48%] flex flex-col self-end gap-[20px]'>
            <TeamInfo />
            <TeamInfo />
            <TeamInfo />
            <TeamInfo />
        </div>
      </div>
    </section>
  )
}

export default OurTeam
