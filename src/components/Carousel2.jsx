import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Carousel2 = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[20px] px-[20px] lg:px-[40px] lg:py-[50px] mx-auto gap-[10px]">

    <Swiper
        className="relative flex !items-center justify-center w-full sm:w-[600px] lg:w-[70%] xl:w-[1000px] h-[10rem] lg:h-[17rem] xl:h-[21rem] p-0"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={'auto'}
        navigation={{
            prevEl: ".back-button",
            nextEl: ".next-button",
        }}
    >
        <SwiperSlide className="flex items-center justify-center !w-[200px] sm:!w-[300px] lg:!w-[400px] xl:!w-[500px] ">
            <div className="flex justify-center items-center">
            <div className="flex  w-[40%]">
                    <img className="w-[200px]" src="/medicalResearch.svg" alt="" />
                </div>
                <div className="w-[50%]  text-[#04369A]  flex flex-col justify- sm:gap-[8px] items-center">
                <p className="font-bold lg:text-[18px] xl:text-[36px]">
                Healthcare
                    </p>

                    <ul className="list-disc flex flex-col gap-[7px] pl-5 text-[6px] sm:text-[8px] lg:text-[16px]">
                        <li>Electronic Health Records (EHR) systems</li>
                        <li>Telemedicine and online consultations</li>
                        <li>Medical data security and HIPAA compliance</li>
                        <li>Patient portals for appointment scheduling and medical history access</li>
                    </ul>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center !w-[80px] sm:!w-[150px] lg:!w-300px] xl:!w-[250px]">
            <div className="flex flex-col justify-start items-center w-fit gap-[3px] lg:gap-[10px]">
                <p className="self-start font-medium text-[#04369A] text-[12px] lg:text-[24px]">Financial</p>
            <div className="flex">
                    <img className="w-[200px]" src="/atmCard.svg" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center !w-[80px] sm:!w-[150px] lg:!w-[300px] xl:!w-[250px]">
            <div className="flex flex-col justify-start items-center w-fit gap-[3px] lg:gap-[10px]">
                <p className="self-start font-medium text-[#04369A] text-[12px] lg:text-[24px]">Government</p>
            <div className="flex">
                    <img className="scale-[200px]" src="/govtSwiper.svg" alt="" />
                </div>
            </div>
        </SwiperSlide>
        

        
        


        {/* navigation buttons */}
        <div className="flex justify-between absolute top-[50%] z-100 w-full">
            <div className="back-button flex items-center justify-center rounded-[13px] py-[5px] sm:px-[1px] left-2.5 z-10 bg-[#04369A] text-[white] w-fit">
                <IoIosArrowBack className=" size-[15px] sm:size-[23px] " />
            </div>
            <div className="next-button rounded-[13px] flex items-center justify-center py-[5px] sm:px-[1px] bg-[#04369A] text-[white] text-[20px] w-fit">
                <IoIosArrowForward className=" size-[15px] sm:size-[23px] " />
            </div>
        </div>
    </Swiper>
</section>
  )
}

export default Carousel2