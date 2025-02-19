import React from 'react'
import Text24bold from './Text24bold'
import Text24 from './Text24'
import DedicatedResources from './DedicatedResources'

const EngagementModels = () => {
  return (
    <section className="flex flex-col justify-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px] sm:gap-[30px]">
        <div className="flex justify-between">
                <div className="flex flex-col font-bold w-[48%]">
                    <Text24bold
                        color={"#FF6A07"}
                        text={"ENGAGEMENT MODELS"}
                    />
                    <p>
                    Flexible engagement model that suits your business needs
                    </p>
                </div>
                <div className="w-[48%]">
                    <Text24
                        text={
                            "Our hands on experience in designing taught us to take a great care of critical design elements. Here are some key elements to respect:"
                        }
                    />
                </div>
            </div>


            <div className="flex justify-around ">
                <DedicatedResources />
                <DedicatedResources />
            </div>
      
    </section>
  )
}

export default EngagementModels
