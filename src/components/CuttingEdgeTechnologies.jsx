import React from 'react'

const CuttingEdgeTechnologies = () => {
  return (
    <section className="flex flex-col justify-s  py-[20px] lg:px-[40px] lg:py-[50px] gap-[20px]">
            <h3 className="text-[#04369A] text-xl sm:text-[30px] px-[20px] xl:text-[48px] xl:w-[900px] font-semibold">Cutting edge technologies for your business success</h3>

            <div className="bg-[#F8F8F8] xl:p-[80px] p-[20px] pr-[0] flex flex-col gap-[25px] sm:gap-[35px]">
                {/* individual tracks */}

                {/* track 1 */}
                <div className="flex flex-col justify-start items-start gap-[10px] sm:gap-[20px] px-[5px]">
                    {/* track: backend: node, laravel, php... */}
                    <div className="w-full flex justify-between gap-[30px] ">
                        <h3 className="xl:text-[30px] font-bold">Backend</h3>

                        <div className="flex self-end gap-[3px] sm:gap-[7px] flex-wrap">
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/nodeJS logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">NodeJS</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/laravel logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Laravel</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/php logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">PHP</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/code igniter logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Codeigniter</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/net core logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">.Net Core</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/dot net logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">.Net</p>
                            </span>
                        </div>
                    </div>
                    <hr class="w-full text-gray-400"/>
                </div>


                {/* track 2 */}
                <div className="flex flex-col justify-start items-start  gap-[10px] sm:gap-[20px] px-[5px]">
                    {/* track: frontend: react, HTML, vueJS... */}
                    <div className="flex w-full justify-between items-start gap-[30px]">
                        <h3 className="xl:text-[30px] font-bold">Frontend</h3>

                        <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/react logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">React</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/HTML logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">HTML</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/vue logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Vue.js</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/angular.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Angular</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/pixi.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Pixi.js</p>
                            </span>
                        </div>
                    </div>
                    <hr class="w-full text-gray-400"/>
                </div>


                {/* track 3 */}
                <div className="flex flex-col justify-start items-start  gap-[10px] sm:gap-[20px] px-[5px]">
                    {/* track: frontend: react, HTML, vueJS... */}
                    <div className="flex w-full justify-between items-start gap-[30px]">
                        <h3 className="xl:text-[30px] font-bold">Mobile Apps</h3>

                        <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/android.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Android</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/ios.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">IOS</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/phonegap.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Phonegap</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/react logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">React</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/dot net logo.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">.Net</p>
                            </span>
                        </div>
                    </div>
                    <hr class="w-full text-gray-400"/>
                </div>


                {/* track 4 */}
                <div className="flex flex-col justify-start items-start gap-[10px] sm:gap-[20px] px-[5px]">
                    {/* track: frontend: react, HTML, vueJS... */}
                    <div className="flex w-full justify-between gap-[20px] items-start">
                        <h3 className="xl:text-[30px] font-bold">CMS & eCommerce</h3>

                        <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/shopify.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">shopify</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/wordpress.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">wordPress</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/joomla.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Joomla</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/mangento.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Mangento</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/woocommerce.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">WOocommerce</p>
                            </span>
                            <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                                <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/drupal.svg" alt="" />
                                <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Drupal</p>
                            </span>
                        </div>
                    </div>
                    <hr class="w-full text-gray-400"/>
                </div>

            </div>
            </section>
  )
}

export default CuttingEdgeTechnologies
