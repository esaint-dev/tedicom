import React from 'react'
import USP from './USP'

const Trustees = () => {
  return (
    <section className="flex flex-col text-white text-center bg-[#313131] justify-center items-center p-[20px] sm:px-[60px] lg:px-[120px] lg:py-[50px] gap-[16px]">
            <div className="flex items-center gap-[3px]">
                <div className="bg-white h-[1px] w-[5rem]"></div>
                <h1 className="text-lg sm:text-[20px] px-[20px] xl:text-[30px] font-semibold">
                TRUSTED BY
                </h1>
                <div className="bg-white h-[1px] w-[5rem]"></div>
            </div>

            <div className="grid grid-cols-4  lg:w-full">
                <div className='flex items-center justify-center border-r-[1px] border-b-[1px] p-5'>
                    <img src="/discoverAkwaibom.svg" className='w-[50px] sm:w-[600px]' alt="discover akwaibom logo" />
                </div>
                {/* <div className='flex items-center justify-center'>
                    <hr className='h-2 w-full rotate-[90deg]' />
                </div> */}
                <div className='flex items-center justify-center border-r-[1px] border-b-[1px] p-5'>
                    <img src="/gemsnode.svg" className='w-[50px] sm:w-[600px]' alt="discover akwaibom logo" />
                </div>
                {/* <div className='flex items-center justify-center'>
                    <hr className='h-2 w-full rotate-[90deg]' />
                </div> */}
                <div className='flex items-center justify-center border-r-[1px] border-b-[1px] p-5'>
                    <img src="/mStream.svg" className='w-[50px] sm:w-[600px]' alt="discover akwaibom logo" />
                </div>
                {/* <div className='flex items-center justify-center'>
                    <hr className='h-2 w-full rotate-[90deg]' />
                </div> */}
                <div className='flex items-center justify-center border-r-[1px] border-b-[1px] p-5'>
                    <img src="/payDimension.svg" className='w-[50px] sm:w-[600px]' alt="discover akwaibom logo" />
                </div>

                {/* <div className='flex items-center justify-center col-span-7 w-[100%]'>
                    <hr className=' w-full' />
                </div> */}

                <div className='flex items-center justify-center border-r-[1px] border-t-[1px] p-5'>
                    <img src="/blueGloves.svg" className='w-[40px] sm:w-[100px]' alt="discover akwaibom logo" />
                </div>
                {/* <div className='flex bg-amber-300 items-start justify-center '>
                    <hr className='w-full h-[20px] rotate-[90de]' />
                </div> */}
                <div className='flex items-center justify-center border-r-[1px] border-t-[1px] p-5'>
                    <img src="/aksg.svg" className='w-[40px] sm:w-[600px] lg:w-[150px]' alt="discover akwaibom logo" />
                </div>
                {/* <div className='flex items-start justify-center'>
                    <hr className='w-full rotate-[90deg] h-fit' />
                </div> */}
                <div className='flex items-center justify-center border-r-[1px] border-t-[1px] p-5'>
                    <img src="/keedough.svg" className='w-[50px] sm:w-[600px]' alt="discover akwaibom logo" />
                </div>
                {/* <div className='flex items-start justify-center'>
                    <hr className=' w-full rotate-[90deg] h-fit' />
                </div> */}
                <div className='flex items-center justify-center border-r-[1px] border-t-[1px] p-5'>
                    <img src="/akwaibomInvestment.svg" className='w-[70px] sm:w-[600px]' alt="discover akwaibom logo" />
                </div>
            </div>
        </section>
  )
}

export default Trustees
