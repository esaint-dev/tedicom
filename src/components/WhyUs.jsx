import React from "react";
import HeadingBold from "./HeadingBold";
import Text24bold from "./Text24bold";
import Text24 from "./Text24";

const WhyUs = () => {
    const features = [
        {
            image: "/whyUs.svg",
            heading: "Accecibility:",
            text: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect adipisci velit, sed quia non numquam eius modi tempora incidunt it quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commeni, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu Nemo enim ipsae.",
        },
        {
            image: "/whyUs.svg",
            heading: "Accecibility:",
            text: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect adipisci velit, sed quia non numquam eius modi tempora incidunt it quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commeni, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu Nemo enim ipsae.",
        },
        {
            image: "/whyUs.svg",
            heading: "Accecibility:",
            text: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect adipisci velit, sed quia non numquam eius modi tempora incidunt it quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commeni, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu Nemo enim ipsae.",
        },
        {
            image: "/whyUs.svg",
            heading: "Accecibility:",
            text: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect adipisci velit, sed quia non numquam eius modi tempora incidunt it quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commeni, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu Nemo enim ipsae.",
        },
        {
            image: "/whyUs.svg",
            heading: "Accecibility:",
            text: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect adipisci velit, sed quia non numquam eius modi tempora incidunt it quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commeni, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu Nemo enim ipsae.",
        },
        {
            image: "/whyUs.svg",
            heading: "Accecibility:",
            text: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consect adipisci velit, sed quia non numquam eius modi tempora incidunt it quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commeni, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu Nemo enim ipsae.",
        },
    ];

    return (
        <section className="flex flex-col justify-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px] sm:gap-[35px]">
            <div className="flex justify-between">
                <div className="flex flex-col font-bold w-[48%]">
                    <Text24bold
                        color={"#FF6A07"}
                        text={"WHY TEDIKOM SOFTWARE"}
                    />
                    <p className="sm:text-[18px]">
                        We follow all the critical elements of excellent design
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

            <div className="grid grid-cols-3 gap-[10px] sm:gap-[25px] sm:px-[10px]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-[5px]">
                            <img className="w-[20px] sm:w-[30px] xl:w-[40px]" src={feature.image} alt="feature image" />

                            <div className="flex flex-wrap">
                                <p className="font-bold text-[8px] sm:text-[12px] xl:text-[]">{feature.heading}</p>
                                <p className="text-[8px] sm:text-[12px]">{feature.text}</p>
                            </div>
                        </div>
                        ))}
            </div>
        </section>
    );
};

export default WhyUs;
