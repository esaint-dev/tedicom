import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import BorderBotton from "../Buttons/BorderBotton";

const Carousel = () => {
    return (
        <section className="flex flex-col justify-center items-center py-[20px] px-[20px] lg:px-[40px] lg:py-[50px] mx-auto gap-[10px]">
            <div className="flex flex-col text-center">
                <p className="text-[#04369A] text-[12px] xl:text-[20px]">Success Stories</p>
                <h2 className="font-semibold xl:text-[40px] ">
                    Creating next generation digital products
                </h2>
            </div>

            <Swiper
                className="relative w-full sm:w-[600px] lg:w-[70%] xl:w-[1000px]"
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: ".back-button",
                    nextEl: ".next-button",
                }}
            >
                <SwiperSlide>
                    <div className="flex w-full bg-blue-600">
                        <div className="flex flex-col w-full sm:w-[40%] items-start bg-gradient-to-b from-[#04369A] to-black py-[20px] px-[10px] sm:p-[25px] lg:px-[40px] xl:px-[40px] text-white justify-center gap-5 text-[10px] md:text-[12px]">
                            <p className="lg:text-[18px]">
                                A Comprehensive Power BI dashboard for shipping
                                industry insights
                            </p>

                            <ul className="list-disc pl-5 lg:text-[16px]">
                                <li>Row-Level Security (RLS)</li>
                                <li>Row-Level Security (RLS)</li>
                                <li>Row-Level Security (RLS)</li>
                                <li>Row-Level Security (RLS)</li>
                            </ul>

                            <BorderBotton text={"View Project"} />
                        </div>
                        <div
                            style={{ backgroundImage: "url('/scrper-BG.svg')" }}
                            className="w-full sm:w-[60%] flex justify-center items-center bg-center bg-cover"
                        >
                            <img
                                className="size-[100%] sm:size-[100%]"
                                src="/slide 1.svg"
                                alt="Image 1"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-full bg-blue-600">
                        <div className="flex flex-col w-full sm:w-[40%] items-start bg-gradient-to-b from-[#04369A] to-black py-[20px] px-[10px] sm:p-[25px] lg:px-[40px] xl:px-[40px] text-white justify-center gap-5 text-[10px] md:text-[12px]">
                            <p className="lg:text-[18px]">
                            Akicorp
                            Building a Digital Platform for Investment and Growth
                            </p>

                            <ul className="list-disc pl-5 lg:text-[16px]">
                                <li>Centralized Investment Promotion</li>
                                <li>Escrow-Enabled Wallet</li>
                                <li>Real-Time Updates</li>
                                <li>Robust Governance Structure</li>
                                <li>Scalable Architecture</li>
                            </ul>

                            <BorderBotton text={"View Project"} />
                        </div>
                        <div
                            style={{ backgroundImage: "url('/scrper-BG.svg')" }}
                            className="w-full sm:w-[60%] flex justify-center items-center bg-center bg-cover"
                        >
                            <img
                                className="size-[100%] sm:size-[100%]"
                                src="/akiCrop.svg"
                                alt="Image 1"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-full bg-blue-600">
                        <div className="flex flex-col w-full sm:w-[40%] items-start bg-gradient-to-b from-[#04369A] to-black py-[20px] px-[10px] sm:p-[25px] lg:px-[40px] xl:px-[40px] text-white justify-center gap-5 text-[10px] md:text-[12px]">
                            <p className="lg:text-[18px]">
                                A Comprehensive Power BI dashboard for shipping
                                industry insights
                            </p>

                            <ul className="list-disc pl-5 lg:text-[16px]">
                                <li>Row-Level Security (RLS)</li>
                                <li>Row-Level Security (RLS)</li>
                                <li>Row-Level Security (RLS)</li>
                                <li>Row-Level Security (RLS)</li>
                            </ul>

                            <BorderBotton text={"View Project"} />
                        </div>
                        <div
                            style={{ backgroundImage: "url('/scrper-BG.svg')" }}
                            className="w-full sm:w-[60%] flex justify-center items-center bg-center bg-cover"
                        >
                            <img
                                className="size-[100%] sm:size-[100%]"
                                src="/slide 1.svg"
                                alt="Image 1"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex w-full bg-blue-600">
                        <div className="flex flex-col w-full sm:w-[40%] items-start bg-gradient-to-b from-[#04369A] to-black py-[20px] px-[10px] sm:p-[25px] lg:px-[40px] xl:px-[40px] text-white justify-center gap-5 text-[10px] md:text-[12px]">
                            <p className="lg:text-[18px]">
                            Akicorp
                            Building a Digital Platform for Investment and Growth
                            </p>

                            <ul className="list-disc pl-5 lg:text-[16px]">
                                <li>Centralized Investment Promotion</li>
                                <li>Escrow-Enabled Wallet</li>
                                <li>Real-Time Updates</li>
                                <li>Robust Governance Structure</li>
                                <li>Scalable Architecture</li>
                            </ul>

                            <BorderBotton text={"View Project"} />
                        </div>
                        <div
                            style={{ backgroundImage: "url('/scrper-BG.svg')" }}
                            className="w-full sm:w-[60%] flex justify-center items-center bg-center bg-cover"
                        >
                            <img
                                className="size-[100%] sm:size-[100%]"
                                src="/akiCrop.svg"
                                alt="Image 1"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* navigation buttons */}
                <div className="flex justify-between absolute top-[50%] z-100 w-full">
                    <div className="back-button flex items-center justify-center rounded-[13px] py-[5px] sm:px-[1px] left-2.5 z-10 bg-[#FF6A07] text-[white] w-fit">
                        <IoIosArrowBack className=" size-[15px] sm:size-[23px] " />
                    </div>
                    <div className="next-button rounded-[13px] flex items-center justify-center py-[5px] sm:px-[1px] bg-[#FF6A07] text-[white] text-[20px] w-fit">
                        <IoIosArrowForward className=" size-[15px] sm:size-[23px] " />
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default Carousel;
