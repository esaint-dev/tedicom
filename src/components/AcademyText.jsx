import React, { useState } from "react";

const AcademyText = () => {

    const [inputValue, setInputValue] = useState('');
    
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };

    return (
        <section className=" flex flex-col gap-[10px] sm:gap-[25px] justify-center items-center py-[10px] px-[10px] sm:px-[100px] lg:px-[100px]">
            <p className="font-medium text-[14px] lg:text-[32px] text-center">
                Our Academy is coming soon! Get ready for a world of learning,
                growth, and opportunity. Stay tuned for exciting updates!
            </p>

            <form className="w-full flex justify-between">
                <input type="text" placeholder="Email" className=" outline-none text-black w-[60%] sm:w-[50%] text-[10px] py-[4px] border-2 border-[#04369A] rounded-full px-[1rem] lg:px-9 lg:text-[20px] relative" required />

                <button className="bg-[#04369A] outline-none text-white w-[35%] text-[10px] py-[4px] border-2 rounded-full px-[4px] lg:px-9 lg:text-[20px] relative">
                    Subscribe
                    <img
                        src="/paperplane.svg"
                        alt="paper plane carrying message"
                        value={inputValue}
                         onChange={handleInputChange}
                        className="absolute left-[60px] top-[8px] w-[70px] sm:w-[90px] lg:w-[150px] sm:left-[130px] lg:left-[200px]"
                    />
                </button>
            </form>
        </section>
    );
};

export default AcademyText;
